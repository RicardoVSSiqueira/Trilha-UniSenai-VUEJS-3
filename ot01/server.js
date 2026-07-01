// Exercício prático 4 e 6: API RESTful de usuários com Node.js + Express
const express = require('express');
const cors = require('cors'); // necessário para o Vue (rodando em outra porta) acessar essa API

const app = express();
app.use(cors());
app.use(express.json());

let usuarios = [
  { id: 1, nome: 'João', email: 'joao@example.com' },
  { id: 2, nome: 'Maria', email: 'maria@example.com' }
];

// GET /usuarios -> retorna todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// GET /usuarios/:id -> retorna um usuário específico
app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).send('Usuário não encontrado');
  res.json(usuario);
});

// POST /usuarios -> adiciona um novo usuário
app.post('/usuarios', (req, res) => {
  const novoUsuario = {
    id: usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1,
    nome: req.body.nome,
    email: req.body.email
  };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

// DELETE /usuarios/:id -> exercício 6: remove um usuário pelo ID
app.delete('/usuarios/:id', (req, res) => {
  const index = usuarios.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Usuário não encontrado');
  const removido = usuarios.splice(index, 1);
  res.json(removido[0]);
});

app.listen(3000, () => console.log('API rodando em http://localhost:3000'));
