const productos = require('../data/productos')

module.exports={

    renderProduct: (req,res) =>{
        res.render('detalle-productos')
    },

    indexProductos: (req,res) =>{
        res.render('vista-productos',{productos})
    },

    

}