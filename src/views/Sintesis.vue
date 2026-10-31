<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 El componente formativo aborda los fundamentos de las empresas y los sistemas de producción agropecuarios, así como los métodos para planear los recursos necesarios para la prestación de servicios agrícolas mecanizados. Incluye la gestión de inventarios, la elaboración de presupuestos y el análisis de los costos asociados a la maquinaria. Asimismo, contempla los requisitos de seguridad y salud en el trabajo, la identificación de peligros y riesgos, las medidas preventivas y los protocolos de seguridad. Finalmente, desarrolla los aspectos ambientales relacionados con la mecanización, sus principales problemáticas, la normativa aplicable y la importancia de considerar el contexto social para promover prácticas productivas seguras, eficientes y responsables.

    .row.justify-content-center
      .col-lg-12.mb-4.bgs.p-4.brad
        figure
          img(
            src="@/assets/curso/sintesis.svg"
            alt="La síntesis presenta la planeación de servicios agrícolas mecanizados, organizada en cinco temas: empresa y sistemas de producción agropecuarios, planeación de recursos e inventarios, presupuestos, seguridad y salud en el trabajo, y aspectos ambientales de la mecanización."
          )
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg" alt="")
          .anexo__texto
            p.mb-0 Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
