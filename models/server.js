// importamos express 
const express = require('express');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();

    }

    middlewares() {
        //direcctorio publico
        this.app.use( express.static('public') );
    }


    //Route || endpoint
    routes() {

        this.app.get('/api',  (req, res) => {
            res.json({
                msg: 'get API'
            });
        });

        this.app.put('/api', (req, res) => {
            res.json({
                msg: 'put api'
            });
        });

        this.app.post('/api', (req, res) => {
            res.json({
                msg: 'post api'
            });
        });

        this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'delete api'
            });
        });

        this.app.patch('/api', (req, res) => {
            res.json({
                msg: 'patch api'
            });
        });
    }

    listen() {

        this.app.listen( this.port, (req, res) => {
            console.log(`server ejecutando en ${this.port}`)
        });
    }


}


module.exports = Server;