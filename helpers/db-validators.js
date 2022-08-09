const { Usuario, Categoria, Producto, Role } = require("../models");


const esRoleValido = async(role = '') => {
    //VERIFICAR SI EXISTE EL ROLE
    const existeRol = await Role.findOne({ role });
    if ( !existeRol ) {
        throw new Error(`El rol ${ role } no está registrado en la BD`);
    }
}

//validador de correo
const emailExiste = async( correo = '' ) => {
    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo }, ya está registrado`);
    }
}

//validador de usuario por id
const existeUsuarioPorId = async( id ) => {
    // Verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

//validador de categorias por id
const existeCategoriaPorId = async( id ) => {
    // Verificar si la categoria existe
    const existeCategoria = await Categoria.findById(id);
    if( !existeCategoria ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const existeProductoPorId = async( id ) => {
    //verificar si existe el producto
    const existeProducto = await Producto.findById(id);
    if(!existeProducto) {
        throw new Error(`El id no existe ${ id }`);
    }
}



module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId
}

