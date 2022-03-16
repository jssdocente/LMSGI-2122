# Prefijos del Navegador

Los prefijos son **propiedades experimentales** en los navegadores y a los que se le han añadido un prefijo para indicar que se les ha dado **soporte** antes de que sean soportadas por todos los demás.

## Prefijos CSS

Actualmente los navegadores tienen implementadas muchas de las nuevas características de CSS3 utilizando sus propias versiones de cada propiedad mediante prefijos. Esto se hace así para evitar los posibles errores ocasionados por las primeras implementaciones que aún no son estables. Por ello, los navegadores proporcionan valores utilizando sus prefijos propios y una declaración sin prefijo.

Después de un tiempo, cuando las especificaciones son estables, se eliminarán las propiedades con prefijo. Los prefijos para los navegadores más comunes son los siguientes:

<table><tbody><tr><td><strong>Prefijo</strong></td><td><strong>Navegador</strong></td></tr><tr><td>-moz-</td><td>Firefox</td></tr><tr><td>-webkit-</td><td>Safari y Chrome</td></tr><tr><td>-o-</td><td>Opera</td></tr><tr><td>-khtml-</td><td>Konqueror</td></tr><tr><td>-ms-</td><td>Internet Explorer</td></tr><tr><td>-chrome-</td><td>Google Chrome</td></tr></tbody></table>

Así por ejemplo para transformar un elemento en Firefox, es necesario utilizar la propiedad -moz-transform; en los navegadores basados en WebKit, como Safari y Google Chrome, se utiliza la propiedad -webkit-transform. Por este motivo, no es de extrañar que en algunos casos, tengamos que añadir hasta cuatro líneas de código para una única propiedad CSS.

Se pueden ver los navegadores que soportan una determinada propiedad CSS o un elemento HTML5 en la página [caniuse.com](caniuse.com).

## Extensión Autoprefixer para Visual Studio Code

Para ahorrar tiempo y facilitarnos la tarea de incluir los prefijos de las propiedades CSS que todavía no son estables podemos hacer uso de la extensión «Autoprefixer» en Visual Studio Code.

![](https://www.eniun.com/wp-content/uploads/prefijos-css-navegadores-autoprefixer.png)

## Cuando utilizar

Se recomienda no utilizar en producción, es decir, en páginas que los usuarios utilizan.

Este tipo de prefijos es ideal para probar nuevas carácteristicas de CSS que los navegadores aún no soportan de forma estable, y que si queremos que las nuevas versiones de nuestra página las soporte, podemos ir probando con ellos. Y la forma de probar es utilizando **prefijos**.

## Ejemplo

```css
div {
          transform: ...  /* Implementa spec oficial */
  -webkit-transform: ...  /* old Chrome / Safari (webkit) */
      -moz-transform: ... /* old Firefox (gecko) */
      -ms-transform: ...  /* Internet Explorer (trident) */
        -o-transform: ... /* old Opera (Presto) */
}
```

## FUTURO

> Actualmente, los vendor prefixes están en proceso de desaparecer. Las principales compañías de navegadores han optado por favorecer el uso de flags en el navegador del usuario para activar o desactivar opciones experimentales o crear especificaciones más pequeñas y breves que puedan ser estables mucho más rápido. Por esta razón, se aconseja utilizar vendor prefixes solo cuando necesitas soporte específico en navegadores muy antiguos.