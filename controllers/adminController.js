const fs = require('fs');
const path = require('path');

const { getProducts, setProducts } = require(path.join('..', 'data', 'products'));
const products = getProducts();

const { getServices, setServices } = require(path.join('..', 'data', 'services'));
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
            img: req.files[0].filename,
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