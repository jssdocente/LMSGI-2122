# Herramientas adicionales trabajo profesional CSS

Cuando se utiliza CSS a nivel profesional existen una serie de problemas que son difíciles de solucionar.

De igual manera, veremos que al trabajar en proyectos grandes con CSS hay tareas que son tediosas y que favorecen la aparación de errores. Para evitar esto han ido surgiendo muchas herramientas pero aquellas que han tenido más éxito y que deberías conocer son los preprocesdores CSS.

## Preprocesadores CSS

Un preprocesador CSS es un programa que te permite generar CSS…haciendo que la estructura sea más legible y más fácil de mantener.

Añaden al CSS tradicional características como:

* Las variables
* Los selectores anidados
* Los bucles
* Los mixins
* ...

Y los preprocesadores más conocidos son: 
* [LESS](https://lesscss.org/)
* [SASS](https://sass-lang.com/)
* [POSTCSS](https://postcss.org/) que no es exactamente un preprocesador pero nos va a facilitar mucho el trabajo con CSS y es fácilmente extensible.

Un ejemplo sería de SASS:

```css
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

Donde estamos usando variables, la variable $font-stack