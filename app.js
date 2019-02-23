const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

// Express Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Env file for development
require('custom-env').env();

// Static folder for assets
app.use(express.static('public'));
app.use('/packages', express.static(__dirname + '/node_modules'));

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
