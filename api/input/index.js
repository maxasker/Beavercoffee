'use strict';

const routes = require('./routes');
const customerRoutes = require('./customerRoutes');

const router = require('express').Router();

router.post('/', routes.input);

//customer:
router.post('/customer', customerRoutes.input);

router.get('/customer/:name', customerRoutes.getCustomer);

//update customer
router.put('/customer/:name', customerRoutes.updateCustomer);

//update beverages for customr
router.put('/customer/:name/beverages/', customerRoutes.updateBeverages);

module.exports = {
  router
};




