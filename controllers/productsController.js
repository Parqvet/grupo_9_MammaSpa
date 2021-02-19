const products = require('../data/productos');

module.exports= {
    renderProductsMain: (req,res) => {
        res.render('vista-productos', {
            products
        })
    },

    renderProduct: (req,res) => {
        const id = req.params.id;
        const product = products.find(product => product.id == id);

        res.render('detalle-productos', {
            product
        });
    },
}