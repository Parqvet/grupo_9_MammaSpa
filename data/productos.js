const fs = require ("fs"); 

module.exports = JSON.parse(fs.readFileSync(__dirname + '/productos.json','utf-8'));