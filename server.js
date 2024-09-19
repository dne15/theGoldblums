
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5173;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample route
app.get('/api', (req, res) => {
res.json({ message: 'Welcome to the API server!' });
});

// Start the server
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
