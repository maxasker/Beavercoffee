'use strict';
// const storeController = require('../controllers/store.controller.js');
const models = require('../../models');
// Dependencies

function employees (data) {
  // var start = new Date(data.sy, data.sm - 1, data.sd);
  var end = new Date(data.ey, data.em - 1, data.ed);
  var rep = [];
  return models.Employee.find()
  .then(function (res) {
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
  .then(function () {
    return rep;
  });
}

function customerZipCode (data) {
  let allOrders = [];
  let allCustomers = [];
  return models.Customer.find({'adress.zipcode': data.zipcode})
  .then(function (res) {
    res.forEach(function (customer) {
      allCustomers.push(customer._id);
    });
    let orderPromises = allCustomers.map(function (customer) {
      return models.Order.find({customer_id: customer})
      .then(function (res) {
        allOrders.push(res);
        return Promise.resolve();
      });
    });
    return Promise.all(orderPromises)
    .then(function () {
      return allOrders;
    });
  });
}

function customerOccupation (data) {
  let allOrders = [];
  let allCustomers = [];
  return models.Customer.find({occupation: data.occupation})
  .then(function (res) {
    res.forEach(function (customer) {
      allCustomers.push(customer._id);
    });
    let orderPromises = allCustomers.map(function (customer) {
      return models.Order.find({customer_id: customer})
      .then(function (res) {
        allOrders.push(res);
        return Promise.resolve();
      });
    });
    return Promise.all(orderPromises)
    .then(function () {
      return allOrders;
    });
  });
}

function orders(data) {
	var start = new Date(data.sy, data.sm - 1, data.sd);
  var end = new Date(data.ey, data.em-1, data.ed);
  var rep = [];
  if (data.zipcode) {
    return customerZipCode(data)
    .then(function (res) {
      return res;
    });
  }
  if (data.occupation) {
    return customerOccupation(data)
    .then(function (res) {
      return res;
    })
  }
	if(data.employee){
		return models.Order.find({employeeId:data.employee})
		.then(function(res){
			res.forEach(function (order) {
				if(order.date <= end && order.date >= start) {
					rep.push(order)
				}
			});
		})
		.then(function(){
			return rep;
		})
	}else if(data.menu_items){
		return models.Order.find()
		.then(function(orders){
			orders.forEach(function(order){
				var contains = false;
				data.menu_items.forEach(function(item){
					if(order.items.filter(i => i._id == item).length > 0) contains = true;
					console.log('looking for item: ' + item);
					console.log(contains);
				});
				if(contains){
					rep.push(order)
				}
			});
		})
		.then(function(){
			return rep;
		});
	}else {
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
}


const handleError = (res, err) => {
  return res.status(500).send(String(err));
};

module.exports = {
  employees,
  orders,
  customerZipCode
};
