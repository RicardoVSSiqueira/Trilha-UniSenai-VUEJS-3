# Trilha 01 — Respostas Teóricas (Parte 1)

**Nome:** [SEU NOME COMPLETO AQUI]
**Data:** [DATA DE ENTREGA]

---

**1. Defina o conceito de Vue.js e cite pelo menos três de suas principais características.**
Vue.js é um framework progressivo de JavaScript usado para construir interfaces de usuário reativas. Três características principais: (1) reatividade — a tela se atualiza automaticamente quando os dados mudam; (2) curva de aprendizado suave, acessível para iniciantes; (3) componentização, que permite dividir a interface em blocos reutilizáveis.

**2. Explique a importância de usar Node.js em aplicações web. Como ele difere de outras tecnologias de back-end como PHP?**
O Node.js permite rodar JavaScript fora do navegador, no servidor, usando a mesma linguagem do front-end. Sua arquitetura é orientada a eventos e não-bloqueante (assíncrona), o que o torna muito eficiente para APIs e aplicações em tempo real. O PHP, por padrão, processa requisições de forma mais tradicional/síncrona e é fortemente ligado a servidores como Apache, sendo comum em sistemas legados e CMS.

**3. O que são APIs RESTful? Cite suas principais vantagens no desenvolvimento de sistemas modernos.**
São interfaces que permitem a comunicação entre sistemas usando o protocolo HTTP, seguindo os princípios do REST. Vantagens: independem da linguagem/plataforma do cliente, são modulares (cada recurso é um endpoint independente), e trafegam dados em JSON, um formato leve e fácil de consumir por qualquer front-end.

**4. Qual a função do npm no ecossistema Node.js? Explique como ele é usado no gerenciamento de dependências.**
O npm (Node Package Manager) é o gerenciador de pacotes do Node.js. Ele instala, atualiza e remove bibliotecas usadas no projeto, registrando essas dependências no arquivo `package.json`, o que facilita compartilhar e reproduzir o projeto em outras máquinas.

**5. Explique a diferença entre os métodos HTTP GET, POST, PUT e DELETE em APIs RESTful.**
GET busca/lê dados de um recurso sem alterá-lo; POST cria um novo recurso; PUT atualiza (geralmente substitui) um recurso existente; DELETE remove um recurso.

**6. Descreva o que é o Vue CLI e como ele facilita o desenvolvimento de projetos Vue.js.**
O Vue CLI é uma ferramenta de linha de comando que gera automaticamente a estrutura inicial de um projeto Vue, já configurada com servidor de desenvolvimento, hot-reload e ferramentas de build, evitando que o desenvolvedor precise montar tudo manualmente.

**7. Qual é o propósito do formato JSON em APIs RESTful? Por que ele é amplamente utilizado?**
O JSON serve para representar dados de forma estruturada e leve na troca de informações entre front-end e back-end. É amplamente utilizado porque é fácil de ler, fácil de gerar/interpretar em JavaScript (e na maioria das linguagens modernas) e ocupa pouco espaço na transmissão.

**8. Compare o uso de Vue.js em uma aplicação front-end com o uso de bibliotecas como jQuery. Quais as vantagens do Vue.js?**
O jQuery manipula o DOM de forma imperativa (o desenvolvedor precisa dizer passo a passo o que muda na tela). O Vue.js trabalha de forma declarativa e reativa: o desenvolvedor descreve o estado dos dados e o Vue cuida de atualizar a interface. Isso reduz código repetitivo e organiza melhor aplicações maiores através de componentes.

**9. Cite dois cenários em que o PHP seria mais indicado que o Node.js para o desenvolvimento de um projeto.**
(1) Manutenção de sistemas corporativos legados já escritos em PHP; (2) Projetos que usam CMS como WordPress ou Joomla, que são nativamente construídos em PHP.

**10. Explique a relação entre Vue.js e o DOM reativo. Como isso melhora a performance de uma aplicação?**
O Vue mantém um sistema de reatividade que rastreia quais dados estão sendo usados na interface. Quando um dado muda, o Vue calcula (via Virtual DOM) apenas as partes da tela que realmente precisam mudar, evitando recarregar a página inteira e melhorando a performance.

**11. Qual é a importância de separar o front-end (Vue.js) do back-end (Node.js ou PHP) no desenvolvimento de aplicações?**
Essa separação permite que times trabalhem de forma independente, que o mesmo back-end sirva múltiplos clientes (web, mobile, painel admin), e que cada camada seja escalada e mantida separadamente.

**12. O que é o comando npm install e como ele se diferencia de npm install -g?**
`npm install` instala uma dependência localmente, dentro da pasta `node_modules` do projeto atual. `npm install -g` instala o pacote globalmente no sistema, ficando disponível para ser usado em qualquer projeto via terminal (como o Vue CLI).

**13. Por que o método POST em APIs RESTful é usado para criação de recursos? Dê um exemplo prático.**
POST é usado para criação porque, semanticamente, representa o envio de um novo dado ao servidor, que não é idempotente (executar duas vezes cria dois registros). Exemplo: `POST /api/usuarios` com um corpo `{ "nome": "Ana" }` cria um novo usuário chamado Ana.

**14. Explique o conceito de modularidade em APIs RESTful e como isso pode beneficiar um projeto grande.**
Modularidade significa organizar a API em recursos/endpoints independentes, como `/auth`, `/produtos`, `/pedidos`. Isso facilita manutenção, testes isolados e permite que diferentes partes do sistema evoluam sem impactar as demais.

**15. Qual o papel do yarn no ecossistema de desenvolvimento? Compare-o com o npm.**
O yarn é um gerenciador de pacotes alternativo ao npm, com a mesma função de instalar e gerenciar dependências. Ambos usam comandos parecidos (`yarn add` ≈ `npm install`), mas diferem em detalhes como estratégia de cache e o arquivo de lock (`yarn.lock` vs `package-lock.json`).
