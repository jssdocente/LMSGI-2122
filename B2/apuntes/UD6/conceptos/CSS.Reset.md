# Reset CSS o Reseteo de Estilos

Una hoja de estilos de restablecimiento u hoja de estilos de reset (más conocida por su nombre en inglés, reset stylesheet o reset CSS) es una colección de reglas CSS utilizada para establecer unos valores iniciales para el formato de elementos HTML. Su propósito es el de minimizar las múltiples diferencias visuales que se dan a la hora de mostrar una misma página web en diferentes navegadores, debido a que cada navegador implementa su propia hoja de estilos interna, con determinados valores por defecto, que no siempre siguen la recomendación de la organización W3C.

El consorcio W3C, junto con su especificación de CSS 2.1 del 23 de abril de 2009,1​ publicó en su recomendación, un valor por defecto para cada propiedad de CSS que deberían adoptar los agentes de usuario. Debido a que algunos navegadores hicieron caso omiso a sus indicaciones, los diseñadores web se han visto obligados a recurrir al uso de este tipo de trucos para garantizar la correcta visualización en la mayoría de navegadores.

## ¿En qué consiste?

Los reset CSS contienen en su código fuente, definiciones para propiedades problemáticas que los diseñadores necesitan unificar desde un principio.

Por ejemplo, la mayoría de navegadores establece un margen por defecto entre el contenido de la página web y su propia ventana, cuyo valor varía de un navegador a otro. Los diseñadores web para subsanar esa diferencia, suelen declarar la siguiente línea al comienzo de sus hojas de estilo:

```css
* { margin: 0; padding: 0; }
``` 

Esa única línea indica, y con el selector universal de CSS representado por un asterisco, que todos los elementos contenidos en el HTML al que se aplique, carecerán de márgenes. De esa manera, el diseñador se verá obligado a declarar después los márgenes necesarios en el diseño de su página web, en cada uno de los lugares donde sea necesario, sin tener que dejar ese aspecto a decisión de ningún navegador, y minimizando por tanto, las diferencias visuales entre los mismos.

Los reset CSS pueden contener esa y otras muchas líneas de código que, en su conjunto, servirán al diseñador web para unificar su visualización entre navegadores.

## Algunos reset CSS famosos

El primer reset CSS que cogió fama fue el publicado por Yahoo! UI Library​ pero no fue un poco más tarde, hasta que Eric Meyer considerado un Gurú de las CSS, hizo su popular versión, cuando el término cogió una verdadera popularidad, entre gran cantidad de diseñadores web de todo el mundo, y el artículo donde Meyer publicó su propuesta3​ ha sido enlazado por numerosos blogs.

* Reset de Meyer
* Reset de Normalize CSS

## ¿Por qué es necesario realizar un Reset CSS?

Si queremos consistencia a través de los distintos navegadores. Existen hojas generales, aunque también es necesario adaptar ciertas propiedades al proyecto específico.

La principal ventaja es que tengo coherencia de visualización en todos los navegadores.

## Incovenientes

El principal problema es que tengo que darle los estilos que he eliminado a todos los elementos a aquellos elementos a los que les he aplicado el Reset CSS.


