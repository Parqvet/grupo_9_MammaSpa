<<<<<<< HEAD
const products = require('../data/productos');

module.exports = {
    renderProductsList: (req, res) => {
        res.render('admin/products-list', {
            products
        });
    },
    renderProductForm: (req, res) => {
        res.render('admin/form-abm');
    },
    createNewProduct: (req, res) => {
        let lastID = 1;
        products.forEach(product => {
            if (product.id > lastID) {
                lastID = product.id;
            }
        });

        const { title, description, img, category, brand, price } = req.body;

        res.send(req.body)
    }
}
=======
module.exports = { 
    renderAbm: (req, res)=>{
        res.render('form-abm')
    },
    crearProd: function(req, res, next) {
        let producto = {
            nombre: req.body.nombre,
            valor: req.body.valor

         
        }
    },
}    
>>>>>>> 965a66c46dd5594db6c2cacd873c2dfc8e701ae0
