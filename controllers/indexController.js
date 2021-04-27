const db = require('../database/models');
var Sequelize = require('sequelize');

module.exports = {
    renderHome: (req, res) => {
        const destacados = db.Products.findAll({limit : 4,
            order: Sequelize.literal('rand()'),
         
         })
        .then(destacados => { 
            return res.render('index', {
                destacados
            })
        })
        .catch( err => console.log(err))
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