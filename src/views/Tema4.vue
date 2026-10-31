<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Seguridad y salud en el trabajo en la mecanización

    p.mb-4 La operación de maquinaria agrícola facilita el desarrollo de las labores agropecuarias, pero también implica peligros que pueden ocasionar accidentes, lesiones y afectaciones a la salud de los trabajadores. Entre ellos se encuentran los vuelcos de tractores, los atrapamientos con partes móviles, la exposición al ruido y las vibraciones, la manipulación de combustibles y sustancias químicas, y las condiciones propias del terreno y del clima.

    .bloque-texto-g.tema4-bloque-sst.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img
      .bloque-texto-g__texto.p-4
        p.mb-0 La seguridad y salud en el trabajo (SST) comprende las acciones orientadas a prevenir accidentes, proteger la salud de las personas y mantener condiciones seguras durante el desarrollo de las actividades laborales. En Colombia, su gestión se articula mediante el Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), que permite identificar los peligros, evaluar los riesgos y establecer medidas de prevención y control.

    p.mb-0 En los servicios de mecanización agropecuaria, estas acciones incluyen el cumplimiento de la normativa aplicable, la identificación de los peligros asociados a cada labor, la selección y el uso adecuado de los elementos de protección personal, la disponibilidad de equipos de emergencia y la aplicación de procedimientos seguros para operar la maquinaria y manipular sustancias.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Marco normativo de la seguridad y salud en el trabajo

    .row.align-items-stretch.mb-4
      .col-lg-7.mb-4.mb-lg-0
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En Colombia, la seguridad y salud en el trabajo (SST) se desarrolla mediante disposiciones orientadas a prevenir accidentes laborales, evitar enfermedades relacionadas con el trabajo y promover condiciones laborales seguras. Uno de sus principales instrumentos es el Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), que permite identificar los peligros, evaluar y valorar los riesgos, establecer medidas de control y mejorar continuamente las condiciones de trabajo.
        p.mb-0 El #[strong Decreto 1072 de 2015], en el capítulo 6 del título 4 de la parte 2 del libro 2, establece las disposiciones para implementar el SG-SST. Este sistema se basa en el ciclo PHVA: planear, hacer, verificar y actuar. Su implementación corresponde al empleador o contratante, con la participación de los trabajadores y contratistas, según las responsabilidades que les competen.
      .col-lg-5
        figure.h-100.mb-0
          img.tema4-normativa__imagen(src="@/assets/curso/temas/t4/img2.png" alt="")

    .tema4-normativa__destacado.p-4.mb-4
      p.mb-4 Por su parte, la #[strong Resolución 0312 de 2019] establece los estándares mínimos del SG-SST que deben cumplir los empleadores y contratantes, de acuerdo con las características de la organización, el número de trabajadores y la clase de riesgo.
      p.mb-0 En una empresa de servicios de mecanización agropecuaria, la aplicación de estas disposiciones implica gestionar los riesgos asociados con la operación y el mantenimiento de la maquinaria, capacitar al personal, suministrar los elementos de protección personal requeridos, establecer procedimientos de trabajo seguro y preparar la respuesta ante emergencias. Las medidas específicas deben definirse según los peligros identificados y los requisitos normativos aplicables.

    p.mb-4 Las siguientes normas constituyen referentes para la gestión de la SST y la prevención de riesgos en las actividades de mecanización agropecuaria:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 11.
      span Normativa de seguridad y salud en el trabajo aplicable a la mecanización agropecuaria
    .tabla-a.color-acento-contenido.tema4-tabla.mb-4
      table
        thead
          tr
            th Norma
            th Aspecto que regula
            th Aplicación en la mecanización agropecuaria
        tbody
          tr
            td Decreto 1072 de 2015
            td Disposiciones para la implementación del SG-SST.
            td Identificar peligros, evaluar riesgos, establecer controles y realizar seguimiento a las medidas preventivas.
          tr
            td Resolución 0312 de 2019
            td Estándares mínimos del SG-SST.
            td Determinar y cumplir los estándares aplicables a la empresa según sus características y nivel de riesgo.
          tr
            td Ley 1562 de 2012
            td Modifica el Sistema General de Riesgos Laborales y establece disposiciones sobre prevención de riesgos laborales.
            td Orientar las acciones de prevención de accidentes de trabajo y enfermedades laborales.
          tr
            td Decreto 1496 de 2018 y Resolución 773 de 2021
            td Adopción y aplicación del Sistema Globalmente Armonizado (SGA) para la clasificación y comunicación de peligros de productos químicos en los lugares de trabajo.
            td Identificar productos químicos mediante etiquetas y fichas de datos de seguridad, y establecer medidas para su manipulación segura.

    p.mb-4 En la práctica, el cumplimiento normativo requiere que las medidas de seguridad se adapten a las condiciones reales de cada operación. Por ejemplo, antes de utilizar un tractor, la empresa debe considerar los peligros de la labor, las condiciones del terreno, el estado del equipo, la capacitación del operador y los elementos de protección requeridos. Cuando se manipulan combustibles, lubricantes u otros productos químicos, también deben considerarse su identificación, los peligros comunicados en las etiquetas y las instrucciones de las fichas de datos de seguridad.

    .row.justify-content-center.mb-4
      .col-lg-7
        .tema4-consulta-titulo.px-4.py-2
          p.mb-0 Para ampliar la información, se recomienda consultar:

    .row.g-3
      .col-lg-4
        .tema4-enlace.p-4.h-100
          .row.align-items-center.h-100
            .col-auto
              img.tema4-enlace__icono(src="@/assets/curso/temas/t4/img3.svg" alt="")
            .col
              h5.mb-3 Decreto 1072 de 2015
              a.boton.color-acento-botones.texto-blanco(
                href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72173"
                target="_blank"
                rel="noopener noreferrer"
              )
                span Enlace web
                i.fas.fa-file-pdf
      .col-lg-4
        .tema4-enlace.p-4.h-100
          .row.align-items-center.h-100
            .col-auto
              img.tema4-enlace__icono(src="@/assets/curso/temas/t4/img4.svg" alt="")
            .col
              h5.mb-3 Resolución 0312 de 2019
              a.boton.color-acento-botones.texto-blanco(
                href="https://www.fondoriesgoslaborales.gov.co/wp-content/uploads/2018/09/RESOLUCION-0312-DEL-2019.pdf"
                target="_blank"
                rel="noopener noreferrer"
              )
                span Enlace web
                i.fas.fa-file-pdf
      .col-lg-4
        .tema4-enlace.p-4.h-100
          .row.align-items-center.h-100
            .col-auto
              img.tema4-enlace__icono(src="@/assets/curso/temas/t4/img5.svg" alt="")
            .col
              h5.mb-3 Resolución 773 de 2021
              a.boton.color-acento-botones.texto-blanco(
                href="https://ccs.org.co/portfolio/conozca-la-resolucion-773-de-2021-de-aplicacion-del-sistema-globalmente-armonizado-sga-en-los-lugares-de-trabajo/"
                target="_blank"
                rel="noopener noreferrer"
              )
                span Enlace web
                i.fas.fa-file-pdf

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Peligros y riesgos en la operación de maquinaria

    p.mb-4 Un peligro es una fuente o situación con capacidad de causar lesiones o afectar la salud. El riesgo se relaciona con la probabilidad de que ocurra un daño y la gravedad de sus consecuencias. En las labores de mecanización agropecuaria, reconocer los peligros permite establecer medidas de prevención y control antes de iniciar una operación.

    p.mb-4 Los peligros asociados con la maquinaria agrícola pueden clasificarse en diferentes categorías:

    SlyderF.mb-4(columnas="col-md-6 col-xl-4")
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t4/img6.svg" alt="")
        h5.text-center Mecánicos
        p.mb-0.text-center Relacionados con partes móviles, ejes de transmisión, toma de fuerza, cuchillas y puntos de atrapamiento.
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t4/img7.svg" alt="")
        h5.text-center Físicos
        p.mb-0.text-center Incluyen ruido, vibraciones, temperaturas elevadas y exposición prolongada a la radiación solar.
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t4/img8.svg" alt="")
        h5.text-center Químicos
        p.mb-0.text-center Derivados de la manipulación o exposición a combustibles, lubricantes y productos agroquímicos.
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t4/img9.svg" alt="")
        h5.text-center Biomecánicos
        p.mb-0.text-center Asociados con posturas prolongadas, movimientos repetitivos y levantamiento manual de implementos o piezas.
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t4/img10.svg" alt="")
        h5.text-center Locativos
        p.mb-0.text-center Vinculados con las condiciones del terreno, como pendientes, zanjas, superficies irregulares y bordes de canales.
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t4/img11.svg" alt="")
        h5.text-center De tránsito
        p.mb-0.text-center Relacionados con el desplazamiento de maquinaria por vías rurales o durante el traslado entre áreas de trabajo.

    p.mb-4 Uno de los accidentes más graves durante la operación de tractores es el vuelco, que puede ocurrir al trabajar en pendientes, girar a una velocidad inadecuada, acercarse a bordes de canales o remolcar cargas de forma incorrecta. Para reducir sus consecuencias, es fundamental utilizar la estructura de protección contra vuelcos (ROPS) y mantener abrochado el cinturón de seguridad. También deben respetarse los límites de operación establecidos para el equipo y las condiciones del terreno.

    .row.align-items-stretch.mb-4
      .col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img.tema4-icono(src="@/assets/curso/temas/t4/img12.svg" alt="")
      .col
        .tema4-nota.p-3.px-4.h-100.d-flex.align-items-center
          p.mb-0 La identificación de los peligros debe considerar la tarea que se realizará, el estado de la maquinaria, las condiciones ambientales y la experiencia del operario. A partir de esta revisión se determinan los controles necesarios para reducir la posibilidad de accidentes y afectaciones a la salud.

    p.mb-4 Los principales peligros presentes en la mecanización agropecuaria, sus posibles consecuencias y algunas medidas de control se relacionan a continuación:

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 12.
      span Peligros frecuentes en la operación de maquinaria agrícola
    .tabla-a.color-acento-contenido.tema4-tabla.mb-4
      table
        thead
          tr
            th Clase de peligro
            th Fuente o situación
            th Posibles consecuencias
            th Medidas de control
        tbody
          tr
            td Mecánico
            td Eje de toma de fuerza sin guarda de protección.
            td Atrapamientos, lesiones graves o amputaciones.
            td Mantener las guardas instaladas y apagar el motor antes de intervenir la máquina.
          tr
            td Locativo
            td Trabajo en pendientes o cerca de bordes de canales.
            td Vuelco del tractor y lesiones graves.
            td Utilizar la estructura ROPS y el cinturón de seguridad, y operar según las condiciones del terreno.
          tr
            td Físico
            td Exposición prolongada al ruido del motor o de los implementos.
            td Pérdida auditiva y fatiga.
            td Realizar mantenimiento, reducir la exposición y utilizar protección auditiva cuando corresponda.
          tr
            td Químico
            td Manipulación de combustibles o productos agroquímicos.
            td Irritación, intoxicación o quemaduras químicas, según la sustancia.
            td Consultar las fichas de datos de seguridad y utilizar los elementos de protección requeridos.
          tr
            td Biomecánico
            td Jornadas prolongadas en posición sentada o manipulación manual de piezas pesadas.
            td Dolor lumbar, fatiga y lesiones musculoesqueléticas.
            td Ajustar el puesto de operación, organizar pausas y utilizar técnicas seguras de manipulación.
          tr
            td De tránsito
            td Desplazamiento de maquinaria por vías rurales.
            td Colisiones, atropellamientos y otros accidentes viales.
            td Verificar luces y señalización, respetar las normas de tránsito y asegurar condiciones adecuadas de desplazamiento.

    p.mb-0 La identificación de peligros es el punto de partida para seleccionar los elementos de protección personal y definir las medidas preventivas que correspondan a cada labor. Por esta razón, antes de operar o realizar mantenimiento a una máquina, es necesario reconocer los riesgos presentes y aplicar los controles establecidos.

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Tipos de elementos de protección personal

    p.mb-4 Los elementos de protección personal (EPP) son dispositivos o prendas que utiliza el trabajador para reducir la exposición a peligros que pueden afectar su seguridad y salud durante las labores de mecanización agropecuaria. Su selección depende de los riesgos identificados, la actividad que se realizará y las partes del cuerpo que requieren protección.

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/img13.png" alt="")
      .col-lg-7
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Los EPP forman parte de las medidas de control del riesgo, pero no sustituyen la eliminación del peligro, la instalación de protecciones en la maquinaria ni la aplicación de procedimientos de trabajo seguro. Por ello, deben utilizarse como complemento de las demás medidas preventivas.
        p.mb-0 La selección de estos elementos debe considerar las características de la labor, el ajuste al trabajador, su estado de conservación y las indicaciones del fabricante. Asimismo, es necesario verificar su condición antes de utilizarlos, mantenerlos adecuadamente y reemplazarlos cuando estén deteriorados o hayan perdido su capacidad de protección.

    p.mb-4 A continuación, se relacionan algunos elementos de protección personal con las partes del cuerpo que protegen y las situaciones en las que pueden requerirse:

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 13.
      span Elementos de protección personal en la mecanización agropecuaria
    .tabla-a.color-acento-contenido.tema4-tabla.mb-4
      table
        thead
          tr
            th Elemento de protección personal
            th Parte del cuerpo protegida
            th Aplicación en las labores agropecuarias
        tbody
          tr
            td Protectores auditivos de copa o inserción
            td Oídos
            td Operación de maquinaria con niveles de ruido que requieren protección auditiva.
          tr
            td Gafas de seguridad o monogafas
            td Ojos
            td Labores con proyección de partículas, polvo o salpicaduras de sustancias químicas.
          tr
            td Respirador con filtro adecuado
            td Vías respiratorias
            td Actividades con polvo o exposición a sustancias que requieren protección respiratoria.
          tr
            td Guantes de protección seleccionados según el riesgo
            td Manos
            td Manipulación de sustancias químicas, piezas o implementos, de acuerdo con el tipo de guante requerido.
          tr
            td Botas de seguridad
            td Pies
            td Operación, mantenimiento y acoplamiento de implementos, según los riesgos identificados.
          tr
            td Ropa de trabajo de manga larga y protección contra el sol
            td Piel
            td Labores a campo abierto con exposición prolongada a la radiación solar.
          tr
            td Overol o traje de protección química
            td Cuerpo y piel
            td Preparación y aplicación de productos agroquímicos, según las indicaciones de la etiqueta y la ficha de datos de seguridad.

    .row.align-items-stretch.mb-4
      .col
        .tema4-nota.p-2.px-4.h-100.d-flex.align-items-center
          p.mb-0 La selección de los EPP debe realizarse de acuerdo con la evaluación de riesgos de cada actividad. No todos los elementos sirven para cualquier tarea: por ejemplo, los guantes deben elegirse según el material manipulado, y los respiradores, según el contaminante y el nivel de exposición. Además, su uso requiere capacitación, inspección y mantenimiento para conservar su eficacia.
      .col-md-auto.order-first.order-md-last.mb-3.mb-md-0
        figure.mb-0
          img.tema4-icono(src="@/assets/curso/temas/t4/img14.svg" alt="")

    p.mb-0 La disponibilidad de los elementos de protección personal debe complementarse con equipos para atender incidentes y emergencias.

    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.4 Equipos y elementos de emergencia y sus métodos de empleo

    .row.align-items-stretch.mb-4
      .col-md-auto.mb-3.mb-md-0
        figure.mb-0
          img.tema4-icono(src="@/assets/curso/temas/t4/img15.svg" alt="")
      .col
        .tema4-nota.p-2.px-4.h-100.d-flex.align-items-center
          p.mb-0 Una emergencia es una situación que puede poner en peligro la vida o la salud de las personas, afectar los bienes o causar daños al ambiente, y que requiere una respuesta oportuna. En las labores de mecanización agropecuaria pueden presentarse incendios en la maquinaria o en áreas de cultivo, derrames de combustibles, accidentes con personas lesionadas, intoxicaciones y tormentas eléctricas durante el trabajo en campo abierto.

    p.mb-4 Para responder ante estas situaciones, es necesario disponer de equipos y elementos de emergencia adecuados, mantenerlos en condiciones de uso y capacitar al personal sobre su utilización. Entre los recursos que pueden requerirse se encuentran los extintores, los botiquines de primeros auxilios, los kits para controlar derrames, las camillas y los medios de comunicación para solicitar ayuda.

    .bloque-texto-g.bloque-texto-g--inverso.tema4-bloque-emergencia.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img
      .bloque-texto-g__texto.p-4
        p.mb-0 El método de empleo depende del tipo de equipo y de la emergencia. Por ejemplo, el extintor debe utilizarse únicamente si el fuego es incipiente, la persona sabe operarlo y existe una ruta de escape segura. Si el incendio crece o amenaza a las personas, se debe evacuar y solicitar ayuda. En caso de derrames, deben seguirse las instrucciones del producto y evitar el contacto directo con la sustancia. Ante una persona lesionada, se debe activar la atención de emergencia y evitar movilizarla cuando exista sospecha de lesiones graves, salvo que permanecer en el lugar represente un peligro inmediato.

    p.mb-4 A continuación, se presentan algunos equipos y elementos de emergencia, su finalidad y las precauciones básicas para utilizarlos:

    .tarjeta.BGF02.p-4.p-md-5.mb-4
      LineaTiempoC.color-acento-contenido(text-small)
        .row.align-items-center(titulo="a.")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/temas/t4/img17.png" alt="")
          .col-md-6
            h5 Extintor multipropósito
            p.mb-0 Permite atender incendios incipientes compatibles con el agente extintor. Para utilizarlo, se retira el pasador, se dirige la descarga hacia la base del fuego, se acciona la manija y se barre de lado a lado. Solo debe usarse si existe una salida segura y la persona sabe operarlo. Si el fuego no se controla de inmediato, es necesario retirarse y solicitar ayuda.
        .row.align-items-center(titulo="b.")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/temas/t4/img18.png" alt="")
          .col-md-6
            h5 Botiquín de primeros auxilios
            p.mb-0 Contiene materiales básicos para la atención inicial de lesiones. Se debe revisar periódicamente para comprobar que los insumos estén completos y dentro de su fecha de vencimiento. Su contenido debe utilizarse de acuerdo con la capacitación recibida.
        .row.align-items-center(titulo="c.")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/temas/t4/img19.png" alt="")
          .col-md-6
            h5 Kit para derrames
            p.mb-0 Permite contener y recoger derrames de combustibles, aceites u otras sustancias compatibles con sus materiales. Antes de utilizarlo, se debe aislar el área, consultar las indicaciones de seguridad del producto y emplear los elementos de protección requeridos.
        .row.align-items-center(titulo="d.")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/temas/t4/img20.png" alt="")
          .col-md-6
            h5 Camilla
            p.mb-0 Facilita el traslado de una persona lesionada cuando sea necesario. Se debe solicitar apoyo de personal capacitado y evitar movimientos innecesarios, especialmente cuando se sospechen lesiones en la columna o fracturas.
        .row.align-items-center(titulo="e.")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/temas/t4/img21.png" alt="")
          .col-md-6
            h5 Radio o teléfono celular
            p.mb-0 Permite comunicar la emergencia y solicitar asistencia. Al informar el incidente, se deben indicar la ubicación, el tipo de emergencia, el número de personas afectadas y los peligros presentes.

    p.mb-4 Los equipos deben ubicarse en lugares accesibles y señalizados, y mantenerse en condiciones adecuadas de uso. Asimismo, el personal debe conocer su ubicación, recibir capacitación para utilizarlos y reconocer las rutas de evacuación y los puntos de encuentro.

    p.mb-0 La preparación ante emergencias debe complementarse con medidas que permitan prevenir accidentes y reducir los riesgos.

    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.5 Medidas preventivas y sus tipos

    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Las medidas preventivas son acciones que se implementan antes de que ocurra un accidente o incidente, con el propósito de eliminar los peligros o reducir los riesgos asociados con las actividades laborales. En la mecanización agropecuaria, estas medidas deben considerar las características de la maquinaria, las condiciones del terreno, las tareas que se realizarán y las capacidades de los operarios.
        p.mb-0 Para seleccionar las medidas de prevención y control, se utiliza la jerarquía de controles, que prioriza las acciones más eficaces para intervenir los peligros. En primer lugar, se busca eliminar el peligro; si esto no es posible, se considera sustituirlo por una alternativa menos peligrosa. Después se aplican controles de ingeniería y medidas administrativas, y se complementan con los elementos de protección personal (EPP).
      .col-lg-5
        figure.mb-0
          img(src="@/assets/curso/temas/t4/img22.png" alt="")

    .row.justify-content-center.mb-4
      .col-lg-10
        .tema4-consulta-titulo.px-4.py-2
          p.mb-0 Las principales medidas preventivas aplicables a la mecanización agropecuaria son las siguientes:
    .row.justify-content-center.align-items-center
      .col-lg-10
        PasosA.color-primario.mb-4(tipo="n")
          .row.align-items-center
            .col-md-9.mb-4.mb-md-0
              h5 Eliminación
              p.mb-0 Consiste en retirar el peligro para evitar la exposición. Por ejemplo, no realizar una labor mecanizada en una pendiente que supere los límites seguros establecidos para el equipo.
            .col-md-3
              figure
                img.tema4-paso__icono(src="@/assets/curso/temas/t4/img23.svg" alt="")
          .row.align-items-center
            .col-md-3.mb-4.mb-md-0
              figure
                img.tema4-paso__icono(src="@/assets/curso/temas/t4/img24.svg" alt="")
            .col-md-9.text-md-end
              h5 Sustitución
              p.mb-0 Implica reemplazar un material, producto o procedimiento peligroso por otro que represente un riesgo menor. Por ejemplo, utilizar un producto de menor toxicidad cuando sea técnicamente viable y esté autorizado para la actividad.
          .row.align-items-center
            .col-md-9.mb-4.mb-md-0
              h5 Controles de ingeniería
              p.mb-0 Buscan aislar a las personas del peligro mediante modificaciones o dispositivos de protección. Algunos ejemplos son las guardas de los ejes de transmisión, las estructuras de protección contra vuelcos (ROPS) y las cabinas con sistemas de filtración apropiados.
            .col-md-3
              figure
                img.tema4-paso__icono(src="@/assets/curso/temas/t4/img25.svg" alt="")
          .row.align-items-center
            .col-md-3.mb-4.mb-md-0
              figure
                img.tema4-paso__icono(src="@/assets/curso/temas/t4/img26.svg" alt="")
            .col-md-9.text-md-end
              h5 Controles administrativos
              p.mb-0 Comprenden procedimientos, instrucciones y medidas de organización del trabajo para reducir la exposición a los peligros. Incluyen las inspecciones preoperacionales, la capacitación, los límites de velocidad dentro de la finca y los procedimientos de bloqueo de energía antes de realizar mantenimiento.
          .row.align-items-center
            .col-md-9.mb-4.mb-md-0
              h5 Elementos de protección personal
              p.mb-0 Protegen al trabajador frente a los riesgos que no se han podido eliminar o controlar suficientemente mediante otras medidas. Según la labor, pueden incluir protectores auditivos, gafas de seguridad, guantes o protección respiratoria.
            .col-md-3
              figure
                img.tema4-paso__icono(src="@/assets/curso/temas/t4/img27.svg" alt="")

    p.mb-4 El mantenimiento preventivo también contribuye a la seguridad de las operaciones, ya que permite identificar fallas antes de que ocasionen accidentes o interrupciones del trabajo. Por ello, es necesario revisar periódicamente los frenos, las luces, la dirección, los neumáticos y los dispositivos de protección de la maquinaria, de acuerdo con las recomendaciones del fabricante. La aplicación de estas medidas, junto con la capacitación de los operarios y el cumplimiento de los procedimientos de trabajo seguro, contribuye a reducir los riesgos durante las labores mecanizadas.

    .cajon.color-primario.p-4.mb-0
      p.mb-0 Por otra parte, el almacenamiento de combustibles, lubricantes y otras sustancias requiere medidas específicas para prevenir derrames, incendios y reacciones peligrosas. Para ello, es importante conocer las características de los productos y determinar cuáles pueden almacenarse juntos y cuáles requieren separación.

    Separador
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.6 Matriz de compatibilidad de sustancias

    .tema4-nota.overflow-hidden.mb-4
      .row.g-0.align-items-stretch
        .col-lg-7.p-4
          p.mb-4 En las empresas de servicios de mecanización agropecuaria se almacenan y utilizan sustancias como combustibles, lubricantes, anticongelantes, productos para el mantenimiento de maquinaria y, en algunos casos, fertilizantes y plaguicidas. Cuando estos productos se almacenan de manera inadecuada, pueden presentarse derrames, incendios o reacciones peligrosas que afecten a las personas, las instalaciones y el ambiente.
          .row
            .col-md-auto.mb-3.mb-md-0
              figure.mb-0
                img.tema4-icono(src="@/assets/curso/temas/t4/img28.svg" alt="")
            .col.p-0
              p.mb-0 La matriz de compatibilidad de sustancias es una herramienta que permite identificar cuáles productos pueden almacenarse juntos y cuáles requieren separación debido a los riesgos que puede generar su contacto o proximidad. Para elaborarla, se debe consultar la información de las etiquetas y las fichas de datos de seguridad (FDS), que contienen indicaciones sobre los peligros, las incompatibilidades y las condiciones de almacenamiento.
        .col-lg-5
          img.tema4-panel__imagen(src="@/assets/curso/temas/t4/img29.png" alt="")

    p.mb-4 Como criterio general, se deben separar las sustancias inflamables de aquellas que pueden favorecer la combustión, así como los ácidos de las bases cuando sus características químicas lo requieran. También se deben mantener los productos químicos separados de los alimentos, las semillas y otros materiales que puedan contaminarse. Las condiciones específicas de almacenamiento deben definirse con base en la información de seguridad de cada producto.

    p.mb-4 Una matriz simplificada puede organizarse de la siguiente manera:

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 14.
      span Matriz de compatibilidad simplificada para una bodega de mecanización
    .tabla-a.color-acento-contenido.tema4-tabla.mb-4
      table
        thead
          tr
            th Grupo de sustancias
            th.text-center Inflamables
            th.text-center Oxidantes
            th.text-center Corrosivos
            th.text-center Tóxicos
        tbody
          tr
            td Inflamables (ACPM, gasolina)
            td.text-center C
            td.text-center I
            td.text-center S
            td.text-center S
          tr
            td Oxidantes (por ejemplo, nitrato de amonio)
            td.text-center I
            td.text-center C
            td.text-center S
            td.text-center S
          tr
            td Corrosivos (por ejemplo, ácido de baterías)
            td.text-center S
            td.text-center S
            td.text-center C
            td.text-center S
          tr
            td Tóxicos (por ejemplo, algunos plaguicidas)
            td.text-center S
            td.text-center S
            td.text-center S
            td.text-center C

    .row.justify-content-center.mb-4
      .col-lg-8
        .tema4-nota.p-3.px-4
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure.mb-0
                img.tema4-icono(src="@/assets/curso/temas/t4/img30.svg" alt="")
            .col
              p.mb-1 Donde:
              ul.lista-ul--color.mb-0
                li.mb-1
                  i.fas.fa-square
                  span C = compatible según las condiciones de almacenamiento
                li.mb-1
                  i.fas.fa-square
                  span S = requiere separación
                li.mb-0
                  i.fas.fa-square
                  span I = incompatible.

    p.mb-0 La matriz es únicamente un ejemplo orientativo. La compatibilidad no debe determinarse solo por la categoría general de una sustancia, ya que depende de su composición y concentración. Por ello, antes de almacenar los productos, es indispensable consultar sus fichas de datos de seguridad y seguir las indicaciones del fabricante. Cuando se identifiquen incompatibilidades, se deben establecer condiciones de separación y almacenamiento que eviten el contacto entre sustancias y reduzcan el riesgo de incendios, derrames o reacciones peligrosas.

    Separador
    #t_4_7.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.7 Protocolo de seguridad

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t4/img31.png" alt="")
      .col-lg-7
        p.mb-4 Un protocolo de seguridad es un documento que establece los pasos que deben seguirse para realizar una actividad de manera segura y las acciones que se deben aplicar ante una situación de emergencia. En la mecanización agropecuaria, estos protocolos permiten organizar el trabajo, prevenir accidentes y orientar la actuación de los operarios durante la operación, el mantenimiento y el desplazamiento de la maquinaria.
        .cajon.color-secundario.p-4
          p.mb-0 Los protocolos deben adaptarse a la actividad que se realizará y a los peligros identificados. Entre las labores que requieren procedimientos específicos se encuentran el enganche y desenganche de implementos, el abastecimiento de combustible, la operación en pendientes, el desplazamiento de maquinaria por vías públicas y el mantenimiento de los equipos.

    .row.justify-content-center.mb-4
      .col-lg-8
        .tema4-consulta-titulo.px-4.py-2
          p.mb-0 Un protocolo de seguridad debe establecer, como mínimo, las siguientes acciones:

    SlyderF.mb-4(columnas="col-md-6 col-xl-4")
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t4/img32.svg" alt="")
        h5.text-center Preparación de la actividad
        p.mb-0.text-center Identificar los peligros, revisar las condiciones del terreno, comprobar el estado de la maquinaria y verificar que el operario cuente con la capacitación y los elementos de protección requeridos.
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t4/img33.svg" alt="")
        h5.text-center Inspección preoperacional
        p.mb-0.text-center Comprobar el funcionamiento de los frenos, la dirección, las luces, los neumáticos y los dispositivos de protección, de acuerdo con las características del equipo.
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t4/img34.svg" alt="")
        h5.text-center Ejecución segura
        p.mb-0.text-center Seguir las instrucciones del fabricante, respetar los límites de operación, mantener las protecciones instaladas y evitar la presencia de personas en zonas de riesgo.
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t4/img35.svg" alt="")
        h5.text-center Respuesta ante emergencias
        p.mb-0.text-center Conocer los medios de comunicación, las rutas de evacuación y los procedimientos para solicitar ayuda en caso de accidente, incendio o derrame.
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t4/img36.svg" alt="")
        h5.text-center Cierre de la actividad
        p.mb-0.text-center Estacionar la maquinaria en un lugar seguro, apagar el motor, retirar la llave cuando corresponda y reportar las fallas o condiciones inseguras identificadas.

    p.mb-4 La aplicación del protocolo debe verificarse periódicamente y actualizarse cuando cambien las condiciones de trabajo, la maquinaria o los procedimientos. Su cumplimiento contribuye a que las medidas de prevención se apliquen de manera consistente y a que los operarios sepan cómo actuar ante condiciones inseguras.

    .row.justify-content-center.mb-0
      .col-lg-10
        .row.align-items-stretch
          .col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img.tema4-icono(src="@/assets/curso/temas/t4/img37.svg" alt="")
          .col
            .tema4-nota.p-2.px-4.h-100.d-flex.align-items-center
              p.mb-0 Es importante que cada protocolo sea específico para la tarea, esté disponible para las personas que lo deben aplicar y se base en las instrucciones del fabricante y en los riesgos identificados para la operación.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
