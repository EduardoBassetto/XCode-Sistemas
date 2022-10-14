const botaoHamburguer = document.querySelector('.menuHamburguerImg')
botaoHamburguer.addEventListener("click", ativarNavLateral)

const navLateral = document.querySelector('.navLateral')
const textoNavLateral = document.querySelectorAll('.textoNavLateral')
const efeitoSelecaoNavLateral = document.querySelector('.efeitoSelecaoNavLateral')

function ativarNavLateral() {
    navLateral.classList.toggle('navLateralAtivo');
    botaoHamburguer.classList.toggle('menuHamburguerImgAtivo');
    textoNavLateral.forEach(element => {
        element.classList.toggle('textoNavLateralAtivo');
    });
    efeitoSelecaoNavLateral.classList.toggle('efeitoSelecaoNavLateralAtivo')
}
