'use strict';

const employeeRoutes = require('./employeeRoutes');
const storeRoutes = require('./storeRoutes');
const router = require('express').Router();

router.post('/employees', employeeRoutes.create);
router.get('/employees', employeeRoutes.findAll);
router.get('/employees/:employeeId', employeeRoutes.findOne);
router.post('/store', storeRoutes.create);
router.get('/store', storeRoutes.findAll);
router.get('/store:storeId', storeRoutes.findOne);

module.exports = {
  router
};
