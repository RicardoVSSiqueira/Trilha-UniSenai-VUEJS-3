# Trilha 03 — Respostas Teóricas

**Nome:** [SEU NOME COMPLETO AQUI]
**Data:** [DATA DE ENTREGA]

---

**1. Explique a estrutura básica de um arquivo .vue. Quais são as principais seções e suas finalidades?**
Um arquivo `.vue` é dividido em três seções: `<template>`, que contém o HTML que será renderizado; `<script>`, que define a lógica do componente (dados, métodos, props etc.); e `<style>`, que contém o CSS específico do componente, podendo ser global ou `scoped` (limitado apenas àquele componente).

**2. Defina o que são props no Vue.js e como elas são usadas para comunicação entre componentes.**
Props são propriedades customizadas que um componente pai usa para enviar dados a um componente filho. O pai declara o valor via `:nomeDaProp="valor"` no template, e o filho declara `props: ['nomeDaProp']` para poder usar esse valor internamente, como se fosse uma variável local (somente leitura).

**3. Explique a diferença entre props e eventos personalizados na comunicação entre componentes no Vue.js. Quando usar cada um deles?**
Props seguem o fluxo de cima para baixo (pai → filho), usadas quando o pai precisa configurar/alimentar o filho com dados. Eventos personalizados (`$emit`) seguem o fluxo de baixo para cima (filho → pai), usados quando o filho precisa avisar o pai que algo aconteceu (ex: um clique) ou enviar um dado para ele.

**4. O que são slots no Vue.js e qual a sua principal utilidade? Dê um exemplo de como eles podem ser usados para personalizar componentes.**
Slots permitem que o componente pai injete conteúdo HTML dentro de um componente filho, tornando-o mais flexível e reutilizável. Exemplo: um componente `Card.vue` genérico que só define a moldura visual, com `<slot></slot>` no lugar do conteúdo — cada tela que usa o Card decide o que vai dentro dele.

**5. Descreva o conceito de mixins no Vue.js. Quais são os benefícios e os possíveis problemas de usá-los em projetos grandes?**
Mixins são objetos que agrupam lógica (dados, métodos, hooks) reutilizável entre vários componentes. Benefício: evita duplicação de código. Problema: em projetos grandes pode ficar difícil saber de onde vem cada dado/método usado no componente (a origem fica "escondida"), e pode haver conflito de nomes entre o mixin e o componente.

**6. Explique a importância de utilizar o atributo v-bind:key ao trabalhar com listas dinâmicas em um componente.**
O `:key` dá uma identidade única a cada item renderizado por `v-for`, permitindo que o Vue identifique corretamente o que foi adicionado, removido ou alterado na lista. Sem isso, o Vue pode reaproveitar elementos do DOM de forma incorreta, causando bugs visuais ou de estado.

**7. Quais são as vantagens de organizar um projeto Vue.js utilizando pastas como components/, views/, router/ e store/?**
Essa organização deixa claro o papel de cada arquivo: `components/` guarda peças reutilizáveis, `views/` guarda páginas completas, `router/` centraliza a navegação e `store/` centraliza o estado global. Isso facilita a manutenção, a escalabilidade e o trabalho em equipe, já que cada pessoa sabe onde encontrar e onde adicionar cada tipo de código.

**8. O que acontece se dois componentes diferentes utilizarem o mesmo mixin? Como o Vue trata possíveis conflitos de métodos ou dados?**
Cada componente recebe sua própria cópia independente dos dados e métodos do mixin — eles não compartilham estado entre si. Em caso de conflito de nomes (o componente definir uma propriedade/método com o mesmo nome do mixin), a definição do próprio componente tem prioridade e sobrescreve a do mixin.

**9. Qual a diferença entre usar um slot simples (`<slot></slot>`) e um slot nomeado (`<slot name="...">`) em um componente Vue?**
O slot simples tem apenas um ponto de inserção de conteúdo. O slot nomeado permite ter vários pontos de inserção diferentes, cada um identificado por um nome (ex: `cabecalho`, `rodape`), permitindo montar layouts mais complexos onde o pai preenche cada parte separadamente.

**10. Descreva como o Vue.js facilita a comunicação de dados entre componentes pais e filhos. Por que isso é importante para aplicações modulares?**
O Vue facilita essa comunicação através de props (pai → filho) e eventos personalizados (filho → pai), criando um fluxo de dados unidirecional e previsível. Isso é importante porque, em aplicações grandes com muitos componentes, sempre fica claro de onde um dado vem e para onde ele vai, o que facilita a depuração e a manutenção do código.
