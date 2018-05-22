'use strict';

const routes = require('./routes');
const employeeRoutes = require('./employeeRoutes');
const router = require('express').Router();

router.post('/employees', employeeRoutes.create);
router.get('/employees', employeeRoutes.findAll);
router.get('/employees/:employeeId', employeeRoutes.findOne);

module.exports = {
  router
};
