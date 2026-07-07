const Produtos = require('../Models/productModel');

class produtosController {

    async listar(req, res) {

        try {

            const produtos = await Produtos.findAll();

            res.status(200).json(produtos);

        } catch (error) {

            res.status(500).json({
                erro: error.message
            });

        }

    }
    async buscarPorId(req, res) {

        try {

            const produtos = await Produtos.findByPk(req.params.id);

            res.status(200).json(produtos);

        } catch (error) {

            res.status(500).json({
                erro: error.message
            });

        }


    }

    async cadastrar(req, res) {

        try {

            const produtos = await Produtos.create(req.body);

            res.status(201).json(produtos);

        } catch (error) {

            res.status(500).json({
                erro: error.message
            });

        }

    }

    async atualizar(req, res) {

        try {

            const produto = await Produtos.findByPk(req.params.id);

            if (!produto) {
                return res.status(404).json({
                    erro: 'Produto não encontrado.'
                });
            }

            await produto.update(req.body);

            res.status(200).json({
                mensagem: 'Produto atualizado.'
            });

        } catch (error) {

            res.status(500).json({
                erro: error.message
            });

        }

    }

    async deletar(req, res) {

        try {

            const produto = await Produtos.findByPk(req.params.id);

            if (!produto) {
                return res.status(404).json({
                    erro: 'Produto não encontrado.'
                });
            }

            await produto.destroy();

            res.status(200).json({
                mensagem: 'Produto removido.'
            });

        } catch (error) {

            res.status(500).json({
                erro: error.message
            });

        }

    }

}

module.exports = new produtosController();