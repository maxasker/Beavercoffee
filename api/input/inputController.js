'use strict';

const menuItem = require('../../models/test');
// Dependencies

function feedData (data) {
  const dataInput = new menuItem(data);
  return dataInput.save()
};

module.exports = {
  feedData
};
