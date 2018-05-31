'use strict';
const models = require('../../models');
const orderController = require('../controllers/order.controller.js');

//create new order
function create (req, res){
    orderController.create(req.body)
  .then(function (results) {
    handleResponse(res, results);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}




function findOne (){

}


function deleteOne(){

}

// Error handler
const handleError = (res, err) => {
  return res.status(500).send(String(err));
};

// Response handler
const handleResponse = (res, result) => {
  res.send(result);
};

module.exports = {
  create,
	findOne,
  //  listAll,
    deleteOne,
//    update
}
