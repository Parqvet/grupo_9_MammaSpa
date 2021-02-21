const { Router } = require('express');
const router = Router();

// metodos de los productos
const { renderProductsList, renderProductForm, createNewProduct, renderEditProduct, updateProduct, deleteProduct } = require('../controllers/adminController');

// renderizar listado de productos
router.get('/products/list', renderProductsList);

// renderizar vista para agregar producto
router.get('/products/add', renderProductForm);
// procesar el agregado del nuevo producto
router.post('/products/new-product', createNewProduct);

// renderizar vista para editar
router.get('/products/edit/:id', renderEditProduct);
// procesar la edición del producto
router.put('/products/update/:id', updateProduct);

// eliminar producto
router.delete('products/delete/:id', deleteProduct);

module.exports = router