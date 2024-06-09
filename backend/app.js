const express = require('express');
const app = express();
const mongoose = require('mongoose');

const languageRoutes = require('./routes/language');
const courseRoutes = require('./routes/course');
const exerciseRoutes = require('./routes/exercise');
const userRoutes = require('./routes/user');


app.use(express.json());

dbURL = 'mongodb+srv://yams:0000@atlascluster.r1j7bvi.mongodb.net/' ;
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à MongoDB réussi !');
  })
  .catch((error) => {
    console.error('Connexion à MongoDB échouée !', error);
  });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/language', languageRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/exercise', exerciseRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;