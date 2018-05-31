'use strict';

// Dependencies
// const config = require('../config');
const inputController = require('./api/input');
const bodyParser = require('body-parser');
const app = require('express')();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const seeder = require('./seedDb.js');

console.log('Trying to connect to local database...');
mongoose.connect('mongodb://localhost/BeaverCoffee', function (err, db) {
  if (err) { console.log(err); }
<<<<<<< HEAD
    initServer();
    /*
  db.dropDatabase()
  .then(function () {
    console.log('Seeding DB...');
    seeder.seed()
    .then(function () {
      console.log('Seeding completed.');
      initServer();
    }); */
//  });
=======
  //db.dropDatabase()
  //.then(function () {
    //console.log('Seeding DB...');
    //seeder.seed()
    //.then(function () {
      //console.log('Seeding completed.');
      initServer();
    //});
  //});
>>>>>>> origin/master
});


mongoose.connection.once('open', function () {
  console.log('Connected to local database.');
}).on('error', function () {
  console.log('error in database, please try again.');
});

// Server application
function initServer () {
  console.log('Starting server...');
  app.use(cors({
    credentials: true,
    origin: true
  }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use('/api', inputController.router);
  app.listen(PORT);
  console.log('Server started.');
}
