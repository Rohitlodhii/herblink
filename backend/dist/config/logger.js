import { createLogger, format, transports } from "winston";
import path from "path";
const { combine, timestamp, printf, colorize, errors } = format;
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level}]: ${stack || message}`;
});
export const logger = createLogger({
    level: "info",
    format: combine(colorize(), timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), errors({ stack: true }), logFormat),
    transports: [
        new transports.Console(),
        new transports.File({
            filename: path.join(__dirname, "../logs/combined.log"),
        }),
        new transports.File({
            filename: path.join(__dirname, "../logs/error.log"),
            level: "error",
        }),
    ],
    exceptionHandlers: [
        new transports.File({ filename: path.join(__dirname, "../logs/exceptions.log") }),
    ],
    rejectionHandlers: [
        new transports.File({ filename: path.join(__dirname, "../logs/rejections.log") }),
    ],
});
export default logger;
//# sourceMappingURL=logger.js.map