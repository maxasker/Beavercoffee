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
    return models.Customer.findOneAndUpdate({_id:customerId}, {barcode:bodyData.barcode,
        barcode:bodyData.barcode,
        name:bodyData.name,
        social_security:bodyData.social_security,
        occupation:bodyData.occupation,
        is_employee:bodyData.is_employee,
        country:bodyData.country,
        beverages:bodyData.beverages,
        member_since: bodyData.member_since,
        address: {street_name: bodyData.address.street_name,
                 city: bodyData.address.city,
                 country: bodyData.address.country,
                 zipcode: bodyData.address.zipcode}
});
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
