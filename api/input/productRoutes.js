'use strict';
const models = require('../../models');

//create new product
function create (req, res) {

    const data = new models.Product(req.body);
    data.save()
        .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

//find product
function findOne (req, res) {

  models.Product.findById(req.params.productId)
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

// update amount
function update (req, res) {
    models.Product.findOneAndUpdate({_id:req.params.productId}, {total_amount:req.body})
        .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

// list products
function listAll (req, res) {
	models.Product.find()
	.then(function (result) {
		handleResponse(res, result);
	})
	.catch(function (err) {
		handleError(res, err);
	});
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
    listAll,
    update
}
