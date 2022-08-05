

const validarCampos = require('./validar-campos');
const validarJWT = require('./validar-jwt');
const validarTieneRole = require('./validar-roles');


module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validarTieneRole
}