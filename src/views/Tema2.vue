<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Planeación de recursos e inventarios

    p.mb-4 Una máquina detenida por falta de un filtro, un operario que se queda sin combustible en medio del lote o una sembradora sin semillas son situaciones que pueden prevenirse mediante una adecuada planeación. Esta consiste en prever qué recursos se necesitan, en qué cantidades y en qué momento deben estar disponibles para cumplir con el programa de producción.

    .row.align-items-stretch.mb-4
      .col-lg-6.mb-4.mb-lg-0
        figure.tema2-imagen-marco.h-100.mb-0
          img(src="@/assets/curso/temas/t2/img1.png" alt="")
      .col-lg-6
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En la mecanización agropecuaria, la planeación comprende la maquinaria y los implementos, el talento humano, los insumos, los repuestos, las herramientas y los recursos financieros. Su importancia radica en garantizar que las labores se realicen oportunamente y controlar los costos, especialmente porque las actividades agrícolas dependen de periodos específicos y de las condiciones climáticas. Una demora en la siembra, por ejemplo, puede afectar el rendimiento del cultivo o aumentar su exposición a plagas y sequías.
        p.mb-0 La gestión de inventarios complementa este proceso al permitir controlar las existencias necesarias para mantener la operación sin interrupciones y evitar la acumulación innecesaria de recursos. Por ello, la planeación y el control de inventarios contribuyen al aprovechamiento eficiente de los recursos disponibles.

    p.mb-4 Para realizar esta planeación, es necesario identificar las clases de recursos que intervienen en los servicios agrícolas mecanizados y las unidades utilizadas para cuantificarlos, como se presenta a continuación:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 4.
      span Clases de recursos en la mecanización agropecuaria
    .tabla-a.color-acento-contenido.tema2-tabla.mb-4
      table
        thead
          tr
            th Clase de recurso
            th Ejemplos
            th Unidad de cuantificación
        tbody
          tr
            td Maquinaria e implementos
            td Tractor de 90 hp, rastra, sembradora y cosechadora.
            td Horas-máquina, hectáreas.
          tr
            td Talento humano
            td Operarios, mecánico y auxiliar de campo.
            td Jornales, horas-hombre.
          tr
            td Insumos
            td ACPM, aceite hidráulico y semillas.
            td Galones, litros, kilogramos.
          tr
            td Repuestos y herramientas
            td Filtros, correas, discos y cuchillas.
            td Unidades.
          tr
            td Recursos financieros
            td Capital de trabajo y crédito.
            td Pesos colombianos.

    .row.justify-content-center
      .col-lg-9
        .row.align-items-center
          .col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img.tema2-icono(src="@/assets/curso/temas/t2/img2.svg" alt="")
          .col
            .tema2-nota.p-4
              p.mb-0 Las unidades de cuantificación pueden variar según el recurso y las características de la actividad mecanizada.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Técnicas y métodos de planeación de recursos

    p.mb-4 Existen diferentes técnicas para planear los recursos, cuya selección depende del tamaño de la operación, las características de las labores y la información disponible. En los servicios de mecanización agropecuaria se utilizan métodos basados en el rendimiento operativo de los equipos, el calendario agrícola, las listas de materiales requeridos por labor, la planeación de requerimientos de materiales (MRP, por sus siglas en inglés) y los diagramas de Gantt.

    .bloque-texto-g.tema2-bloque-planeacion.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img
      .bloque-texto-g__texto.p-4
        p.mb-0 El cálculo por rendimiento operativo permite estimar el tiempo necesario para realizar una labor a partir del área que se debe intervenir y de la capacidad efectiva del equipo. La planeación mediante el calendario agrícola permite organizar las actividades según las etapas del cultivo y los periodos disponibles para ejecutarlas. Por su parte, las listas de materiales facilitan la identificación y cuantificación de los insumos y repuestos necesarios para cada operación.

    .cajon.color-secundario.p-4.mb-4
      p.mb-0 En empresas con operaciones más complejas, el sistema MRP permite organizar los requerimientos de materiales en función de las necesidades y los tiempos de ejecución. Los diagramas de Gantt, a su vez, representan las actividades en una escala temporal y facilitan la identificación de su secuencia, duración y posibles coincidencias.

    p.mb-4 Entre estas técnicas, el cálculo del rendimiento operativo resulta especialmente útil para estimar las horas-máquina requeridas en las labores agrícolas. Para ello, se utiliza la capacidad de campo efectiva, expresada en hectáreas por hora, que depende del ancho de trabajo del implemento, la velocidad de operación y la eficiencia de campo. Esta última representa la proporción del tiempo disponible que se aprovecha efectivamente en el trabajo, descontando las pérdidas ocasionadas por giros, traslapes, llenado de tolvas y ajustes del equipo (American Society of Agricultural and Biological Engineers [ASABE], 2011; Edwards, 2026).

    .row.justify-content-center.mb-3
      .col-lg-8
        .tema2-formula-titulo.px-4.py-2
          p.mb-0 La capacidad de campo efectiva se calcula mediante la siguiente fórmula:
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema2-formula.mb-4
          .row.g-0.align-items-stretch
            .col-lg-5.d-flex.align-items-center.justify-content-center.p-4
              .tema2-formula__operacion
                span C
                sub e
                span.mx-2 =
                span.tema2-fraccion
                  span.tema2-fraccion__numerador A x V x E
                  span.tema2-fraccion__denominador 10
            .col-lg-7.tema2-formula__definiciones.p-4
              p.mb-2 Donde:
              ul.lista-ul--color.mb-0
                li.mb-1
                  i.fas.fa-square
                  span #[strong C#[sub e]:] capacidad de campo efectiva, en hectáreas por hora (ha/h).
                li.mb-1
                  i.fas.fa-square
                  span #[strong A:] ancho de trabajo del implemento, en metros.
                li.mb-1
                  i.fas.fa-square
                  span #[strong V:] velocidad de operación, en kilómetros por hora (km/h).
                li.mb-1
                  i.fas.fa-square
                  span #[strong E:] eficiencia de campo, expresada como valor decimal.
                li.mb-0
                  i.fas.fa-square
                  span #[strong 10:] factor de conversión de unidades.

    p.mb-4 Una vez calculada la capacidad efectiva, las horas-máquina requeridas se estiman dividiendo el área total por intervenir entre dicha capacidad:
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema2-formula.mb-4
          .row.g-0.align-items-stretch
            .col-lg-5.d-flex.align-items-center.justify-content-center.p-4
              .tema2-formula__operacion
                span H
                sub m
                span.mx-2 =
                span.tema2-fraccion
                  span.tema2-fraccion__numerador S
                  span.tema2-fraccion__denominador C#[sub e]
            .col-lg-7.tema2-formula__definiciones.p-4
              p.mb-2 Donde:
              ul.lista-ul--color.mb-0
                li.mb-1
                  i.fas.fa-square
                  span #[strong H#[sub m]:] horas-máquina requeridas.
                li.mb-1
                  i.fas.fa-square
                  span #[strong S:] superficie por intervenir, en hectáreas.
                li.mb-0
                  i.fas.fa-square
                  span #[strong C#[sub e]:] capacidad de campo efectiva, en hectáreas por hora.

    p.mb-4 La selección de la técnica de planeación depende de las características de la operación, los recursos disponibles y el tipo de información que se necesita obtener. La siguiente tabla presenta algunas técnicas utilizadas en los servicios agrícolas mecanizados, sus características y sus aplicaciones:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 5.
      span Técnicas de planeación de recursos y su aplicación
    .tabla-a.color-acento-contenido.tema2-tabla.mb-4
      table
        thead
          tr
            th Técnica
            th En qué consiste
            th Cuándo usarla
        tbody
          tr
            td Rendimiento operativo
            td Calcula el tiempo requerido a partir del área por intervenir y la capacidad efectiva del equipo.
            td Estimar las horas-máquina necesarias para cada labor.
          tr
            td Calendario agrícola
            td Organiza las labores según las etapas del cultivo y los periodos disponibles.
            td Definir fechas y ventanas de trabajo.
          tr
            td Lista de materiales
            td Identifica los insumos y repuestos necesarios por labor o periodo de operación.
            td Calcular los requerimientos de combustible, insumos y repuestos.
          tr
            td Planeación de requerimientos de materiales (MRP)
            td Organiza las necesidades de materiales según las cantidades requeridas y los momentos en que deben estar disponibles.
            td Gestionar materiales en empresas con múltiples equipos, labores y clientes.
          tr
            td Diagrama de Gantt
            td Representa las actividades mediante barras que indican su duración y ubicación en el tiempo.
            td Visualizar la secuencia de las actividades y detectar coincidencias o posibles conflictos de programación.

    p.mb-4 Entre las técnicas presentadas, el cálculo del rendimiento operativo permite estimar el tiempo requerido para realizar una labor y determinar si los equipos disponibles son suficientes para cumplir con el plazo establecido. El siguiente ejemplo desarrolla este procedimiento para una labor de rastrillado:

    .tema2-ejemplo.p-4.mb-4
      .row.g-3.align-items-stretch.mb-3
        .col-lg-6
          .tema2-ejemplo__titulo.p-3.mb-3
            h5.mb-0 Ejemplo resuelto: cálculo de las horas de tractor para rastrillar 120 hectáreas
          p.mb-0 Una empresa de servicios mecanizados debe rastrillar 120 hectáreas. Para esta labor dispone de una rastra de 3 metros de ancho, que opera a una velocidad de 7 km/h y tiene una eficiencia de campo del 80 %. La jornada útil de trabajo es de 9 horas diarias y la labor debe finalizar en un plazo máximo de 6 días.
        .col-lg-6
          figure.tema2-ejemplo__imagen.mb-0
            img(src="@/assets/curso/temas/t2/img4.svg" alt="")

      .row.g-3.mb-3
        .col-lg-6
          .tema2-calculo.p-4.h-100
            p #[strong a) Calcular la capacidad de campo efectiva.] Se reemplazan los valores en la fórmula, expresando la eficiencia de campo como un valor decimal:
            .tema2-calculo__operacion.mb-3
              span C
              sub e
              span.mx-2 =
              span.tema2-fraccion
                span.tema2-fraccion__numerador A x V x E
                span.tema2-fraccion__denominador 10
              span.mx-2 =
              strong 1,68 ha/h
            p.mb-0 La rastra puede intervenir efectivamente 1,68 hectáreas por hora.
        .col-lg-6
          .tema2-calculo.p-4.h-100
            p #[strong b) Calcular las horas-máquina requeridas:]
            .tema2-calculo__operacion.mb-3
              span H
              sub m
              span.mx-2 =
              span.tema2-fraccion
                span.tema2-fraccion__numerador 120
                span.tema2-fraccion__denominador 1,68
              span.mx-2 =
              strong 71,43 horas
            p.mb-0 Por tanto, se requieren aproximadamente 71,43 horas de trabajo efectivo para rastrillar las 120 hectáreas.

      .row.g-3.mb-3
        .col-lg-6
          .tema2-calculo.p-4.h-100
            p #[strong c) Calcular los días de trabajo,] si la jornada útil es de 9 horas diarias:
            .tema2-calculo__operacion.mb-3
              span D
              span.mx-2 =
              span.tema2-fraccion
                span.tema2-fraccion__numerador 71,43
                span.tema2-fraccion__denominador 9
              span.mx-2 =
              strong 7,94 días
            p.mb-0 Con un solo tractor se necesitarían aproximadamente 8 días de trabajo, por lo que no se cumpliría el plazo de 6 días.
        .col-lg-6
          .tema2-calculo.p-4.h-100
            p #[strong d) Determinar los recursos necesarios para cumplir el plazo.] Para completar la labor en 6 días, se dispone de 54 horas de trabajo por equipo. La cantidad de equipos se estima así:
            .tema2-calculo__operacion.mb-3
              span N
              span.mx-2 =
              span.tema2-fraccion
                span.tema2-fraccion__numerador 71,43
                span.tema2-fraccion__denominador 6 x 9
              span.mx-2 =
              strong 1,32
            p.mb-0 Como no es posible disponer de 1,32 equipos, se requieren dos tractores con sus respectivos implementos y operarios, suponiendo que ambos puedan trabajar en condiciones similares y que exista suficiente disponibilidad de combustible y demás recursos.

      p.mb-0 #[strong Interpretación del resultado:] el cálculo permite anticipar que un solo tractor no es suficiente para completar la labor dentro del plazo establecido. La incorporación de un segundo equipo permitiría distribuir el trabajo y aumentar la capacidad operativa disponible, siempre que las condiciones del terreno, la logística y la disponibilidad de los recursos lo permitan.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Procesos, tipos y características de la planeación

    .bloque-texto-g.bloque-texto-g--inverso.tema2-bloque-proceso.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img
      .bloque-texto-g__texto.p-4
        p.mb-0 La planeación de recursos comprende varias etapas que permiten determinar qué se necesita para ejecutar las labores mecanizadas y cómo garantizar la disponibilidad de los recursos. El proceso inicia con la definición de las labores y las metas de producción; continúa con la estimación de los recursos requeridos y la verificación de su disponibilidad; y finaliza con la identificación de faltantes o excedentes y la definición de acciones para atenderlos. Entre las alternativas se encuentran comprar o alquilar equipos, contratar personal o servicios y reprogramar las actividades.

    p.mb-4 Este proceso se revisa en cada temporada y se ajusta cuando cambian las condiciones de producción, la disponibilidad de los recursos o los factores climáticos.

    p.mb-4 Según el horizonte de tiempo, la planeación puede ser estratégica, táctica u operativa. La planeación estratégica se orienta al largo plazo e incluye decisiones como adquirir una cosechadora para fortalecer la capacidad de la empresa. La planeación táctica se enfoca en periodos intermedios, como la organización de los recursos necesarios para una temporada agrícola. La planeación operativa, por su parte, se concentra en el corto plazo y permite distribuir los equipos y el personal entre las labores programadas.

    .cajon.color-secundario.p-4.mb-4
      p.mb-0 Una planeación adecuada se caracteriza por ser realista, porque se basa en datos y capacidades disponibles; flexible, porque admite ajustes ante cambios en las condiciones; integral, porque considera los diferentes recursos que intervienen en la operación; y medible, porque permite comparar lo planeado con lo ejecutado e identificar desviaciones.

    p.mb-4 Para diferenciar los tipos de planeación según el horizonte de tiempo y su aplicación en los servicios agrícolas mecanizados, se presenta la siguiente tabla:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 6.
      span Tipos de planeación según el horizonte de tiempo
    .tabla-a.color-acento-contenido.tema2-tabla.mb-4
      table
        thead
          tr
            th Tipo de planeación
            th Horizonte de tiempo
            th Ejemplo de decisión en mecanización
        tbody
          tr
            td Estratégica
            td Largo plazo, generalmente de 3 a 10 años.
            td Comprar una cosechadora o continuar alquilándola.
          tr
            td Táctica
            td Mediano plazo, como una temporada agrícola o un año.
            td Determinar la cantidad de tractores y operarios necesarios para el semestre.
          tr
            td Operativa
            td Corto plazo, como días o semanas.
            td Asignar los equipos a los lotes y definir las labores que se realizarán durante la semana.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Disponibilidad de recursos

    .tema2-disponibilidad.mb-4
      .row.g-0.align-items-stretch
        .col-lg-7.d-flex.align-items-center
          .p-4
            p.mb-4 La disponibilidad es la condición de un recurso para estar listo y ser utilizado en el momento requerido. En la mecanización agropecuaria, se distingue entre disponibilidad física, cuando la máquina o el recurso se encuentra en la empresa, y disponibilidad operativa, cuando, además de estar presente, reúne las condiciones necesarias para funcionar. En el caso de la maquinaria, esto implica contar con un equipo en buen estado, un operario disponible, combustible e implementos adecuados para realizar la labor.
            .row.align-items-center
              .col-auto
                img.tema2-disponibilidad__icono(src="@/assets/curso/temas/t2/img6.svg" alt="")
              .col
                p.mb-0 La disponibilidad también puede expresarse como el porcentaje de tiempo en que un equipo estuvo en condiciones de trabajar con respecto al tiempo programado para su operación.
        .col-lg-5
          img.tema2-disponibilidad__imagen(src="@/assets/curso/temas/t2/img7.png" alt="")

    .row.justify-content-center.mb-3
      .col-lg-8
        .tema2-factor-titulo.px-4.py-2
          p.mb-0 Entre los factores que pueden reducir la disponibilidad de los recursos se encuentran:

    .BGF01.px-5.mb-4
      .row.align-items-center
        .col-lg-4.d-none.d-lg-block
          figure.mb-0
            img.tema2-disponibilidad-slider__imagen(src="@/assets/curso/temas/t2/img8.png" alt="")
        .col-lg-8
          SlyderF(columnas="col-md-6")
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t2/img9.svg" alt="")
              p.mb-0.text-center Averías y mantenimiento no programado de la maquinaria.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t2/img10.svg" alt="")
              p.mb-0.text-center Incapacidades o ausencia del personal.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t2/img11.svg" alt="")
              p.mb-0.text-center Demoras en la entrega de insumos y repuestos por parte de los proveedores.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t2/img12.svg" alt="")
              p.mb-0.text-center Mal estado de las vías de acceso.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t2/img13.svg" alt="")
              p.mb-0.text-center Falta de liquidez para adquirir insumos, contratar servicios o realizar reparaciones.

    p.mb-4 Por esta razón, la planeación debe contemplar márgenes de seguridad y alternativas para responder ante posibles dificultades, como acuerdos de alquiler con otras empresas o el acceso a bancos de maquinaria.

    p.mb-4 Antes de iniciar una labor mecanizada, es necesario verificar que los equipos, el personal y los insumos requeridos estén disponibles y cumplan las condiciones necesarias para su utilización. A continuación, se presenta un ejemplo de verificación previa a una labor de siembra:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 7.
      span Verificación de disponibilidad de recursos para una labor
    .tabla-a.color-acento-contenido.tema2-tabla.mb-4
      table
        thead
          tr
            th Recurso
            th Pregunta de verificación
            th Estado
        tbody
          tr
            td Tractor de 110 hp
            td ¿Tiene al día el mantenimiento de 250 horas?
            td Sí
          tr
            td Sembradora
            td ¿Tiene los dosificadores calibrados para la semilla?
            td No
          tr
            td Operario
            td ¿Cuenta con la capacitación requerida y está afiliado al sistema de riesgos laborales?
            td Sí
          tr
            td Combustible
            td ¿Hay ACPM suficiente para tres días de trabajo?
            td Sí
          tr
            td Semilla
            td ¿Está disponible en la finca y cuenta con la certificación requerida?
            td Sí

    p.mb-4 Los datos presentados en la tabla, corresponden a un ejemplo didáctico de verificación de los recursos antes de iniciar una labor de siembra. Su propósito es ilustrar cómo se comprueba la disponibilidad y el estado de la maquinaria, el personal y los insumos requeridos para realizar las actividades mecanizadas.

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Clases e importancia del inventario

    .row.align-items-stretch.mb-4
      .col-lg-7.mb-4.mb-lg-0
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 El inventario es el conjunto de materiales, insumos, repuestos, herramientas y productos que una empresa mantiene almacenados para utilizarlos en sus operaciones o comercializarlos. En una empresa de servicios de mecanización agrícola, los inventarios pueden incluir combustibles y lubricantes, filtros, correas, rodamientos, discos, cuchillas y otros repuestos necesarios para el mantenimiento y la operación de la maquinaria. También pueden incluir insumos utilizados durante la prestación del servicio y productos cosechados, cuando la empresa participa en su almacenamiento o comercialización.
        p.mb-0 Los inventarios se pueden clasificar según su función dentro de la operación. El inventario de ciclo cubre el consumo habitual durante el periodo entre pedidos; el de seguridad permite responder ante imprevistos o retrasos en el abastecimiento; el de anticipación se acumula para atender necesidades previstas en temporadas de alta demanda; el inventario en tránsito corresponde a los materiales o productos que se encuentran en proceso de transporte, y el inventario obsoleto está conformado por elementos que han perdido su utilidad operativa o comercial, por ejemplo, repuestos de modelos de maquinaria que ya no se utilizan.
      .col-lg-5
        figure.tema2-inventario-apertura__imagen.h-100.mb-0
          img(src="@/assets/curso/temas/t2/img14.png" alt="")

    .row.justify-content-center.mb-4
      .col-lg-12
        .row.align-items-center
          .col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img.tema2-icono(src="@/assets/curso/temas/t2/img15.svg" alt="")
          .col
            p.mb-0 La adecuada gestión de los inventarios contribuye a mantener la continuidad de las labores mecanizadas, reducir las interrupciones por falta de materiales y facilitar la planificación de las compras. Sin embargo, mantener existencias también implica costos de almacenamiento, recursos financieros inmovilizados y riesgos de deterioro, pérdida o desactualización. Por ello, es necesario establecer cantidades apropiadas de inventario de acuerdo con el consumo, los tiempos de abastecimiento y las necesidades de la operación (Heizer y Render, 2014).

    p.mb-4 A continuación, se presentan las principales clases de inventario según su función y ejemplos relacionados con la operación de maquinaria agrícola:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 8.
      span Clases de inventario en una empresa de servicios mecanizados
    .tabla-a.color-acento-contenido.tema2-tabla.mb-4
      table
        thead
          tr
            th Clase de inventario
            th Función
            th Ejemplo
        tbody
          tr
            td De ciclo
            td Cubrir el consumo habitual entre pedidos.
            td ACPM requerido para dos semanas de operación.
          tr
            td De seguridad
            td Responder ante imprevistos, retrasos en el suministro o aumentos inesperados del consumo.
            td Dos juegos adicionales de filtros de aire para atender necesidades de mantenimiento no previstas.
          tr
            td De anticipación
            td Prepararse para periodos de alta demanda.
            td Cuchillas para cosechadora adquiridas antes de la temporada de cosecha.
          tr
            td En tránsito
            td Identificar existencias que han sido despachadas, pero aún no se reciben.
            td Rodamientos enviados por un proveedor desde Bogotá.
          tr
            td Obsoleto
            td Reconocer existencias que han perdido su utilidad operativa o comercial.
            td Repuestos de un modelo de tractor que ya no forma parte de la maquinaria de la empresa.

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.5 Sistemas de inventario, cuantificación y pronósticos

    p.mb-4 Un sistema de inventario establece cómo se controlan las existencias, cuándo deben solicitarse nuevos materiales y qué cantidad se necesita para mantener la operación. Entre los sistemas de control más utilizados se encuentran los siguientes:

    .tarjeta--container.row.g-0.mb-4
      .col-md.tarjeta.tema2-sistema-inventario--continuo.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6
            figure.mb-0
              img(src="@/assets/curso/temas/t2/img16.svg" alt="")
        h5.text-center.mb-3 Revisión continua
        p.mb-0 Las existencias se supervisan de manera permanente y se solicita una cantidad definida cuando se alcanza el punto de reorden. Es útil para controlar repuestos críticos cuya falta puede detener la maquinaria.
      .col-md.tarjeta.tema2-sistema-inventario--periodico.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6
            figure.mb-0
              img(src="@/assets/curso/temas/t2/img17.svg" alt="")
        h5.text-center.mb-3 Revisión periódica
        p.mb-0 El inventario se verifica en intervalos establecidos, por ejemplo, cada 15 días, y se solicita la cantidad necesaria para alcanzar un nivel de existencias previsto. Puede facilitar el control en empresas pequeñas con recursos administrativos limitados.

    p.mb-4 La elección del sistema depende de las características de la empresa, la frecuencia de consumo y la importancia de los materiales para la operación. Una empresa pequeña puede controlar sus existencias mediante tarjetas de kárdex o una hoja de cálculo, mientras que una organización con mayor volumen de operaciones puede utilizar un software de gestión.

    .tema2-cuantificacion.mb-4
      .row.g-0.align-items-stretch
        .col-lg-5
          img.tema2-cuantificacion__imagen(src="@/assets/curso/temas/t2/img18.png" alt="")
        .col-lg-7
          .tema2-cuantificacion__texto.p-4
            p.mb-0 La cuantificación del inventario consiste en determinar las cantidades disponibles y su valor económico. Para ello, se registran las entradas, las salidas y los saldos de cada material. La clasificación ABC permite priorizar el control según la importancia económica de las existencias, mientras que el kárdex facilita el registro de los movimientos de cada artículo. Para valorar las existencias, pueden utilizarse métodos de asignación de costos, como el promedio ponderado, de acuerdo con las políticas contables aplicables.
          .p-4
            p.mb-0 Los pronósticos permiten estimar las necesidades futuras de materiales a partir de los consumos históricos y de la programación de las labores. Por ejemplo, si un tractor consume en promedio 8 galones de ACPM por hora y se proyectan 300 horas de operación durante la temporada, el consumo estimado será de 2.400 galones.

    .row.justify-content-center.mb-4
      .col-lg-10
        .tema2-ejemplo-inventario
          .row.g-0.align-items-stretch
            .col-lg-7.d-flex.align-items-center
              .p-4
                .tema2-ejemplo-inventario__titulo.p-3.mb-3
                  h5.mb-0 Ejemplo de aplicación: cálculo del consumo de combustible.
                p El cálculo se realiza multiplicando el consumo promedio por hora por el número de horas de operación previstas:
                p.text-center.mb-1 #[strong Consumo estimado = 8 gal/h x 300 h]
                p.text-center.mb-3 #[strong Consumo estimado = 2.400 galones]
                p.mb-0 Este resultado constituye una estimación inicial. El consumo real puede variar según la potencia utilizada, el tipo de labor, las condiciones del terreno y el estado de mantenimiento del tractor. Por ello, es conveniente comparar la estimación con los registros reales para mejorar los pronósticos de las siguientes temporadas.
            .col-lg-5
              figure.tema2-ejemplo-inventario__imagen.mb-0
                img(src="@/assets/curso/temas/t2/img19.svg" alt="")
    Separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.6 Manejo, rotación y #[i stock]

    p.mb-4 El manejo del inventario comprende las actividades de recepción, almacenamiento, conservación, entrega y registro de las existencias. Una gestión adecuada permite mantener los materiales en condiciones apropiadas, facilitar su localización y asegurar su disponibilidad cuando se requieren para las labores mecanizadas.

    p.mb-4 Las condiciones de almacenamiento dependen del tipo de material. Por ejemplo:

    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(tabindex="0" data-aos="flip-left" @mouseover="mostrarIndicador = false" @focus="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure.mb-0
              img(src="@/assets/curso/temas/t2/img20.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Combustibles
            h5.t2.mb-2 Combustibles
            p.mb-0 Deben almacenarse en instalaciones adecuadas, con medidas de contención de derrames, señalización y protección frente a fuentes de ignición, de acuerdo con los requisitos de seguridad aplicables.
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(tabindex="0" data-aos="flip-left")
          .crd_hover_txt--img
            figure.mb-0
              img(src="@/assets/curso/temas/t2/img21.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Repuestos y herramientas
            h5.t2.mb-2 Repuestos y herramientas
            p.mb-0 Deben organizarse en estanterías identificadas y protegerse de la humedad, el polvo y otros factores que puedan deteriorarlos.
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(tabindex="0" data-aos="flip-left")
          .crd_hover_txt--img
            figure.mb-0
              img(src="@/assets/curso/temas/t2/img22.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Lubricantes
            h5.t2.mb-2 Lubricantes
            p.mb-0 Deben conservarse en sus envases identificados, en lugares apropiados y con acceso a las fichas de datos de seguridad correspondientes.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.mb-3.mb-md-0
        figure.mb-0
          img.tema2-icono(src="@/assets/curso/temas/t2/img23.svg" alt="")
      .col-lg-11.col-md
        p.mb-0 Para evitar el deterioro y facilitar el control de las existencias, puede aplicarse el método PEPS (#[strong primero en entrar, primero en salir]), que prioriza la salida de los elementos recibidos primero. Su aplicación resulta especialmente útil para materiales susceptibles de perder sus propiedades durante el almacenamiento.

    .tema2-inventario-destacado.p-2.px-3.mb-4
      .row.align-items-center
        .col
          p.mb-0 La #[strong rotación del inventario] indica cuántas veces se renuevan las existencias durante un periodo determinado. Se calcula dividiendo el consumo del periodo entre el inventario promedio. Una rotación baja puede indicar acumulación de existencias o materiales de poca demanda, mientras que una rotación elevada puede requerir una revisión de los niveles disponibles para prevenir faltantes.
        .col-md-auto.mt-3.mt-md-0
          figure.mb-0
            img.tema2-icono(src="@/assets/curso/temas/t2/img24.svg" alt="")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.mb-3.mb-md-0
        figure.mb-0
          img.tema2-icono(src="@/assets/curso/temas/t2/img25.svg" alt="")
      .col-lg-11.col-md
        p.mb-0 Por otra parte, el #[strong #[i stock] de seguridad] es una cantidad adicional de existencias que permite responder ante variaciones inesperadas de la demanda o retrasos en las entregas. El punto de reorden corresponde al nivel de inventario en el que debe realizarse un nuevo pedido. Cuando el consumo y el tiempo de entrega se mantienen relativamente estables, puede calcularse mediante la siguiente fórmula:

    .row.justify-content-center.mb-4
      .col-lg-8
        .tema2-punto-reorden.p-3
          p.mb-0 #[strong Punto de reorden = (Consumo diario x Tiempo de entrega) + #[i Stock] de seguridad]

    .tema2-ejemplo-stock.p-4.mb-4
      .tema2-ejemplo-stock__titulo.p-3.mb-3
        h5.mb-0 Ejemplo aplicado: cálculo del punto de reorden y la rotación de filtros.
      p.mb-3 Una empresa de servicios mecanizados consume, en promedio, dos filtros de combustible por semana laboral de cinco días. El proveedor tarda diez días hábiles en entregar los pedidos y la empresa establece un #[i stock] de seguridad de tres filtros.
      .row.g-3.mb-3
        .col-lg-6
          .tema2-calculo.p-4.h-100
            p #[strong a) Cálculo del consumo diario:]
            .tema2-calculo__operacion
              span.tema2-fraccion
                span.tema2-fraccion__numerador 2 filtros
                span.tema2-fraccion__denominador 5 días
              span.mx-2 =
              strong 0,4 filtros/día
        .col-lg-6
          figure.tema2-ejemplo-stock__imagen.mb-0
            img(src="@/assets/curso/temas/t2/img26.svg" alt="")
      .row.g-3.mb-3
        .col-lg-6
          .tema2-calculo.p-4.h-100
            p #[strong b) Cálculo del punto de reorden:]
            p.tema2-calculo__operacion (0,4 x 10) + 3 = 7 filtros
            p.mb-0 Por tanto, cuando las existencias lleguen a siete filtros, debe realizarse un nuevo pedido. Este nivel contempla el consumo estimado durante el tiempo de entrega y las tres unidades adicionales previstas como #[i stock] de seguridad.
        .col-lg-6
          .tema2-calculo.p-4.h-100
            p #[strong c) Cálculo de la rotación del inventario:] si durante el año se consumieron 100 filtros y el inventario promedio fue de diez filtros. Entonces la rotación anual se calcula así:
            .tema2-calculo__operacion
              span Rotación =
              span.tema2-fraccion.mx-2
                span.tema2-fraccion__numerador 100
                span.tema2-fraccion__denominador 10
              span = 10
      p.mb-0 El resultado indica que el inventario promedio se renovó diez veces durante el año. Si el consumo se distribuyera uniformemente, cada ciclo equivaldría aproximadamente a 36,5 días.

    .row.justify-content-center.mb-4
      .col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img.tema2-icono(src="@/assets/curso/temas/t2/img27.svg" alt="")
      .col-lg-9.col-md
        .tema2-inventario-destacado.p-3
          p.mb-0 Identificar los repuestos críticos y estimar sus tiempos de reposición permite establecer prioridades para definir el #[i stock] de seguridad y reducir el riesgo de interrupciones en las labores mecanizadas.

    p.mb-4 Con los recursos identificados y los inventarios bajo control, el siguiente paso consiste en estimar los ingresos, los gastos y los costos asociados a la operación mediante la elaboración del presupuesto de los servicios mecanizados.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 2.
      span Ruta de planeación de recursos e inventarios
    .row.justify-content-center
      .col-lg-11
        figure.mb-0
          picture
            source(media="(min-width: 768px)" srcset="@/assets/curso/temas/t2/img28.svg")
            img.w-100(
              src="@/assets/curso/temas/t2/img27_1.svg"
              alt="La figura 2 presenta la ruta de planeación de recursos e inventarios: definir labores, considerando el área, el cultivo y las fechas previstas para cada operación; calcular la demanda de horas-máquina, horas-hombre, insumos y repuestos; verificar la disponibilidad comparando los recursos requeridos con los disponibles; definir los niveles de inventario mediante el stock de seguridad y el punto de reorden; y asignar y controlar los recursos y su utilización."
            )
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>
