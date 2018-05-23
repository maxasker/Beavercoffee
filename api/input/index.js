'use strict';

const employeeRoutes = require('./employeeRoutes');
const storeRoutes = require('./storeRoutes');
// const storageRoutes = require('./storageRoutes')
const router = require('express').Router();

router.post('/employees', employeeRoutes.create);
router.get('/employees', employeeRoutes.findAll);
router.get('/employees/:employeeId', employeeRoutes.findOne);
router.post('/store', storeRoutes.createStore);
router.get('/store', storeRoutes.findAllStores);
router.get('/store:storeId', storeRoutes.findOneStore);
// router.post('/:storeId/storage', storageRoutes.create);
// router.get('/:storeId/storage', storageRoutes.findAll);
// router.get('/storeId/storage', storageRoutes.findOne);

module.exports = {
  router
};
