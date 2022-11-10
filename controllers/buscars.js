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
        });

    }

    switch (key) {
        case 'usuarios':
            
            break;
        case 'categoria':

            break;
        case 'productos':

            break;
        case 'roles':

            break;
        default:
            res.status(500).json({
                msg: 'Se le olvido hacer esta busqueda'
            });
            break;
    }

    res.json({
        coleccion, termino
    });

}


module.exports = {
    buscar
}