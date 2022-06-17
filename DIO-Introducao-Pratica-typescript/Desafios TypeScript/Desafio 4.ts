// Um ​​desenvolvedor criar um projeto que consome uma base de dados de filme do TMDB para um organizador de filmes, mas desistiu
// pois o projeto é seu código inviável Você pode usar o tipo para organizar esse código e a partir daí aprimorar o que foi feito?

// A ideia dessa atividade é criar um aplicativo que:
// - Busca filmes
// - Apresenta uma lista com os resultados pesquisados
// - Permite a criação de lista de filmes e posterior adição de filmes nela

// Todas as exigências encontradas para as atividades acima já estão prontas, mas a implementação delas ficou pela metade (não vou dar tudo de graça).
// Atenção para o listener do botão login-button que devolve o sessionID do usuário
// É necessário fazer um cadastro no https://www.themoviedb.org/ e seguir a documentação do site para entender como gerar uma API key https://developers.themoviedb.org/3/getting-started/introduction
/*
var  apiKey  =  '3f301be7381a03ad8d352314dcc3ec1d' ;
let  apiKey ;
let  requestToken ;
let  nome de  usuário ;
let  senha ;
let  sessionId ;
let  listId  =  '7101979' ;

let  loginButton  =  document . getElementById ( 'botão de login' ) ;
let  searchButton  =  document . getElementById ( 'botão de busca' ) ;
let  searchContainer  =  document . getElementById ( 'search-container' ) ;

botão de login . addEventListener ( 'click' ,  assíncrono  ( )  =>  {
  await  criarRequestToken ( ) ;
  aguarde  logar ( ) ;
  aguarde  criarSessao ( ) ;
} )

botão de pesquisa . addEventListener ( 'click' ,  assíncrono  ( )  =>  {
  let  lista  =  documento . getElementById ( "lista" ) ;
  if  ( lista )  {
    lista . externalHTML  =  "" ;
  }
  let  query  =  document . getElementById ( 'pesquisa' ) . valor ;
  let  listaDeFilmes  =  esperar  procurarFilme ( consulta ) ;
  let  ul  =  documento . createElement ( 'ul' ) ;
  ul . id  =  "lista"
  for  ( const  item  da  listaDeFilmes . resultados )  {
    let  li  =  documento . createElement ( 'li' ) ;
    li . appendChild ( document . createTextNode ( item . original_title ) )
    ul . appendChild ( li )
  }
  console . log ( listaDeFilmes ) ;
  searchContainer . appendChild ( ul ) ;
} )

function  preencherSenha ( )  {
  senha  =  documento . getElementById ( 'senha' ) . valor ;
  validLoginButton ( ) ;
}

função  preencherLogin ( )  {
  nome de usuário  =   documento . getElementById ( 'login' ) . valor ;
  validLoginButton ( ) ;
}

function  preencherApi ( )  {
  apiKey  =  documento . getElementById ( 'api-key' ) . valor ;
  validLoginButton ( ) ;
}

function  validLoginButton ( )  {
  if  ( senha  && nome de  usuário  &&  apiKey )  {
    botão de login . desabilitado  =  falso ;
  }  senão  {
    botão de login . desabilitado  =  verdadeiro ;
  }
}

class  HttpClient  {
   get assíncrono  estático ( { url , method , body = null } ) {  
    return  new  Promise ( ( resolve ,  rejeita )  =>  {
      let  pedido  =  new  XMLHttpRequest ( ) ;
      pedido . open ( método ,  url ,  true ) ;

      pedido . carregar  =  ( )  =>  {
        if  ( request . status  >=  200  &&  request . status  <  300 )  {
          resolver ( JSON.parse ( solicitação.respostaTexto ) ) ; _ _ _ _
        }  senão  {
          rejeitar ( {
            estado : pedido . estado ,
            statusText : pedido . statusText
          } )
        }
      }
      pedido . onerro  =  ( )  =>  {
        rejeitar ( {
          estado : pedido . estado ,
          statusText : pedido . statusText
        } )
      }

      if  ( corpo )  {
        pedido . setRequestHeader ( "Content-Type" ,  "application/json;charset=UTF-8" ) ;
        corpo  =  JSON . stringify ( corpo ) ;
      }
      pedido . enviar ( corpo ) ;
    } )
  }
}

 função  assíncrona procurarFilme ( consulta )  {
  consulta  =  encodeURI ( consulta )
  console . log ( consulta )
  let  resultado  =  aguardar  HttpClient . obter ( {
    url : `https://api.themoviedb.org/3/search/movie?api_key= ${ apiKey } &query= ${ query } ` ,
    método : "GET"
  } )
  retornar  resultado
}

 função  assíncrona adicionarFilme ( filmeId )  {
  let  resultado  =  aguardar  HttpClient . obter ( {
    url : `https://api.themoviedb.org/3/movie/ ${ filmeId } ?api_key= ${ apiKey } &language=en-US` ,
    método : "GET"
  } )
  console . log ( resultado ) ;
}

 função  assíncrona criarRequestToken  ( )  {
  let  resultado  =  aguardar  HttpClient . obter ( {
    url : `https://api.themoviedb.org/3/authentication/token/new?api_key= ${ apiKey } ` ,
    método : "GET"
  } )
  requestToken  =  resultado . request_token
}

 logar de função  assíncrona ( ) { 
  aguarde  HttpClient . obter ( {
    url : `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key= ${ apiKey } ` ,
    método : "POST" ,
    corpo : {
      nome de usuário : ` ${ nome de usuário } ` ,
      senha : ` ${ senha } ` ,
      request_token : ` ${ requestToken } `
    }
  } )
}

 função  assíncrona criarSessao ( )  {
  let  resultado  =  aguardar  HttpClient . obter ( {
    url : `https://api.themoviedb.org/3/authentication/session/new?api_key= ${ apiKey } &request_token= ${ requestToken } ` ,
    método : "GET"
  } )
  sessionId  =  resultado . session_id ;
}

 função  assíncrona criarLista ( nomeDaLista ,  descricao )  {
  let  resultado  =  aguardar  HttpClient . obter ( {
    url : `https://api.themoviedb.org/3/list?api_key= ${ apiKey } &session_id= ${ sessionId } ` ,
    método : "POST" ,
    corpo : {
      nome : nomeDaLista ,
      descrição : descrição ,
      idioma : "pt-br"
    }
  } )
  console . log ( resultado ) ;
}

 função  assíncrona adicionarFilmeNaLista ( filmeId ,  listaId )  {
  let  resultado  =  aguardar  HttpClient . obter ( {
    url : `https://api.themoviedb.org/3/list/ ${ listaId } /add_item?api_key= ${ apiKey } &session_id= ${ sessionId } ` ,
    método : "POST" ,
    corpo : {
      media_id : filmeId
    }
  } )
  console . log ( resultado ) ;
}

 função  assíncrona pegarLista ( )  {
  let  resultado  =  aguardar  HttpClient . obter ( {
    url : `https://api.themoviedb.org/3/list/ ${ listId } ?api_key= ${ apiKey } ` ,
    método : "GET"
  } )
  console . log ( resultado ) ;
}

{ /* <div style="display: flex;">
  <div style="display: flex; largura: 300px; altura: 100px; justificar-conteúdo: espaço entre; flex-direction: coluna;">
      <input id="login" placeholder="Login" onchange="preencherLogin(event)">
      <input id="senha" placeholder="Senha" type="password" onchange="preencherSenha(event)">
      <input id="api-key" placeholder="Api Key" onchange="preencherApi()">
      <button id="login-button" desativado>Login</button>
  </div>
  <div id="search-container" style="margin-left: 20px">
      <input id="search" placeholder="Escreva...">
      <button id="search-button">Pesquisar Filme</button>
  </div>
</div>*/ }
/*-------------------------------*/
var apiKey = '3f301be7381a03ad8d352314dcc3ec1d';
let apiKey;
let requestToken;
let nomeDeUsuario;
let senha;
let sessionId;
let listId = '7101979';

