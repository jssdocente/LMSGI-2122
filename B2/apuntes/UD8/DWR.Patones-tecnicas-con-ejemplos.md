# Diseño Web Responsivo. Patrones y técnicas

# Introducción

Responsive Web Design (o diseño web adaptativo) se trata de una técnica de diseño y desarrollo web por el que se consigue que un único sitio se adapte perfectamente a todos los dispositivos que puedan consumirlo, desde ordenadores de escritorio a netbooks, tablets, teléfonos móviles, televisores, etc. En definitiva, se trata de construir una única web para que se vea correctamente y aproveche las particularidades de todo dispositivo que hoy exista, o pueda existir en el futuro, independientemente de la pantalla en la que se muestre.


## VIEWPORT

Área disponible de la pantalla en la que se muestra nuestra página Web.

Antes de la aparición de los móviles y tablets la páginas Web se maquetaban para una longitud fija entre 800 y 1000px. Esto hacía que las Web en este tipo de dispositivos no se visualizaran correctamente.

Para solucionar este problema y no entrar en el diseño web responsivo como tal, sólo tenemos que añadir la siguiente línea en el `<head>` de nuesta página:

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Con esto estamos diciendo que el ancho de la página siempre será el ancho del dispositivo e inicialmente al 100% de zoom.

## Tipos de Diseño o Layout

* **FIXED**: La anchura de la página la expresamos en pixeles (Nunca cambia).
* **ELASTIC**: Anchura de página fijo expresado en la unidad ems (múltiplos del tamaño de letra). 
* **FLUID/LIQUID**: Anchura de página depende del tamaño del viewport del usuario y se expresa en porcentaje (%) (ESTE ES EL USADO EN EL DISEÑO WEB RESPONSIVO).

*Ejemplo: ejemplos/patrones-tecnicas/ 00_fluid.html*

## Breakpoint

Cuando usamos el diseño del layout de tipo ***Fluid*** debemos adaptar la composición de nuestra página en función del tamaño del dispositivo o de la ventana.

Es la anchura en la que se produce un cambio en el layout en respuesta a ciertas condiciones del dispositivo.

### Típicos Breakpoints

* <576px (pantallas pequeñas)
* 576px-768px (móviles apaisados)
* 768px-992px (tablets)
* 992px-1200px (desktops)
* 1200px (pantallas grandes)

## Media Queries

Son las herramientas esenciales para poder realizar diseño responsivo de calidad.

Son expresiones en las que indicamos un tipo de medio y una consulta en relación a las características del dispositivo como alto, ancho e incluso el color.

Su sintáxis es parecido a esto:
```CSS
@media mediatype [condiciones] {
    /* Estilos para esas condiciones */;
}
```

## Tipos de Media

* all: Para todos los dispositivos
* screen: Para las pantallas (Es el más usadoS)
* print: Para material impreso y vista previa de impresión
* speech: Para sintentizadores de voz

Podríamos consultar:
* width | min-width | max-width
* height | min-height | max-height
* orientation (landscape / portrait)
* aspect-ratio | min-aspect-ratio | max-aspect-ratio
* color | min-color | max-color


Se puede usar condiciones **AND**, **","**,  **NOT**, **ALL**, **ONLY** 

## Ejemplos de uso
### En Hojas de Estilo (CSS)
```CSS
/*Estilos para todo tipo de pantallas con una anchura máxima de 576px */
@media (max-width: 576px) {
    /*
    CSS STYLES
    */
}

/* Estilos para pantallas con al menos 992px de anchura y que estén apaisadas (más ancho que alto)*/
@media screen and (min-width: 992px) and (orientation: landscape) {
    /*
    CSS STYLES
    */ 
}

/* Estilos sólo para pantallas que tengan al menos 768px de anchura*/
@media only screen and (min-width: 768px) {
    /*
    CSS STYLES
    */ 
}
```
### En HTML

Podemos incluso usar media-queries en la etiqueta link para seleccionar hojas de estilos diferentes atendiendo a las características del dispositivo.

```HTML
<link rel="stylesheet" media="(max-width: 576px)" href="small.css" />
<link rel="stylesheet" media="(max-width: 768px)" href="medium.css" />
<link rel="stylesheet" media="(max-width: 992px)" href="large.css" />
```

