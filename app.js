const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Env file for development
require('custom-env').env();

// Express Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Mongoose Connect
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/express-demo-2', {
  useNewUrlParser: true
})
  .then(() => {
    console.log('mongoDb Connected');
  }).catch((err) => {
    if (err) throw err;
  });

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
