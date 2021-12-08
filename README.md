 Boas vindas ao repositório do projeto de Trivia!

Esta aplicação foi desenvolvida em grupo.

Este projeto é um jogo de perguntas e respostas baseado no jogo Trivia ([Trivia API](https://opentdb.com/api_config.php)) utilizando React e Redux (com testes contruídos em Jest + RTL):

- O app começa com uma tela onde a pessoa que joga coloca seu nome e seu e-mail. O e-mail será usado para buscar a foto associada no site Gravatar (se houver).
- Logo após, ela é redirecionada para o jogo onde deve escolher uma das respostas disponíveis para cada uma das perguntas. A resposta deve ser marcada antes de o contador de tempo chegar a zero, caso contrário a resposta deve ser considerada como errada.
- Cada acerto dá à pessoa que joga pontos que deverão ser computados num placar no header da aplicação.
- Após 5 perguntas respondidas, a pessoa que joga é redirecionada para uma tela de score, onde o texto mostrado vai depender do número de acertos.
- No final de cada jogo, a pessoa que joga pode acessar o ranking com as melhores pontuações.
- A pessoa que joga pode configurar algumas opções para o jogo em uma tela de configurações acessível a partir do header do app.


Para rodá-lo em sua máquina, basta clonar o repositório utilizando seu terminal:

```
git clone git@github.com:JanderLiborio20/trivia-react-redux.git
```

Em seguida, acesse a pasta:

```
cd trivia-react-redux
```

Por fim, dê o comando para iniciar a aplicação no navegador:

```
npm start
```