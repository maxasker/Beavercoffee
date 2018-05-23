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
}

function findOne(data) {
	return models.Employee.findById(data.params.employeeId);
}

function getComments(data) {
  return models.Employee.find({_id:data.params.employeeId},{comments: 1});
}

function makeHistory(data) {
	const old = findOne(data);
	var history = {
		role: old.current_role,
		end_date: new Date()
	}

	var pushObj = {
		$push: {history: history}
	}

	return models.Employee.findOneAndUpdate(
		{_id: data.params.employeeId},
		pushObj,
		{new:true}
	);
}
function makeUpdate(data) {
    var objForUpdate = {};
    if (data.body.name) objForUpdate.name = data.body.name; 
    if (data.body.current_role) {
			objForUpdate.current_role = data.body.current_role;
			makeHistory(data);
		}
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
}

function makeComment(data) {
    var comment = {
      text: data.body.text,
      author: data.body.author
    }

    var pushObj = {
      $push: {comments: comment}
    }

    return models.Employee.findOneAndUpdate(
      {_id: data.params.employeeId},
      pushObj,
      {new:true}
    );
};

module.exports = {
  create,
	findAll,
	findOne,
	makeUpdate,
	makeComment,
	getComments
};

