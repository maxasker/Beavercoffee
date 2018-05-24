'use strict';
//const storeController = require('../controllers/store.controller.js');
const models = require('../../models');
// Dependencies

function create (data) {
	var fulltime;
	(data.perc_fulltime) ? fulltime = data.perc_fulltime : fulltime = 100;
	data.history = {"role": data.current_role,  "end_date":null, "perc_fulltime":fulltime}
  const dataInput = new models.Employee(data);
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

function getCurrentRole(id) {
	return models.Employee.find({_id:id},{current_role:1});
}

function setOldDate(data){
	return models.Employee.findOneAndUpdate(
		{_id: data.params.employeeId, 'history.end_date':null},
		{$set: {'history.$.end_date':new Date() }},
		{new:true}
	);
}

function makeHistory(data) {
	var data = data;
	return setOldDate(data)
	.then(function() {
		return findOne(data)
		.then(function(res) {
		var updates = {};
		(data.body.current_role) ? updates.role = data.body.current_role : updates.role = res.current_role;
		(data.body.perc_fulltime) ? updates.perc_fulltime = data.body.perc_fulltime : updates.perc_fulltime = res.perc_fulltime;
		updates.end_date = null;

		var history = {
			role: data.body.current_role,
			end_date: null
		}

		var pushObj = {
			$push: {history: {
				$each: [updates],
				$position: 0
			}}
		}

		return models.Employee.findOneAndUpdate(
			{_id: data.params.employeeId},
			pushObj,
			{new:true}
		);
		});
	});
}

function updateFields(data) {
	var objForUpdate = {};
	if (data.body.name) objForUpdate.name = data.body.name;
    if (data.body.current_role) objForUpdate.current_role = data.body.current_role;
    if (data.body.perc_fulltime) objForUpdate.perc_fulltime = data.body.perc_fulltime;
    if (data.body.social_security) objForUpdate.social_security = data.body.social_security;
    if (data.body.address){
      if (data.body.address.street_name) objForUpdate['address.street_name'] = data.body.address.street_name;
      if (data.body.address.city) objForUpdate['address.city'] = data.body.address.city;
      if (data.body.address.country) objForUpdate['address.country'] = data.body.address.country;
      if (data.body.address.zipcode) objForUpdate['address.zipcode'] = data.body.address.zipcode;
    } 
	return objForUpdate;
}

function makeUpdate(data) {
	var objForUpdate;
	var data = data;
	if(data.body.current_role || data.body.perc_fulltime){
		return makeHistory(data)
			.then(function() {
				objForUpdate = updateFields(data);

				var setObj = {
					$set: objForUpdate,
				}
   
				return models.Employee.findOneAndUpdate(
          {_id: data.params.employeeId},
          setObj,
          {new:true}
        );
			});
	} else {
		objForUpdate = updateFields(data);
    
    var setObj = { 
      $set: objForUpdate,
    }
    
    return models.Employee.findOneAndUpdate(
          {_id: data.params.employeeId},
          setObj,
          {new:true}
    );
}
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

const handleError = (res, err) => {
  return res.status(500).send(String(err));
};

module.exports = {
  create,
	findAll,
	findOne,
	makeUpdate,
	makeComment,
	getComments
};

