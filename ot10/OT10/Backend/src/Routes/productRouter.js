const express = require('express');

const produtoRouter = express.Router();

const ProductController = require('../Controller/productContorller');
const auth = require('../Middlewares/auth');

produtoRouter.get('/', auth, ProductController.listar);
produtoRouter.get('/:id', auth, ProductController.buscarPorId);
produtoRouter.post('/', auth, ProductController.cadastrar);
produtoRouter.put('/:id', auth, ProductController.atualizar);
produtoRouter.delete('/:id', auth, ProductController.deletar);

module.exports = produtoRouter;