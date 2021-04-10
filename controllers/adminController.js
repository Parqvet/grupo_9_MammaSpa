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
        const { title, price, brand, genre_id, description, img } = req.body;

        db.Products.create({
            title,
            price,
            brand,
            genre_id,
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
                return res.render('admin/products-edit', {
                    product
                })
            })
            .catch( err => console.log(err))
    },
    updateProduct: (req, res) => {
        const { title, description, img, category, brand, price } = req.body;

        products.forEach(product => {
            if(product.id === +req.params.id) {
                product.id = Number(req.params.id);
                product.title = title;
                product.description = description;
                product.img = img;
                product.category = category;
                product.brand = brand;
                product.price = price;
            }
        });

        setProducts(products);
        res.redirect('/admin/products/list');
    },
    deleteProduct: (req, res) => {
        products.forEach(product => {
            if(product.id === +req.params.id) {

                if(fs.existsSync(path.join('public', 'images', 'autos', auto.img))) {
                    fs.unlinkSync(path.join('public', 'images', 'autos', auto.img))
                }

                let indexProduct = products.indexOf(product);
                products.splice(indexProduct, 1);
            }
        });

        setProducts(products);
        res.redirect('/admin/products/list');
    },

    renderServicesList: (req, res) => {
        db.Services.findAll()
            .then( services => {
                return res.render('admin/services-list', {
                    services
                })
            })
            .catch( err => console.log(err))
    },

    renderServicesForm: (req, res) => {
        res.render('admin/services-create');
    }, 

    createNewService: (req, res) => {
        let lastID = 1;
        services.forEach(service => {
            if (service.id > lastID) {
                lastID = servis.id;
            }
        });

        const { title, description, img, category, bodypart, price } = req.body;

        const newService = {
            id: Number(lastID + 1),
            title,
            description,
            img,
            category,
            bodypart,
            price
        }

        services.push(newService);

        setServices(services);
        res.redirect('/admin/services/list');
    },

    renderEditService: (req, res) => {
        const service = services.find(service => service.id === +req.params.id);

        res.render('admin/services-edit', {
            services
        });
    },

    updateService: (req, res) => {
        const { title, description, img, category, bodypart, price } = req.body;

        services.forEach(service => {
            if(service.id === +req.params.id) {
                service.id = Number(req.params.id);
                service.title = title;
                service.description = description;
                service.img = img;
                service.category = category;
                service.bodypart = bodypart;
                service.price = price;
            }
        });

        setServices(services);
        res.redirect('/admin/services/list');
    },

    deleteService: (req, res) => {
        services.forEach(service => {
            if(servis.id === +req.params.id) {

                if(fs.existsSync(path.join('public', 'images', 'autos', auto.img))) {
                    fs.unlinkSync(path.join('public', 'images', 'autos', auto.img))
                }

                let indexService = services.indexOf(service);
                services.splice(indexService, 1);
            }
        });

        setServices(services);
        res.redirect('/admin/services/list');
    }
}




/* const db = require('../database/models');
const fs = require('fs');
const path = require('path');

module.exports = {
    renderProductsList: (req, res) => {
        db.Product.findAll()
            .then(function(products){
                return   res.render('admin/products-list', {
                    products
                });
            })
            .catch(error => res.send(error))
      
    },
    renderProductForm: (req, res) => {
        res.render('admin/products-create');
    },
    createNewProduct: (req, res) => {
        const { title, description, img, category, brand, price } = req.body;
        db.Product.create({
            title,
            description,
            img: req.files[0].filename,
            category,
            brand,
            price
        })
        .then(function (){
            return res.redirect('/admin/products/list');
        })
        .catch(error => res.send(error))
    
    },
    renderEditProduct: (req, res) => {
       
       db.Product.findByPk(req.params.id)
       .then(product=>{
        return res.render('admin/products-edit',{
            product
        });
       })
    
    },
    updateProduct: (req, res) => {
        const { title, description, imgOriginal, category, brand, price } = req.body;
       
        db.Product.update(
            {
            title:title,
            description:description,
            img:req.files[0]? req.files[0].filename:imgOriginal,
            category:category,
            brand:brand,
            price:price,
        },
       {
           where:{
               id:req.params.id
           }
       }
        )

        .then(function (){
            return res.redirect('/admin/products/list');
        })
        .catch(error => res.send(error))
    },
    deleteProduct: (req, res) => {
        db.Product.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(function (){
            return res.redirect('/admin/products/list');
        })
        .catch(error => res.send(error))
    },

    
    renderServicesList: (req, res) => {
        res.render('admin/services-list', {
            services
        });
    },

    renderServicesForm: (req, res) => {
        res.render('admin/services-create');
    }, 

    createNewService: (req, res) => {
        let lastID = 1;
        services.forEach(service => {
            if (service.id > lastID) {
                lastID = servis.id;
            }
        });

        const { title, description, img, category, bodypart, price } = req.body;

        const newService = {
            id: Number(lastID + 1),
            title,
            description,
            img,
            category,
            bodypart,
            price
        }

        services.push(newService);

        setServices(services);
        res.redirect('/admin/services/list');
    },

    renderEditService: (req, res) => {
        const service = services.find(service => service.id === +req.params.id);

        res.render('admin/services-edit', {
            services
        });
    },

    updateService: (req, res) => {
        const { title, description, img, category, bodypart, price } = req.body;

        services.forEach(service => {
            if(service.id === +req.params.id) {
                service.id = Number(req.params.id);
                service.title = title;
                service.description = description;
                service.img = img;
                service.category = category;
                service.bodypart = bodypart;
                service.price = price;
            }
        });

        setServices(services);
        res.redirect('/admin/services/list');
    },

    deleteService: (req, res) => {
        services.forEach(service => {
            if(servis.id === +req.params.id) {

                if(fs.existsSync(path.join('public', 'images', 'autos', auto.img))) {
                    fs.unlinkSync(path.join('public', 'images', 'autos', auto.img))
                }

                let indexService = services.indexOf(service);
                services.splice(indexService, 1);
            }
        });

        setServices(services);
        res.redirect('/admin/services/list');
    }
} */