let loginButton = document.getElementById('botão de login');
let searchButton = document.getElementById('botão de busca');
let searchContainer = document.getElementById('search-container');

botão de login.addEventListener('click', async () => {
  await criarRequestToken();
  await logar();
  await criarSessao();
})

botão de pesquisa.addEventListener('click', async () => {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.externalHTML = "";
  }
  let query = document.getElementById('pesquisa').value;
  let listaDeFilmes = esperar  procurarFilme(consulta);
  let ul = document.createElement('ul');
  ul.id = "lista"
  for (const itemDaListaDeFilmes .resultados ) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item.original_title))
    ul.appendChild(li)
  }
  console.log(listaDeFilmes);
  searchContainer.appendChild(ul);
})

function preencherSenha() {
  senha = document.getElementById('senha').value;
  validLoginButton();
}

function preencherLogin() {
  nomeDeUsuario = document.getElementById('login').value;
  validLoginButton();
}

function preencherApi() {
  apiKey = document.getElementById('api-key').value;
  validLoginButton();
}

function validLoginButton() {
  if (senha && nomeDeUsuario && apiKey) {
    botão de login.desabilitado = false;
  } else {
    botão de login.desabilitado = true;
  }
}

class HttpClient {
  get async  estático({ url, method, body = null }) {
    return new Promise((resolve, rejeita) => {
      let pedido = new XMLHttpRequest();
      pedido.open(método, url, true);

      pedido.carregar = () => {
        if (request.status >= 200 && request.status < 300) {
          resolver(JSON.parse(solicitação.respostaTexto)); _ _ _ _
        } else {
          rejeitar({
            estado: pedido.estado,
            statusText: pedido.statusText
          })
        }
      }
      pedido.onerro = () => {
        rejeitar({
          estado: pedido.estado,
          statusText: pedido.statusText
        })
      }

      if (corpo) {
        pedido.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        corpo = JSON.stringify(corpo);
      }
      pedido.enviar(corpo);
    })
  }
}

