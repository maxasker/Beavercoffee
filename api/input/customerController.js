'use strict';

const models = require('../../models');
// Dependencies

//Customer post data
function feedData (data) {
  const dataInput = new models.Customer(data);
  return dataInput.save();
}

//Customer get data
function getData (data) {
      return models.Customer.find({name: data});
}

module.exports = {
  feedData,
    getData
};
