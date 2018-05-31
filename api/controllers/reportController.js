'use strict';
//const storeController = require('../controllers/store.controller.js');
const models = require('../../models');
// Dependencies

function employees(data) {
	var start = new Date(data.sy, data.sm-1, data.sd);
	var end = new Date(data.ey, data.em-1, data.ed);
	var rep = [];
	return models.Employee.find()
	.then(function(res) {
		res.forEach(function (emp) {
			emp.history.forEach(function (his) {
				if (his.start_date <= end && his.end_date == null) {
					rep.push({
						name: emp.name,
						role: his.role,
						start_date: his.start_date,
						end_date: his.end_date,
						perc_fulltime: his.perc_fulltime
					});
				}
			});
		});
	})
	.then(function() {
		return rep;
	});
}

function orders(data) {
	var start = new Date(data.sy, data.sm - 1, data.sd);
  var end = new Date(data.ey, data.em-1, data.ed);
  var rep = [];
	
	return models.Order.find()
	.then(function(res) {
		res.forEach(function (order) {
			if(order.date <= end && order.date >= start){
				rep.push(order)
			}
		});
	})
	.then(function(){
		return rep;
	});
}

const handleError = (res, err) => {
  return res.status(500).send(String(err));
};

module.exports = {
	employees,
	orders
};

