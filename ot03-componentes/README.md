# Trilha 03 — Componentes Vue

## Estrutura de pastas
```
OT03_ComponentesVue/
├── respostas-teoricas.md        # 10 questões teóricas
└── src/
    ├── main.js                   # ponto de entrada, já com o router configurado
    ├── App.vue                   # componente raiz (Header + router-view + Footer)
    ├── mixins/
    │   └── meuMixin.js           # exercício 6
    ├── router/
    │   └── index.js              # exercício 7 (rotas entre Home e About)
    ├── views/
    │   ├── Home.vue               # reúne a demonstração dos exercícios 1,2,3,4,5,6,8,9,10
    │   └── About.vue              # página extra para demonstrar a navegação
    └── components/
        ├── Header.vue / Footer.vue        # exercício 7
        ├── MensagemComponente.vue          # exercício 1
        ├── PaiProps.vue / FilhoProps.vue   # exercício 2
        ├── PaiEvento.vue / FilhoEvento.vue # exercício 3
        ├── ComponenteComSlot.vue           # exercícios 4 e 5 (slot simples + nomeados)
        ├── ComponenteA.vue / ComponenteB.vue # exercício 6 (mesmo mixin em 2 componentes)
        ├── ListaItens.vue                  # exercício 8 (v-for + :key)
        ├── PaiBotaoProps.vue / FilhoRecebeProp.vue # exercício 9
        └── FormularioComSlots.vue          # exercício 10
```

## Como usar (dentro do seu projeto Vue CLI já criado)

1. Instale o vue-router dentro do seu projeto (ex: `vuejs3-trilha` ou como você tiver chamado):
```bash
cd caminho/do/seu/projeto
npm install vue-router@4
```

2. Copie a pasta `src/` deste pacote para dentro do seu projeto, **substituindo**
   o `src/App.vue` e `src/main.js` originais (o Vue CLI já cria esses dois arquivos
   por padrão, então é só sobrescrever).

3. Rode o projeto:
```bash
npm run serve
```

4. Acesse `http://localhost:8080` — a Home vai mostrar todos os exemplos práticos
   empilhados, e o menu no topo (Header) permite navegar até a página "About".
