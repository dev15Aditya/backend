const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRouter = require('./routes/contacts');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.j6t9kg4.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use(contactRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
