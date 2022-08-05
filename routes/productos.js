const { Router } = require('express');
const { check } = require('express-validator');

const { productCreate, 
        productsGet, 
        productGet, 
        productUpdate, 
        productDelete }= require('../controllers/productos');
const { validarJWT, validarCampos } = require('../middlewares');

const router = Router();


//obtener todos los productos - publico
router.get('/', productsGet);

//obtener todos los productos por id - publico
router.get('/:id', productGet);

// crear un producto - cualquier persona con token valido
router.post('/',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
],productCreate);

//actualizar product
router.put('/id', productUpdate);

//borrar producto - esado: false
router.delete('/id', productDelete);


module.exports = router;