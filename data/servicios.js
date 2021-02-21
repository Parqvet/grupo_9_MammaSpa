const fs = require ("fs"); 

module.exports = JSON.parse(fs.readFileSync(__dirname + '/servicios.json','utf-8'))