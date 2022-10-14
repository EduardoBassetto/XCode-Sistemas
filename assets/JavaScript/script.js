const statusCor = document.querySelectorAll('.status')

function loadStatus() {
  statusCor.forEach(element => {
    if (element.innerHTML == "Entregue") {
      element.classList.add("statusEntregue")
    }
    else if (element.innerHTML == "Pendente") {
      element.classList.add("statusPendente")
    }
    else if (element.innerHTML == "Estornado") {
      element.classList.add("statusEstornado")
    }
    else if (element.innerHTML == "Processando") {
      element.classList.add("statusProcessando")
    }
    else {
      return;
    }
  });
}















