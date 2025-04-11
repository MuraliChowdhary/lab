// server.js
import express from 'express';
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const user = {
    name: 'Alice Johnson',
    age: 28,
    email: 'alice@example.com',
    hobbies: ['Reading', 'Hiking', 'Photography']
  };
  res.render('user', { user });
});

app.listen(3000, () => console.log('Server started on port 3000'));