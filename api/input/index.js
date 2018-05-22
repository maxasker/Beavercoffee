'use strict';

const routes = require('./routes');
const employees = require('./employeeRoutes');
const router = require('express').Router();

router.post('/employees', employees.create);
router.post('/test', routes.input);
router.get('/employees', employees.getAll);
router.put('/employees/:social_security', employees.update);

module.exports = {
  router
};
