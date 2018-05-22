'use strict';

// const models = require('../../models');
// Dependencies

function feedData (data) {
  const dataInput = new models.Employee(data);
  return dataInput.save();
}

module.exports = {
  feedData
};
