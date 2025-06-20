// Pega o elemento <body> do HTML e guarda na variável "body".
// Assim você pode mudar o conteúdo ou estilo do body com JavaScript.

let body = document.querySelector("body")
let tenis = document.querySelector(".tenis")
let carrinho = document.querySelector(".carrinho")

function mudarVisual(cor, imagem) {                // Cria uma função chamada "mudarVisual" que recebe uma cor como parâmetro.
                                            
tenis.classList.add("troca-efeito")
carrinho.style.background = cor;

    body.style.background = cor           // Muda a cor de fundo do body para a cor recebida na função.
   
    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")
    }, 600);
}