*Ejemplo: ejemplos/patrones-tecnicas/ 01_media_queries.html*

## Proceso de Diseño

Se empieza siempre a diseñar del dispositivo más pequeño al más grande, es decir, primero diseñamos para móvil, pasaríamos a tablet y luego a ordenador.

Se suele hacer así porque:
* Priorizamos desde el primer momento que es lo importante (al revés es difícil decidir qué cosas quitar y podemos quitar cosas importantes sin quererlo).
* En cada diseño podemos decidir si es necesario diseñar para pantallas más grandes.

## Patrones Responsivos

Son soluciones que se han dado por buenas para cierto tipo de problemas.

### Patrones de Diseño Comunes

#### Column Drop
Es el patrón de diseño más básico y común. Consiste en que en cada breakpoint vamos apilando elementos (En la pantalla más pequeña tendremos todos los elementos apilados).

Inicialmente tenemos las columnas apiladas y cada vez que hay un breakpoint se pone una fila como columna.

*Ejemplo: ejemplos/02_patron_column_drop.html*

#### Mostly Fluid
Es bastante similar a Column Drop. Es una cuadrícula fluida y en cada Breakpoint hay un redimensionamiento de varias columnas.

En este patrón usamos las propiedades CSS
```CSS 
    display: flex;
    flex-wrap: wrap;
```  

*Ejemplo: ejemplos/patrones-tecnicas/ 03_patron_mostly_fluid.html*

#### Layout Shifter
Es el patrón más “responsivo”. Cambio el diseño en cada Breakpoint en vez de únicamente organizar el flujo y la anchura de los elementos.
```CSS 
    grid-template-columns: 33.333% 33.333% 33.333%;
    grid-template-rows: 100px 100px 100px 100px;
```

Con `grid-template-columns` indicamos el número de columnas que tendrá nuestro layout y con `grid-template-rows` el número de filas.

Para este patrón debemos poner en el contenedor princioal la propiedad CSS 
```CSS 
display: grid;
```

*Ejemplo: ejemplos/patrones-tecnicas/ 04_patron_layout_shifter.html*

#### Off Canvas
En vez de apilar contenidos éstos se colocan fuera de la pantalla cuando el tamaño de pantalla no es lo suficientemente grande.

*Ejemplo: 05_patron_off_canvas.html*

#### Patrones Mixtos
Estos son en los que se usan más de un tipo de patrón a la vez.

## Imagenes Responsivas
Gran parte del tráfico de nuestra Web es debido a las imágenes, ya que son los elementos de mayor "peso" dentro de estas, por lo que a nivel responsivo nos encontramos con 2 retos:
* Optimizar el tráfico de datos de la web
* A nivel de diseño, ya que dependiendo del tamaño de la pantalla podemos querer elegir una imagen u otra.

### Optimización de Imágenes

Debemos intentar consumir el menor ancho de banda posible, adaptando la resolución de la imagen al tamaño de la pantalla (Para pantallas pequeñas, resolución pequeña).

Debemos tener en cuenta por lo tanto:
* El ancho del dispositivo
* Las dimensiones de la imagen
* Resolución de la imagen: Si el dispositivo tiene resolución Retina la imagen debe tener el doble de resolución, ya que los 1px de resolución normal es al menos 2px de resolución Retina. (Si no hacemos esto podemos ver la imagen pixelada)

#### SVG (Vectoriales)
Con este tipo de imágenes no vamos a tener problemas de pixelado, ya que estas no pierden calidad al cambiar de tamaño.

#### PNG/GIF/JPEG
* Si nos da igual la optimización usaremos una imagen de gran tamaño y la acotaremos dentro de un contenedor.

```CSS
div {
    /* dimensiones deseadas para el contendor */
}
img {
    max-width: XXXXXpx;
    width: 100%;
}
```

```HTML
<!--Metemos nuestra imagen el contenedor-->
<div>
    <img src=”.......” />
</div>
```

* Si nos importa la optimización usaremos los atributos `srcset` y/o `sizes` en la imagen a mostrar.

