const displayEl = document.getElementById('display');
const btnNumbers = document.getElementsByClassName('number');
const btnOperators = document.getElementsByClassName('operator');
const btnClears = document.getElementsByClassName('is-clear');


Array.from(btnNumbers).forEach( (htmlelement) => {
   htmlelement.addEventListener('click', (event) => procesarClickNumber(event));
});

arra = 



Array.from(btnNumbers).forEach( (element) => {
  element.addEventListener('click', (event) => procesarClickNumber(event))
})



// Array.from(btnOperators).forEach(htmlelement => {
//   htmlelement.addEventListener('click', (event) => procesarClickOperator(event));
// });



btnClears[0].addEventListener('click', borrar)


let operando1 = 0;
let operando2 =0;
let operacion = '';
let resultado = 0;

function procesarClickOperator(event) {
  console.log(event.target)

  let operatorClicked = event.target.textContent;

  if (operatorClicked === '=') {
    switch (operacion) {
      case '+': 
        resultado = suma(operando1,operando2)
        break
      case '/': 
        resultado = division(operando1,operando2)
        break
      case '-': 
        resultado = restar(operando1,operando2)
        break
      case 'X': 
        resultado = multiplicar(operando1,operando2)
        break  
    }

    operando1 = parseInt(resultado)
    operacion=''
    operando2=0

    imprimirEnDisplay(resultado)

  } else {
    operacion = operatorClicked;
  }

  

}

function procesarClickNumber(event) {

  let numberClicked = event.target.textContent;

  if (operacion==='') {
    if (operando1===0)
      operando1='';

    operando1+=numberClicked;
    imprimirEnDisplay(operando1);

  } else if (operacion.length>0) {
    if (operando2===0)
      operando2='';

    operando2+=numberClicked;
    imprimirEnDisplay(operando2);
  }

}

function borrar() {
  operando1=0;
  operando2=0;
  operacion='';
  resultado=0;
  imprimirEnDisplay(0)
}

function suma(num1,num2) {
  return parseInt(num1)+ parseInt(num2);
}

function division(num1,num2) {
  return (parseInt(num1) / parseInt(num2)).toFixed(0)
}

function restar(num1,num2) {
  return (parseInt(num1) - parseInt(num2))
}

function multiplicar(num1,num2) {
  return (parseInt(num1) * parseInt(num2))
}

function imprimirEnDisplay(valor) {
  displayEl.textContent = valor;
}




function agregarNumero(numeroPulsado) {
  displayEl.textContent =numeroPulsado
}