
//vamos a obtener el acceso al body y sus eventos.
//Como es una colección, obtenemos el elemento 0, el primero
let bodyElem = document.getElementsByTagName('body')[0];

//Existen 3 eventos principales en teclado:
// keypress: ocurre cuando se pulsa y suelta la tecla.
// keyup: ocurre cuando se suelta
// keydown: sucede cuando la persona presiona una tecla (cuando el teclado detecta por primera vez un dedo en una tecla, esto sucede cuando la tecla es presionada).

//Paso 1. Enlazar evento 'keydown' al body cuando se pulse tecla y llame a la función 'handleKeyDown'


//Paso 2. Enlazar evento 'keyup' al body cuando se levante tecla y llame a la función 'handleKeyUp'



/* El evento objeto de una pulsación de teclado contiene mucha información.
> Más importante es el 'keycode', o clave de la tecla pulsada, que se corresponden con el código Ascii.
> Así la tecla 'a' tiene keycode de 97
> Así la tecla 'A' tiene keycode de 65
Este keycode es lo que utilizaremos para obtener el sonido asociado a la tecla.

Para conocer todos los keycodes que os interesan buscar una tabla Ascii.
https://es.wikipedia.org/wiki/Archivo:ASCII-Table-wide.svg

*/


function handleKeyDown(event) {
    playSound(event);
}

function handleKeyUp(event) {
   //Paso 3. obtener el div de esa tecla para eliminar el 'selector' de 'playing'.
   const divkey = document.querySelector(`<indicar aquí el selector correcto>`);

   //Paso 4. Eliminar selector/clase al elemento divkey específico
  
}

function playSound(event) {
    //Paso 5. obtener el elemento de audio asociado a la tecla, obtenida del evento
    const audio = document.querySelector(`<indicar aquí el selector correcto>`);
    
    //Paso 6. obtener el div de esa tecla para aplicar el 'selector' de tocando.
    const divkey = document.querySelector(`<indicar aquí el selector correcto>`);

    //Paso Si no se ha obtenido ningun element html que corresponde al sonido, salimos
    if (!audio) return;

    //Paso 7. Aplicar al 'divKey' la class de 'playing'
    

    //los elementos-html de las etiquetas de Audio tiene un método 'currentTime' donde indicamos en qué tiempo comenzar a sonar
    audio.currentTime=0;
    //comentar a reproducir
    audio.play();
        
}