'use strict';
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employees'
  },
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customers'
  },
  price: Number,
  date: {
    type: Date,
    default: (new Date())
  },
  items: [{
    menu_item: String,
    quantity: Number,
    itemprice: Number
  }]
});

const order = mongoose.model('orderItem', orderSchema);

module.exports = order;
