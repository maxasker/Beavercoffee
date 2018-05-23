'use strict';

const employeeRoutes = require('./employeeRoutes');
const customerRoutes = require('./customerRoutes');
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

//customer:
router.post('/customer', customerRoutes.input);
router.get('/customer/:name', customerRoutes.getCustomer);
router.put('/customer/:name', customerRoutes.updateCustomer);

//update beverages for customr
router.put('/customer/:name/beverages/', customerRoutes.updateBeverages);

module.exports = {
  router
};
