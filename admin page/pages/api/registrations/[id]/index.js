const db = require('../../../../lib/db');

module.exports = async function handler(req, res){
  const { id } = req.query;
  if(req.method !== 'GET'){
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  try{
    const result = await db.query('SELECT id, type, name, email, location, status, created_at FROM registrations WHERE id=$1', [id]);
    if(result.rowCount === 0) return res.status(404).json({ error: 'Not found' });
    res.status(200).json(result.rows[0]);
  }catch(err){
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}
