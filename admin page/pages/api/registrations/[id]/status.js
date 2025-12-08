const db = require('../../../../lib/db');

module.exports = async function handler(req, res){
  if(req.method !== 'POST'){
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }
  const { id } = req.query;
  const { status } = req.body;
  const allowed = ['pending','acknowledged','approved','rejected'];
  if(!status || !allowed.includes(status)) return res.status(400).json({ error: 'Invalid or missing status' });
  try{
    const result = await db.query('UPDATE registrations SET status=$1 WHERE id=$2 RETURNING id, status', [status, id]);
    if(result.rowCount === 0) return res.status(404).json({ error: 'Not found' });
    res.status(200).json(result.rows[0]);
  }catch(err){
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}