Si tenemos en cuenta la **resolución**
```HTML
<div class='container'>
    <!--Si la pantalla es Retina usa la imagen big.jpg, small.jpg para las imagenes normales.
    Si el navegador no soporta el atributo srcset coge la imagen de src.-->
    <img src='img/small.jpg' 
         srcset='img/big.jpg 2x,
                 img/small.jpg 1x' />
</div>
```

Si tenemos en cuenta las **dimensiones**
```HTML
<div class='container'>
    <!--W es el tamaño real de la pantalla, una unidad especial, es decir, 
        1000W serían 1000px pero 1000px reales.
        En el atributo sizes estamos usando un media query en el que decimos que cuando
        el mínimo ancho sea 960px ponemos la imagen al 100% del viewport-->
    <img src='img/small.jpg' 
         srcset='img/big.jpg 2000w, 
                 img/small.jpg 1000w'
         sizes='(min-width: 960px) 960px,100vw' />
</div>
```

**Art-Director**
Esta técnica de diseño responsivo consiste en elegir una imagen u otra de manera similar a cuando definíamos las media queries.

Esta técnica usaría una técnica que simula el zoom que hacemos con una cámara de video o foto.

```HTML
<div class='art'>
    <picture>
        <!--Para pantallas a partir de 576px usamos big-art.jpg-->
        <source media='(min-width: 576px)' srcset='img/big-art.jpg'/>
        <!--Para pantallas de menos de 576px usamos small-art.jpg-->
        <source media='(max-width: 575px)' srcset='img/small-art.jpg'/>
        <!--Si nuestro navegador no soporta picture, coge la siguiente imagen.-->
        <img src='img/small-art.jpg'/> /*  */
    </picture>
</div>
```

*Ejemplo: ejemplos/patrones-tecnicas/ 06_imagen_art_dir.html*

## Tablas Responsivas

El problema de las tablas es que si tienen muchas columnas corremos el riesgo de tener que hacer scroll horizontal en pantallas pequeñas.

Tenemos tres posibles soluciones:

### Esconder columnas
**Ventajas**
- Hacemos diseño responsivo
- Priorizamos el cotenido que se muestra del que perdemos

**Desventajas**
- Estamos perdiendo información

*Ejemplo: ejemplos/patrones-tecnicas/ 07_tabla_resp_esconder.html*

### Convertir filas en listas

**Ventajas**
- Hacemos diseño responsivo
- No perdemos información

**Desventajas**
- No priorizamos el contenido
- Se desplaza mucho el contenido hacia abajo, sobre todo el tablas con muchas filas.

*Ejemplo: ejemplos/patrones-tecnicas/ 08_tabla_resp_lista.html*

### Scroll controlado
Consiste en hacer scroll en la tabla pero no en la página. Se suele usar en tablas que tengan muchos campos.

**Ventajas**
- Hacemos diseño responsivo
- No perdemos información

**Desventajas**
- No priorizamos el contenido
- Scroll horizontal

*Ejemplo: ejemplos/patrones-tecnicas/ 09_tabla_resp_scroll.html*

## Texto Responsivo
Normalmente cuando hablamos de diseño responsivo solo le damos importancia al layaout, imágenes y tablas, pero no le damos importancia al texto y este es fundamental para tener hacer un buen diseño responsivo.

Podemos tener varios problemas distintos:
* Mucho texto en líneas cortas
* Mucho texto en líneas muy largas
* Letra muy pequeña

Diversos estudios indican que la longitud ideal de una línea de texto debe tener entre 60 y 80 caracteres caracteres por líneas.

La mejor solución es usar para el texto unidades de tamaño relacionadas con el viewport, es decir, con el tamaño del dispositivo. 

### Unidades relativas al viewport

* vw: Anchura del viewport
* vh: Altura del viewport
* vmin: El menor entre la anchura y la altura
* vmax: El mayor entre la anchura y la altura

1vw es 1% de la anchura real del viewport.

*Ejemplo: ejemplos/patrones-tecnicas/ 10_responsive_text.html*

Es muy complicado establecer una configuración óptima del texto, ya que esta dependerá de la cada página, de la cantidad del texto..., por lo que es necesario hacer muchas pruebas para encontrar la que mejor nos venga.

Tenemos que priorizar que se vea lo mejor posible el tablet y móviles.

