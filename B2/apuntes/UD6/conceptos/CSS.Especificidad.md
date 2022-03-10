# Especificidad en CSS: ¿Qué es y cómo funciona?

**¿Qué es la especificidad?**

La especificidad en CSS es un grupo de reglas aplicadas a los selectores CSS para determinar qué estilo se aplica a un elemento. Cuanto más específico sea un selector, mayor será su valor en puntos y más probable será que esté presente en el estilo del elemento.

La documentación oficial de la MDN describe la especificidad de la siguiente manera:

> La especificidad es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados

Esto significa que la especificidad de CSS es un conjunto de reglas usadas por los navegadores para determinar cuál de los estilos definidos por el desarrollador se aplicará a un elemento específico. Para que un estilo se aplique a un elemento en particular, el desarrollador tiene que cumplir con las reglas, de modo que el navegador sepa cómo aplicar el estilo.

El navegador evalúa la especificidad en dos partes:

1. Los estilos aplicados en línea en el HTML (Inline Styles).
2. Los estilos aplicados mediante un selector (Especificidad del selector).

**Jerarquía de la especificidad**

Piense en la especificidad como un score/rank que determina qué declaraciones de estilo se aplican finalmente a un elemento.

La especificidad utiliza un sistema de ponderación o puntuación.

Cada tipo de selector recibe puntos que indican su especificidad, y se suman los puntos de todos los selectores que hayas utilizado. para calcular la especificidad total del selector.

Cada selector tiene su lugar en la jerarquía de especificidad. Hay cuatro categorías que definen el nivel de especificidad de un selector.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--tbhPGpXB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9wc5w6w10yriwydymc55.png)

La cantidad de especificidad de un selector se mide usando cuatro valores diferentes separados por coma que tienen diferente peso y pueden describirse como millares, centenas, decenas y unidades (cuatro dígitos individuales dispuestos en cuatro columnas):

![](https://res.cloudinary.com/practicaldev/image/fetch/s--Q7AjHHJ9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hhf8sfgmd2w72c7yp8o3.png)

Esta es la jerarquía:

1. Estilos en línea
2. Selector de id
3. clases, atributos[] y :pseudoclases
4. Elementos y ::pseudoelementos
5. Selector universal

**¿Qué tiene que ver !important con la especificidad?**

Cuando se emplea !important en una declaración de estilo, esta declaración reescribirá cualquier estilo antes aplicado, esta palabra clave para el navegador es de prioridad muy alta. Aunque técnicamente !important no tiene nada que ver con especificidad, interactúa directamente con esta.

Es posible que te encuentres con situaciones al utilizar frameworks CSS, como Bootstrap, en las que no puedes utilizar la especificidad CSS para anular los estilos nativos. En estos casos, el uso de !important no se considera una mala práctica.