async function procurarFilme(consulta) {
  consulta = encodeURI(consulta)
  console.log(consulta)
  let resultado = await HttpClient.get({
    url: `https://api.themoviedb.org/3/search/movie?api_key= ${apiKey} &query= ${query} `,
    método: "GET"
  })
  retornar  resultado
}

async function adicionarFilme(filmeId) {
  let resultado = await HttpClient.get({
    url: `https://api.themoviedb.org/3/movie/ ${filmeId} ?api_key= ${apiKey} &language=en-US`,
    método: "GET"
  })
  console.log(resultado);
}

async function name(params: type) {
  async function criarRequestToken() {
    let resultado = await HttpClient.get({
      url: `https://api.themoviedb.org/3/authentication/token/new?api_key= ${apiKey} `,
      método: "GET"
    })
    requestToken = resultado.request_token
  }
}

 logar de async function () {
  await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key= ${apiKey} `,
    método: "POST",
    corpo: {
      nomeDeUsuario: ` ${nomeDeUsuario} `,
      senha: ` ${senha} `,
      request_token: ` ${requestToken} `
    }
  })
}

async function criarSessao() {
  let resultado = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key= ${apiKey} &request_token= ${requestToken} `,
    método: "GET"
  })
  sessionId = resultado.session_id;
}

async function criarLista(nomeDaLista, descricao) {
  let resultado = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list?api_key= ${apiKey} &session_id= ${sessionId} `,
    método: "POST",
    corpo: {
      nome: nomeDaLista,
      descrição: descrição,
      idioma: "pt-br"
    }
  })
  console.log(resultado);
}

async function adicionarFilmeNaLista(filmeId, listaId) {
  let resultado = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/ ${listaId} /add_item?api_key= ${apiKey} &session_id= ${sessionId} `,
    método: "POST",
    corpo: {
      media_id: filmeId
    }
  })
  console.log(resultado);
}

async function pegarLista() {
  let resultado = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/ ${listId} ?api_key= ${apiKey} `,
    método: "GET"
  })
  console.log(resultado);
}

{ /* <div style="display: flex;">
  <div style="display: flex; largura: 300px; altura: 100px; justificar-conteúdo: espaço entre; flex-direction: coluna;">
      <input id="login" placeholder="Login" onchange="preencherLogin(event)">
      <input id="senha" placeholder="Senha" type="password" onchange="preencherSenha(event)">
      <input id="api-key" placeholder="Api Key" onchange="preencherApi()">
      <button id="login-button" desativado>Login</button>
  </div>
  <div id="search-container" style="margin-left: 20px">
      <input id="search" placeholder="Escreva...">
      <button id="search-button">Pesquisar Filme</button>
  </div>
</div>*/ }