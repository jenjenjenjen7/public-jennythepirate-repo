const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); 
app.use(express.json()); 
app.use(helmet());

// Neon Connection Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false, 
  },
});

//SQL goes here
app.get('/api/costume', async (req, res) => {
try {
    const query =
      `SELECT 
        costume.id,
        costume.character_id,
        costume.version,
        costume.project_status,
        costume.slug,
        costume.image_path,
        TO_CHAR(costume.date_finished, 'Month YYYY') AS date_finished, 
        characters.char_name AS name, 
        series.series_name AS title
      FROM costume 
      LEFT JOIN characters ON costume.character_id = characters.char_id
      LEFT JOIN series ON characters.series_id = series.ser_id
      ORDER BY costume.id ASC`;
    
    const result = await pool.query(query);
    res.json(result.rows);
    } 
    catch (err) {
    console.error("DB Error:", err.message);
    res.status(500).json({ error: "Database retrieval failed" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is sailing on port ${PORT}`);
});
