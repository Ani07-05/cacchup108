const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let orders = []; // Temporary in-memory store for orders

app.post('/log-payment', (req, res) => {
  const { orderId, status } = req.body;
  orders.push({ orderId, status });
  res.status(200).send('Payment logged');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
