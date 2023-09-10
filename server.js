const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const formData = req.body;
  // Process the formData as needed (e.g., save to a database)
  console.log('Received form data:', formData);

  // Send a response back to the client
  res.json({ message: 'Form data received successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});