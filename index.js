const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 4000;
const app = express();

// Config
require('../Challenge3/Database/connect')
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Imporations des routes
const userAPi = require('./Routes/userAPi')
const todoApi = require('./Routes/todoAPI')


// Initialisations des routes
app.use("/users", userAPi)
app.use("/todo", todoApi)


app.listen(port, () => {
    console.log('App is running on port 4000')
})


