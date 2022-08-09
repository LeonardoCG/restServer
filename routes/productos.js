const { Router } = require('express');
const { check } = require('express-validator');
//controllers
const { productCreate, 
        productsGet, 
        productGet, 
        productUpdate, 
        productDelete }= require('../controllers/productos');
//helpers
const { existeCategoriaPorId, existeProductoPorId} = require('../helpers/db-validators');
//middlewars
const { validarJWT, validarCampos, esAdminRole } = require('../middlewares');
//routes
const router = Router();


//obtener todos los productos - publico
router.get('/', productsGet);

//obtener todos los productos por id - publico
router.get('/:id',[
    check('id', 'no es un id de mongo valido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos,
], productGet);

// crear un producto - cualquier persona con token valido
router.post('/',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('categoria', 'no es un id de mongo valido').isMongoId(),
    check('categoria').custom( existeCategoriaPorId ),
    validarCampos
],productCreate);

//actualizar product
router.put('/:id',[
    validarJWT,
    // check('categoria','no es un id mongo').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos,
], productUpdate);

//borrar producto - esado: false
router.delete('/:id',[
    validarJWT,
    esAdminRole,
    check('id', 'No es un ID válido mongo').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos,
], productDelete);


module.exports = router;