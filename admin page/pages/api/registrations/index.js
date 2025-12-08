const db = require('../../../lib/db');

module.exports = async function handler(req, res){
  const method = req.method;
  try{
    if(method === 'GET'){
      const result = await db.query('SELECT id, type, name, email, location, status, created_at FROM registrations ORDER BY created_at DESC');
      res.status(200).json(result.rows);
    } else if(method === 'POST'){
      const { type, name, email, location } = req.body;
      if(!type || !name || !email) return res.status(400).json({ error: 'type, name and email required' });
      const insert = await db.query(
        'INSERT INTO registrations (type, name, email, location) VALUES ($1,$2,$3,$4) RETURNING id, type, name, email, location, status, created_at',
        [type, name, email, location || null]
      );
      res.status(201).json(insert.rows[0]);
    } else {
      res.setHeader('Allow', ['GET','POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }catch(err){
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}
