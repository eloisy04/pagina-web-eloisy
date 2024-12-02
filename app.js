 function criacartao(categoria, pergunta, resposta) {
    let container = document.getElementById ("container")
    let cartao = document.createElement ("article")
    cartao.className = "cartão"
    cartao.innerHTML = `
    <div class="cartão__flashcards">
    <h3>${categoria}</h3> 
    <div class="cartão__flashcards__perguntas">
    <p>${pergunta}</p>
    </div> 
    <div class="cartão__flashcards__respostas">
    <p>${resposta}</p>
    </div>
    </div>
    `
    let respostaEstaVisivel = false

    function viraCartao () {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle("active", respostaEstaVisivel)
    }
    cartao.addEventListener ("click", viraCartao)


    container.appendChild(cartao)
}