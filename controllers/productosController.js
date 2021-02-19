const products = require('../data/productos')

module.exports= {
    renderProductsMain: (req,res) => {
        res.render('detalle-productos', {
            products
        })
    },

    renderProducts: (req,res) => {
        res.render('vista-productos');
    },
}