const { response } = require("express");
//modelo
const { Producto } = require('../models');

//obtener todos los productos - paginado - total - populete
const productsGet = async (req, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    //coleccion de promesas 
    const [total, productos] = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
            .populate("usuario", "nombre")
            .populate("categoria", "nombre")
            .skip(Number(desde))
            .limit(Number(limite))
<<<<<<< HEAD
            .populate("usuario", "nombre")
            .populate("categoria", "nombre")
=======
>>>>>>> 879270b4b35ffec7809d13c69e011a38f05e218f
    ]);

    res.json({ total, productos });

}
//obtener todos los productos
const productGet = async (req, res = response) => {

    const { id } = req.params;
    const producto = await Producto.findById(id)
                                    .populate("usuario", "nombre")
                                    .populate("categoria", "nombre");

    res.json(producto);
}

// crear productos
const productCreate = async (req, res = response) => {

    const { estado, usuario, ...body } = req.body;
<<<<<<< HEAD
    const nombre = req.body.nombre;
=======
    const { nombre } = req.body.nombre;
>>>>>>> 879270b4b35ffec7809d13c69e011a38f05e218f

    const productoDB = await Producto.findOne(nombre)

    if (productoDB) {
        return res.status(400).json({
            msg: `El producto ${productoDB.nombre}, ya existe`
        });
    } else {

    // generamos la data
    const data = {
        ...body,
        nombre: body.nombre.toUpperCase(),
        usuario: req.usuario._id
    }
    //creamos la data
    const producto = new Producto(data);
    //guardamos DB
    await producto.save();
    //enviamos codigo 201, creado
    res.status(201).json(producto);
    }

}
//actualizar productos
const productUpdate = async (req, res = response) => {

    const { id } = req.params;
    const { estado, usuario, categoria, ...data } = req.body;

<<<<<<< HEAD
    if (data.nombre) {
        data.nombre = data.nombre.toUpperCase();
    }
=======
    if( data.nombre ) {
        data.nombre = data.nombre.toUpperCase();
    }

>>>>>>> 879270b4b35ffec7809d13c69e011a38f05e218f
    data.usuario = req.usuario._id;

    const producto = await Producto.findByIdAndUpdate(id, data, { new: true });

    res.json(producto);
}
//eliminar productos estado en false
const productDelete = async (req, res = response) => {
    const { id } = req.params;

<<<<<<< HEAD
    const producto = await Producto.findByIdAndUpdate(id, { estado: false }, { new: true });
=======
    const productoborrado = await Producto.findByIdAndUpdate(id, { estado: false }, { new: true });
>>>>>>> 879270b4b35ffec7809d13c69e011a38f05e218f

    res.json(productoborrado);

}

module.exports = {
    productCreate,
    productsGet,
    productGet,
    productUpdate,
    productDelete
}