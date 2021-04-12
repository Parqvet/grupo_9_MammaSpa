const db = require('../database/models');

module.exports = {
    renderHome: (req, res) => {
        res.render('index');
    },

    renderProductsMain: (req, res) => {
        db.Products.findAll()
        .then( products => {
            return res.render('vista-productos', {
                products
            })
        })
        .catch( err => console.log(err))

    },

    renderDetailProduct: (req, res) => {
        db.Products.findByPk(req.params.id)
            .then(product => {
                return res.render('detalle-productos', {
                    product
                });
            })


    },

    renderServicesMain: (req, res) => {
        db.Services.findAll()
            .then(services => {
                return res.render('vista-Servicios', {
                    services
                });
            })


    },

    renderDetailService: (req, res) => {
        db.Services.findByPk(req.params.id)
        .then(service => {
            return res.render('detalle-servicios', {
                service
            });
        })
        .catch(error => res.send(error))
    }
}