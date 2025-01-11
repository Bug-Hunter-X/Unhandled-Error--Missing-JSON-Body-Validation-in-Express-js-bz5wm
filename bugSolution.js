const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  try {
    const user = req.body;
    if (!user) {
      return res.status(400).send('Missing user data');
    }
    // Add further validation as needed
    console.log('Received user:', user);
    res.status(201).send('User created');
  } catch (error) {
    if (error instanceof SyntaxError && error.message.startsWith('Unexpected token')) {
      return res.status(400).send('Invalid JSON');
    }
    console.error('Error creating user:', error);
    res.status(500).send('Server error');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));