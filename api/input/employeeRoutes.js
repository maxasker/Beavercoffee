'use strict';
const models = require('../../models');
//const inputController = require('./inputController');

function create (req, res) {
	req.body.history = {"role": req.body.current_role}
	const Employee = new models.Employee(req.body);
	Employee.save()
  .then(function (result) {
    handleResponse(res, result);
  })
  .catch(function (err) {
    handleError(res, err);
  });
}

function findAll(req, res) {
	models.Employee.find()
	.then(function (result) {
		handleResponse(res, result);
	})
	.catch(function (err) {
		handleError(res, err);
	});
}

function findOne(req, res) {
  models.Employee.findById(req.params.employeeId)
  .then(function (result) {
    handleResponse(res, result);
  })  
  .catch(function (err) {
    handleError(res, err);
  }); 
}

function update(req, res) {
	  makeUpdate(req)
	  .then(function (result) {
			    handleResponse(res, result);
			  })
	  .catch(function (err) {
			    handleError(res, err);
			  });
}

function comment(req, res) {
	makeComment(req)
	.then(function (result) {
				handleResponse(res, result);
		  })
	.catch(function (err) {
				handleError(res, err);
			});
}

function makeUpdate(data) {
	  var objForUpdate = {};
	  if (data.body.name) objForUpdate.name = data.body.name;
	  if (data.body.current_role) objForUpdate.current_role = data.body.current_role;
		if (data.body.social_security) objForUpdate.social_security = data.body.social_security;
		if (data.body.address){
			if (data.body.address.street_name) objForUpdate['address.street_name'] = data.body.address.street_name;
			if (data.body.address.city) objForUpdate['address.city'] = data.body.address.city;
			if (data.body.address.country) objForUpdate['address.country'] = data.body.address.country;
			if (data.body.address.zipcode) objForUpdate['address.zipcode'] = data.body.address.zipcode;
		}
		
	  var setObj = { 
			$set: objForUpdate,
		}

	  return models.Employee.findOneAndUpdate(
					{_id: data.params.employeeId},
			    setObj,
			    {new:true}
			  );
};

function makeComment(data) {
		var comment = {
			text: data.body.text,
			author: data.body.author
		}

		var setObj = {
			$push: {comments: comment}
		}

		return models.Employee.findOneAndUpdate(
			{_id: data.params.employeeId},
			setObj,
			{new:true}
		);
};




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
	findAll,
	findOne,
	update,
	comment
} 
