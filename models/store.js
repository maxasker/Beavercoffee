const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  name: String,
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  },
  storage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Storage'
  },
  employees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }],
  menu: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Menu'
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }]
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
