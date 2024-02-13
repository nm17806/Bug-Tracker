const express = require('express');
const db = require('./database');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

const ticketRoutes = require('./routes/tickets');

// Routes

app.use('/api', ticketRoutes);

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
