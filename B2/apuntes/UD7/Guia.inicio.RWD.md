# GUÍA DE DISEÑO WEB RESPONSIVO

## Por qué es importante el diseño receptivo

Si es nuevo en el diseño web, el desarrollo o los blogs , es posible que se pregunte por qué el diseño receptivo es importante en primer lugar.

La respuesta es simple. Ya no es suficiente diseñar para un solo dispositivo. El tráfico web móvil ha superado al escritorio y ahora constituye la mayor parte del tráfico del sitio web , representando más del 51%.

![](https://kinsta.com/wp-content/uploads/2020/09/web-traffic.png)

## Los componentes básicos del diseño web receptivo
En esta sección, cubriremos la base subyacente para el diseño de sitios web receptivos y sus diferentes componentes básicos.

* CSS y HTML
* Media Querys
* Diseños fluidos
* Diseño de caja flexible
* Imágenes receptivas
* Velocidad


### CSS y HTML

La base del diseño receptivo es la combinación de HTML y CSS , dos lenguajes que controlan el contenido y el diseño de una página en cualquier navegador web.

![](https://kinsta.com/wp-content/uploads/2020/08/html-vs-css.png)

HTML controla principalmente la estructura, los elementos y el contenido de una página web. Por ejemplo, para agregar una imagen a un sitio web , debe usar un código HTML como este:
```html
<img src="image.gif" alt="image" class=”full-width-img”>
```

Por ejemplo, podríamos editar el ancho de todas las imágenes HTML a nivel de elemento de esta manera:

```css
img {
    width: 100%;
}
```

O podríamos apuntar a la clase específica "full-width-img" agregando un punto al frente.

```css
.full-width-img {
    width: 100%;
}
```

También puede controlar el diseño más allá de la altura, el ancho y el color . Usar CSS de esta manera es cómo haces que un diseño responda cuando lo combinas con una técnica llamada 'Media Query'.

### Media Querys

Una Media Query es una parte fundamental de CSS3 que le permite representar contenido para adaptarse a diferentes factores como el tamaño de la pantalla o la resolución.

![](https://kinsta.com/wp-content/uploads/2020/08/media-queries.png)

Funciona de manera similar a una "cláusula if" en algunos lenguajes de programación , básicamente verifica si  la ventana gráfica de una pantalla es lo suficientemente ancha o demasiado ancha antes de ejecutar el código apropiado.

```css
@media screen and (min-width: 780px) {
    .full-width-img {
        margin: auto;
        width: 90%;
    }
}
```

Si la pantalla tiene al menos 780 píxeles de ancho, las imágenes de clase "full-width-img" ocuparán el 90 % de la pantalla y se centrarán automáticamente con márgenes igualmente amplios.

### Diseños Fluidos o Fluid Layouts

Un diseño fluido es una parte esencial del diseño receptivo moderno. En los viejos tiempos, establecería un valor estático para cada elemento HTML, como 600 píxeles.

En cambio, un diseño fluido se basa en valores dinámicos como un porcentaje del ancho de la ventana gráfica.

![](https://kinsta.com/wp-content/uploads/2020/08/fluid-layout.png)

Este enfoque aumentará o disminuirá dinámicamente los diferentes tamaños de elementos del contenedor según el tamaño de la pantalla.

### Diseño de caja Flexible o FlexBox

Si bien un diseño basado en porcentajes es fluido, muchos diseñadores y desarrolladores web sintieron que no era lo suficientemente dinámico o flexible. Flexbox es un módulo CSS diseñado como una forma más eficiente de diseñar múltiples elementos, incluso cuando se desconoce el tamaño del contenido dentro del contenedor.

Un contenedor flexible expande los elementos para llenar el espacio libre disponible o los reduce para evitar el desbordamiento. Estos contenedores flexibles tienen una serie de propiedades únicas, como justificar el contenido, que no puede editar con un elemento HTML normal.

![](https://kinsta.com/wp-content/uploads/2020/08/flexbox-justify.png)

Es un tema bastante extenso por lo que puede ampliar su contenido en el siguiente [articulo](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).


### Imágenes Responsive

La iteración más básica de imágenes receptivas sigue el mismo concepto que un diseño fluido, utilizando una unidad dinámica para controlar el ancho o la altura. El código CSS de muestra que cubrimos anteriormente ya logra esto:

```css
img {
    width: 100%;
}
```
La unidad de % se aproxima a un solo porcentaje del ancho o alto de la ventana gráfica y asegura que la imagen permanezca en proporción con la pantalla.

El problema con este enfoque es que cada usuario tiene que descargar la imagen a tamaño completo, incluso en el móvil.

Para servir diferentes versiones escaladas para diferentes dispositivos, debe usar el srcsetatributo HTML en sus etiquetas img, para especificar más de un tamaño de imagen para elegir.
```html
<img srcset="large-img.jpg 1024w, middle-img.jpg 640w, small-img.jpg 320w"
src="small.jpg"
/>
```

## Breakpoints Comunes

Para trabajar con Media Querys, debe decidir los "puntos de interrupción" o los puntos de interrupción del tamaño de la pantalla donde el diseño va a cambiar. Un punto de interrupción es el ancho de la pantalla donde usa una Media Query para implementar nuevos estilos CSS.

**Tamaños de pantalla comunes**

* Móvil: 360x640
* Móvil: 375 x 667
* Móvil: 360x720
* iPhoneX: 375x812
* Píxel 2: 411 x 731
* Tableta: 768 x 1024
* Computadora portátil: 1366 x 768
* Computadora portátil o de escritorio de alta resolución: 1920 x 1080

Si elige un enfoque de diseño basado en dispositivos móviles, con una sola columna y tamaños de fuente más pequeños como base, no necesita incluir puntos de interrupción móviles, a menos que desee optimizar el diseño para modelos específicos.

![](https://kinsta.com/wp-content/uploads/2020/08/mobile-first.png)

Por lo tanto, puede crear un diseño receptivo básico con solo dos puntos de interrupción, uno para tabletas y otro para computadoras portátiles y de escritorio.

**Breakpoints Bootstrap**

Como uno de los primeros y más populares frameworks, Bootstrap lideró el asalto al diseño web estático y ayudó a establecer el diseño móvil primero como un estándar de la industria.

Como resultado, muchos diseñadores hasta el día de hoy todavía siguen los breakpoints definidos por Bootstrap.

## ¿Cómo hacer que su sitio web sea responsivo?

* Establezca breakpoints con Media Querys.
* Tamaño de elementos de diseño con porcentajes o creación de un diseño de cuadrícula CSS
* Implementar imágenes responsivas
* Tipografía Responsiva para el texto de su sitio web
* Capacidad de respuesta de la prueba

**Establezca breakpoints con Media Querys.**

Establezca breakpoints con Media Querys en función de las necesidades únicas de su diseño. Por ejemplo, si quisiéramos seguir los estándares de Bootstrap para nuestro diseño, usaríamos las siguientes consultas de medios:

* 576px para teléfonos verticales
* 768px para tabletas
* 992px para portátiles
* 1200px para dispositivos grandes

**Tamaño de elementos de diseño con porcentajes o creación de un diseño de cuadrícula CSS**

El primer paso y el más importante es configurar diferentes tamaños para diferentes elementos de diseño según la consulta de medios o el punto de interrupción de la pantalla.

La cantidad de contenedores de diseño que tenga dependerá del diseño, pero la mayoría de los sitios web se centran en los elementos que se enumeran a continuación:

* Envoltorio o Contenedor
* Encabezamiento
* Contenido
* barra lateral
* Pie de página

![](https://kinsta.com/wp-content/uploads/2020/08/common-website-layout.jpg)

Con un enfoque centrado en los dispositivos móviles , puede diseñar los elementos de diseño principales de la siguiente manera (sin Media Querys para los estilos básicos para teléfonos móviles):

```css
#wrapper {width:95%;  margin: 0 auto; }

#header {width:100%; }

#content {width:100%; }

#sidebar {width:100%; }

#footer {width:100%; }

// Small devices (landscape phones, 576px and up)

@media (min-width: 576px) {

// Medium devices (tablets, 768px and up)

@media (min-width: 768px) {

#wrapper {width:90%;  margin: 0 auto; }

#content {width:70%; float:left; }

#sidebar {width:30%; float:right; }

// Large devices (desktops, 992px and up)

@media (min-width: 992px) { ... }

}

// Extra large devices (large desktops, 1200px and up)

@media (min-width: 1200px) {

#wrapper {width:90%;  margin: 0 auto; }

}
```

En un enfoque basado en porcentajes, el atributo "flotante" controla en qué lado de la pantalla aparecerá un elemento, a la izquierda o a la derecha.

Si desea ir más allá de lo básico y crear un diseño receptivo de vanguardia, debe familiarizarse con el diseño de CSS flexbox y sus atributos como box-sizing  y flex .

**Tipografía receptiva para el texto de su sitio web*+

El enfoque principal del diseño web receptivo está en la capacidad de respuesta de los bloques de diseño, elementos y medios. El texto a menudo se trata como algo sin mucha importancia.

Pero para un diseño realmente responsivo y elegante, también debe ajustar los tamaños de fuente de manera adecuada para que coincidan con el tamaño de la pantalla.

La forma más sencilla de hacerlo es establecer un valor estático para el tamaño de fuente, como 22 px, y adaptarlo a través de las Media Querys.

Puede apuntar a varios elementos de texto al mismo tiempo usando una coma para separar cada uno.

```css
@media (min-width: 992px) {
    body, p, a, h4 {
        font-size: 14px;
    }
}
```

**Unidades y valores de CSS para el diseño receptivo**

CSS tiene unidades de medida absolutas y relativas. Un ejemplo de una unidad absoluta de longitud es un cm o un px. Las unidades relativas o los valores dinámicos dependen del tamaño y la resolución de la pantalla o de los tamaños de fuente del elemento raíz.

Unidades PX vs EM vs REM vs Viewport para un diseño receptivo

* PX: un solo píxel
* EM: unidad relativa basada en el tamaño de fuente del elemento.
* REM: unidad relativa basada en el tamaño de fuente del elemento.
* VH, VW: % de la altura o el ancho de la ventana gráfica.
* %: el porcentaje del elemento principal.

Un nuevo diseñador o desarrollador web probablemente debería ceñirse a los píxeles para el texto porque son la unidad de longitud más sencilla en CSS.

Pero al configurar el ancho y el ancho máximo de imágenes y otros elementos, usar % es la mejor solución. Este enfoque asegurará que los componentes se ajusten al tamaño de pantalla de cada dispositivo.