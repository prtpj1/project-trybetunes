# 11º Projeto: Trybe Tunes
<p align="center">
  <img src="https://github.com/prtpj1/prtpj1/blob/main/Headers/11-TrybeTunes.jpg?raw=true" alt="Header" />
</p>

---
<p align="center">
<a href="#project-description">Project Description</a> •
<a href="#in-this-project-i-learned-and-put-into-practice">Learning</a> •
<a href="#according-to-the-project-requirements-designated-by-trybe-i-learned-how-to">Requirements</a> •
<a href="#stacks">Stacks</a> •
<a href="#how-to-run-the-application">How to run the application</a>
</p>

---
<p align="center">
<a href="#descrição-do-projeto">Descrição do Projeto</a> •
<a href="#nesse-projeto-aprendi-e-coloquei-em-prática">Aprendizado</a> •
<a href="#de-acordo-com-os-requisitos-do-projeto-designados-pela-trybe-aprendi-como">Requisitos</a> •
<a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
<a href="#como-rodar-a-aplicação">Rodar a Aplicação</a>
</p>

---
## Project Description
In this project, I developed an application capable of playing music from a variety of bands and artists!  

Unlike previous projects, this was the first one to use more than one URL. Until now, the entire application was accessed via the URL `http://localhost:3000`.  

This was the first project using routes for the different functionalities of the application _(login, search, music listing, etc.)_.  

A route defines what should be rendered on the page when it is opened. Each route is associated with a path. The path is the part of the URL after the domain _(website name, in simple terms)_.  

For example, in this project, the initial URL is still `http://localhost:3000`, which is the login screen. After logging in _(any name works)_, you will be redirected to the music or artist search route at `http://localhost:3000/search`.  

Another new feature compared to previous projects is that, for the first time, the application is consuming APIs _(to search for bands or artists, retrieve songs from each album, etc.)_, where I learned to handle asynchronous requests and promises.  

I also learned to use lifecycle methods and states to control what is rendered by the components depending on the status of the requests.

## In this project, I learned and put into practice
- Making requests and consuming data from an `API`.
- Using React component lifecycle methods.
- Using the `setState` function to ensure that certain code only executes after the state is updated.
- Correctly using the `BrowserRouter` component.
- Creating routes by mapping the URL path to the corresponding component via `Route`.
- Using `Switch` from `React Router`.
- Using the `Redirect` component to navigate to a specific route.
- Creating navigation links in the application with the `Link` component.

## According to the project requirements designated by Trybe, I learned how to
- ✅ Create the necessary routes for the application.
- ✅ Create a login form.
- ✅ Create a header component.
- ✅ Create navigation links in the header.
- ✅ Create the form to search for artists.
- ✅ Make the request to search for artists.
- ✅ Create the list of songs from the selected album.
- ✅ Create a mechanism to add songs to the list of favorite songs.
- ✅ Make a request to retrieve favorite songs when entering the Album page.
- ✅ Make a request to retrieve favorite songs and update the list after favoriting a song.
- ❌ Create a mechanism to remove songs from the list of favorite songs.
- ❌ Create a list of favorite songs.
- ❌ Create a profile display.
- ❌ Create a profile editing form.

_*Note: Some requirements were not completed due to the accelerated pace of the course, not because I didn’t know how to do them. At the time, I just needed a little more time.*_

_*I haven’t decided yet if it’s better to leave it this way to show my progress during my learning or if I should complete the unfinished course project requirements.*_

_*Feedback is welcome.*_

## Stacks
### FrontEnd 
- HTML
- CSS
- JavaScript
- React

<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/html2.png?raw=true" width="50" height="50" alt="HTML Icon" /></a><a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/CSS2.png?raw=true" width="50" height="50" alt="CSS3 Icon" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/JavaScript2.png?raw=true" width="50" height="50" alt="JavaScript Icon" /></a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/React2.png?raw=true" width="50" height="50" alt="React Icon" /></a>

