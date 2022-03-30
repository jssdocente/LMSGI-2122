# CSS. Resumen

* [¿Qué es CSS?](#-qué-es-css-)
  * [Porqué usar CSS](#por-qué-usar-css)
  * [Evolución CSS](#evolución-css)

  <br>
* CSS conceptos
  * [Modelo de Caja](#evolución-css)
  * [Sintaxis CSS](#sintaxis-css)
  * [CSS Abrevidado](#css-abreviado)
  * [Herencia y Cascada](#herencia-y-cascada)
  * [Propiedades Interesantes](#propiedades-interesantes)

## ¿ Qué es CSS ?

* CSS significa Cascading Style Sheets (Hoja de Estilos en Cascada).
* El lenguaje CSS describe cómo se mostrarán los elementos HTML en la pantalla.
* El lenguaje CSS ahorra mucho trabajo, ya que permite controlar el diseño de varias páginas web a la vez.
* Todas las hojas de estilo externas se almacenan en archivos CSS.

## ¿Por qué usar CSS?

El lenguaje CSS se utiliza para definir los estilos de tus páginas web, incluyendo el diseño, la disposición y las variaciones en la imagen para los diferentes dispositivos y tamaños de pantalla .

El lenguaje CSS facilita mucho las cosas
La intención del lenguaje HTML no es contener etiquetas para dar formato a una página web, sino describir el contenido, como por ejemplo aquí:

```html
<h1> Esto es un encabezado </h1>

<p> Esto es un parrafo . </p>
```

Pero si queremos que ese encabezado o párrafo tenga un color o un tipo de fuente concreto, deberíamos añadir estilos a cada una de las páginas que los contenga. Para ahorrar este costoso trabajo, el World Wide Web Consortium (W3C) decidió crear el lenguaje CSS.

**Ahorro de trabajo**

Las definiciones de estilo normalmente se guardan en archivos .css externos. De esta manera, con una hoja de estilos externa puedes cambiar el aspecto de un sitio web por completo simplemente cambiando un archivo.

Fácil, ¿eh? 😉

## Evolución CSS

* Versión 1.0 (1996)
  
  * Poner orden al desorden que había a la hora de dar estilos en los diferentes navegadores.
  * Propiedades para el tipo de letra 
  * Colores de texto y  de fondo 
  * Alineación de texto, imágenes y tablas 
  * Margen, borde, padding y posicionamiento de los elementos

* Versión 2.0 (1998)
  
  * Mejoras en el posicionamiento de elementos
  * Capas con z-index
  * Sombras
  * Dirección del texto

* Versión 2.1 (2001)
  
  * Muchos borradores y versiones desde el 2004
  * Corrige errores de la versión anterior
  * Añade las extensiones de los navegadores
  
* Versión 3 
  
  * Es modular y ha evolucionado desde 1999 
  * Cada módulo tiene un grado de madurez o estandarización propio. No habrá CSS4 única. 
  * Esquinas redondeadas 
  * Gradientes 
  * Transiciones y animaciones 
  * Nuevos layouts (Flex y Grid) Media-Queries (diseño responsive)


## Tres formas de insertar CSS
Hay tres maneras de insertar una hoja de estilo:

* Hoja de estilos externa
* Hoja de estilos interna
* Estilo en línea
  
**Hoja de estilos externa**

Con una hoja de estilos externa, puedes cambiar el aspecto de un sitio web completo cambiando un sólo archivo.

Para ello cada página debe incluir una referencia al archivo de hoja de estilos externa dentro del elemento `<link>` que se encuentra dentro de la sección `<head>`:

```html
<head>
<link rel="stylesheet" type="text/css" href="miestilo.css">
</head>
```

Una hoja de estilo externa se puede escribir desde cualquier editor de texto, debe ser guardado con la extensión .css y no puede contener ninguna etiqueta HTML .

**Hoja de estilos interna**

Una hoja de estilo interna se puede usar en una sólo página con un estilo único. Los estilos internos se definen dentro del elemento `<style>` dentro de la propia página `HTML`:

```html
<head>
<style>
body {
    background-color: #FFFFFF;
}

h1 {
    color: #000000;
    text-align: center;
} 
</style>
</head>
```

**Estilos en línea**

Un estilo en línea se puede utilizar aplicándolo al estilo de un solo elemento. Para ello tienes que añadir el atributo de estilo al elemento en cuestión, pudiendo contener cualquier propiedad CSS, como por ejemplo la siguiente:

```html
<h1 style="color:red;margin-left:30px;">Esto es un estilo en linea</h1>
```

## Orden en cascada

Supongo que si estás utilizando los tres tipos de CSS te preguntarás cuál prevalece, ¿no? Pues como bien indica su nombre siguen un orden en cascada con esta prioridad:

1. Estilo en línea (dentro de un elemento HTML )
2. Hojas de estilo externas e internas (en la sección de cabecera )
3. Las que viene por defecto en el navegador
   
Por lo tanto, un estilo en línea (dentro de un elemento HTML específico) tiene la prioridad más alta, lo que significa que va a anular los estilos definidos dentro de la etiqueta <head>, aquellos recogidos en una hoja de estilos externa (archivo.css) o incluso los que trae por defecto el navegador.

## Moelo de Caja

Una de los conceptos más importantes que debemos recordar a la hora de elaborar CSS es que todos y cada uno de los elementos de mi página web son cajas.

Eso exactamente, ¿ qué significa ?. Significa que todos los elementos que representan algo en HTML tiene la siguiente estructura visual:

![](https://dc722jrlp2zu8.cloudfront.net/media/django-summernote/2019-01-24/cc0d2ac7-a717-4cce-8b34-9838a0d76457.png)

Con ese modelo debemos por lo tanto distinguir la siguientes zonas:

* El contenido que es lo “importante”, el texto en las etiquetas de texto, la imagen en las etiquetas de imagen etc..
* El padding que es la distancia que existe entre el contenido y el borde de la caja.
* El borde que es el elemento que marca la división entre el elemento y el resto de los elementos de la página.
* El margen que es la distancia entre el elemento y el resto de los elementos de la página.

### Comportamiento de las cajas

Además de conocer la estructura de las caja CSS debemos conocer cómo se comportan estas cajas cuando las representamos en nuestro navegador.

Aunque en cursos posteriores seremos más específicos, de manera general podemos distinguir entre elementos en bloque y el elementos en línea.

Los **elementos en bloque** son elementos que, independientemente de la anchura que tengan, se separan verticalmente de los elementos anteriores y posteriores. Es como si “provocaran” un salto de línea antes y uno después (figuradamente hablando).

Representado esto gráficamente sería algo así:

![](https://dc722jrlp2zu8.cloudfront.net/media/django-summernote/2019-01-24/cb34a782-fc5b-4499-8d75-2901a8265c10.png)

En cambio, los** elemento en línea** se van sucediendo a lo largo de la misma línea, mientras caben, uno detrás de otro y de izquierda a derecha (al menos en nuestro idioma). Cuando no caben pasan a la línea siguiente. Digamos que “fluyen” dependiendo de la anchura de la pantalla de nuestro navegador. Este fluir es precisamente la clave a la hora de maquetar páginas web que es algo que veremos en otro curso.

Representado este comportamiento gráficamente sería algo así:

![](https://dc722jrlp2zu8.cloudfront.net/media/django-summernote/2019-01-24/5944e2b6-723e-4ade-aa74-4625330ecaa7.png)

Tipos de elementos:

* `En línea`:
 > a, abbr, acronym, b, basefont, bdo, big, br, cite, code, dfn, em, font, i, img, input, kbd, label, q, s, samp, select, small, span, strike, strong, sub, sup, textarea, tt, u, var.

 * `Bloque`:
 > address, blockquote, center, dir, div, dl, fieldset, form, h1, h2, h3, h4, h5, h6, hr, isindex, menu, noframes, noscript, ol, p, pre, table, ul.

 * `Línea o Bloque` según las circustancias:
 > button, del, iframe, ins, map, object, script.

<br><br>
## Sintaxis CSS

Un conjunto de reglas CSS consta de un selector y de un bloque de declaración:

![](https://www.naiarafernandez.com/wp-content/uploads/2016/05/css-sintaxis.png)

El **selector** hace referencia al elemento HTML al que le queremos aplicar el estilo, mientras que el **bloque de declaración** contiene una o más declaraciones separadas por *punto y coma.*

Cada declaración incluye un nombre de propiedad CSS y un valor, separados por *dos puntos*.

Una **declaración CSS** siempre termina con un punto y coma, y los bloques de declaraciones están rodeados por llaves.

En el siguiente ejemplo todos los elementos de párrafo tendrán el texto azul y centrado:

```css
p {
    color: blue;
    text-align: center;
}
```

### Los selectores CSS

Los selectores CSS se utilizan para «encontrar» (o seleccionar) elementos HTML en función del nombre del elemento, del id , de la clase, del atributo, etc.

**Formato de ficheros css**

```css
selector {
    prop1: valor1;
    prop2: valor2;
    ...
    propn: valorn;
}
```

**Tipos de selectores**

* `*`: Universal
* `#id`: Elemento con ese valor en el atributo id.
* `.class`: Elemento con ese valor en el atributo clase) 
* `etiqueta`: Seleccionar esa etiqueta. 
* `selector1, selector2`: Se cambian las propiedades a todos los elementos seleccionados por ambos.
* `selector1 selector2`: Se cambian las propiedades de los elementos seleccionados por selector2 que estén dentro de aquellos que se seleccionen con selector1. Cualquier nivel.
* `selector1>selector2`: Sse cambian las propiedades de los elementos seleccionados por selector2 que son hijos directos de aquellos que se seleccionen con selector1) ▸selector1+selector2 (de los elementos seleccionados por selector2 que están después de aquellos que se selecciones por selector1.
* `selector1~selector2`: Justo antes.
* `[atributo expr  valor]` siendo expresión `Expr (=,~=,|=,$=,*...)`
* Y cualquier combinación de todos los anteriores

**El selector de elementos**

El selector de elementos elige elementos en función del nombre de los mismos. Por ejemplo, podríamos seleccionar todos los elementos `<h2>` en una página, alinearlos a la izquierda y ponerlos en color rojo de la siguiente manera:

```css
h2 {
    text-align: left;
    color: red;
}
```

**El selector de ID**

El selector de ID utiliza el atributo id de un elemento HTML para seleccionar un elemento específico, esto quiere decir que será único dentro de una página.

Para ello debes utilizar el símbolo de la almohadilla (#) delante del atributo id. Si por ejemplo tenemos un id=parrafo1 que queremos centrar y poner en color azul, la regla de estilo sería la siguiente:

```css
#parrafo1 {
    text-align: center;
    color: blue;
}
```

**El selector de clase**

El selector de clase elige los elementos con un atributo de clase específico. Para ello tienes que escribir un punto (.) delante del nombre de la clase .

Por ejemplo, podemos decidir que aquellos atributos con clase «newsletter» estén centrados y sean rojos:

```css
.newsletter {
    text-align: center;
    color: red;
}
```

Otro caso posible sería que quisieras añadir la clase «newsletter» sólo a los elementos de párrafo, entonces quedaría de la siguiente forma:

```css
p.newsletter {
    text-align: center;
    color: red;
}
```

¿Y si quieres que tus elementos HTML hagan referencia a más de una clase? Pues también es posible 😉

```html
<p class="newsletter centrado">Este parrafo tiene en cuenta la clase newsletter y centrado</p>
```

**La agrupación de selectores**

Si tienes varios elementos a los que quieres aplicarles los mismos estilos también se puede hacer. Para ello tienes que separar cada selector con una coma como en el siguiente ejemplo:

```css
h1, h2, p {
    text-align: center;
    color: red;
}
```

**Comentarios CSS**

Los comentarios se utilizan para explicar el código, de manera que si en un futuro quieres editarlo sea más sencillo entenderlo. Para que éstos sean ignorados por los navegadores tiene que ir entre estos símbolos: al inicio /* y al final  */.

```css
h2 {
    color: blue;
    /* Esto es un comentario */
    text-align: center;
}
```

### Selectores Avanzados

En el subapartado anterior hemos explicado los selectores más básicos de CSS, que son los selectores de elemento, clase e identificador. Con estos selectores se pueden hacer muchas cosas, pero eso no lo es todo; hay otros selectores que permiten seleccionar elementos para aplicarlos en función de criterios más específicos:

* `Selectores universales`: los selectores universales se pueden utilizar para seleccionar todos los elementos de la página.

* `Selectores de atributo`: tal como indica su nombre, los selectores de atributos permiten seleccionar elementos en función de sus atributos.

* `Selectores de hijos`: si queréis seleccionar elementos concretos que son hijos de otros elementos concretos, podéis utilizar este selector.

* `Selectores de descendientes`: si queréis seleccionar elementos concretos que son descendientes de otros elementos concretos (no sólo hijos directos, sino también más abajo del árbol), podéis utilizar este tipo de selector

* `Selectores de hermanos adyacentes`: si queréis seleccionar sólo elementos concretos que siguen a otros elementos concretos, utilizad estos selectores.

* `Pseudoclases`: permiten aplicar estilos a elementos, no en función de qué son los elementos, sino en función de factores más raros como, por ejemplo, el estado de los enlaces (por ejemplo, si se está encima o si ya se han visitado).

* `Pseudoelementos`: permiten aplicar estilos a partes concretas de los elementos y no a todo el elemento (por ejemplo, la primera letra de este elemento); también os permiten insertar contenido antes o después de elementos concretos.

**Selectores Universales**

Seleccionan todos los elementos de una página para aplicarles estilos. Por ejemplo, la regla siguiente dice que todos los elementos de la página deben tener un borde sólido de color negro de 1 píxel:

```css
* {
    border: 1px solid #000000;
}
```

**Selectores de atributos**

 Permiten seleccionar elementos en función de los atributos que contienen. Por ejemplo, con el selector siguiente podéis seleccionar todos los elementos img con un atributo alt

```css
img[alt] {
    border: 1px solid #000000;
}
```

Tened en cuenta los corchetes.

Con el selector anterior quizá podríais definir un borde negro en torno a todas las imágenes con un atributo alt y un borde rojo alrededor de todas las demás imágenes, algo muy útil para las pruebas de accesibilidad.

Pero los atributos os pueden ser mucho más útiles si tenéis en cuenta que podéis hacer selecciones a partir del valor de los atributos, y no sólo a partir de sus nombres. La regla siguiente se aplica a todas las imágenes que tienen un atributo src con el valor alert.gif:

```css
img[src="alert.gif"]{
   border: 1px solid #000000;
}
```

**Selectores de hijos**

Para seleccionar elementos concretos que son hijos de otros elementos concretos se utiliza estos selectores. Por ejemplo, la regla siguiente pondrá de color azul el texto de los elementos strong hijos de elementos h3, pero ninguno de los demás elementos strong:

```css
h3 > strong {
   color: blue;
}
```

**Selectores de descendientes**

Son similares a los selectores de hijos, excepto que estos útltimos solo seleccionan a los descendientes directos, sin embargo los selectores de descendientes seleccione en cualquier nivel de la jerarquía y solo los directos.

```html
<div>
   <em>hello</em>
   <p>In this paragraph I will say
      <em>goodbye</em>.
   </p>
</div>
```

En este fragmento, el elemento div es el padre de todos los demás. Tiene dos hijos, un em y un p. El elemento p tiene un único elemento hijo, que es otro em.

Podéis utilizar un selector de hijos para seleccionar sólo el elemento em que hay inmediatamente dentro de div, de la siguiente manera:

* Selecciona solo el `em` directo:
  
    ```css
    div > em {
        ...
    }
    ``` 
* Selecciona todos los `em`:
  
    ```css
    div em {
        ...
    }
    ``` 
    entonces se seleccionarán los dos elementos em.


**Selectores de hermanos adyacentes**

Estos selectores permiten seleccionar un elemento concreto que aparece directamente después de otro elemento concreto en el mismo nivel de la jerarquía del elemento. Por ejemplo, si quisierais seleccionar todos los elementos p que aparecen inmediatamente después de los elementos h2, pero no los demás elementos p, podríais utilizar la siguiente regla:

```css
h2 + p {
   ...
}
``` 

### Pseudo-selectores y Pseudo-Elementos

#### Pseudo-selectores

"..son palabras claves que se añaden a los selectores y que nos indican un ESTADO determinado de los elementos seleccionados"

**Sintaxis**

```css
selector:pseudoselector {
    prop1:valor1;
    prop2:valor2;
    ...
    propn:valorn
}
```
<br>

##### **Pseudo-selectores de Estado**

* `:link`: el estado normal por defecto de los enlaces, tal como se encuentran cuando se ven por primera vez.

* `:visited`: enlaces que ya habéis visitado en el navegador que estáis utilizando.

* `:focus`: enlaces (o campos de formularios, o cualquier otra cosa) que tienen en este momento el cursor del teclado en su interior.

* `:hover`: enlaces que tienen en este momento el puntero del ratón sobre ellos.

* `:active`: un enlace en el que se está haciendo clic.

Las siguientes reglas definen una serie de estilos según el estado:

```css
a:link{
   color: blue;
}
a:visited{
   color: gray;
}
a:hover a:focus{
   text-decoration: none;
}
a:active{
   font-weight: bold;
}
```

> Cuidado si no definís estas reglas en el orden en el que aparecen en el ejemplo anterior, ya que de otro modo puede ser que no funcionen de la manera esperada. Esto es por el modo como la [especificidad](conceptos/CSS.Especificidad.md) hace que las reglas posteriores de la hoja de estilos anulen las reglas anteriores.

<br>

* `:focus` también es útil como contribución a la usabilidad en los formularios. Por ejemplo, podéis destacar el campo de introducción de datos que tiene el cursor intermitente activo en su interior con una regla como la siguiente:

    ```css
    input:focus {
    border: 2px solid black;
    background color:  lightgray;
    }
    ```

* `:empty` Si el elemento está vacio.

<br><br>
##### **Pseudo-selectores de POSICIÓN**
<br>

* `:first`: La 1ª ocurrencia del selector. 

* `:first-child`: Esta pseudoclase selecciona cualquier aparición del elemento que es el primer elemento hijo de su padre; de modo que, por ejemplo, la regla siguiente selecciona el primer punto (con pico o numerado) de cualquier lista y pone el texto en negrita:

    ```css
    li:first-child {
    font-weight: bold;
    }
    ```
* `:first-of-type`: La 1ª occurrencia de este tipo que ha seleccionado el selector:

    ```css
    ul:first-of-type {
        background-color: blue;
        color: white;
    }
    ```

* `:last`: La última occurrencia del selector.

    ```css
    ul:last {
        background-color: blue;
        color: white;
    }
    ```

* `:last-child`: Selecciona el último hijo.

    ```css
     ul:first-of-type li:last-child {
        background-color: blue;
        color: white;
    }
    ```

* `:last-of-type`: La última occurrencia de este tipo que ha seleccionado el selector:

    ```css
    ul:last-of-type {
        border: 1px solid black;
    }
    ```

* `:nth-child(n)`: El hijo en la posición N indicada como parámetro:

    ```css
    ul:last-of-type li:nth-child(2) {
        color: orange;
    }
    ```
* `:nth-last-child(n)`: El Nenesimo útlimo hijo.

Existen algunos más, busca en la referencia completa para conocer todos.


* `:lang`:, que selecciona elementos que tienen un idioma concreto definido con el atributo lang. Por ejemplo, el elemento siguiente:


    ```html
    <p lang="en-US">A paragraph of American text, gee whiz!<p>
    ```


    Se podría seleccionar de la manera siguiente:
    ```css
    p:lang(en-US) {
    ...
    }
    ```

#### **Pseudoelementos**

Son palabras clave que se añaden a los selectores y que nos indicar una PARTE de un elemento y nos permiten añadir contenido.

**Sintaxis**

```css
selector::pseudoelemento {
 prop1: valor1;
 prop2: valor2;
 ...
 propn: valorn;
}
```

Los pseudoelementos tienen dos finalidades. 

* `Utilizar para seleccionar la primera letra o linea` o la primera línea del texto del interior de un elemento concreto. <br>
  
  Para crear una letra capitular al principio de cada párrafo del documento, podéis utilizar la regla siguiente:
  ```css
  p:first-letter {
    font-weight:  bold;
    font-size: 300%
    background-color:  red;
   }
    ```
    La primera linea: 

    ```css
    p:first-line {
        font-weight:  bold;
        font-size: 300%
        background-color:  red;
    }
    ```

* `Generar contenido` mediante CSS.<br>
  
  * :before o :after:
    Para especificar el contenido que se debe insertar antes o después del elemento seleccionado.

    ```css
    a:after{
        content: " " url(flower.gif);
    }
    ```
    Insertar una imagen decorativa despúes de los enlaces de la página.


## CSS abreviado

Es posible combinar varias propiedades CSS relacionadas con una única propiedad para ahorrar tiempo y esfuerzo. 

Observad la regla siguiente para el margen (las reglas abreviadas para separación y borde funcionan de la misma manera):

```css
div.foo {
   margin-top: 1em;
   margin-right:  1.5em;
   margin-bottom:  2em;
   margin-left:  2.5em;
}
```
Esta regla también se podría escribir:

```css
div.foo {
   margin: 1em 1.5em 2em 2.5em;
}
```

**Dar menos de cuatro valores para una propiedad abreviada**

Un valor abreviado puede incluir menos de cuatro valores, que se aplicarán según se especifica a continuación. Los resultados se ordenan según el número de valores especificados:

1. El mismo valor se aplica a los cuatro lados, por ejemplo margin: 2px;

2. El primer valor se aplica a los márgenes superior e inferior, y el segundo a los márgenes izquierdo y derecho, por ejemplo margin: 2px 5px;.

3. Los valores primero y tercero se aplican a los márgenes superior e inferior respectivamente, y el segundo a los márgenes izquierdo y derecho, por ejemplo margin: 2px 5px 1px;.

4. Los valores se aplican a los márgenes superior, derecho, inferior e izquierdo respectivamente en el orden en el que aparecen en el CSS, tal como hemos visto antes.

**Elegir entre utilizar una propiedad única o un valor abreviado**

Las propiedades margin y padding abreviadas son las que se utilizan más, aunque hay situaciones en las que es mejor no utilizar las propiedades abreviadas, o como mínimo utilizarlas con mucho cuidado, como por ejemplo las siguientes:

* Sólo se debe definir un único margen. En una situación en la que sólo se debe definir una propiedad, el hecho de definir al mismo tiempo múltiples propiedades representa normalmente una violación del principio KISS (Keep It Simple, Stupid o No lo compliques, estúpido).

* El selector al que se aplican las propiedades está sujeto a muchos casos diferentes. Cuando esto suceda, y tarde o temprano acabará pasando, el inevitable pilón de valores abreviados hará que todo sea difícil de entender cuando debáis reparar o modificar la composición.

<br><br>

### Referencia abreviada

En los siguientes enlaces se muestra información de cómo aplicar estilos abrevidados a los siguientes conceptos:

1. [Borders](https://www.w3.org/community/webed/wiki/Es/Referencia_de_notaci%C3%B3n_abreviada_de_CSS#Bordes)
2. [Fuentes](https://www.w3.org/community/webed/wiki/Es/Referencia_de_notaci%C3%B3n_abreviada_de_CSS#Fuentes)
3. [Fondos](https://www.w3.org/community/webed/wiki/Es/Referencia_de_notaci%C3%B3n_abreviada_de_CSS#Fondos)
4. [Lista](https://www.w3.org/community/webed/wiki/Es/Referencia_de_notaci%C3%B3n_abreviada_de_CSS#Listas)
5. [Color](https://www.w3.org/community/webed/wiki/Es/Referencia_de_notaci%C3%B3n_abreviada_de_CSS#Color)


## Herencia y Cascada

La herencia y la cascada son dos conceptos básicos en CSS. Se deben comprender bien para utilizar CSS. Por suerte, no son muy difíciles de entender, aunque algunos detalles pueden ser un tanto complicados de recordar.

Ambos conceptos están relacionados, pero son diferentes. 

* La **herencia** los estilos de los elementos padre se van propagando hacia abajo.
* La **cascada** si hay más de una regla que se puede aplicar al mismo elemento y hay conflicto, entonces se aplica lo más específica (especificidad)


### Herencia

* `No todas las propiedades CSS son heredadas` (por ejemplo los márgenes). <br>Normalmente el sentido común dicta cuáles si y cuales no se heredan.
* `¿Para qué sirve?`<br>
  Imagina que no existiera, y hubiera que especificar a todos los elementos los mismas propiedades una y otra vez, sería una locura.
* `¿Cómo funciona?`<br>
  Todos los elementos de un documento HTML heredan todas las propiedades heredables de su padre, excepto el elemento raiz.

  ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset=utf-8">
        <title>Herencia</title>
        <style>
          html {
              font: 75% Verdana, sans-serif;
          }  
        </style>
    </head>
    <body>
        <h1>Título</h1>
        <p>Un párrafo de texto.</p>
    </body>
    </html>
  ```
  La regla solo se aplica únicamente al elemento `html`, no se ha especificado ninguna para los titulos o los párrafos, pero ahora todo el texto se encuentra en Verdana al 75% del tamaño por defecto ¿Por qué? por la herencia.

  Pero, ¡un momento! Hay algo que no acaba de quedar claro respecto a la herencia del tamaño de la fuente, ¿verdad? El tamaño de la fuente del elemento html se establece en 75%, pero ¿75% de qué? ¿Y el tamaño de la fuente de body no debería ser el 75% del tamaño de la fuente de su padre y los tamaños de las fuentes del título y del párrafo deberían ser el 75% del tamaño del elemento body?

    El valor que se hereda no es el valor especificado, es decir, el valor que escribimos en la hoja de estilo, sino algo que se llama el valor computado. El valor computado es, en el caso del tamaño de la fuente, un valor absoluto medido en píxeles. Para el elemento html, que no tiene un elemento padre del cual heredar, un porcentaje del valor de tamaño de fuente se asocia al tamaño de fuente predeterminada del navegador. La mayoría de los navegadores actuales tienen un tamaño de fuente predeterminada de 16 píxeles. El 75% de 16 son 12, de manera que el valor computado del tamaño de la fuente del elemento html será probablemente 12 píxeles. Éste es el valor que hereda body y que se transmite al título y al párrafo.

**Forzar la herencia**

La herencia se puede forzar mediante la palabra clave `inherit` incluso para propiedades que no se heredan.

```css
p {
   background: inherit;
}
```

### Cascada

Hay tres conceptos principales que controlan el orden en el que se aplican las declaraciones de CSS:

* Importancia.
* Especificidad.
* Orden en las fuentes

**Importancia**

 La importancia de una declaración de CSS depende de dónde se ha especificado. Las declaraciones contrapuestas se aplicarán en el orden siguiente: las nuevas anularán a las más antiguas.

1. Hoja de estilos del navegador.
2. Declaraciones normales en hojas de estilo de usuario.
3. Declaraciones normales en hojas de estilo en la página.
4. Declaraciones importantes en hojas de estilo de la página.
5. Declaraciones importantes en hojas de estilo de usuario.

**Especificidad**

La especificidad es algo que todos los desarrolladores CSS deben comprender y tener en cuenta.<br>

Un selector de especificidad baja puede dar como resultado muchos elementos (como *, que da como resultado todos los elementos del documento), mientras que un selector con una especificidad elevada puede que sólo dé como resultado un único elemento de una página (como #nav, que sólo da como resultado el elemento con una id de nav)

La especificidad tiene cuatro componentes; por ejemplo a, b, c y d. El componente "a" es el más distintivo y el "d", el que menos.

* El componente "a" es bastante sencillo: es 1 para una declaración en un atributo style; si no, es 0.
* El componente "b" es el número de selectores de id en el selector (los que empiezan con #).
* El componente "c" es el número de selectores de atributo, incluidos los selectores de clase y pseudoclases.
* El componente "d" es el número de tipo de elementos y pseudoelementos del selector.

Veamos unos cuantos ejemplos que nos ayudarán a aclarar cómo funciona este proceso.

<table summary="">
<thead>
  <tr>
    <th><strong>Selector</strong></th>
    <th><strong>a</strong></th>
    <th><strong>b</strong></th>
    <th><strong>c</strong></th>
    <th><strong>d</strong></th>
    <th><strong>Especificidad</strong></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>h1</code></td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0,0,0,1</td>
  </tr>
  <tr>
    <td><code>.foo</code></td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>0,0,1,0</td>
  </tr>
  <tr>
    <td><code>#bar</code></td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>0,1,0,0</td>
  </tr>
  <tr>
    <td><code>html &gt;head+body ul#nav *.home a:link</code></td>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>5</td>
    <td>0,1,2,5</td>
  </tr>                    
</tbody>
</table>

<br><br><br>

**Orden de las Fuentes**

Si dos declaraciones afectan al mismo elemento, tienen la misma importancia y la misma especificidad, la señal distintiva final es el orden en las fuentes. La declaración que se ve más adelante en las hojas de estilo "ganará" a las anteriores.


## Propiedades Interesantes

Hay muchísimas propiedades que podemos modificar, algunas son comunes a todas las etiquetas y otros sólo se pueden modificar.

Podéis acceder a lista completa aquí: [Propiedades CSS - Lista completa](https://developer.mozilla.org/es/docs/Web/CSS/Referencia_CSS)

Es casi imposible conocerla entera pero es una referencia que debemos de tener siempre presente en nuestra barra de favoritos.

Si queremos reducirla la lista a aquellas propiedades que son consideradas fundamentales o esenciales para poder empezar a aplicar estilos es mejor que nos fijemos en este enlace:

###Propiedades CSS básicas

No obstante voy a reducir aún más la lista a una serie de propiedades referentes a los siguiente aspectos:

* Color
* Fondos
* Dimensiones y Unidades
* Márgenes, Bordes y Padding
* Texto

**Colores**

Para establecer el color del texto de nuestra web lo podemos establecer usando la propiedad color. Por ejemplo:

```css
/* Notación mediante colores */
p {
  color: red;
}

/* Notación hexadecimal */
h1 {
  color: #cccccc;
}

/* Notación RGB */
h3 {
}
```

**Fondo**

Usando CSS podemos también establecer el fondo de nuestros elementos. Hay diversas propiedades, las más detacadas:

* `background-color` para establecer el color de fondo.
* `background-image` para establecer una imagen de fondo.
* `background-repeat` para especificar cómo se repite la imagen de fondo. Puede tomar diversos valores.
* `background-origin`: desde donde queremos que se repita la imagen.

```css
/*Un ejemplo básico: */
body {
  background: grey;
}
```

**Dimensiones y unidades**

Las dimensiones de los elementos de nuestra página se establecen usado las siguientes propiedades:

* `width` para la anchura de nuestro elemento.
* `height` para altura de nuestro elemento.

Y ambas podemos determinar usar varios tipos de unidades:

* `px`: En píxeles
* `%`: En relación a lo que ocupe el padre del elemento dentro del árbol DOM.
* `em`: En relación al tamaño por defecto de la letra del navegador en ese instante (normalmente 16px..)
* `rem`: En relación al tamaño por defecto de la letra que tiene la etiqueta HTML.

```css
#first img {
  width: 50%;
}

#second {
  width: 600px;
  ...;
}
```

**Márgenes, Bordes y Paddings**

Son propiedades para establecer las dimensiones de los elementos de la caja.

Para márgenes y paddings tenemos varias formas de hacerlo. Si tenemos en cuenta que A(Arriba)- D (Derecha) - AB (Abajo) - IZQ (Izquierda).

```css
selector {
  /* A -D -AB-IZQ */
  margin: 20px 50px 20px 50px;

  /* A y AB - DCHA e IZQDA */
  margin: 20px 50px;

  /* Todos */
  margin: 50px;

  /* O de manera individual */
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
}
```

Para el padding sería exactamente lo mismo. Sólo tenemos que sustituir margin por padding.

En relación al borde de un elemento tenemos también varias posibilidad. De igual manera lo vamos a ilustrar mediante un ejemplo:

```css
/* De manera general*/
border: 1px solid black;

/* Sólo el borde */
border-color: black;

/*Sólo la anchura del borde */
border-width: 1px;

/* Sólo el estilo de la línea del borde */
/* posibles valores solid, dashed, dotted */
border-style: solid;
```

**Estilos para el texto**

Hay multitud de propiedades para establecer los estilos del texto de mi página web. Algunas de las más destacables son:

```css
/* Para establecer el tipo de fuente */
font-family: "Times New Roman", TImes, serif;

/* Para establecer el tamaño de la fuente */
font-size: 2em;

/* Para establecer el grosor del tipo de letra */
/* Posibles valores: bold, bolder, lighter */
font-weight: bold;

/* Para establecer la alineación texto */
/* Posibles valores: center, left, right, justify */
text-align: center;

/* Para establecer la decoración de texto */
/* Posibles valores: underline, overline, none, line-through */
text-decoration: underline;

/* Para establecer tabulaciones */
text-indent: 10px;

/* Para transformar un texto todo a mayúscula o minúsculas */
/* Posibles valores: uppercase, lowercase, capitalize */
text-transform: uppercase;
```