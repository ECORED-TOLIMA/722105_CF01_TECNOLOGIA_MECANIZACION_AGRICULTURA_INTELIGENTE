<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Presupuesto en los servicios mecanizados

    p.mb-4 La prestación de servicios agrícolas mecanizados requiere planificar y controlar los recursos financieros para garantizar que las labores se desarrollen de acuerdo con las necesidades productivas y la capacidad operativa de la empresa. Actividades como la preparación del suelo, la siembra y la cosecha generan costos relacionados con el uso de maquinaria, el combustible, los lubricantes, el mantenimiento, la mano de obra y los insumos.

    .tema3-apertura.mb-0
      figure.mb-0
        img.tema3-apertura__imagen(src="@/assets/curso/temas/t3/img1.png" alt="")
      .tema3-apertura__destacado.p-4
        p.mb-0 El presupuesto permite estimar los ingresos y los gastos asociados a la prestación de los servicios, anticipar las necesidades de financiación y evaluar la viabilidad económica de las operaciones. Su elaboración requiere considerar las características del sistema de producción, las labores programadas, la disponibilidad de recursos y los costos de adquisición, conservación y funcionamiento de los equipos.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Características del presupuesto

    .row.align-items-stretch.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure.h-100.mb-0
          img.tema3-seccion-imagen(src="@/assets/curso/temas/t3/img2.png" alt="")
      .col-lg-7
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 El presupuesto es una herramienta de planeación financiera que permite estimar los ingresos, los costos y los gastos asociados a las actividades de una empresa durante un periodo determinado. En los servicios agrícolas mecanizados, facilita la previsión de los recursos económicos necesarios para ejecutar labores como la preparación del suelo, la siembra y la cosecha, así como para mantener la maquinaria en condiciones operativas.
        p.mb-0 Un presupuesto se construye a partir de las actividades previstas, los recursos disponibles, los precios de los insumos y las condiciones de operación. Su elaboración permite anticipar necesidades financieras, establecer prioridades y evaluar si los ingresos esperados permiten cubrir los costos de la prestación de los servicios.

    .row.justify-content-center.mb-4
      .col-lg-8
        .tema3-subtitulo-pastilla.px-4.py-2
          p.mb-0 Entre las principales características del presupuesto se encuentran las siguientes:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        LineaTiempoD.color-acento-botones
          p.mb-0(numero="1" titulo="Planificación") Estima los recursos financieros necesarios para desarrollar las actividades programadas.
          p.mb-0(numero="2" titulo="Cuantificación") Expresa en valores monetarios los ingresos, los costos y los gastos previstos.
          p.mb-0(numero="3" titulo="Temporalidad") Se elabora para un periodo definido, que puede corresponder a una labor, una temporada agrícola o un año.
          p.mb-0(numero="4" titulo="Flexibilidad") Permite realizar ajustes cuando cambian las condiciones de operación, los precios de los insumos o la programación de las labores.
          p.mb-0(numero="5" titulo="Control") Facilita la comparación entre los valores presupuestados y los resultados reales para identificar diferencias y tomar decisiones.
          p.mb-0(numero="6" titulo="Coherencia con la operación") Debe considerar la capacidad de la maquinaria, las horas de trabajo previstas, el personal requerido y las condiciones del sistema productivo.
      .col-lg-4
        figure.mb-0
          img.tema3-linea-tiempo-imagen(src="@/assets/curso/temas/t3/img3.png" alt="")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.mb-3.mb-md-0
        figure.mb-0
          img.tema3-icono(src="@/assets/curso/temas/t3/img4.svg" alt="")
      .col-lg-11.col-md
        p.mb-0 Por ejemplo, una empresa que presta servicios de preparación del suelo debe estimar el consumo de combustible, los costos de mantenimiento, la remuneración de los operarios y otros gastos asociados a la operación del tractor y sus implementos. Con esta información puede calcular el costo previsto del servicio y establecer una tarifa que contribuya a cubrir los costos y alcanzar la rentabilidad esperada.

    p.mb-0 La utilidad del presupuesto depende de la calidad de la información utilizada y de su actualización cuando se presentan cambios. Por ello, es importante contrastar periódicamente las estimaciones con los costos reales y utilizar los resultados para mejorar la planeación de los servicios mecanizados.

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Tipos de presupuesto

    p.mb-4 Los presupuestos pueden clasificarse según su finalidad, alcance y flexibilidad. En las empresas de servicios de mecanización agrícola, su selección depende de las necesidades de planeación y control de los recursos económicos.

    .row.justify-content-center.mb-4
      .col-lg-6
        .tema3-subtitulo-pastilla.px-4.py-2
          p.mb-0 Según su finalidad, se distinguen tres tipos principales:

    .tarjeta--container.row.g-0.mb-4
      .col-md.tarjeta.tema3-tipo-presupuesto--operacion.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6
            figure.mb-0
              img.tema3-tipo-presupuesto__icono(src="@/assets/curso/temas/t3/img5.svg" alt="")
        h5.text-center.mb-3 Presupuesto de operación
        p.mb-0 Estima los ingresos, los costos y los gastos relacionados con las actividades de la empresa durante un periodo. Por ejemplo, permite calcular los ingresos por las hectáreas trabajadas y los costos asociados al combustible, el mantenimiento y la mano de obra.
      .col-md.tarjeta.tema3-tipo-presupuesto--inversion.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6
            figure.mb-0
              img.tema3-tipo-presupuesto__icono(src="@/assets/curso/temas/t3/img6.svg" alt="")
        h5.text-center.mb-3 Presupuesto de inversión
        p.mb-0 Permite evaluar la adquisición de activos necesarios para la operación, como tractores, sembradoras o implementos agrícolas, considerando su costo y los beneficios esperados.
      .col-md.tarjeta.tema3-tipo-presupuesto--caja.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6
            figure.mb-0
              img.tema3-tipo-presupuesto__icono(src="@/assets/curso/temas/t3/img7.svg" alt="")
        h5.text-center.mb-3 Presupuesto de caja
        p.mb-0 Proyecta las entradas y salidas de dinero durante un periodo para determinar si la empresa contará con recursos suficientes para cubrir sus obligaciones, como el pago de nómina, combustible y mantenimiento.

    p Por otra parte, según su flexibilidad, los presupuestos pueden ser fijos o flexibles. El presupuesto fijo se elabora para un nivel de actividad determinado, mientras que el flexible permite estimar costos para diferentes niveles de operación. Este último resulta útil cuando la cantidad de hectáreas contratadas o las horas de trabajo de la maquinaria pueden variar.

    p.mb-0 Asimismo, es posible elaborar presupuestos específicos para una labor, como la preparación del suelo, la siembra o la cosecha. Estos permiten estimar los recursos y costos asociados a cada operación y facilitan su comparación con los resultados reales.

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Costos de poseer y operar la maquinaria

    p.mb-4 El costo de los servicios de mecanización agrícola depende, entre otros factores, de los recursos necesarios para adquirir, conservar y utilizar la maquinaria. Para calcularlo, se distinguen dos grupos: los costos de propiedad, asociados a la posesión del equipo, y los costos de operación, relacionados con su funcionamiento y uso.

    .row.align-items-stretch.mb-4
      .col-lg-7.mb-4.mb-lg-0
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Los costos de propiedad se generan durante el periodo en que la empresa mantiene la maquinaria, incluso cuando no está en funcionamiento. Entre ellos se encuentran la depreciación, los intereses o el costo de oportunidad del capital invertido, los seguros, los impuestos aplicables y los gastos de resguardo. La depreciación representa la pérdida de valor del equipo a lo largo de su vida útil.
        p.mb-0 Los costos de operación dependen principalmente del uso de la maquinaria e incluyen el combustible, los lubricantes, los filtros, las reparaciones, el mantenimiento y la mano de obra del operario. Su valor puede variar según el tipo de labor, las condiciones del terreno, la intensidad de uso y el estado de conservación del equipo.
      .col-lg-5
        figure.h-100.mb-0
          img.tema3-costos__imagen(src="@/assets/curso/temas/t3/img8.png" alt="")

    .row.align-items-stretch.mb-4
      .col-auto.d-flex.align-items-center
        figure.mb-0
          img.tema3-costos__icono(src="@/assets/curso/temas/t3/img9.svg" alt="")
      .col.d-flex.align-items-center.tema3-costos__diferencia.p-2.px-3
        p.mb-0 La diferencia entre estos costos es importante para determinar el costo por hora de la maquinaria. Cuando un equipo trabaja pocas horas al año, sus costos de propiedad se distribuyen entre menos horas de uso y el costo fijo por hora tiende a ser mayor. En cambio, cuando aumenta su utilización anual, esos costos se distribuyen entre más horas, aunque el costo total de operación también puede aumentar.

    p.mb-4 A continuación, se presentan los principales componentes de los costos de propiedad y operación, junto con formas generales de estimarlos:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 9.
      span Componentes del costo de la maquinaria agrícola
    .tabla-a.color-acento-contenido.tema3-tabla.mb-4
      table
        thead
          tr
            th Grupo
            th Componente
            th Forma general de estimación
        tbody
          tr
            td Propiedad
            td Depreciación anual.
            td (Precio de compra − valor de salvamento) / vida útil en años.
          tr
            td Propiedad
            td Intereses o costo de oportunidad.
            td Capital promedio invertido x tasa anual.
          tr
            td Propiedad
            td Seguros, impuestos y resguardo.
            td Valor anual de los conceptos aplicables.
          tr
            td Operación
            td Combustible.
            td Consumo por hora x precio por unidad de combustible.
          tr
            td Operación
            td Lubricantes y filtros.
            td Consumo y costo de los materiales utilizados.
          tr
            td Operación
            td Reparaciones y mantenimiento.
            td Costos registrados durante el periodo.
          tr
            td Operación
            td Mano de obra.
            td Costo laboral atribuible a las horas de operación.

    p.mb-4 Para estimar el costo horario total, se suman los costos de propiedad y operación correspondientes al periodo y se relacionan con las horas de uso consideradas. La metodología exacta depende de los datos disponibles y de los criterios de cálculo utilizados.

    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Por ejemplo, una empresa que presta servicios de preparación del suelo debe considerar tanto los costos asociados a la posesión del tractor como el combustible, el mantenimiento y la mano de obra necesarios para ejecutar la labor. Esta información permite calcular el costo de operación y establecer tarifas que contribuyan a cubrir los costos del servicio.

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Elaboración del presupuesto

    p.mb-4 La elaboración del presupuesto de los servicios de mecanización agrícola requiere identificar las labores previstas, estimar los recursos necesarios y calcular los ingresos, costos y gastos asociados a la operación. Para ello, se pueden seguir estas etapas:

    SlyderB.tema3-slyder.mb-4(:datos="datosSlyder34")

    p.mb-4 Para facilitar estos cálculos, se puede utilizar una hoja de cálculo, por ejemplo, LibreOffice Calc o una herramienta en línea. Es posible organizar la información en hojas separadas para cada máquina y una hoja de consolidado. De esta manera, la actualización de datos como el precio del combustible permite recalcular los valores relacionados y evaluar sus efectos sobre el presupuesto.

    .titulo-pastilla.tema3-titulo-ejemplo
      img(src="@/assets/curso/icon.svg" alt="")
      span Ejemplo resuelto: cálculo del costo horario de un tractor de 90 hp

    p.mb-4 Una empresa de servicios de mecanización necesita estimar el costo por hora de un tractor con las siguientes características:

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema1-panel.mb-4
          .row.g-0.align-items-stretch
            .col-md-5
              img.tema1-panel__imagen(src="@/assets/curso/temas/t3/img15.svg" alt="")
            .col-md-7
              .tema3-datos-tractor__lista.p-4.h-100.d-flex.align-items-center
                ul.lista-ul--color.tema3-lista-semilla.mb-0
                  li
                    i.fas.fa-seedling
                    | Precio de compra: $250.000.000.
                  li
                    i.fas.fa-seedling
                    | Valor de salvamento: $75.000.000.
                  li
                    i.fas.fa-seedling
                    | Vida útil estimada: 10 años.
                  li
                    i.fas.fa-seedling
                    | Uso anual previsto: 800 horas.
                  li
                    i.fas.fa-seedling
                    | Tasa de interés anual: 12 %.
                  li
                    i.fas.fa-seedling
                    | Seguros y resguardo: 2 % del valor promedio.
                  li
                    i.fas.fa-seedling
                    | Consumo de combustible: 3,5 galones/hora.
                  li.mb-0
                    i.fas.fa-seedling
                    | Precio del combustible: $11.000 por galón.

    p.mb-4 A partir de estos datos, se estiman los costos de propiedad y operación. La depreciación anual es de $17.500.000; los intereses, de $19.500.000, y los seguros y el resguardo, de $3.250.000. La suma corresponde a un costo fijo anual de $40.250.000, equivalente aproximadamente a $50.313 por hora de uso.

    p.mb-4 Los costos variables se estiman en $71.275 por hora, distribuidos entre combustible ($38.500), lubricantes y filtros ($5.775), reparaciones ($12.000) y operario ($15.000).

    p.mb-4 Al sumar los costos fijos y variables, se obtiene un costo total aproximado de $121.588 por hora.

    p.mb-4 Si el conjunto tractor-rastra tiene un rendimiento de 1,68 hectáreas por hora, el costo estimado por hectárea es de aproximadamente $72.374. Este valor corresponde únicamente al costo calculado para el tractor; no incluye el costo propio de la rastra ni otros gastos que deban incorporarse al presupuesto.

    p.mb-4 Los valores utilizados son ilustrativos. En una situación real, deben verificarse los precios, el consumo, el mantenimiento y las condiciones de operación de la maquinaria.

    .row.justify-content-center.mb-4
      .col-lg-10
        .tema3-variacion-costo.p-4
          h5.tema3-variacion-costo__titulo.px-3.py-2.mb-3 Variación del costo horario según el uso anual
          p.mb-3 El número de horas trabajadas durante el año influye en el costo fijo por hora. Si se mantienen constantes los costos fijos anuales de $40.250.000 y los costos variables de $71.275 por hora, los resultados serían los siguientes:
          .row.justify-content-center.align-items-center
            .col-lg-10
              .tema3-variacion-costo__lista.p-3.mb-3
                ul.lista-ul--color.tema3-lista-semilla.mb-0
                  li
                    i.fas.fa-seedling
                    | 400 horas al año: costo total aproximado de $171.900 por hora.
                  li
                    i.fas.fa-seedling
                    | 600 horas al año: costo total aproximado de $138.358 por hora.
                  li
                    i.fas.fa-seedling
                    | 800 horas al año: costo total aproximado de $121.588 por hora.
                  li.mb-0
                    i.fas.fa-seedling
                    | horas al año: costo total aproximado de $111.525 por hora.
          p.mb-0 La comparación permite identificar que, al aumentar las horas de uso anual, disminuye el costo fijo distribuido por hora. Sin embargo, los costos variables pueden cambiar según las condiciones de trabajo, el consumo de combustible y las necesidades de mantenimiento.

    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.5 Finalidad y aplicación del presupuesto

    .tema3-finalidad.mb-4
      .row.g-0.align-items-stretch
        .col-lg-7.d-flex.align-items-center
          .p-4
            p.mb-4 El presupuesto cumple tres funciones principales en la gestión de los servicios de mecanización agrícola: planear los recursos necesarios, coordinar las actividades de la empresa y controlar los resultados económicos. La planeación permite establecer metas y prever los recursos; la coordinación facilita la articulación de las diferentes áreas, y el control permite comparar los valores presupuestados con los resultados reales e identificar las causas de las diferencias.
            .row.align-items-center
              .col-auto.mb-3.mb-md-0
                figure.mb-0
                  img.tema3-finalidad__icono(src="@/assets/curso/temas/t3/img16.svg" alt="")
              .col-md
                p.mb-0 Por ejemplo, un consumo de combustible superior al previsto puede estar relacionado con las condiciones del terreno, el estado de la maquinaria, su calibración o las prácticas de operación. Analizar estas variaciones permite identificar oportunidades de mejora y adoptar medidas correctivas.
        .col-lg-5
          figure.h-100.mb-0
            img.tema3-finalidad__imagen(src="@/assets/curso/temas/t3/img17.png" alt="")

    p.mb-4 En la práctica, el presupuesto sirve para establecer tarifas, evaluar la compra o el alquiler de maquinaria, analizar necesidades de financiación, preparar propuestas comerciales y determinar la rentabilidad de las labores. Para establecer una tarifa por hectárea, se deben considerar los costos del tractor y del implemento, los gastos administrativos asignados al servicio y el margen de utilidad esperado. Esta información permite evaluar si la tarifa propuesta cubre los costos y resulta viable frente a las condiciones del mercado.

    p.mb-4 A continuación, se relacionan algunas decisiones empresariales con la información presupuestal necesaria para sustentarlas.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 10.
      span Aplicaciones del presupuesto en la toma de decisiones
    .tabla-a.color-acento-contenido.tema3-tabla.mb-4
      table
        thead
          tr
            th Decisión
            th Información del presupuesto
            th Criterio de análisis
        tbody
          tr
            td Establecer una tarifa por hectárea
            td Costo total por hectárea.
            td Verificar que la tarifa cubra los costos y contemple el margen de utilidad esperado.
          tr
            td Comprar o alquilar maquinaria
            td Costos de propiedad y operación frente al costo del alquiler.
            td Comparar los costos totales y las condiciones de cada alternativa.
          tr
            td Aceptar un contrato en otra ubicación
            td Costos de traslado, tiempos improductivos e ingresos previstos.
            td Evaluar si los ingresos adicionales compensan los costos asociados.
          tr
            td Solicitar financiación
            td Flujo de caja y obligaciones financieras previstas.
            td Determinar la capacidad de pago de las cuotas.

    p.mb-4 La aplicación del presupuesto permite tomar decisiones fundamentadas en los costos reales y en los ingresos esperados, en lugar de establecer tarifas únicamente a partir de los precios ofrecidos por otras empresas. Para ello, es necesario actualizar la información y comparar periódicamente las estimaciones con los resultados de la operación.

    .row.justify-content-center.align-items-center
      .col-lg-9.col-md.tema3-cierre-presupuesto.p-2.px-3
        p.mb-0 El presupuesto constituye una herramienta fundamental para la planeación económica de los servicios mecanizados. Sin embargo, la viabilidad financiera debe acompañarse del cumplimiento de las condiciones de seguridad para las personas y de protección del entorno.
      .col-md-auto.mt-3.mt-md-0
        figure.mb-0
          img.tema3-cierre-presupuesto__icono(src="@/assets/curso/temas/t3/img18.svg" alt="")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder34: [
      {
        titulo: 'Definir el volumen de servicios',
        texto:
          'Estimar las hectáreas que se atenderán o las horas de trabajo requeridas para cada labor y periodo.',
        imagen: '@/assets/curso/temas/t3/img10.png',
        leyendaImagen: '',
      },
      {
        titulo: 'Calcular los costos de la maquinaria',
        texto:
          'Determinar los costos de propiedad y operación por hora, según los criterios explicados en el apartado anterior.',
        imagen: '@/assets/curso/temas/t3/img11.png',
        leyendaImagen: '',
      },
      {
        titulo: 'Estimar los gastos administrativos y comerciales',
        texto:
          'Incluir conceptos como arrendamiento de oficina, servicios contables, publicidad y transporte de maquinaria entre fincas, cuando correspondan.',
        imagen: '@/assets/curso/temas/t3/img12.png',
        leyendaImagen: '',
      },
      {
        titulo: 'Proyectar los ingresos',
        texto:
          'Calcular los valores que se espera recibir según las tarifas y la cantidad de servicios contratados.',
        imagen: '@/assets/curso/temas/t3/img13.png',
        leyendaImagen: '',
      },
      {
        titulo: 'Consolidar y evaluar el presupuesto',
        texto:
          'Integrar los valores estimados, organizar el flujo de caja por periodo y analizar si los ingresos previstos permiten cubrir los costos y gastos de la empresa.',
        imagen: '@/assets/curso/temas/t3/img14.png',
        leyendaImagen: '',
      },
    ],
  }),
}
</script>
