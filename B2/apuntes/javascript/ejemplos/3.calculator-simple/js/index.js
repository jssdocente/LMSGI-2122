const num1btn = document.getElementById('number1Btn')
const displayEl = document.getElementById('display')

num1btn.addEventListener('click',agregarNumero)


function agregarNumero(numeroPulsado) {
  displayEl.textContent =numeroPulsado
}