# JavaScript. Básico y General

- [¿Qué es Javascript?](#que-es-javascript)
- [Variables](#variables)
- [Tipos de datos](#tipos-de-datos)
- [Funciones](#funciones)
- [Objetos](#objetos)
- [Condicionales](#condicionales)
- [Estructuras de control](#estructuras-de-control)
- [Arrays](#arrays)
- Javascript aplicado ala Web [DOM: Document Object Model](#javascript-aplicado-a-la-web)

<br>
<br>

## ¿Qué es Javascript?

JavaScript es un lenguaje de programación de scripts (secuencia de comandos) orientado a objetos. Esta descripción es un poco rudimentaria, hay varios elementos que vamos a diseccionar.

Es un lenguaje interpretado, no se compila, y necesita in interprete para ejecutar código Javascript, y el intérprete que se utiliza con frecuencia se incluyde dentro del Navegador (Browser).

Cada navegador tiene un intérprete Javascript, que varía en función del navegador. Si está utilizando Internet Explorer, el intérprete es llamado JScript (versión 9 intérprete llamado Chakra), en Mozilla Firefox se llama SpiderMonkey y el motor V8 es el de Google Chrome.

Javascript actualmente es principalmente utilizado en internet, junto con las páginas web (HTML). Javascript está directamente incluido en la página web (o en un archivo externo).

**Breve historia**

* En 1995 Bredan Eich desarrolló Live Script que se basó en Java.
* Fue lanzado en 1995 e integrado en el Navegador Netscape Navigator 2. Tuvo tanto éxito que Microsoft desarrolló una versión llamada JScript, que se incorporó de serie de todos los IExplorer.
* La ECMA normalizó el lenguje y lo estandarizó con el nombre ECMAScript en diferentes versiones en su evolución.

**Versiones de JavaScript**

Las versiones de JS se basan en el estándar ECMAScript (abrevidado como ES).

* ES1 y ES2: inicios de JS.
* ES3 primera versión estandar, funciona en todos los navegadores de igual forma excepto en IExplorer.
* ES4 que fue abandonada por diversos problemas.
* ES5 (2009) que fue mucho tiempo la referencia.
* ES6 (2015) que es el estandar en la actualidad.


## Variables

Forma de declarar variables de forma general.

Notas a destacar:

* El ; es opcional
* No se indica el tipo, solo "var", "let" o "const"
  * Con "var" un variable se puede modificar
  * Con "let"
  * Con "const" es inmutable, y no puede cambiar su valor, como si fuera constante.

La diferencia principal entre 'var' y 'let' radica en el 'scope (ámbito).

* "var": ambito de función, o global si la variable no está dentro de una función. 
* "let" y "const": ámbito de bloque. La función también se considera un bloque, al igual que un If, un bucle for, ...

La diferencia entre 'let' y 'const' es que con 'let' la variable se puede modificar, y con 'const' no puede cambiar de valor.

[En este video se explica muy bien estos conceptos](https://youtu.be/bvkY9ey83yY)

```javascript
var nombre = 'Sacha', apellido = 'Lifszyc'
var edad = 28

edad = '28 años'

console.log('Hola ' + nombre + ' ' + apellido)
console.log('Tengo ' + edad)

var peso = 75
```

## Tipos de datos

Los tipos de datos más importantes en JS son las cadenas (strings) y los numeros. Pero a diferencia de otros lenguajes, los tipos están agrupados en digamos categorias, y no existen subtipos.

Existen 6 tipos primitivos:

* Undefined: Una variable a la que no se le ha asignado un valor tiene el valor undefined.  typeof=="undefined"
* Boolean: 2 valores, true o false. typeof=="boolean" 
* Number: Se agrupan todos los valores numéricos. Decimales y enteros. <br>
  2 tipos numéricos integrados. `Number` y `BigInt`. <br>
  typeof=="number" 
* BigInt: Numeros muy grandes. typeof=="bigint" 
* Symbol: Un símbolo es un valor primitivo único e inmutable y se puede utilizar como clave de una propiedad de objeto.  typeof=="symbol" 

Otros tipos especiales:

* Null:  typeof instance === "object"
* Object: typeof instance === "object"
* Function: typeof instance === "function"

### Cadenas

El trabajo con string se realiza de la siguiente forma:

```javascript
var nombre = 'Sacha', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

// Interpolación de Texto
var nombreCompleto = nombre + ' ' + apellido.toUpperCase()

// Interpolación de Texto con ${variable}
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)
```

### Numeros

El trabajo con números se realiza de la siguiente forma:

```javascript
var edad = 27

// edad = edad + 1
edad += 1

var peso = 75

// peso = peso - 2
peso -= 2

var sandwich = 1

peso += sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

// JavaScript tiene una serie de objetos/modulos como "Math"
var total = Math.round(precioDeVino * 100 * 3) / 100
var totalStr = total.toFixed(3)

// y funciones para convertir números de un tipo a otro
var total2 = parseFloat(totalStr)

var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas
```


## Funciones

Las funciones son un elemento fundamental es JS, y su uso muchas veces confunde, ya que una función puede ser almacenada en un variable.

```javascript
var nombre = 'Sacha', edad = 28

function imprimirEdad(n, e) {
  console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad('Vicky', 28)
imprimirEdad('Eric', 24)
imprimirEdad('Darío', 27)
imprimirEdad(25, 'Carlos')
imprimirEdad('Juan')

function diHola() {
    console.log(`Hola a todos`)
}

// Almacenar en variable
const fncDiHola = diHola

//ejecutar función desde variable con los paréntesis
fncDiHola()

//pasar función a otro función como parametro y llamarla

function DecirHola_desdeFuncion(fncDecirHola) {
    // Ejecuto la función a traves de los parámetros
    console.log(`${fncDiHola()}`)
}

```

[En este video tenéis una explicación más detallada](https://youtu.be/21r6TEJh_Y0?list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG)

<br>

**Parámetros por referencia o por valor**

Cuando se pasa un parámetro se puede pasar por referencia o por valor:

* Por referencia: Se le pasa el objeto original, y la función podría cambiar su valor, lo que afectaría al objeto fuera de la función.
* Por valor: Se le pasa una copia de objeto original, y por tanto, lo que realize la función en su proceso no afecta a la variable pasada como parámetro una vez la función termine.

Los objetos se pasan como referencia, y las variables por valor.

```javascript

function procesarCumpleaños(edad) {
   edad+=1; 
}

var persona = {
    edad = 20
}

// Imprime 20 años
console.log(`Tengo ${edad} años`)

procesarCumpleaños(edad);

//Imprime 20 ¿porqué? porque el parámetro se pasó por valor, y se paso una copia a la función, que cuando la función sale, la variable copia sale del ámbito y se elimina.
console.log(`Tengo ${edad} años`)

```

¿ Que pasará si se le pasa un objeto como el ejemplo anterior ?

```javascript

function procesarCumpleaños(person) {
   person.edad+=1; 
}

var persona = {
    edad = 20
}

// Imprime 20 años
console.log(`Tengo ${persona.edad} años`)

procesarCumpleaños(persona);

//Imprime 21 ¿porqué? porque el parámetro se pasó por referencia, y por tanto su valor se modifico dentro de la función, y ese cambio perdura una vez sale de la función.
console.log(`Tengo ${persona.edad}} años`)

```

Pero y si queremos que no se modifque... y se "clone" un nuevo objeto copiando todo lo que tenía el objeto anterior, y solo cambiamos las propiedades que queremos cambiar.

Lo mejor y más óptimo es utilar el operador "spread" (...).

```javascript

function procesarCumpleaños(person) {
   return {
       //El operador spread (...) copia todo el objeto, en el nuevo objeto.
       ...person,
       //podemos agregar o cambiar las propiedades que se necesiten después del operador spread.
       edad: person.edad + 1
   }  
}

var persona = {
    edad = 20
}

// Imprime 20 años
console.log(`Tengo ${persona.edad} años`)

procesarCumpleaños(persona);

//Imprime 20 ¿porqué? porque el parámetro pasado no se ha modificado, solo se ha realizado una copia, pero no se ha modificado el pasado como parámetro.
console.log(`Tengo ${persona.edad}} años`)

// ¿Y cómo obtengo el nuevo objeto creado si lo quiero utilizar?
var persona2 = procesarCumpleaños(persona);

//Persona2 ahora será el nuevo objeto devuelto por la función con la edad+1
console.log(`Tengo ${persona2.edad}} años`)

```

<br>

### Arrow Funcions

En JS se puede asignar una función a una variable, algo que parece muy extraño al principio.

```javascript

//Esta función es anónima, no tiene nombre
var esMayorDeEdad = function (persona) {
    return persona.edad>=MAYOR_DE_EDAD
}

//Se ejecuta de esta forma
if (esMayorEdad(persona)) {
    console.log(`${persona.nombre} ES MAYOR DE EDAD`)
} else {
    console.log(`${persona.nombre} ES MENOR DE EDAD`)
}

//Y el resultado es exactamente igual que cuando lo ejecutamos directamente desde la función normal.

```

Pero con los "Arrow functions (=>)" podemos simplificar la asignación de funciones a variables

```javascript
//Se elimina la palabra "function" y se agregar una =>
var esMayorDeEdad = (persona) => {
    return persona.edad>=MAYOR_DE_EDAD
}

//De esta forma se simplifica y queda más claro la sintaxis
```

Podemos seguir simplificando, si solo tiene un parámetro, podemos eliminar los paréntesis

```javascript

//Se elimina la palabra "function" y se agregar una =>
var esMayorDeEdad = persona => {
    return persona.edad>=MAYOR_DE_EDAD
}
```

Pero se puede simplificar más, si la función solo tiene una línea, podemos eliminar los "llaves ({})", dejar todo mucho más limpio.

```javascript
//Se elimina las llaves y la palabra return
var esMayorDeEdad = persona => persona.edad>=MAYOR_DE_EDAD
```

Pero incluso podemos rizar más el rizo, y utilizar el operador para desestrucurar el objeto...


```javascript
//Se elimina las llaves y la palabra return
var esMayorDeEdad = ({edad}) => edad>=MAYOR_DE_EDAD

// Puffff.. explota la cabeza ¿Qué hace esto?
// Este tipo de sintaxis hoy en día se utiliza mucho, y es recomendado que poco a poco nos acostumbremos a verla y a utilizarla

```

## Objetos

Un objeto en la vida real tiene propiedades y métodos, como por ejemplo "un coche". Un coche tiene una serie de propiedades "nombre, modelo, perso, color", y unos métodos "arrancar, parar, conducir, frenar".

Para declarar objetos en JS se realiza de forma muy parecida a un diccioario en Python a través de los {}, utilizando "clave" y "valor"

[En este video se explica más en detalle y es interesante verlo antes de seguir leyendo](https://youtu.be/nO3SDEV3uJI?list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG)

<br>

```javascript
var coche = {
    "nombre": "FIAT",
    "modelo": "500",
    "peso": 850,
    "color": white
}
```

Para acceder a las propiedades se puede acceder de 2 formar:

* A través del objeto.propiedad
* A través de los []

```javascript
var coche = {
    "nombre": "FIAT",
    "modelo": "500",
    "peso": 850,
    "color": white
}

console.log(coche.nombre)
console.log(coche["nombre"])

```

Pero un objeto en JS puede también contener funciones, y esto es una carácteristica muy importante, muy parecido a como funciona JAVA, pues un objeto puede contener propiedades y métodos.

```javascript
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.firstName)
console.log(person["firstName"])

// Tambien podemos pasar este objeto como parámetro
function ImprmirPersona(persona) {
    console.log(persona.firstName)

    // y también podemos ejecutar la funcion
    persona.fullName()
}

Si el objeto que se le pase, no tiene esa clave dará un error.

```



**Desestructurar Objetos**

Podemos desestructurar un objeto para asignar las propiedades deseadas simplemente, incluyendo el nombre de la variable como el nombre de la propiedad.

```javascript
// firstName tendra asignado el valor de person.firstName
var { firstName } = person

//varios valores
var { firstName,lastName } = person

// la expresión anterior es equivalente a:
var firstName = person.firstName;
var lastName = person.lastName

```

También se puede desestructurar en la llamada a una función, donde los parámetros que se requieran se obtienen directamten desde un objeto.

```javascript
// firstName tendra asignado el valor de person.firstName

function PrintFullName({firstName, lastName}) {
    console.log(`Me llamo ${firstName} ${lastName}`)
}

// Para llamar a la función simplemente pasamos el objeto completo
PrintFullName(person)

```



### Comparando objetos y variables

En JS existen 2 operadores de comparación:

* ==: JS convierte uno de los 2 operandos al otro, si puede
* ===: JS no convierte nada, y realiza una comparación sin ninguna conversión. Es realmente la comparación normal que existe en otros lenguajes de programación.

```javascript
var x=4, y="4"

// Nos da TRUE
console.log(`ES TRUE: ${x == y}`)

// Nos da FALSE
console.log(`ES TRUE: ${x === y}`)

//¿Porque da false? Por x es un numero y Y una carácter.
```

**¿Cuando utilizar un == o ===?**

Siempre es fundamental cuando se pueda (casi siempre se puede) utilizar el '===', es una regla vital, porque sino puede que se obtengan resultados completamente inesperados.

```javascript
var persona1 = {
    nombre: "Manuel"
}

var persona2 = {
    nombre: "Manuel"
}

//Da false ¿Porqué? porque comparamos objetos, y cuando ocurre esto, lo que hace JS es comprar las referencias de los 2 objetos, NO SUS VALORES.
persona1 == persona2

//Da FALSE
persona1 === persona2

//¿Cuando serán las 2 referencias iguales? Si ambas variables contienen la misma referencia
var persona2 = persona1

//Da TRUE
persona1 == persona2

//Da TRUE
persona1 === persona2

//Pero si creamos una copia de persona1, que pasaría??
var persona2 = {
    ...persona1,
}

//Da FALSE ==> ¿Porque? porque ahora persona1 tiene una referencia distinta, es otro objeto complemente distino.
persona1 == persona2

```

Nos tiene que quedar claro, que cuando comparamos valores simples (no objetos) no se utilizan las referencias, SOLO LOS VALORES.
Cuando se comparan objetos, SE COMPARAN LAS REFERENCIAS si se usa el ==, para comprar valores hay que utilizar ===.


## Condicionales

Los condicionales funcionan de forma muy parecida a otros lenguajes de programación,y practicamente igual a Python.

```javascript
var persona = {
    nombre: "manuel",
    apellido: "garcia",
    edad: 40,
    ingeniero: true,
    cocinero: false,
    cantante: false,
}

if (persona.ingeniero) {
    console.log("Es ingeniero")
} else if (persona.cocinero) {
    console.log("Es concinero")
} else if (persona.cantante) {
    console.log("Es cantante")
} else {
    console.log("SIN PROFESIÓN")
}

if (persona.edad>=18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}

```

También podemos devolver valores booleanos como retorno de una función

```javascript

function esMayorEdad(persona) {
    return persona.edad>=18
}

if (esMayorEdad(persona)) {
    console.log(`${persona.nombre} ES MAYOR DE EDAD`)
} else {
    console.log(`${persona.nombre} ES MENOR DE EDAD`)
}

```

**Constantes**

Son valores que son constantes por la lógica del programa, y que por tanto no deben cambiar a no se que cambie el plantemiento del problema.

```javascript

const MAYOR_DE_EDAD=18

function esMayorEdad(persona) {
    return persona.edad>=MAYOR_DE_EDAD
}

```



## Estructuras de control

JS estructuras de control muy parecidas a otros lenguajes como Java o Python, por lo que simplemente se explicarán de forma rapida.

### Estructura repetitiva: FOR

La estructura de control básica de muchos lenguajes, que además es muy parecido a casi todos.

```javascript
//Un bucle FOR para recorrer los números menores de 100
for (var i=1; i<100; i++) {
  console.log(`Valor de contador: ${i}`)  
}

```

### Estructura repetitiva: WHILE

También igual a otros lenguajes. Se ejecuta mientras una condición en la cabecera del WHILE se cumpla. Si no se cumple la condición, el bucle termina.

```javascript
var i=100
//Un bucle WHILE para recorrer los números menores de 100
while (i>1) {
    i-=1
}
```

### Estructura repetitiva: DO-WHILE

Muy parecida al WHILE, pero la condición la ejecuta al final de la ejecuión del bucle, lo que implica que al menos se ejecuta una vez.

```javascript
var i=0
//Se ejecuta aunque i=0, al menos se ejecuta una vez
do {
    i-=1
} while (i>1)
```

### Estructura repetitiva: SWITCH

Permite que codigo ejecutar un código en base a una condición. Un Swith simplifica el uso de los IF anidados.

```javascript
var opcion =1;

switch (opcion) {
    case 1: 
        console.log("Menu elegido 1");
        break; //termina el código de una opción
    case 2: 
        console.log("Menu elegido 2");
        break;
    default:
        console.log("Menu desconocido/no-valido");
        break;
}

//Esto sería compatible a los siguientes IF

if (opcion===1) {
     console.log("Menu elegido 1");
} else if (opcion===2) {
     console.log("Menu elegido 2");
} else {
     console.log("Menu desconocido/no-valido");
}

//Se puede comprobar como SWITCH simplifica las comparaciones cuando las opciones son múltiples
```

## Arrays

Los arrays son un tipo especial de objeto, y su uso es muy parecido a las listas de Python.


```javascript
//Declaración
array = ["a","b","c"];

//acceso a través de indice: Comienza en 0
array[1] //"b"

//A diferencia de los Objetos, los arrays no tienen una clave asociada a esa posición, es un indice
```

Los arrays de JS pueden contener diferentes tipos elementos, pudiendo al igual que Python realizar una composición.
Un array puede contener objetos, y a su vez esos objetos arrays y los arrays objetos... 

```javascript
var persona = {
    nombre: "manuel",
    apellido: "garcia"
}

var persona2 = {
    nombre: "sebas",
    apellido: "martos"
}

//contiene objetos
var array = [persona, persona2]

//Tanbién se puede definir en vertical
var array = [
    persona,
    persona2
]

//y definir los objetos, en la inicialización del Array
var array = [
    {    
        nombre: "manuel",
        apellido: "garcia"
    },
     {    
        nombre: "sebas",
        apellido: "martos"
    }
]

//También es posible tener diferentes tipos de elementos
var array = ["a","b",1,3]
```

### Agregar/Modificar/Eliminar elementos

Agregar al final

```javascript
const a = [1, 2, 3]
a.push(4)
```

Agregar al principio

```javascript
const a = [1, 2, 3]
a.unshift(0)
```

Eliminar desde el final

```javascript
a.pop()
```

Eliminar desde el principio

```javascript
const a = [1, 2, 3]
a.shift()
```

Obtener "rodajas" o parte de un Array

```javascript
const a = [1, 2, 3,4,5]
a.splice(0,2)  //obtiene los primeros 2 elementos
a.splice(3,2)  //obtiene 2 elementos comenzando en el indice=3
```

Concatenar Arrays

```javascript
const a = [1, 2, 3,4,5]
const b = [7,8]

c = a.concat(b)  //sera igual a [1, 2, 3,4,5,7,8]
```

### Interar sobre Objetos y Arrays

Es un tema que crea mucha confusión, ¿Cuales son las formas de iterar sobre una Array?

#### Iterar ARRAYS

```javascript
var array = ["a","b","c"]

//Como python ==> más sencila
for (item in array) {
    //item es la variable iteradora
    console.log(item)
}

//También con un for estandar
for (var i; i<array.length;i++) {
    console.log(array[i])
}
```

Existen otras formas más avanzadas, el "forEach"

```javascript
const list = ['a', 'b', 'c']

// Pasamos una Arrow-function, como parámetro. y esta funcion será la encargada de procesar cada elemento.
// El forEach llamará a la función tantas veces como elementos en el Array existan.
list.forEach((item, index) => {
    console.log(item) //value
    console.log(index) //index
})

//index is optional
list.forEach(item => console.log(item))
```

#### Iterar OBJETOS

Los objetos en lugar de índice poseen claves, y esa es la diferencia principal en la iteración. Al igual que Python, podemos iterar sobre un Diccionario = Objeto en JS.

El 'Object' en JS tiene una serie de métodos para poder obtener un Array de sus claves (keys), valores (values) o clave/valor (entries)

```javascript
var persona = {
    nombre: "manuel",
    apellido: "garcia"
}

//Obteniendo la claves y accediendo a esa clave desde el Objeto
for (key of Object.keys(persona)) {
     console.log(`Clave:${key}- Valor:${persona[key]}`) //value
}

//Obteniendo la valores, sin clave como una Array de los valores
for (value of Object.values(persona)) {
     console.log(`Valor:${value}`) //value
}

//Obteniendo las claves/valor. Item es un array [clave, valor]
for (item of Object.entries(persona)) {
      console.log(`Clave:${item[0]}- Valor:${item[1]}`) //value
}

//Se puede mejorar, desestructurando el Array
for (const [key, value] of Object.entries(persona)) {
    console.log(`Clave:${key}- Valor:${value}`) //value
}

//Otra opción es utilizar un forEach
Object.entries(persona).forEach(([key, value]) => {
    console.log(`Clave:${key}- Valor:${value}`) //value
});

``` 

#### Filtrar ARRAYS

Filtrar es obtener una serie de elementos que cumplen una condición, y solo esos elementos son devueltos.

Por ejemplo, si tenemos una lista de personas, y queremos filtrar solo aquellos mayores de edad, pues aplicariamos un filtro consultando que la 'edad>=18'.

Este filtro se puede aplicar, de la forma tracional:

```javascript
var personas = [
    {    
        nombre: "manuel garcia",
        edad: 15
    },
    {    
        nombre: "roberto garcia",
        edad: 17
    },
    {    
        nombre: "antonio valencia",
        edad: 18
    }
]

function esMayorEdad(persona) {
    return persona.edad>=MAYOR_DE_EDAD
}

function obtenerPersonasMayorEdad(listaPersonas) {

    var personasFiltro = []
    for (persona of listaPersonas) {
        if (persona.edad>=18)
            personasFiltro.push(persona)
    }

    return personasFiltro
}

//Se llama a la función y se obtiene la lista de las personas que cumplen la condición
var listaPersonasMayoresEdad = obtenerPersonasMayorEdad()
```

En la forma tradional, todo se realiza indica claramente el proceso, la iteración por los elementos de la lista, se crea la nueva lista.

En la nueva forma, todo se simplifica mucho:

* Se utiliza una función específica de los Arrays (filter)
* No se itera, lo hace la función filter
* No hace falta crear una nueva lista, ya lo hace filter
* Solo es requerido pasar una función que aplique el filtro, tipo "arrow function"

```javascript

//Eso es todo => Super simple, y se muestra en un solo paso el qué se quiere no el cómo conseguirlo.
// *
 var listaPersonasMayoresEdad = personas.filter((persona) => persona.edad >=18);

```


#### Transformar ARRAYS

Transformar en convertir algo en otro elemento. Por ejemplo, multiplicar por 2 cada elemento en una lista.

Al igual que el filter lo podemos hacer:

1. Creando una lista resultado
2. Iterando por cada elemento
3. Aplicando función transformadora

O aplicando una nueva función de los Arrays (map):


```javascript
const numbers = [45, 4, 9, 16, 25];

//Pues al igual que filter, solo le pasamos un función anónima, donde recibe un parámetro, y devuelve el numero * 2.
numbersDoble= numbers.map((number) => number*2)
```

Pues aplicando lo visto en Filter y Map, existen otras funciones sobre Arrays muy interesantes como:

* Sort: Ordena los elementos aplicando una función de ordenación
* Some: Si alguno de los elementos de la lista cumple una condición
* Every: Si todos los elementos cumple una condición



<br><br><br>


# JavaScript: Aplicado a la Web

El principal uso de javascript está en la web y es donde vamos a poner el foco principal en este tema, pero para llegar a ese punto también hay que comprender sus fundamentos, su sintaxis y cómo los podemos integrar en nuestras págias web.
El DOM es una API incluida en los navegadores y a través de la cual y desde javascript podemos acceder e interactuar con los elementos de una página web.
Hace unos años esto se realizaba a través de librerías de terceros como JQuery y otras (aún disponibles) pero que actualmente esta API las ha sustitudio parcial o totalmente.

## DOM: Document Object Model

Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).

En Javascript, cuando nos referimos al DOM nos referimos a esta estructura, que podemos modificar de forma dinámica desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

El DOM puede ser accedido desde JS, y por tanto se pueden automatizar acciones y responder a acciones de botones, e infinidad de eventos tanto del usuario como del navegador.

### Objeto Document

En Javascript, la forma de acceder al DOM es a través de un objeto llamado `document`, que representa el árbol DOM de la página o pestaña del navegador donde nos encontramos. En su interior pueden existir varios tipos de elementos, pero principalmente serán `element`  o `node` :

* `element`: no es más que la representación genérica de una etiqueta: HMTLElement
* `node`: es una entidad más básica, la cúal puede ser un element o otro nodo.<br>
  Los nodos pueden ser de diferentes tipos, los más usados son:<br>
  - Element (1):  Es una etiqueta HTML.
  - Attr : Un atributo de una etiqueta HTML.
  - Text (3): Un texto dentro de un elemento o atributo.
  - Comment Node (8): Un comentario de texto en HTML
  
Todos los elementos HTML tendrán un tipo de dato específico:

<table>
<thead>
<tr>
<th>Tipo de dato</th>
<th>Tipo específico</th>
<th>Etiqueta</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><badge-type class="element"></badge-type> <code>HTMLElement</code></td>
<td><code>HTMLDivElement</code></td>
<td><code>&lt;div&gt;</code></td>
<td>Capa divisoria invisible (en bloque).</td>
</tr>
<tr>
<td><badge-type class="element"></badge-type> <code>HTMLElement</code></td>
<td><code>HTMLSpanElement</code></td>
<td><code>&lt;span&gt;</code></td>
<td>Capa divisoria invisible (en línea).</td>
</tr>
<tr>
<td><badge-type class="element"></badge-type> <code>HTMLElement</code></td>
<td><code>HTMLImageElement</code></td>
<td><code>&lt;img&gt;</code></td>
<td>Imagen.</td>
</tr>
<tr>
<td><badge-type class="element"></badge-type> <code>HTMLElement</code></td>
<td><code>HTMLAudioElement</code></td>
<td><code>&lt;audio&gt;</code></td>
<td>Contenedor de audio.</td>
</tr>
</tbody>
</table>

El DOM no está incluido de forma nativa como parte del lenguaje de JS, sino que es una API que permite acceder al DOM utilizando el lenguaje JS y que viene integrado en el navegador.

![](img/DOM_img.png)

Como se ve en la imagen, ese pequeño fragmento HTML se representa en forma de arbol, el DOM en la figura de la derecha.

<table class="medium">
<thead>
<tr>
<th>Acciones en DOM</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>🔍<a href="https://lenguajejs.com/javascript/dom/seleccionar-elementos-dom/"><strong>Buscar etiquetas</strong></a></td>
<td>Familia de métodos entre los que se encuentran funciones como <code>.getElementById()</code>, <code>.querySelector()</code> o <code>.querySelectorAll()</code>, entre otras.</td>
</tr>
<tr>
<td>🔮<a href="https://lenguajejs.com/javascript/dom/crear-elementos-dom/"><strong>Crear etiquetas</strong></a></td>
<td>Una serie de métodos y consejos para crear elementos en la página y trabajar con ellos de forma dinámica.</td>
</tr>
<tr>
<td>🔌<a href="https://lenguajejs.com/javascript/dom/insertar-elementos-dom/"><strong>Insertar etiquetas</strong></a></td>
<td>Las mejores formas de añadir elementos al DOM, ya sea utilizando propiedades como <code>.innerHTML</code> o método como <code>.appendChild()</code>, <code>.insertAdjacentHTML()</code>, entre otros.</td>
</tr>
<tr>

</tbody>
</table>

<br><br>

En este serie de videos se explica mucho más en profundidad el uso del DOM:

* [¿Qué es y para que sirve el DOM](https://youtu.be/OqfhPpJeJ-c?list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG)
* [Seleccionar elementos del DOM](https://youtu.be/_aMg42Zqxa8?list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG)
* [Moidificar atributos y clases](https://youtu.be/vAw2pYQzG30?list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG)
* [Eventos: Ratón y teclado](https://youtu.be/Up67WpXIy70?list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG)
* [Eventos: Objeto evento](https://youtu.be/UVPnw_APpAk?list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG)
* [Crear e insertar elementos](https://youtu.be/XydYN4ZQL9s?list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG)
* [Atravesar el DOM o DOM Traversing](https://youtu.be/ZgomZF_Eaao?list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG)
* [Objetos nativos y timers](https://youtu.be/DxcnQD-fmOg?list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG)






















<br><br><br>

# CONTENIDO EXTRA

<br>

**Operador Spread**

El Spread operador se introdujo con ES6 y es un operador algo más avanzado pero que su aprendizaje ahorra mucho tiempo, y es muy aconsejable su aprendizaje.

[Ver este video explicativo del operdor Spread](https://youtu.be/5tKPYrtHHEk?list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG)

<br>

**Alcance de las funciones**

Todo lo que se declare dentro de un fichero .js, se dice que se define a nivel global, y por tanto puede ser accedida desde cualquier función declarada dentro de ese fichero ".js".

Dentro del Navegador existe una variable WINDOW que simula a la ventana del navegador abierto, y que tiene acceso a las variables globales y funciones.

```javascript
//Variable global
var nombre = 'Simon'

//Esta función modifica una variable a nivel global, y le cambia su valor ==> MAla práctica
function imprimirNombreEnMayusculas(nombre) {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)
```

La variable nombre al ser global puede ser accedida desde el navegador en su objeto "window" así "window.nombre". También puede acceder a las funciones declaradas en el fichero o scripts.