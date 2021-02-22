const fs = require('fs');
const path = require('path');

const { getProducts, setProducts } = require(path.join('..', 'data', 'products'));

const products = getProducts();

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
                let indexProduct = products.indexOf(product);
                products.splice(indexProduct, 1);
            }
        });

        setProducts(products);
        res.redirect('/admin/products/list');
    }
}
