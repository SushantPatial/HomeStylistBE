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
// app.use(cors());
app.use(cors({credentials: true, origin: ['https://home-stylist-fe.vercel.app','http://localhost:3000']}));
app.use('/api', router);

// For deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "client/build", "index.html"));
  });
}

// Server
app.listen(port, function() {
  console.log("Server started at port " + port);
})

// To store data from productsData.js
// const defaultData = require('./defaultData');
// defaultData();