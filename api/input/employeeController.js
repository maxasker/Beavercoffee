'use strict';

const models = require('../../models');
// Dependencies

function create (data) {
  const dataInput = new models.Employee(data);
  return dataInput.save();
}

function getAll(data) {
	return models.Employee.find();
	/*
	models.Employee.find()
	.then(employees => {
		res.send(employees);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Error occurred while retreiving employees"
		});
	});*/
};

function update(data) {
  var objForUpdate = {};
	if (data.body.name) objForUpdate.name = data.body.name;
	if (data.body.current_role) objForUpdate.current_role = data.body.current_role;
	var setObj = { $set: objForUpdate }

	return models.Employee.findOneAndUpdate(
		{"social_security": data.params.social_security}, 
		{setObj},
	  {new:true}
	);
};

module.exports = {
  create,
	getAll,
	update
};

