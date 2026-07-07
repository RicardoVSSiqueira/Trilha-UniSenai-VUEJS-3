const { sequelize, DataTypes }  = require('sequelize');

const banco = require('../../Config/database');

const Usuario = banco.define('usuarios',{
    nome: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    senha: {type: DataTypes.STRING, allowNull: false},
});

banco.sync();

module.exports = Usuario;