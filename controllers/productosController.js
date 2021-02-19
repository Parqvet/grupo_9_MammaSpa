const fs = require('fs');

const products = JSON.parse(fs.readFileSync('./data/productos.json', 'utf-8'));

module.exports={
    renderProductsMain: (req, res) => {
        res.render('products', {
            products
        });
    },
    renderProduct: (req,res) =>{
        const id = req.params.id;
        const product = products.find(product => product.id == id);

        res.render('detalle-productos', {
            product
        });
    }
}