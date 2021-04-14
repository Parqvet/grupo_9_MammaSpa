const db = require('../database/models');

module.exports = {
    renderProductsList: (req, res) => {
        
        db.Products.findAll()
            .then( products => {
                return res.render('admin/products-list', {
                    products
                })
            })
            .catch( err => console.log(err))
    },
    createNewProduct: (req, res) => {

        db.Category.findAll()
            .then( categories => {
                return res.render('admin/create-products', {
                    categories
                })
            })
            .catch( err => console.log(err));
    },
    storeNewProduct: (req, res) => {
        const { title, price, brand, category_id, description, img } = req.body;

        db.Products.create({
            title,
            price,
            brand,
            category_id,
            description,
            img: req.files[0].filename
        })
        .then(() => {
            return res.redirect('/admin/products/list');
        })
        .catch(err => console.log(err))

    },
    renderEditProduct: (req, res) => {
        
        db.Products.findByPk(req.params.id)
            .then( product => {
                db.Category.findAll()
                    .then( categories => {
                        return res.render('admin/products-edit', {
                            product,
                            categories
                        })
                    })
            })
            .catch( err => console.log(err))
    },
    updateProduct: (req, res) => {
        const { title, description, img, category_id, brand, price } = req.body;

        db.Products.update({
            title,
            description,
            img: req.files[0].filename,
            category_id,
            brand,
            price
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            return res.redirect('/admin/products/list')
        })
        .catch( err => console.log(err))
    },
    deleteProduct: (req, res) => {
        db.Products.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(()=> res.redirect('/admin/products/list'))
        .catch(error => res.send(error))
    },

    /* Servicios */
    renderServicesList: (req, res) => {
        db.Services.findAll()
            .then( services => {
                return res.render('admin/services-list', {
                    services
                })
            })
            .catch( err => console.log(err))
    },

    createNewService: (req, res) => {

        db.Category.findAll()
            .then( categories => {
                return res.render('admin/services-create', {
                    categories
                })
            })
            .catch( err => console.log(err));
    }, 

    storeNewService: (req, res) => {
        const { title, price, brand, category_id, description, img } = req.body;

        db.Services.create({
            title,
            price,
            brand,
            category_id,
            description,
            img: req.files[0].filename
        })
        .then(() => {
            return res.redirect('/admin/services/list');
        })
        .catch(err => console.log(err))
    },

    renderEditService: (req, res) => {
        db.Services.findByPk(req.params.id)
            .then( service => {
                db.Category.findAll()
                    .then( categories => {
                        return res.render('admin/services-edit', {
                            service,
                            categories
                        })
                    })
            })
            .catch( err => console.log(err))
    },

    updateService: (req, res) => {
        const { title, description, img, category_id, brand, price } = req.body;

        db.Services.update({
            title,
            description,
            img: req.files[0].filename,
            category_id,
            brand,
            price
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            return res.redirect('/admin/services/list')
        })
        .catch( err => console.log(err))
    },

    deleteService: (req, res) => {
        
        db.Services.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(()=> res.redirect('/admin/services/list'))
        .catch(error => res.send(error))
    }
}