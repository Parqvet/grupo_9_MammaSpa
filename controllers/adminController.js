const products = require('../data/productos');

const fs = require('fs');

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

        fs.writeFileSync('./data/productos.json', JSON.stringify(newProduct), 'utf-8');
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

        fs.writeFileSync('./data/productos.json', JSON.stringify(products), 'utf-8');
        res.redirect('/admin/products/list');
    }
}
