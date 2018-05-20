'use strict';

const routes = require('./routes');
const router = require('express').Router();

router.post('/', routes.input);

module.exports = {
  router
};
