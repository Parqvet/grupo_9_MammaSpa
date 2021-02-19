const products = require('../data/productos');

module.exports = {
    renderProductsList: (req, res) => {
        res.render('admin/products-list', {
            products
        });
    },
    renderProductForm: (req, res) => {
        res.render('admin/form-abm');
    }
}