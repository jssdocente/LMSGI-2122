let btnRed = document.getElementById('btnred')
let btnBlue = document.getElementById('btnblue')
let btnOrange = document.getElementById('btnorange')
let btnBorderAdd = document.getElementById('btnborderAdd')
let btnBorderRemove = document.getElementById('btnborderRemove')

let btncambiame = document.getElementById('btncambiame')


btnRed.addEventListener('click', () => addCssSelector('background-rojo') )
btnBlue.addEventListener('click', () => addCssSelector('background-blue') )
btnOrange.addEventListener('click', () => addCssSelector('background-orange') )

btnBorderAdd.addEventListener('click', () =>  btncambiame.classList.add('border') )
btnBorderRemove.addEventListener('click', () => btncambiame.classList.remove('border'))

function addCssSelector(classname){
  btncambiame.className ='';
  btncambiame.classList.add(classname)
}
