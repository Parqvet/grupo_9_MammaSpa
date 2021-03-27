const db = require('../database/models');
const fs = require('fs');
const path = require('path');

/*const { getProducts, setProducts } = require(path.join('..', 'data', 'products'));
const products = getProducts();

const { getServices, setServices } = require(path.join('..', 'data', 'services'));
const services = getServices();*/



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
       /*const product = products.find(product => product.id === +req.params.id);*/
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

    /*--- SERVICIOS ---*/
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
}