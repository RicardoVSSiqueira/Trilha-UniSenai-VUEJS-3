const { sequelize, DataTypes }  = require('sequelize');

const banco = require('../../Config/database');

const Produtos = banco.define('produtos',{
    nome: {type: DataTypes.STRING, allowNull: false},
    preco: {type: DataTypes.DECIMAL(10,2), allowNull: false},
    categoria: {type: DataTypes.STRING, allowNull: false},
    descricao: {type: DataTypes.STRING, allowNull: false},
});

banco.sync();

module.exports = Produtos;