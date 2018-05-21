'use strict';

const Employee = require('../../models');
// Dependencies

function feedData (data) {
  const dataInput = new Employee(data);
  return dataInput.save();
}

module.exports = {
  feedData
};
