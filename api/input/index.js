'use strict';

const routes = require('./routes');
const router = require('express').Router();

router.post('/employees', routes.employee);
router.post('/test', routes.input);

module.exports = {
  router
};
