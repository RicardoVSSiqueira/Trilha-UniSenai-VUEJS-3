# Trilha 02 — Respostas Teóricas (Parte 1)

**Nome:** [SEU NOME COMPLETO AQUI]
**Data:** [DATA DE ENTREGA]

---

**1. Explique o que é o jsFiddle e qual a sua utilidade no desenvolvimento com Vue.js.**
O jsFiddle é uma ferramenta online para escrever e testar código HTML, CSS e JavaScript diretamente no navegador, sem precisar instalar nada. No Vue.js, ele é útil para testar pequenos trechos de código, compartilhar exemplos com colegas/professores e depurar problemas de forma isolada.

**2. Descreva o processo para configurar o Vue.js no jsFiddle. Quais os passos necessários para incluir a biblioteca Vue.js?**
Acessa-se jsfiddle.net, clica em "Settings" no painel JavaScript, e no campo "External Resources" adiciona-se o link do CDN do Vue (ex: `https://unpkg.com/vue@3` para Vue 3). Depois basta clicar em OK e começar a escrever o código normalmente usando `Vue.createApp()`.

**3. O que é o "Hello World" no Vue.js e qual a sua importância no aprendizado do framework?**
É o exemplo mais básico de Vue, onde uma mensagem é exibida na tela a partir de uma variável do `data()`. Ele mostra, de forma simples, como o Vue conecta o JavaScript ao HTML através da reatividade, servindo como primeiro contato com o framework.

**4. Defina o conceito de two-way data binding no Vue.js. Por que ele é uma característica importante?**
É a ligação bidirecional entre os dados (`data()`) e a interface: quando o dado muda, a tela atualiza; quando o usuário digita em um campo, o dado atualiza. É importante porque elimina a necessidade de manipular o DOM manualmente para manter tudo sincronizado.

**5. Qual a principal função do v-for no Vue.js? Dê um exemplo de quando ele é utilizado.**
O `v-for` serve para percorrer um array (ou objeto) e renderizar um elemento HTML para cada item. Exemplo: exibir uma lista de tarefas, onde cada tarefa do array vira um `<li>` na tela.

**6. Explique o propósito da diretiva v-bind:key ao trabalhar com listas dinâmicas no Vue.js.**
O `:key` dá uma identificação única para cada item renderizado pelo `v-for`. Isso ajuda o Vue a saber exatamente qual elemento mudou, foi adicionado ou removido, tornando a atualização da lista mais eficiente e evitando bugs visuais.

**7. O que é a reatividade no Vue.js e como ela simplifica o desenvolvimento de interfaces dinâmicas?**
É o mecanismo pelo qual o Vue observa as variáveis do `data()` e atualiza automaticamente a interface sempre que elas mudam. Isso simplifica o desenvolvimento porque o programador só precisa se preocupar em alterar o dado — o Vue cuida de refletir isso na tela.

**8. Quais são as principais vantagens de usar o ciclo de vida dos componentes no Vue.js? Cite pelo menos dois hooks e suas finalidades.**
O ciclo de vida permite executar código em momentos específicos da existência de um componente, como logo que ele é criado ou destruído. Exemplos: `created()`, executado quando o componente é inicializado (bom para preparar dados); `mounted()`, executado quando o componente já está no DOM (bom para buscar dados de uma API).

**9. Diferencie os métodos JavaScript push e splice ao manipular arrays no Vue.js. Como o Vue detecta alterações feitas com esses métodos?**
`push()` adiciona um item ao final do array. `splice()` permite remover e/ou inserir itens em uma posição específica. O Vue detecta automaticamente mudanças feitas com esses métodos porque eles alteram o array através de sua estrutura reativa (Proxy, no Vue 3).

**10. O que é o método Vue.set e em quais cenários ele é necessário para garantir a reatividade?**
No Vue 2, `Vue.set` era necessário para garantir reatividade ao alterar diretamente um índice de array (`array[i] = valor`) ou adicionar uma propriedade nova a um objeto já existente, casos que o Vue não conseguia detectar sozinho. No Vue 3, esse método não existe mais — a reatividade baseada em Proxy já detecta esses casos automaticamente.

**11. Explique o uso dos modificadores de evento .prevent e .stop no Vue.js. Como eles afetam o comportamento de um evento do DOM?**
`.prevent` chama `event.preventDefault()`, impedindo o comportamento padrão do navegador (ex: recarregar a página ao enviar um formulário). `.stop` chama `event.stopPropagation()`, impedindo que o evento se propague para elementos pai.

**12. Descreva como os modificadores de teclas, como .enter e .esc, são usados no Vue.js. Cite um exemplo prático de aplicação.**
Eles permitem escutar uma tecla específica do teclado sem precisar checar manualmente o código da tecla dentro do método. Exemplo: `@keyup.enter="salvar"` executa o método `salvar` somente quando a tecla Enter é pressionada dentro do campo.

**13. Quais são as diferenças entre checkboxes, radios e selects em formulários dinâmicos no Vue.js?**
Checkbox permite selecionar múltiplos valores (geralmente ligado a um array no `v-model`). Radio permite selecionar apenas um valor entre várias opções mutuamente exclusivas. Select cria uma lista suspensa onde também se escolhe apenas uma opção.

**14. Por que é importante usar o atributo v-model ao criar formulários no Vue.js?**
Porque ele conecta automaticamente o valor digitado/selecionado pelo usuário à variável correspondente no `data()`, sem precisar escrever manualmente listeners de evento e atualizações de valor — simplificando bastante a criação de formulários.

**15. Explique como o Vue.js atualiza o DOM de maneira eficiente ao usar o Virtual DOM. Por que isso é vantajoso?**
O Vue mantém uma representação em memória (Virtual DOM) da interface. Quando um dado muda, ele compara a versão nova com a anterior (diffing) e aplica no DOM real apenas as alterações necessárias, em vez de re-renderizar a página inteira. Isso é vantajoso porque reduz o custo de processamento e torna a aplicação mais rápida.
