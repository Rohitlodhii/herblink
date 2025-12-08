const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
const COOKIE_NAME = 'admin_token';
const TOKEN_EXPIRY = '8h';

function signToken(payload){
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
}

function verifyToken(token){
  try{
    return jwt.verify(token, JWT_SECRET);
  }catch(err){
    return null;
  }
}

function getTokenFromReq(req){
  const header = req.headers?.cookie;
  if(!header) return null;
  const parsed = cookie.parse(header || '');
  return parsed[COOKIE_NAME] || null;
}

function getAuthUser(req){
  const token = getTokenFromReq(req);
  if(!token) return null;
  return verifyToken(token);
}

function serializeToken(token){
  // httpOnly, secure flag should be set in production
  return cookie.serialize(COOKIE_NAME, token, {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    // secure in prod
  });
}

function clearToken(){
  return cookie.serialize(COOKIE_NAME, '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0),
  });
}

module.exports = { signToken, verifyToken, getTokenFromReq, getAuthUser, serializeToken, clearToken };
