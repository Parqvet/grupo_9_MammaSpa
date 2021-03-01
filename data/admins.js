const fs = require ('fs');
const path = require('path');
const admins_db = path.join('data', 'admins.json');

module.exports = {
    getAdmins: () => {
        return JSON.parse(fs.readFileSync(admins_db,'utf-8'));
    }
}