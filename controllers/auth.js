const { response } = require("express");
const bcryptjs = require('bcryptjs');
const { Usuario } = require('../models');
const { generarJWT } = require("../helpers/generarjwt");
const { googleVerify } = require("../helpers/google-verify");


const login = async (req, res = response) => {

    const { correo, password } = req.body;

    try {
        //verificar si el email existe
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }
        //si el usuario esta activo
        if (!usuario.estado)
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado-false'
            })

        //verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            })
        }

        //Generar el JWT
        const token = await generarJWT(usuario.id);


        return res.json({
            // msg: 'Login ok'
            usuario,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

const googleSingIn = async (req, res = response) => {
    const { id_token } = req.body;

    try {

        const { nombre, img, correo } = await googleVerify(id_token);

        //verificar si el correo existe
        let usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            //crear usuario
            const data = {
                nombre,
                correo,
                password: ':p',
                img,
                role: "USER_ROLE",
                google: true
            };

           
            // Encriptar la contraseña
            const salt = bcryptjs.genSaltSync();
            data.password = bcryptjs.hashSync(data.password, salt);

            usuario = new Usuario(data);
            await usuario.save();
        }

        // si el usuario en DB
        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Hable con el administrador, usuario bloqueado'
            });
        }

        //generar el jwt
        const token = await generarJWT(usuario.id);



        return res.json({
            usuario,
            token
        });

    } catch (error) {

        return res.status(400).json({
            ok: false,
            msg: 'El Token no se pudo verificar'
        });

    }


}

module.exports = {
    login,
    googleSingIn
}