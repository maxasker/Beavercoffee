'use strict';

const models = require('../../models');
// Dependencies

//Customer post data
function feedData (data) {
  const dataInput = new models.Customer(data);
  return dataInput.save();
}


// Customer put data (OBS ALL DATA)
function updateData (customerId, bodyData) {
		var updates = {};
	
		Object.keys(bodyData).forEach(function(key) {
				updates[key] = bodyData[key];
		});

		return models.Customer.findOneAndUpdate({_id:customerId},
			{$set: updates,},
			{new:true}
		);
}

// Customer update beverages
function updateBeverages (customerId, dataNbr) {
    return models.Customer.findOneAndUpdate({_id:customerId}, {beverages: dataNbr.beverages});
}

//Customer get data
function getData (customerId) {
    return models.Customer.find({_id: customerId});
}

module.exports = {
  feedData,
    getData,
    updateData,
    updateBeverages
};
