const db = require('../database/models');


module.exports = {
    renderProductsMain: (req, res) => {
        db.Product.findAll()
            .then(function (products) {
                return res.render('vista-productos', { products: products })
            })
            .catch(error => res.send(error))

    },

    renderProduct: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                return res.render('detalle-productos', {
                    product
                });
            })


    },

    renderServisMain: (req, res) => {
        db.Service.findAll()
            .then(services => {
                return res.render('vista-Servicios', {
                    services
                });
            })


    },

    renderServis: (req, res) => {
        db.Service.findByPk(req.params.id)
        .then(servis=>{
            return res.render('detalle-servicios', {
                servis
            });
        })
        .catch(error => res.send(error))
    },
    create : (req,res)=>{
        let
    
    }, 
    edit : (req,res)=>{

    },
    delete : (req,res)=>{

    }
}


