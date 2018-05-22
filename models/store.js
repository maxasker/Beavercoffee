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
  employees: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
  orders: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }
});

const Store = mongoose.model('Storage', storeSchema);

module.exports = Store;
