const path = require('path');
const { getProducts } = require(path.join('..', 'data', 'products'));
const { getServices } = require(path.join('..', 'data', 'services'));
const services = getServices();
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

    renderServisMain: (req, res) =>{
        res.render('vista-Servicios', {
            services

        });
       
    },

    renderServis: (req,res) => {
        const id = req.params.id;
        const servis = services.find(servis => servis.id == id);

        res.render('detalle-servicios', {
            servis
        });
    }

}