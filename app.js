const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Express Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Env file for development
require('custom-env').env();

// Static folder for assets
app.use(express.static('public'));

// load routes
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');


// // Use routes
app.use('/', indexRoutes);
app.use('/user', userRoutes);

const port = parseInt(process.env.PORT, 10) || 3000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
