'use strict';
const fs = require ('fs');
const path = require('path');
const services_db = path.join('data', 'services.json');

let servicesJson = JSON.parse(fs.readFileSync(services_db,'utf-8'));
let services = []
servicesJson.forEach(item => {
  let service = {
    title : item.title,
    description : item.description,
    price : item.price,
    brand : item.brand,
    img : item.img
   
  }
  services.push(service)
});



module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('services', services, {});
 
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('services', null, {});
    
  }
};
