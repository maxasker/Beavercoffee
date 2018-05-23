'use strict';

const routes = require('./routes');
const customerRoutes = require('./customerRoutes');

const router = require('express').Router();

router.post('/', routes.input);

//customer:
router.post('/customer', customerRoutes.input);

router.get('/customer/:name', customerRoutes.getCustomer);

router.put('/customer/:name', customerRoutes.updateCustomer);

module.exports = {
  router
};




