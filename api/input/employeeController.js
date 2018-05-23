'use strict';

const models = require('../../models');
// Dependencies

function create (data) {
	data.body.history = {"role": data.body.current_role}
  const dataInput = new models.Employee(data.body);
  return dataInput.save();
}

function findAll(data) {
	return models.Employee.find();
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
	findAll,
	update
};

