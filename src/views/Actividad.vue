<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
    ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Planeación de servicios agrícolas mecanizados',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los fundamentos de la empresa y los sistemas de producción agropecuarios, la planeación de recursos e inventarios, los presupuestos de los servicios mecanizados y los criterios de seguridad, salud en el trabajo y gestión ambiental aplicables a la mecanización agropecuaria.<br><br>Lea la pregunta de cada ítem y seleccione la respuesta correcta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es una finalidad de la empresa agropecuaria?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar recursos para desarrollar actividades productivas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de planear las labores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar el control de los costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir todos los sistemas de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué permite reconocer el análisis de un sistema de producción agropecuario?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el valor comercial de la cosecha.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las características y la organización de la producción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo la cantidad de maquinaria disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente las obligaciones tributarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Antes de iniciar una labor mecanizada, ¿qué acción ayuda a determinar si existen recursos suficientes?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calcular únicamente el tiempo de cosecha.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solicitar maquinaria adicional sin revisar existencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Revisar la disponibilidad de maquinaria, insumos y personal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Iniciar la labor y resolver faltantes durante la operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la función principal de un inventario en la prestación de servicios mecanizados?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar solamente los gastos de combustible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer los horarios de los operarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determinar exclusivamente el precio del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Controlar las existencias de materiales, insumos y repuestos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué se busca mediante la rotación de inventarios?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener todos los productos almacenados indefinidamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Gestionar el movimiento de las existencias y evitar su permanencia innecesaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar los registros de entradas y salidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comprar materiales sin considerar la demanda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el principal propósito de la planeación de recursos en los servicios agrícolas mecanizados?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprar maquinaria nueva para todas las actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Anticipar las necesidades y organizar los recursos para ejecutar las labores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar las existencias sin considerar la demanda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir los controles sobre los costos operativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué información es pertinente para elaborar el presupuesto de un servicio agrícola mecanizado?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los costos de posesión y operación de la maquinaria.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente el nombre del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo el número de trabajadores de la región.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente las condiciones del clima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la utilidad de un presupuesto para un servicio mecanizado?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar que se registren los gastos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar que nunca existan imprevistos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Estimar los ingresos y gastos relacionados con el servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar el mantenimiento de los equipos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes elementos debe considerarse al elaborar el presupuesto de una labor mecanizada?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las preferencias personales del administrador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los costos de combustible y lubricantes, sin considerar otros gastos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El costo de los insumos agrícolas, exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los costos de operación y mantenimiento de la maquinaria.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la principal finalidad de elaborar un presupuesto para un servicio agrícola mecanizado?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar la cantidad de maquinaria que debe adquirir la empresa, independientemente de sus necesidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Estimar los recursos financieros necesarios para ejecutar el servicio y planificar sus gastos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reemplazar el registro de los costos reales durante la ejecución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Garantizar que la prestación del servicio no genere gastos imprevistos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es un ejemplo de peligro durante la operación de maquinaria agrícola?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El registro actualizado del inventario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La planificación anticipada de la labor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La revisión de los costos del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las partes móviles de un equipo en funcionamiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Para qué se utilizan los elementos de protección personal durante las labores mecanizadas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para sustituir todos los procedimientos de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para reducir la exposición del trabajador a determinados riesgos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para evitar la inspección de la maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para permitir el uso de equipos defectuosos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué debe hacerse ante un derrame de una sustancia utilizada en el mantenimiento de maquinaria?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aplicar el procedimiento de emergencia correspondiente y controlar el riesgo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Lavar siempre el derrame hacia el desagüe.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cubrirlo con tierra y dejarlo en el lugar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Continuar la labor sin informar a nadie.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué información resulta fundamental para evaluar la compatibilidad de sustancias químicas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color de los envases únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El orden en que se compraron las sustancias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La información de seguridad específica de cada sustancia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El tamaño del almacén exclusivamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es la función principal de un protocolo de seguridad durante las labores de mecanización agrícola?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer pautas para prevenir riesgos y actuar ante situaciones de emergencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar el uso de elementos de protección personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Autorizar la operación de maquinaria sin inspecciones previas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de capacitar al personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'En la mecanización agropecuaria, ¿cuál es un ejemplo de aspecto ambiental?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La pérdida de calidad del agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La contaminación del suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La disminución de la biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La generación de aceite usado durante el mantenimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué práctica ayuda a reducir la compactación del suelo durante las labores mecanizadas?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar los recorridos de maquinaria pesada sobre suelo húmedo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evitar el tránsito de maquinaria cuando el suelo está demasiado húmedo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Retirar toda la cobertura vegetal del terreno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar recorridos sin planificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál de las siguientes prácticas contribuye a prevenir impactos ambientales durante la mecanización agrícola?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Realizar el mantenimiento preventivo de la maquinaria para reducir fugas y emisiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verter los aceites usados directamente al suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar las franjas de protección de las fuentes hídricas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Almacenar los filtros usados sin aplicar medidas de manejo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el propósito de la normativa ambiental aplicable a las actividades agropecuarias?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la necesidad de planear las labores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Autorizar cualquier forma de disposición de residuos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Orientar la protección de los recursos naturales y el manejo de aspectos ambientales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar los procedimientos de mantenimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Una empresa mecanizada va a trabajar cerca de viviendas rurales. ¿Qué acción incorpora mejor el contexto social en su planeación?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar las inquietudes de los habitantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Operar sin considerar horarios ni condiciones del entorno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar informar sobre las actividades previstas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comunicar las labores previstas y aplicar medidas para reducir molestias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos de la planeación de recursos, la elaboración de presupuestos y la aplicación de medidas de seguridad y gestión ambiental en los servicios agrícolas mecanizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
