const products = require('../data/productos')
const servicios = require('../data/servicios')


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
        })
       
    },

    renderServiciosMain: (req, res) => {
        res.render('vista-servicios', {
            servicios
        })
    },

    renderServicio: (req,res) => {
        const id = req.params.id;
        const servicio = servicios.find(servicio => servicio.id == id);
    
    
        res.render('detalle-servicios', {
           
            servicio
        })
    }


}