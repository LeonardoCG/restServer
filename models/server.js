// importamos express 
const express = require('express');

const cors = require('cors');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();

    }



    //    MIDDLEWARES
    middlewares() {
        //cors
        this.app.use( cors() );

        //lectura y parseo del body
        this.app.use( express.json() );

        //direcctorio publico statico
        this.app.use( express.static('public') );
        
    }

    routes() {

        this.app.use(this.usersPath, require('../routes/users.routes'));
    }

    listen() {

        this.app.listen( this.port, (req, res) => {
            console.log(`servidor web habilitado para CORS escuchando en el puerto  ${this.port}`)
        });
    }


}


module.exports = Server;