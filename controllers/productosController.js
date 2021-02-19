const productos = require('../data/productos')

module.exports= {
    renderProductsMain: (req,res) =>{
        res.render('detalle-productos')
    },

    renderProductos: (req,res) =>{
        res.render('vista-productos',{
            productos})
    },
}