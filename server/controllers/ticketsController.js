const db = require('../database');

// Fetch all tickets
exports.getAllTickets = (req, res) => {
    db.query('SELECT * FROM tickets', (err, results) => {
        if(err) {
            console.error('Error fetching tickets', err);
            res.status(500).send('Error fetching tickets');
            return;
        }
        res.send(results);
    });
};

// Fetch a single ticket by ID
exports.getTicketById = (req, res) => {
    const ticketId = req.params.id;
    db.query('SELECT * FROM tickets WHERE ticket_id = ?', [ticketId], (err, results) => {
        if(err) {
            console.error('Error fetching ticket', err);
            res.status(500).send('Error fetching ticket');
            return;
        }
        // Check if the ticket was found
        if (results.length > 0) {
            res.send(results[0]);
        } else {
            res.status(404).send('Ticket not found');
        }
    });
};

// Create a new ticket
exports.createTicket = (req, res) => {
    const { project_id, summary, status, priority, category, assignee, description } = req.body;
    const query = `INSERT INTO tickets (project_id, summary, status, priority, category, assignee, description) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [project_id, summary, status, priority, category, assignee, description], (err, results) => {
        if(err) {
            console.error('Error inserting ticket', err);
            res.status(500).send('Error inserting ticket');
            return;
        }
        res.status(201).send({ ticketId: results.insertId, message: "Ticket created successfully" });
    });
};
