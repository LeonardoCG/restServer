const { response } = require("express");

const coleccionesPermitidas = [
    'usuarios',
    'categoria',
    'productos',
    'roles'
];



const buscar = (req, res = response) => {

    const { coleccion, termino } = req.params;

    if( !coleccionesPermitidas.includes( coleccion ) ) {
        return res.status(400).json({
            msg: `Las coleccones permitidas son: ${ coleccionesPermitidas }`
        })

    }

    switch (coleccion) {
        case 'usuarios':
            break;
        case 'categoria':

            break;
        case 'productos':

            break;
        case 'roles':

            break;
        default:
            return res.status(500).json({
                msg: 'Se le olvido hacer esta busqueda'
            })
            break;
    }

    return res.json({
        coleccion, termino
    })

}


module.exports = {
    buscar
}