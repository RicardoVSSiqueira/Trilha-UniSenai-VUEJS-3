# Trilha 01 — Introdução ao Desenvolvimento com Vue.js

## Estrutura de pastas
```
OT01_IntroducaoVue/
├── respostas-teoricas.md      # Parte 1 - 15 questões teóricas
├── backend-node/              # Exercícios práticos 4 e 6
│   ├── server.js
│   └── package.json
├── backend-php/                # Exercício prático 8
│   └── produtos.php
└── frontend-vue/               # Exercícios práticos 3, 5, 7, 9 e 10
    └── index.html
```

## Como rodar o backend Node.js (exercícios 4, 5, 6, 7)
```bash
cd backend-node
npm install
npm start
```
A API sobe em `http://localhost:3000`.

## Como rodar o frontend Vue.js
Basta abrir o arquivo `frontend-vue/index.html` diretamente no navegador
(com o backend Node já rodando, para os exercícios 5 e 7 funcionarem).

> Observação: para o exercício 2 (criar projeto com Vue CLI), rode no terminal:
> ```bash
> npm install -g @vue/cli
> vue create meu-projeto
> cd meu-projeto
> npm run serve
> ```
> O `index.html` deste repositório usa Vue via CDN (mais simples para estudo),
> mas o mesmo código pode ser adaptado para dentro de um projeto Vue CLI/Vite.

## Como rodar o backend PHP (exercício 8)
Requer PHP + MySQL configurados (ex: XAMPP/WAMP).
1. Crie um banco com uma tabela `produtos (id, nome, preco)`.
2. Ajuste as credenciais em `backend-php/produtos.php`.
3. Acesse `http://localhost/produtos.php` no navegador.
