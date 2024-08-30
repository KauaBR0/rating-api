const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = process.env.MONGODB_URI;

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB database!');
    })
    .catch(() => {
        console.log('Connection failed!');
    });

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/api', require('./ratings/routes/ratings'));


app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});