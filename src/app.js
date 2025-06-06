const express = require('express');
const path = require('path');
const pokeneaRoutes = require('./routes/pokeneaRoutes');
const helmet = require('helmet');

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "img-src": ["'self'", "https://*.s3.us-east-1.amazonaws.com", "data:"],
      },
    },
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pokeneaRoutes);

app.use((req, res, next) => {
    res.status(404).send("Lo siento, no encontramos esa ruta!");
});

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

module.exports = app;