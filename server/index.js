const express = require('express');
const mariadb = require('mariadb');
const cors = require('cors'); // Add this line
const app = express();
const port = 3001;

app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow all methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow all headers
}));

const pool = mariadb.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "Bill3101",
    database: "Butikk"
});



app.get('/api/data', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM Kunder');
        res.json(rows);
    } catch (err) {
        console.log("Error while connecting to MariaDB or executing query:", err);
        res.status(500).send(err);
    } finally {
        if (conn) conn.end();
    }
});

app.listen(3001, () => {
    console.log(`Server listening at http://localhost:${port}`)
});