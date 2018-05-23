'use strict';

const models = require('../../models');
// Dependencies

//Customer post data
function feedData (data) {
  const dataInput = new models.Customer(data);
  return dataInput.save();
}

// Customer put data EJ FÄRDIG
function updateData (data, bodyData) {
    return models.Customer.findOneAndUpdate({name:data}, {occupation:bodyData.occupation, country:bodyData.country});
}

//Customer get data
function getData (data) {
    return models.Customer.find({name: data});
}

module.exports = {
  feedData,
    getData,
    updateData
};
