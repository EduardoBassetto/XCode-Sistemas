const cardJS = document.querySelectorAll('.cardJS')

for (let index = 0; index < cardJS.length; index++) {
  cardJS[index].addEventListener("mousedown",efeitoCardJS = (evento) => {
    
    const cardJSChild = cardJS[index].childNodes

    cardJS[index].classList.add("cardInfoAtivo")
    cardJSChild[1].classList.add("numeroInfoJSAtivo")
    cardJSChild[3].classList.add("textInfoJSAtivo")
    cardJSChild[5].classList.add("imgCardsJSAtivo")

    setTimeout(() => {
      cardJS[index].classList.remove("cardInfoAtivo")
      cardJSChild[1].classList.remove("numeroInfoJSAtivo")
      cardJSChild[3].classList.remove("textInfoJSAtivo")
      cardJSChild[5].classList.remove("imgCardsJSAtivo")
    },280)
  } )
}





/*  #### PRIMEIRA TENTATIVA DE ANIMAÇÃO ####

deixei só pra registrar o teste... 
o resultado final é uma animação com bugs, pois o forEach gera o eventListener em todos os elementos do container, e não somente no container. 
Onde ocorria erro na execução da função de animação caso o click fosse especificamente em algum elemento filho.


cardJS.forEach(element => {
  element.addEventListener("click", efeitoCardJS = (evento) => {
    element.classList.add("cardInfoAtivo")

    console.log(evento.target)

    let numeroInfoJS = evento.target.querySelector(".numeroInfoJS")
    numeroInfoJS.classList.add("numeroInfoJSAtivo")

    let textInfoJS = evento.target.querySelector(".textInfoJS")
    textInfoJS.classList.add("textInfoJSAtivo")

    let imgCardsJS = evento.target.querySelector(".imgCardsJS")
    imgCardsJS.classList.add("imgCardsJSAtivo")

    console.log(evento.target)

    setTimeout(() => {
      element.classList.remove("cardInfoAtivo")
      numeroInfoJS.classList.remove("numeroInfoJSAtivo")
      textInfoJS.classList.remove("textInfoJSAtivo")
      imgCardsJS.classList.remove("imgCardsJSAtivo")

    }, 400)
  })
});
*/
