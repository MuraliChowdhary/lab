const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Dummy user data
const user = {
    name: 'Sudireddy Murali',
    email: 'murali@example.com',
    age: 21,
    location: 'Hyderabad'
};

// Route to render the user info
app.get('/user', (req, res) => {
    res.render('user', { user });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
