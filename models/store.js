const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    street: String,
    zipcode: Number,
    city: String,
    country: String
  },
  storage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Storage'
  },
  employees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }],
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Menu'
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }]
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
