const db = require('../../../lib/db');

// GET: list complaints
// POST: create complaint
module.exports = async function handler(req, res){
  try{
    if(req.method === 'GET'){
      const result = await db.query('SELECT id, ticket_number, category, description, reporter_name, reporter_contact, resolved, created_at FROM complaints ORDER BY created_at DESC');
      return res.status(200).json(result.rows);
    }
    if(req.method === 'POST'){
      const { category, description, reporter_name, reporter_contact } = req.body;
      if(!description) return res.status(400).json({ error: 'description required' });
      // generate a simple ticket number (TKT-<timestamp>-<rand>)
      const ticket = `TKT-${Date.now().toString().slice(-6)}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;
      const insert = await db.query(
        'INSERT INTO complaints (ticket_number, category, description, reporter_name, reporter_contact) VALUES ($1,$2,$3,$4,$5) RETURNING id, ticket_number, category, description, reporter_name, reporter_contact, resolved, created_at',
        [ticket, category || null, description, reporter_name || null, reporter_contact || null]
      );
      return res.status(201).json(insert.rows[0]);
    }
    res.setHeader('Allow', ['GET','POST']);
    res.status(405).end('Method Not Allowed');
  }catch(err){
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}
