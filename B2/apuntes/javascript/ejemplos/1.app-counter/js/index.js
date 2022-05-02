// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let strCount = count + " - ";
    saveEl.textContent += strCount;
    count=0
    countEl.textContent=count
    
    console.log(`cuenta:${count}`)
}

console.log("Cuenta las personas en el metro!")