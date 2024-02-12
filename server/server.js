const express = require('express');
const db = require('./database');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/tickets', (req, res) => {
    // Logic to fetch all tickets from the database
    db.query('SELECT * FROM tickets', (err, results) => {
        if(err) {
            console.error('Error fetching data', err);
            res.status(500).send('Error fetching data');
            return
        }
        res.send(results);
    })
});

app.get('/tickets/:id', (req, res) => {
    const ticketId = req.params.id;
    // Logic to fetch a ticket with the given id from the database
    db.query('SELECT * FROM tickets WHERE ticket_id = ?', ticketId, (err, results) => {
        if(err) {
            console.error('Error fetching data', err);
            res.status(500).send('Error fetching data');
            return
        }
        res.send(results);
    })
});

app.post('/tickets', (req, res) => {
    // Logic to create a new ticket in the database
    const { project_id, summary, status, priority, category, assignee, description } = req.body;

    const query = `INSERT INTO tickets (project_id, summary, status, priority, category, assignee, description) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [project_id, summary, status, priority, category, assignee, description], (err, results) => {
        if(err) {
            console.error('Error inserting data', err);
            res.status(500).send('Error inserting data');
            return
        }
        res.send(results);
    })
});

app.put('/bugs/:id', (req, res) => {
    const bugId = req.params.id;
    // Logic to update a bug with the given id in the database
});

app.delete('/bugs/:id', (req, res) => {
    const bugId = req.params.id;
    // Logic to delete a bug with the given id from the database
});

app.listen(port, () => {
    console.log(`Bug Tracker server is running on port ${port}`);
});
