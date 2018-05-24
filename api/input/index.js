'use strict';

const routes = require('./routes');
const customerRoutes = require('./customerRoutes');
const locationRoutes = require('./locationRoutes');
const productRoutes = require('./productRoutes');


const router = require('express').Router();

router.post('/', routes.input);

//customer:
router.post('/customer', customerRoutes.input);
router.get('/customer/:name', customerRoutes.getCustomer);
router.put('/customer/:name', customerRoutes.updateCustomer);
router.put('/customer/:name/beverages/', customerRoutes.updateBeverages);

//location:
router.post('/location', locationRoutes.postLocation);
router.get('/customer/:id', locationRoutes.findLocation);
router.get('/locations', locationRoutes.listLocations);

//products:
router.post('/products', productRoutes.create);
router.get('/products/:productId', productRoutes.findOne);
router.get('/products', productRoutes.listAll);
router.put('/products/:productId', productRoutes.update);

module.exports = {
  router
};
