const { response } = require('express');

const usersGet = (req,res = response) => {

    // const params = req.query;
    //usar .query para obtener datos obtenidos
    //agregamos valores por defeectos
    const { q, nombre= 'no name', apikey, page = 1, limit = 2} = req.query;

    res.json({ 
        msg: 'get API - controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const userPut = (req, res = response) => {
    //obtener un id por medio de .params.id
    const id = req.params.id;

    res.json({ 
        msg: 'PUT - This is CORS-enabled for all origuns!',
        id
    });
}

const userPost = (req, res = response) => {
    //recibir datos desde el body
    // const body = req.body;
    //podemos hacer una desestructuracion para obtener datos necesarios
    const { nombre, edad } = req.body;

    res.json({ 
        msg: 'POST -This is CORS-enabled for all origuns!',
        nombre,
        edad
    });
}

const userDelete = (req, res = response) => {
    res.json({ msg: 'DELETE - This is CORS-enabled for all origuns!'});
}

const userPatch = (req, res = response) => {
    res.json({ msg: 'PATH - This is CORS-enabled for all origuns!'});
}
 
module.exports = {
    usersGet,
    userPost,
    userPut,
    userDelete,
    userPatch
}