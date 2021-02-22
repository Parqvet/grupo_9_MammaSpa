const fs = require ('fs');
const path = require('path');
const services_db = path.join('data', 'services.json');

module.exports = {
    getServices: () => {
        return JSON.parse(fs.readFileSync(services_db,'utf-8'));
    },
    setServices: (data) => {
        fs.writeFileSync(services_db, JSON.stringify(data, null, 2), 'utf-8');
    }
}