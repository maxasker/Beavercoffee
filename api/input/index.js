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

// reports:
router.post('/report/employees', report.employees);
router.post('/report/orders', report.orders);

// employee:
router.post('/:storeId/employees/', employeeRoutes.create);
router.get('/employees', employeeRoutes.findAll);
router.get('/employees/:employeeId', employeeRoutes.findOne);
router.put('/employees/:employeeId', employeeRoutes.update);
router.post('/employees/:employeeId/comments', employeeRoutes.comment);
router.get('/employees/:employeeId/comments', employeeRoutes.findEmpComments);

// store:
router.post('/store', storeRoutes.createStore);
router.get('/store', storeRoutes.findAllStores);
router.get('/store:storeId', storeRoutes.findOneStore);

// customer:
router.post('/customer', customerRoutes.input);
router.get('/customer/:customerId', customerRoutes.getCustomer);
router.get('/customer', customerRoutes.getCustomers);
router.put('/customer/:customerId', customerRoutes.updateCustomer);

// update beverages for customr
router.put('/customer/:customerId/beverages/', customerRoutes.updateBeverages);

// products:
router.post('/:storeId/products/', productRoutes.create);
router.get('/products/:productId', productRoutes.findOne);
router.get('/products', productRoutes.listAll);
router.put('/products/:productId', productRoutes.update);

// Menu:
router.post('/:storeId/menu', menuRoutes.addMenuItem);
router.get('/:storeId/menu', menuRoutes.getMenuItems);

// orders:
router.post('/:storeId/orders/', orderRoutes.create);
router.get('/orders/:orderId', orderRoutes.findOne);

module.exports = {
  router
};
