<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 La planeación de los servicios agrícolas mecanizados requiere comprender las características de la empresa, el sistema de producción agropecuario y los recursos necesarios para desarrollar las labores de manera oportuna y eficiente. Factores como la disponibilidad de maquinaria, los insumos, el talento humano y los recursos financieros influyen en la organización de las actividades y en el cumplimiento de los objetivos productivos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En este contexto, la gestión de inventarios y la elaboración de presupuestos permiten prever necesidades, controlar existencias y estimar los costos asociados a la operación. Asimismo, la aplicación de medidas de seguridad y salud en el trabajo, junto con la identificación de los aspectos e impactos ambientales, contribuye a prevenir riesgos y promover prácticas responsables durante la mecanización.
        p.mb-4 A lo largo de este componente formativo se abordarán los fundamentos empresariales y productivos, las técnicas de planeación de recursos, los inventarios, los presupuestos y los criterios de seguridad y gestión ambiental. Estos conocimientos permitirán establecer bases para proyectar los recursos requeridos, de acuerdo con las condiciones de producción, los requerimientos técnicos y la normativa aplicable.
        p.mb-0 Para complementar la comprensión de los temas abordados, se recomienda acceder al siguiente video.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.h-100.mb-0
            img(
              src="@/assets/curso/temas/intro/img1.png"
              alt=""
            )

    .row.justify-content-center.align-items-center
      .col-12
        figure
          .video
            iframe(width="1331" height="749" src="https://www.youtube.com/embed/Ojw7hyIGXq4" title="Structuring, validating, and improving mechanized agricultural services" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.introduccion
  &__imagen
    width: 100%
    height: 100%
    min-height: 20rem
    object-fit: cover
    border-radius: 0.75rem

@media (max-width: 991px)
  .introduccion
    &__imagen
      min-height: 14rem
</style>
