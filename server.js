const express = require('express');
const apiRouter = require('./routes/apiRoutes');
const htmlRouter = require('./routes/htmlRoutes')

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/', apiRouter);
app.use('/', htmlRouter);

app.use(express.static('public'));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));