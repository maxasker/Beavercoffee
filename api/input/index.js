'use strict';

const routes = require('./routes');
const router = require('express').Router();

router.post('/employees', routes.employee);
router.post('/test', routes.input);
router.get('/employees', routes.getEmployees);

module.exports = {
  router
};
