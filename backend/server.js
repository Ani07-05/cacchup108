const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/cacchup108')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Order Schema
const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  cart: Array,
  total: Number,
  date: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

// Send confirmation email
const sendOrderConfirmationEmail = (email, invoicePath) => {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'services.cacchup@gmail.com',
      pass: 'zeol tkrp stxq oezs'
    }
  });

  let mailOptions = {
    from: 'services.cacchup@gmail.com',
    to: email,
    subject: 'Order Confirmation',
    text: 'Your order has been placed successfully. Please scan the attached QR code to complete your payment.',
    attachments: [
      {
        filename: 'invoice.pdf',
        path: invoicePath
      },
      {
        filename: 'qrc.jpeg',
        path: 'qrc.jpeg'
      }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });

  // Notify the developer
  let devMailOptions = {
    from: 'services.cacchup@gmail.com',
    to: 'developer-email@gmail.com',
    subject: 'New Order Placed',
    text: `A new order has been placed by ${email}.`,
    attachments: [
      {
        filename: 'invoice.pdf',
        path: invoicePath
      }
    ]
  };

  transporter.sendMail(devMailOptions, (error, info) => {
    if (error) {
      console.log('Error sending developer email:', error);
    } else {
      console.log('Developer email sent:', info.response);
    }
  });
};


// Generate Invoice
const generateInvoice = (order) => {
  const doc = new PDFDocument();
  const invoicePath = `./invoices/invoice_${order._id}.pdf`;

  doc.pipe(fs.createWriteStream(invoicePath));

  doc.fontSize(25).text('Invoice', { align: 'center' });
  doc.text(`Order ID: ${order._id}`);
  doc.text(`Date: ${new Date(order.date).toLocaleString()}`);
  doc.text(`Name: ${order.name}`);
  doc.text(`Email: ${order.email}`);
  doc.text(`Address: ${order.address}`);
  doc.text('Items:');

  order.cart.forEach((item, index) => {
    doc.text(`${index + 1}. ${item.name} - ₹${item.price}`);
  });

  doc.text(`Total: ₹${order.total}`);

  doc.end();

  return invoicePath;
};

// Place order endpoint
app.post('/api/place-order', async (req, res) => {
  const { name, email, address, cart, total } = req.body;

  const newOrder = new Order({ name, email, address, cart, total });

  try {
    await newOrder.save();
    const invoicePath = generateInvoice(newOrder);
    sendOrderConfirmationEmail(email, invoicePath);
    res.status(201).send('Order placed successfully');
  } catch (error) {
    res.status(500).send('Error placing order');
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Cacchup API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