## Project Live Link
[Project Site](https://prtpj1-trybetunes-black.vercel.app/)

## How to run the application?
- Clone the repository:  
`git clone git@github.com:prtpj1/project-trybetunes.git`  
- Navigate to the project folder:  
`cd project-trybetunes`  
- Install dependencies:  
`npm install`  
- Start the application:  
`npm start`  
⚠️Wait for the app to open in your browser. If it doesn't, type `http://localhost:3000/` in your browser's address bar.  
- On the initial screen, enter your name or any desired name and click the "Enter" button.  
- Type the name of an artist or band in the search field, for example:  
`Queen` or `Tom Jobim`.

---
_*Note:*_ <br>
_*At the time I created this project, I wasn't familiar with Conventional Commits. I only learned and started making better commits from the BackEnd module of the Trybe course onward.*_ <br><br>
_*If you have any difficulty with the instructions and want to give feedback, feel free to send me a message*_

---
## Descrição do Projeto
Neste projeto, desenvolvi uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas!<br>

Diferente dos projetos anteriores, este foi o primeiro a utilizar mais de uma URL. Até então acessava-se toda a aplicação pela URL `http://localhost:3000`.<br>

Este foi o primeiro projeto utilizando rotas para as diferentes funcionalidades da aplicação _*(login, pesquisa, listagem de músicas, etc)*_.<br>

Uma rota define o que deve ser renderizado na página ao abri-la. Cada rota está associada a um caminho. O caminho é a parte da URL após o domínio _*(nome do site, de forma simplificada)*_<br>

Por exemplo, no caso deste projeto, a URL inicial ainda é `http://localhost:3000` que é a tela de login. Após logar _*(qualquer nome serve)*_, você será direcionado(a) para a rota de pesquisa de musica ou artista `http://localhost:3000/search`.<br>

Uma outra novidade em relação aos projetos anteriores é que pela primeira vez a aplicação está consumindo APIs _*(para pesquisar a banda ou artista, recuperar as músicas de cada álbum, etc)*_ onde aprendi a lidar com requisições assíncronas e promises.<br>

Também aprendi a utilizar métodos de ciclo de vida _*(lifecycle methods) e estados para controlar o que é renderizado por seus componentes dependendo do momento em que as requisições se encontram.

## Nesse projeto, aprendi e coloquei em prática
- Fazer requisições e consumir dados vindos de uma `API`
- Utilizar os ciclos de vida de um componente React
- Utilizar a função `setState` de forma a garantir que um determinado código só é executado após o estado ser atualizado
- Utilizar o componente `BrowserRouter` corretamente
- Criar rotas, mapeando o caminho da URL com o componente correspondente, via `Route`
- Utilizar o `Switch` do `React Router`
- Usar o componente `Redirect` pra redirecionar para uma rota específica
- Criar links de navegação na aplicação com o componente `Link`

## De acordo com os requisitos do projeto designados pela Trybe aprendi como
- ✅ Criar as rotas necessárias para a aplicação  
- ✅ Criar um formulário para login  
- ✅ Criar um componente de header  
- ✅ Criar os links de navegação no header  
- ✅ Criar o formulário para pesquisar artistas  
- ✅ Fazer a requisição para pesquisar artistas  
- ✅ Criar a lista de músicas do álbum selecionado  
- ✅ Criar o mecanismo para adicionar músicas na lista de músicas favoritas  
- ✅ Fazer a requisição para recuperar as músicas favoritas ao entrar na página do Álbum  
- ✅ Fazer a requisição para recuperar as músicas favoritas e atualizar a lista após favoritar uma música  
- ❌ Criar o mecanismo para remover músicas na lista de músicas favoritas  
- ❌ Criar a lista de músicas favoritas  
- ❌ Criar a exibição de perfil  
- ❌ Criar o formulário de edição de perfil  

_*OBS: Em alguns projetos alguns requisitos não foram feitos devido a dinamica acelerada do curso e não por eu não saber como fazê-los. Na época eu apenas precisaria de um pouco mais de tempo.*_

_*Ainda não decidi se é melhor deixar desta forma para demonstrar o meu progresso durante meu aprendizado ou se seria melhor completar os requisitos que ficaram faltando nos projetos do curso.*_

_*Feedbacks são bem vindos.*_

## Tecnologias Utilizadas
### FrontEnd
- HTML
- CSS
- JavaScript
- React

<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/html2.png?raw=true" width="50" height="50" alt="HTML Icon" /></a><a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/CSS2.png?raw=true" width="50" height="50" alt="CSS3 Icon" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/JavaScript2.png?raw=true" width="50" height="50" alt="JavaScript Icon" /></a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/React2.png?raw=true" width="50" height="50" alt="React Icon" /></a>

## Link para visualizar o projeto
[Site do Projeto](https://prtpj1-trybetunes-black.vercel.app/)

## Como rodar a aplicação?
- Clone o repositório: <br>
`git clone git@github.com:prtpj1/project-trybetunes.git` 
- Acesse a pasta do projeto: <br>
`cd project-trybetunes`
- Instale as dependências: <br>
`npm install`
- Inicie a aplicação: <br>
`npm start` <br>
⚠️Aguarde a aplicação abrir no seu navegador. Caso não ocorra, coloque na barra de endereços do seu navegador: `http://localhost:3000/`
- Na tela inicial, coloque o seu nome ou qualquer nome que deseje e clique no botão "Entrar" <br>
- Digite no campo de busca o nome de algum artista ou banda, por exemplo: <br>
`Queen` ou `Tom Jobim`

---
_*OBS:*_ <br>
_*Na época que fiz este projeto eu ainda não conhecia os Conventional Commits. Somente a partir do módulo de BackEnd do curso da Trybe que aprendi e comecei a fazer commits melhores.*_

_*Este projeto ainda não possui CSS, pois não pude fazer durante o curso. Assim que possivel estarei adicionando o CSS e as funcionalidades que ficaram faltando.*_

_*Se tiver alguma dificuldade com as instruções e quiser dar um feedback me mande uma mensagem*_

