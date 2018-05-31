'use strict';
const employeeRoutes = require('./employeeRoutes');
const customerRoutes = require('./customerRoutes');
const storeRoutes = require('./storeRoutes');
const productRoutes = require('./productRoutes');
const menuRoutes = require('./menuRoutes');
const orderRoutes = require('./orderRoutes');
const report = require('./reportRoutes');
// const storageRoutes = require('./storageRoutes')
const router = require('express').Router();

router.post('/report/employees', report.employees);
router.post('/report/orders', report.orders);

router.post('/:storeId/employees/', employeeRoutes.create);
router.get('/employees', employeeRoutes.findAll);
router.get('/employees/:employeeId', employeeRoutes.findOne);
router.put('/employees/:employeeId', employeeRoutes.update);
router.post('/employees/comments/:employeeId', employeeRoutes.comment);
router.get('/employees/comments/:employeeId', employeeRoutes.findEmpComments);

// router.post('/store', storeRoutes.create);
// router.get('/store', storeRoutes.findAll);
// router.get('/store:storeId', storeRoutes.findOne);
router.post('/store', storeRoutes.createStore);
router.get('/store', storeRoutes.findAllStores);
router.get('/store:storeId', storeRoutes.findOneStore);
// router.post('/:storeId/storage', storageRoutes.create);
// router.get('/:storeId/storage', storageRoutes.findAll);
// router.get('/storeId/storage', storageRoutes.findOne);

// customer:
router.post('/customer', customerRoutes.input);
router.get('/customer/:customerId', customerRoutes.getCustomer);
router.put('/customer/:customerId', customerRoutes.updateCustomer);

// products:
router.post('/:storeId/products/', productRoutes.create);
router.get('/products/:productId', productRoutes.findOne);
router.get('/products', productRoutes.listAll);
router.put('/products/:productId', productRoutes.update);

// Menu:
router.post('/:storeId/menu', menuRoutes.addMenuItem);

// update beverages for customr
router.put('/customer/:customerId/beverages/', customerRoutes.updateBeverages);

//orders:
router.post('/:storeId/orders/', orderRoutes.create);
router.get('/orders/:orderId', orderRoutes.findOne);

module.exports = {
  router
};
