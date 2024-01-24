const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8081;

app.use(bodyParser.json());

app.post('/api/v1/service/save', (req, res) => {
  const { servicename } = req.body;

  // Handle saving servicename to MongoDB or your database here

  console.log('Received servicename:', servicename);
  
  res.status(201).json({ message: 'Service added successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
