import { Request, Response } from "express";
import db from "../../config/db.js";
import { PasswordHash } from "../../config/passwordhash.js";
import { JwtToken } from "../../config/jwt.js";
import logger from "../../config/logger.js";

const pshash = new PasswordHash();
const JwtTokenInstance = new JwtToken();

export async function signUpManufacturer(req: Request, res: Response) {
  try {
    const { email, password, name, address, organization, manufacturerId } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        msg: "Email and Password are required",
      });
    }

    const exist = await db.manufacturer.findUnique({
      where: {
        email: email,
      },
    });

    if (exist) {
      return res.status(409).json({
        msg: "Account already exist, Try login",
      });
    }

    const encryptedpassword = await pshash.generateHash(password);

    const result = await db.manufacturer.create({
      data: {
        email: email,
        password: encryptedpassword,
        name,
        address,
        organization,
        manufacturerId,
      },
    });

    const token = JwtTokenInstance.createJwtToken({ userId: result?.id }, "1d");

    return res.status(200).json({
      msg: "Manufacturer account created successfully",
      token: token,
    });
  } catch (error) {
    logger.error("manufacturer_signup_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(400).json({
      msg: "Internal Server error",
    });
  }
}

export async function loginManufacturer(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        msg: "Email and Password are required",
      });
    }

    const exist = await db.manufacturer.findUnique({
      where: {
        email: email,
      },
    });

    if (!exist) {
      return res.status(404).json({
        msg: "Account doesn't exist, Try sign Up",
      });
    }

    const checkPassword = await pshash.comparePassword(password, exist.password);
    if (!checkPassword) {
      return res.status(400).json({
        msg: "Email or password are incorrect",
      });
    }

    const token = JwtTokenInstance.createJwtToken({ userId: exist?.id }, "1d");

    return res.status(200).json({
      msg: "Manufacturer account login successfully",
      token: token,
    });
  } catch (error) {
    logger.error("manufacturer_login_error", {
      error: (error as Error).message,
      stack: (error as Error).stack,
    });
    return res.status(400).json({
      msg: "Internal Server error",
    });
  }
}

