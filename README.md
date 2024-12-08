# Urna Eletronica

## Sobre

Este projeto é uma atividade avaliativa da disciplina Desenvolvimento Front-End do IFRN/Parnamirim.
Tem por objetivo simular em formato de aplicação Web um sistema de votação, análogo a Urna eletrônica utilizada nos processos eleitorais do Brasil.

 ## Componentes

  Klyngher Emidio
  Aristides Neto

## 1. Recursos necessário

  Para desenvolver esse sistema foram usados este recursos:
- Ambiente de desenvolvimento do VsCode;
- Linguagens - Angular CLI versão 18.2.11 e TypeScript versão 4.9.3;

## 2. Procedimento de Instalação da Aplicação

- Instalar o NodeJS (https://nodejs.org). Obs: Prefira a versão LTS;
```
  npm install -g typescript
```
- Instalar o @angular/cli digite o comando a seguir na linha de comando.
```
  npm install -g @angular/cli
```
- criando o projeto.
```
  ng new trabalho_front-end
```
- criando componentes

```
  ng g c <componente>
```
## 3. Implementação 

o projeto é composto por 5 componentes, um modelo e um serviço:

- HeaderComponent => composto o template e lógica para o cabeçalho;
- FooterComponent => composto o template e lógica para o rodapé;
- BodyComponent   => composto por dois componentes o VotingComponent e o ResultsComponent;
  -  VotingComponent => componente principal, responsável por criar e manipular a lógica de manipulação template-componente da interface web com o usuário;
  -  ResultsComponent => componente responsável por criar a estrutura de um formulário básico que irá armazenar a contagem dos votos;
- Appcomponente => compnente principal, usado para exibir as inferfaces do projeto;
- voto-manager.ts => modelo para determinar a estrutura básica de cada voto, baseado na interface IVoto;
- voto.service.ts => reponsável por fazer a comuniçação em tempo real entre os componentes, disponbilizando os métodos da classe VotoService;

## 4. Servidor de Desenvolvimento
Execute ng serve para iniciar o servidor de desenvolvimento. Acesse http://localhost:4200/. A aplicação será recarregada automaticamente sempre que você alterar qualquer arquivo fonte.

## Observação:
o uso do serviço causou redundância quanto alguns inputs e outputs do código, o que pode ser observado nos códigos comentados do projeto.

## Ajuda Adicional
Para mais informações sobre o Angular CLI, use ng help ou consulte a página Angular CLI Overview and Command Reference.
