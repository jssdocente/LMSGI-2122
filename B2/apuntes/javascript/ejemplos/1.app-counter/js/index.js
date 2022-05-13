// 1. Grab the save-el paragrah and store it in a variable called saveEl
const guardarBtnEl = document.getElementById("save-btn")
const contadorH2El = document.getElementById("idContador")
const incrementarBtnEl = document.getElementById("increment-btn")
const decrementarBtnEl = document.getElementById("decrement-btn")

const contadoresAnterioresEl = document.getElementById("idContadoresAnteriores")


let count = 0

console.log("Carga javascript")

incrementarBtnEl.addEventListener('click',increment)
decrementarBtnEl.addEventListener('click',decrement)
guardarBtnEl.addEventListener('click',save)

function increment() {
    count += 1
    contadorH2El.textContent = count
}

function decrement() {
    if (count<=0)
        return;

    count-=1;
    contadorH2El.textContent = count
}

function save() {
    let strCount = `${count} - `;
    contadoresAnterioresEl.textContent += strCount;
    count=0
    contadorH2El.textContent=count
    
    console.log(`cuenta:${count}`)
}

console.log("Cuenta las personas en el metro!")