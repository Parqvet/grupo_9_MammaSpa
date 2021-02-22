const fs = require('fs');
const path = require('path');

const { getProducts, setProducts } = require(path.join('..', 'data', 'productos'));

const products = getProducts();

const { getServices, setServices } = require(path.join('..', 'data', 'servicios'));
const services = getServices();



module.exports = {
    renderProductsList: (req, res) => {
        res.render('admin/products-list', {
            products
        });
    },
    renderProductForm: (req, res) => {
        res.render('admin/products-create');
    },
    createNewProduct: (req, res) => {
        let lastID = 1;
        products.forEach(product => {
            if (product.id > lastID) {
                lastID = product.id;
            }
        });

        const { title, description, img, category, brand, price } = req.body;

        const newProduct = {
            id: Number(lastID + 1),
            title,
            description,
            img,
            category,
            brand,
            price
        }

        products.push(newProduct);

        setProducts(products);
        res.redirect('/admin/products/list');
    },
    renderEditProduct: (req, res) => {
        const product = products.find(product => product.id === +req.params.id);

        res.render('admin/products-edit', {
            product
        });
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
                let indexProduct = products.indexOf(product);
                products.splice(indexProduct, 1);
            }
        });

        setProducts(products);
        res.redirect('/admin/products/list');
    },

    //SERVICIOS

    renderServicesList: (req, res) => {
        res.render('admin/services-list', {
            services
        });
    },

    renderServiceForm: (req, res) => {
        res.render('admin/services-create');
    }, 

    createNewServis: (req, res) => {
        let lastID = 1;
        services.forEach(servis => {
            if (servis.id > lastID) {
                lastID = servis.id;
            }
        });

        const { title, description, img, category, bodypart, price } = req.body;

        const newServis = {
            id: Number(lastID + 1),
            title,
            description,
            img,
            category,
            bodypart,
            price
        }

        services.push(newServis);

        setServices(services);
        res.redirect('/admin/services/list');
    },
    renderEditServis: (req, res) => {
        const servis = services.find(servis => servis.id === +req.params.id);

        res.render('admin/services-edit', {
            servis
        });
    },
    updateServis: (req, res) => {
        const { title, description, img, category, bodypart, price } = req.body;

        services.forEach(servis => {
            if(servis.id === +req.params.id) {
                servis.id = Number(req.params.id);
                servis.title = title;
                servis.description = description;
                servis.img = img;
                servis.category = category;
                servis.bodypart = bodypart;
                servis.price = price;
            }
        });

        setServices(services);
        res.redirect('/admin/services/list');
    },

    deleteServis: (req, res) => {
        services.forEach(servis => {
            if(servis.id === +req.params.id) {
                let indexServis = services.indexOf(servis);
                services.splice(indexServis, 1);
            }
        });

        setServices(services);
        res.redirect('/admin/services/list');
    }

    
    
}
