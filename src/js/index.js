/*
    O que precisamos fazer? - quando clicamos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem para lua
        - passo 1 - pegar o JS o elemento HTML correspondente ao botão troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
   
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar pro modo claro e midar a imagem pro sol
        - passo 6 - verificar se o body ja tem a classe modo-escuro do body
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem para lua
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
  // passo 6 - verificar se o body ja tem a classe modo-escuro do body
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  // alterna modo escuro 'mais uma alternativa de cod'
  body.classList.toggle("modo-escuro")

  if (modoEscuroEstaAtivo) {
    // passo 7 - remover a classe do modo-escuro do body
    body.classList.remove("modo-escuro");
    
    // passo 8 - trocar a imagem do botão de alterar tema pra sol
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

  } else {
    // passo 4 - adicionar a classe modo-escuro no body
    body.classList.add("modo-escuro");
    // passo 5 - trocar a imagem do botão de alterar tema pra lua
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
