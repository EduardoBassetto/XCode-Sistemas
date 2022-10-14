const clienteInfoJS = document.querySelectorAll('.clienteInfoJS')

for (let index = 0; index <= cardJS.length; index++) {
    clienteInfoJS[index].addEventListener("mousedown", efeitoClienteInfoJS = (evento) => {

        const clienteInfoJSChild = clienteInfoJS[index].childNodes
        const imgClienteJS = clienteInfoJSChild[1]
        const nomeClienteJS = clienteInfoJSChild[3].childNodes[1]
        const numeroClienteJS = clienteInfoJSChild[3].childNodes[3]

        clienteInfoJS[index].classList.add("clienteInfoJSAtivo")
        nomeClienteJS.classList.add("nomeClienteJSAtivo")
        numeroClienteJS.classList.add("numeroClienteJSAtivo")
        imgClienteJS.classList.add("imgClienteJSAtivo")

        setTimeout(() => {
            clienteInfoJS[index].classList.remove("clienteInfoJSAtivo")
            nomeClienteJS.classList.remove("nomeClienteJSAtivo")
            numeroClienteJS.classList.remove("numeroClienteJSAtivo")
            imgClienteJS.classList.remove("imgClienteJSAtivo")
        }, 280)
    })
}