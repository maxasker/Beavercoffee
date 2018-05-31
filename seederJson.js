'use strict';

const stores = [{
  name: 'store1'
}, {
  name: 'store2'
}];

const employees = [{
  name: 'Max',
  current_role: 'diskpojke'
}, {
  name: 'Robin',
  current_role: 'Supreme leader'
}];

const cocoa = ['Cocoa Mix'];
const milk = ['Skim Milk', 'Soy Milk', 'Whole Milk', '2%Milk', 'Whipped Cream'];
const roasts = ['Espresso Roast', 'Whole Bean French', 'Qhole Bean Ligt Roast'];
const syrups = ['Vanilla Syrup', 'Caramel Syrup', 'Irish Cream Syrup'];
const allProducts = [{cocoa: cocoa}, {milk: milk}, {roasts: roasts}, {syrups: syrups}];

function menuItems () {
  return [
    {
      name: 'Hot Chocolate',
      price: 30,
      ingredients: []
    },
    {
      name: 'Whipped Cream',
      price: 5,
      ingredients: []
    },
    {
      name: 'Latte',
      price: 15,
      ingredients: []
    },
    {
      name: 'Skim Milk',
      price: 0,
      ingredients: []
    },
    {
      name: '2%Milk',
      price: 0,
      ingredients: []
    },
    {
      name: 'Soy Milk',
      price: 0,
      ingredients: []
    },
    {
      name: 'Vanilla Syrup',
      price: 0,
      ingredients: []
    },
    {
      name: 'Caramel Syrup',
      price: 0,
      ingredients: []
    },
    {
      name: 'Irish Cream Syrup',
      price: 0,
      ingredients: []
    }
  ];
}

function products () {
  let products = [];
  let i;
  let j;
  for (i = 0; i < allProducts.length; i++) {
    for (var key in allProducts[i]) {
      for (j = 0; j < allProducts[i][key].length; j++) {
        if (key === 'cocoa' || key === 'roasts') {
          products.push({
            'name': allProducts[i][key][j],
            'quantity': {
              'metric': 'kg',
              'total_amount': '100',
              'pkg_amount': '100'
            }
          });
        }
        if (key === 'milk' || key === 'syrups') {
          products.push({
            'name': allProducts[i][key][j],
            'quantity': {
              'metric': 'l',
              'total_amount': '100',
              'pkg_amount': '100'
            }
          });
        }
      }
    }
  }
  return products;
}

module.exports = {
  stores,
  employees,
  products,
  menuItems
};
