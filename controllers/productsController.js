const path = require('path');
const { getProducts } = require(path.join('..', 'data', 'products'));

const products = getProducts();

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