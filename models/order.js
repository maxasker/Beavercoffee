'use strict';
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  price: Number,
  date: {
    type: Date,
    default: (new Date())
  },
  items: [{
    menu_item: {
        type: mongoose.Schema.Types.ObjectId,
      ref: 'Menu_item'},
    quantity: Number
  }]
    //price : { $sum: '$numbers' }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
