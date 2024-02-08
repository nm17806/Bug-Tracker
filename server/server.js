const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/bugs', (req, res) => {
    // Logic to fetch all bugs from the database
});

app.post('/bugs', (req, res) => {
    // Logic to create a new bug in the database
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
