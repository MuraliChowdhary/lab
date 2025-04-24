const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Welcome to Home Page'));
app.get('/students', (req, res) => res.send('List of Students'));
app.get('/contact', (req, res) => res.send('Contact Page'));

app.listen(3000, () => console.log('Express server on port 3000'));
