'use strict';

const employee = require('../../models');
// Dependencies

function feedData (data) {
  const dataInput = new employee(data);
  return dataInput.save()
};

module.exports = {
  feedData
};
