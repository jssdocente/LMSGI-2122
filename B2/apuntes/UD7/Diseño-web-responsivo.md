# DISEÑO RESPONSIVO. CONCEPTOS FUNDAMENTALES

## Índice

1. [Responsive Web Design](Diseño-web-responsivo.md)
2. [Guia de inicio para el Diseño Reponsivo](Guia.inicio.RWD.md)

<br><br><br>
## Responsive Web Design

![](https://miro.medium.com/max/1400/1*gll8UCt78heMRUln-DJEeA.png)

En la actualidad es muy frecuente acceder a Internet con diferentes tipos de dispositivos, que tienen diferentes pantallas y resoluciones, que además tienen diferentes tamaños y formas por lo que las páginas web se consumen de formas diferentes.

Por lo tanto, cuando se diseña una web esta debe estar preparada para verse correctamente en diferentes resoluciones. A esto se le denomina Responsive Web Design a los diseños web que tienen la capacidad de adaptarse al tamaño y formato de la pantalla en la que se visualiza el contenido.

### **Conceptos Básicos**  <!-- omit in toc --> 

Uno de los principales conceptos a entender es la diferencia entre el diseño responsivo y el diseño adaptatitvo. Eso se puede ver en en la siguiente imagen, donde un diseño responsive responde en todo momento a las dimensiones del dispositivo, mientras que uno adaptive sí se adapta, pero no necesariamente responde en todo momento.

![](https://miro.medium.com/max/1400/1*-sX8Zuw_r3aDnwVl03HPLw.gif)

Para trabajar correctamente los diseños responsive hay que tener en cuenta el hecho de trabajar con unidades relativas e intentar evitar las unidades estáticas.

![](https://miro.medium.com/max/1400/1*RiCSfAS-PKg_3cLEkQ_roQ.gif)

El hecho de utilizar propiedades como min-width o max-width nos permite definir tamaños mínimos o máximos, para que los elementos de nuestra página se pueden ampliar o reducir según sea necesario dependiendo de la pantalla del dispositivo usado.

![](https://miro.medium.com/max/1400/1*8S9ZJ7QtccWa4Qb0q3jsmA.gif)

Dentro del diseño responsive se utilizan ciertos puntos de control llamados *breakpoints*. Esto nos permite definir en qué dimensión nuestro diseño cambiará para adaptarse a un nuevo tamaño de pantalla, y con esto lograr una mejor presentación de nuestros elementos en pantallas más reducidas o más amplias.

![](https://miro.medium.com/max/1400/1*MNmMrjMkbK_wuMDCYFsrJA.gif)

Esta forma de trabajar presenta varias ventajas cómo:
* Fácilita mostrar la misma información desde diseños de pantalla grande.
* Ayuda a evitar la mala práctica de ocultar bloques de información en dispositivos móviles.
* Incentiva a diseñar siguiendo buenas prácticas para facilitar la creación de responsive.

### Estrategias de Diseño  <!-- omit in toc --> 

Las dos estrategias principales de diseño son:

* **Mobile first** → Primero se enfoca el diseño en los dispositivos móviles y luego se maqueta para el resto.
* **Desktop first** → Primero se enfoca el diseño en los dispositivos de escritorio y luego se maqueta para el resto.

La estrategia de Mobile-first se utiliza principalmente en el diseño de sitios web en las que el público objetivo es mayoritariamente usuario de móvil. Por otro lado, la estategia Desktop-first suele interesar más a los sitios en el que el público objetivo son usuarios de escritorio.
<br><br>

### Diseño con Porcentaje <!-- omit in toc --> 

Al crear un diseño adaptable lo ideal es hacer uso de las unidades relativas como lo son los porcentajes. Estos son relativos al contenedor padre.

Sin embargo, utilizar porcentajes no es garantía de un diseño adaptativo de calidad. Tiene los siguientes problemas:

* Se debe asegurar que el % total no sume > 100%, porque sino el diseño se rompe
* Si queremos cambiarlo, debemos volver a calcular %.
* Los borders, paddings pueden jugar una mala pasada, ya que afecta al % de un elemento.

Para solucionar eso:

* Utilizar "box-sizing: border-box", para cambiar el modo en cómo se gestionan los tamaños.
* Utilizar un sistema moderno como Flexbox o Grid.


### Tamaños Máximos y Mínimos <!-- omit in toc --> 

Se puede recurrir a las propiedades max-width y min-width para especificar los máximos y mínimos de nuestros elementos. Con esto se indica que la imagen nunca tendrá un ancho menor a 800px ni uno mayor a 1024px, permitiendonos un control mejor del diseño.


### Viewport <!-- omit in toc --> 

El viewport del navegador hace referencia a la región visible del navegador, o sea, la sección de la página que se esta visualizando. Si queremos editar ciertos comportamientos del viewport, podemos editar el documento HTML para especificar el campo meta siguiente:
<meta name=”viewport” content=”initial-scale=1, width=device-width”>

Con la etiqueta <meta> se establecen parámetros de comportamiento para el viewport. Estos parámetros son:

![](https://miro.medium.com/max/1400/0*-VniFl7IBTr346x5)


### Media Queries <!-- omit in toc --> 

Las reglas media queries son un tipo de reglas CSS que permiten crear un bloque de código que sólo se procesará en los dispositivos que cumplan los criterios especificados como condición.

Con ese método se especifica que queremos aplicar los estilos CSS para medios concretos, en este caso sólo pantallas que cumplan las condiciones especificadas en los paréntesis.

En este articulo se explica en detalle.




#### Articulos interesantes

1. [Unidades de medida en CSS: Porcentajes](https://lupitacode.medium.com/porcentajes-css-5cbb95967989)
2. [EM vs REM. ¿Cúal debería usar?](https://lupitacode.medium.com/porcentajes-css-5cbb95967989](https://lupitacode.medium.com/em-vs-rem-cu%C3%A1l-deber%C3%ADa-usar-938376e92da0))
3. [Unidades de Medida en CSS: Pixeles](https://lupitacode.medium.com/unidades-de-medida-en-css-pixeles-a6e944d82e5c)