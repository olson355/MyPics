var express = require('express'),
  router = express.Router(),
  logger = require('../../config/logger');
//import the user model
mongoose = require('mongoose'),
User = mongoose.model('User');


module.exports = function (app, config) {
    app.use('/api', router);

};