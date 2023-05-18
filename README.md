# 11º Projeto: Trybe Tunes

# :construction: HEADER em construção ! :construction:
O Trybetunes ainda não possui CSS, pois não pude fazer durante o curso. Assim que possível estarei adicionando o CSS e as funcionalidades que ficaram faltando.
<!-- <p align="center">

<img src="" alt="Header" />
</p> -->
<hr/>

Neste projeto, desenvolvi uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas!<br><br>
Diferente dos projetos anteriores, este foi o primeiro a utilizar mais de uma URL. Até então acessava-se toda a aplicação pela URL `http://localhost:3000`.<br><br>
Este foi o primeiro projeto utilizando rotas para as diferentes funcionalidades da aplicação (login, pesquisa, listagem de músicas, etc).<br>
Uma rota define o que deve ser renderizado na página ao abri-la. Cada rota está associada a um caminho. O caminho é a parte da URL após o domínio (nome do site, de forma simplificada) Por exemplo, no caso deste projeto, a URL inicial ainda é `http://localhost:3000` que é a tela de login. Após logar (qualquer nome serve), você será direcionado(a) para a rota de pesquisa de musica ou artista `http://localhost:3000/search`.<br><br>
Uma outra novidade em relação aos projetos anteriores é que pela primeira vez a aplicação está consumindo APIs (para pesquisar a banda ou artista, recuperar as músicas de cada álbum, etc) onde aprendi a lidar com requisições assíncronas e promises.<br><br>
Também aprendi a utilizar métodos de ciclo de vida (lifecycle methods) e estados para controlar o que é renderizado por seus componentes dependendo do momento em que as requisições se encontram.
<br>

De acordo com os requisitos do projeto designados pela Trybe o usuário poderá:<br>
- Fazer login ✅
- Pesquisar por uma banda ou artista ✅
- Listar os álbuns disponíveis dessa banda ou artista ✅
- Visualizar as músicas de um álbum selecionado ✅
- Reproduzir uma prévia das músicas deste álbum ✅
- Favoritar e desfavoritar músicas ✅
- Ver a lista de músicas favoritas ❌
- Ver o perfil da pessoa logada ❌
- Editar o perfil da pessoa logada ❌
<hr/>

## Tecnologias Utilizadas

### FrontEnd:

- HTML
- CSS
- JavaScript
- React

<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/html2.png" width="50" height="50" alt="HTML" /><img src="https://github.com/prtpj1/prtpj1/blob/main/Github Imgs/CSS2.png" width="50" height="50" alt="CSS" /><img src="https://github.com/prtpj1/prtpj1/blob/main/Github Imgs/JavaScript2.png" width="50" height="50" alt="CSS" /><img src="https://github.com/prtpj1/prtpj1/blob/main/Github Imgs/React2.png" width="50" height="50" alt="React Icon" />
## Link para visualizar o site do projeto:

[Site do Projeto](https://prtpj1-trybetunes-black.vercel.app/)

## Como rodar a aplicação?

1. Clone o repositório: <br>
`git clone` 
2. Instale as dependências: <br>
`npm install`
3. Inicie a aplicação: <br>
`npm start` → aguarde a aplicação abrir no seu navegador. Caso não ocorra, coloque na barra de endereços do seu navegador: **http://localhost:3000/**
4. Na tela inicial, coloque o seu nome ou qualquer nome que deseje e clique no botão "Entrar" <br>
5. Digite no campo de busca o nome de algum artista ou banda, por exemplo: <br>
`Queen` ou `Tom Jobim`
<br>
