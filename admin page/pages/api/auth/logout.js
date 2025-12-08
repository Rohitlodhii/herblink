const { clearToken } = require('../../../lib/auth');

module.exports = function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end('Method Not Allowed');
  res.setHeader('Set-Cookie', clearToken());
  res.status(200).json({ success: true });
}
