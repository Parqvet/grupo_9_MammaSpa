'use strict';
const fs = require ('fs');
const path = require('path');
const products_db = path.join('data', 'products.json');

let productosJson = JSON.parse(fs.readFileSync(products_db,'utf-8'));
let productos = []
productosJson.forEach(item => {
  let producto = {
    title : item.title,
    description : item.description,
    price : item.price,
    brand : item.brand,
    img : item.img
   
  }
  productos.push(producto)
});



module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('products', productos, {});
 
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('products', null, {});
    
  }
};
