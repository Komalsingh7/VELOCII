const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');

// Connect to DB
connectToDb();

// CORS config (update port based on your frontend)
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173', // Vite dev server
  credentials: true, // required if using cookies
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
  res.send('hello world');
});
app.use('/users', require('./routes/user.routes'));
app.use('/captains', require('./routes/captain.routes'));

module.exports = app;
