// Libraries
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;
var path = require('path');

// Express
const app = express();

// Database connection
require('./database/connection');

// Routes
const router = require('./routes/router');

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser(""));
app.use(cors({credentials: true, origin: ['https://home-stylist-fe.vercel.app','http://localhost:3000']}));
app.use('/api', router);

// Server
app.listen(port, function() {
  console.log("Server started at port " + port);
})

// To store data from productsData.js
const defaultData = require('./defaultData');
defaultData();