'use strict';

const employeeRoutes = require('./employeeRoutes');
const customerRoutes = require('./customerRoutes');
const storeRoutes = require('./storeRoutes');
// const storageRoutes = require('./storageRoutes')
const router = require('express').Router();

router.post('/:storeId/employees/', employeeRoutes.create);
router.get('/employees', employeeRoutes.findAll);
router.get('/employees/:employeeId', employeeRoutes.findOne);
router.put('/employees/:employeeId', employeeRoutes.update);
router.post('/employees/comments/:employeeId', employeeRoutes.comment);
router.get('/employees/comments/:employeeId', employeeRoutes.findEmpComments);

//router.post('/store', storeRoutes.create);
//router.get('/store', storeRoutes.findAll);
//router.get('/store:storeId', storeRoutes.findOne);
router.post('/store', storeRoutes.createStore);
router.get('/store', storeRoutes.findAllStores);
router.get('/store:storeId', storeRoutes.findOneStore);
// router.post('/:storeId/storage', storageRoutes.create);
// router.get('/:storeId/storage', storageRoutes.findAll);
// router.get('/storeId/storage', storageRoutes.findOne);

//customer:
router.post('/customer', customerRoutes.input);
router.get('/customer/:customerId', customerRoutes.getCustomer);
router.put('/customer/:customerId', customerRoutes.updateCustomer);

//update beverages for customr
router.put('/customer/:customerId/beverages/', customerRoutes.updateBeverages);

module.exports = {
  router
};
