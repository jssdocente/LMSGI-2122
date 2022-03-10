# Unidades de Medida en CSS: Fundamentos

Hay dos tipos de unidades de longitud: Relativas y Absolutas.

### Unidades Absolutas <!-- omit in toc --> 

Las medidas absolutas se llaman así porque no cambian y siempre mantienen el mismo tamaño independientemente del tamaño del dispositivo. Las unidades absolutas son las siguientes:

* cm:	Centímetros
* mm:	Milímetros
* Q:	Cuartos de milímetros
* in:	Pulgadas
* pc:	Picas
* pt:	Puntos
* px:	Pixeles

Las unidades absolutas tienen su origen en unidades físicas, como los centímetros, milímetros y las pulgadas. Es por esto que a estas unidades absolutas también se les conoce como unidades del mundo real. Ya que en el mundo real muchos de nosotros las utilizamos para medir, por ejemplo los Ingenieros, Arquitectos, los carpinteros, etc utilizan las unidades de medida.

Sin embargo en el articulo de Smashing Magazine “There Is No Such Thing As A CSS Absolute Unit” (No existe una unidad absoluta de CSS) del experto en HTML/CSS Elad Shechter, nos explica que con el paso de los años, todas las unidades absolutas en CSS han perdido su conexión con el mundo físico o el mundo real y esto es porque se ven afectadas por la densidad de las pantallas y el sistema operativo del dispositivo.

Con los píxeles también pasa esto ya que la conexión entre los píxeles físicos reales (es decir, de dispositivo) y los píxeles CSS (es decir, lógicos) casi ha desaparecido, en un momento te explicare esto.

🤔**¿Dónde puedo usar las unidades absolutas?**<br>
Entonces, ¿en donde puedo utilizar las unidades absolutas? Las longitudes absolutas pueden ser realmente útiles cuando se diseña para formatos impresos, a excepción de los pixeles donde su uso es mas frecuente en pantallas.

Ten en cuenta que el CSS se utiliza no sólo para el contenido digital, sino también para dar estilo al contenido impreso, Por ejemplo, si usas cm para el tamaño de un elemento y luego lo imprimes, debería ser preciso si lo mides con una regla. Sin embargo en pantalla esto no es así, ya que los centímetros en pantalla no son igual a los centímetros físicos, ¿Cómo es esto posible? 😱

### Unidades Relativas <!-- omit in toc --> 

Las medidas relativas son relativas a algo mas, pero ¿relativo a que? O ¿respecto a que?, por ejemplo, relativo al font-size de un elemento padre, al ancho/altura de un contenedor padre, o al ancho/altura del viewport.

✅ La ventaja de usar unidades relativas es que puedes lograr que el tamaño del texto u otros elementos escalen proporcionalmente en relacion con todo lo demás en la pagina. Las unidades relativas son las que se recomienda utilizar sobre todo para Responsive Web Design (RWD).

Las unidades relativas se pueden dividir en dos categorías:

1. Unidades relativas al tamaño de la fuente.
2. Unidades relativas al viewport.

**Unidades relativas al tamaño de la fuente**

**rem**: Siempre es relativa al tamaño de fuente del elemento raíz que es html. Por defecto, la etiqueta html tiene un tamaño de fuente de 16px, por lo que 1rem será igual a 16px. La mayoría de los navegadores tiene un estándar en que el tamaño base de la fuente que asignan al texto que vemos en un documento HTML sea de 16px (excluyendo los encabezados y el elemento small, entre otros).

**em**: Las unidades em para la propiedad font-size serán relativas al font-size del elemento padre. Las unidades em en otras propiedades que no sean font-size serán relativas al font-size del elemento actual.

**ex**: Basada en la altura de la “x” minúscula de la fuente del elemento (depende de la tipografía utilizada). La unidad ex es la mitad del tamaño de la fuente establecida por el navegador del usuario que por lo regular es 16px = 1em, entonces la mitad de 16px es 8, por lo que 8/16 = 0.5, por lo que 1ex es igual a .5em.

**cap**: Basada en la altura de las letras mayúsculas de la fuente actual del elemento.

**ch**: Basada en la anchura del glifo “0” de la letra del elemento.

**ic**: Es una medida nueva que tiene que ver con la anchura de los glifos. Para mas información puede consultar la especificación de la w3c.

**lh**: Altura de linea del elemento.

**rlh**: Altura de linea del elemento raíz (html).

![](https://res.cloudinary.com/practicaldev/image/fetch/s--lG06Bpur--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o3h1avbum3sw47a3coch.jpeg)


### Unidades Relativas al ViewPort <!-- omit in toc --> 

* **vw** (Viewport width) Relativo al ancho del viewport los valores van de 1-100.

* **vh** (Viewport height) Relativo a la altura del viewport los valores van de 1-100.

* **vmax** Entre vw y vh toma el que tenga el mayor valor.

* **vmin** Entre vw y vh toma el que tenga el menor valor.

### Porcentajes %  <!-- omit in toc --> 

Cuando especificamos un porcentaje como data type o valor en un elemento, este se calcula en base en la medida del elemento padre, para que esto funcione, la medida en el elemento padre debe estar especificada.

Te recomiendo leer mi articulo sobre los porcentajes donde explico lo siguiente:

✅ width:auto vs. width:100%<br>
✅ height:auto vs. height:100%<br>
✅ html, body { height: 100%}<br>
✅ Porcentajes en la propiedad font-size<br>