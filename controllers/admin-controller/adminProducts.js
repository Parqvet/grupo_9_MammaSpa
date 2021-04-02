const db = require('../../database/models');

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

    }
    /* renderEditProduct: (req, res) => {
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
    } */
}