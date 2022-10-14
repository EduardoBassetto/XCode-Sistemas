const trJS = document.querySelectorAll(".trJS")

for (let index = 0; index <= trJS.length; index++) {
  trJS[index].addEventListener("mousedown", efeitoRelatorioCompra = (evento) => {
    trJS[index].classList.add("trJSAtivo")

    setTimeout(() => {
      trJS[index].classList.remove("trJSAtivo")
    }, 250);

  })
}
