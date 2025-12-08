const { signToken, serializeToken } = require('../../../lib/auth');

module.exports = async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end('Method Not Allowed');
  const { username, password } = req.body;
  const ADMIN_USER = process.env.ADMIN_USER || 'admin';
  const ADMIN_PASS = process.env.ADMIN_PASS || 'password';
  if(!username || !password) return res.status(400).json({ error: 'username and password required' });
  if(username === ADMIN_USER && password === ADMIN_PASS){
    const token = signToken({ username });
    const cookie = serializeToken(token);
    res.setHeader('Set-Cookie', cookie);
    return res.status(200).json({ success: true });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
}
