const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');

class AuthController {

    async register(req, res) {

        try {

            const usuario = await User.create(req.body);

            res.status(201).json({
                mensagem: 'Usuário cadastrado com sucesso!',
                usuario
            });

        } catch (error) {

            res.status(500).json({
                erro: error.message
            });

        }

    }

    async login(req, res) {

        try {

            const { email, senha } = req.body;

            const usuario = await User.findOne({
                where: { email }
            });

            if (!usuario) {
                return res.status(401).json({
                    erro: 'Usuário não encontrado.'
                });
            }

            if (usuario.senha !== senha) {
                return res.status(401).json({
                    erro: 'Senha incorreta.'
                });
            }

            const token = jwt.sign(
                {
                    id: usuario.id,
                    email: usuario.email
                },
                'segredo',
                {
                    expiresIn: '1h'
                }
            );

            res.json({
                mensagem: 'Login realizado com sucesso!',
                token
            });

        } catch (error) {

            res.status(500).json({
                erro: error.message
            });

        }

    }

    async logout(req, res) {

        res.json({
            mensagem: 'Logout realizado.'
        });

    }

}

module.exports = new AuthController();