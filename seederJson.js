'use strict';

const stores = [{
  name: 'store1',
  location: {
    street: 'Södra förstadsgatan 1',
    zipcode: 21441,
    city: 'Malmö',
    country: 'Sweden'
  }
}, {
  name: 'store2',
  location: {
    street: 'Eslövsvägen 2',
    zipcode: 24322,
    city: 'Eslöv',
    country: 'Sweden'
  }
}];

function order () {
  return { items: [] };
}

/*
{
  'type': '5b100da8733c8e5315311df7',
  'quantity': '1'
}, {
  'type': '5b100da8733c8e5315311dfc',
  'quantity': '2'
}, {
  'type': '5b100da8733c8e5315311dfc',
  'quantity': '3'
}, {
  'type': '5b100da8733c8e5315311dfc',
  'quantity': '3'
}, {
  'type': '5b100da8733c8e5315311dfc',
  'quantity': '3'
}
*/

const employees = [{
  name: 'Max',
  social_security: 1233211232,
  current_role: 'Diskpojke'
}, {
  name: 'Robin',
  social_security: 1233211231,
  current_role: 'Supreme leader'
}, {
  name: 'Karolin',
  social_security: 1233211233,
  current_role: 'President'
}, {
  name: 'Madeleine',
  social_security: 1233211234,
  current_role: 'Crazy catlady on the street outside'
}];

const customers = [{
  barcode: 1,
  name: 'Alma',
  social_security: 1234567890,
  occupation: 'Professional customer',
  is_employee: false,
  country: 'Sweden',
  beverages: 9,
  adress: {
    street_name: 'Gatan',
    city: 'Lund',
    country: 'Sweden',
    zipcode: 23232
  }
},
  {
    barcode: 2,
    name: 'Karolin',
    social_security: 1234432112,
    occupation: 'Systemutvecklare',
    is_employee: true,
    country: 'Sweden',
    beverages: 5,
    adress: {
      street_name: 'DenAndraGatan',
      city: 'Malmö',
      country: 'Sweden',
      zipcode: 21448
    }
  },
  {
    barcode: 3,
    name: 'Pelle-Nicklas',
    social_security: 1234432113,
    occupation: 'Lawyer',
    is_employee: true,
    country: 'Sweden',
    beverages: 3,
    adress: {
      street_name: 'DenTredjeGatan',
      city: 'Malmö',
      country: 'Sweden',
      zipcode: 21145
    }
  },
  {
    barcode: 4,
    name: 'Carola',
    social_security: 1234432114,
    occupation: 'Singer',
    is_employee: true,
    country: 'Sweden',
    beverages: 7,
    adress: {
      street_name: 'DenFjärdeGatan',
      city: 'Malmö',
      country: 'Sweden',
      zipcode: 21446
    }
  }
];

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
      price: 25,
      ingredients: []
    },
    {
      name: 'Capuccino',
      price: 25,
      ingredients: []
    },
    {
      name: 'Skim Milk',
      price: 5,
      ingredients: []
    },
    {
      name: '2%Milk',
      price: 5,
      ingredients: []
    },
    {
      name: 'Soy Milk',
      price: 5,
      ingredients: []
    },
    {
      name: 'Vanilla Syrup',
      price: 5,
      ingredients: []
    },
    {
      name: 'Caramel Syrup',
      price: 5,
      ingredients: []
    },
    {
      name: 'Irish Cream Syrup',
      price: 5,
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
  menuItems,
  customers,
  order
};
