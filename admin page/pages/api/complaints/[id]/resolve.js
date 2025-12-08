const db = require('../../../../lib/db');

module.exports = async function handler(req, res){
  if(req.method !== 'POST'){
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }
  const { id } = req.query;
  try{
    const result = await db.query('UPDATE complaints SET resolved = NOT resolved WHERE id=$1 RETURNING id, resolved', [id]);
    if(result.rowCount === 0) return res.status(404).json({ error: 'Not found' });
    res.status(200).json(result.rows[0]);
  }catch(err){
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}
