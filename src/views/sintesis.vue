<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
   
    p.mb-4 A continuación, lo invitamos a ver una síntesis del componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img.px-md-4(src="@/assets/curso/temas/sintesis.svg", alt="El proceso de elaboración de tejidos es: materia prima, extracción de la fibra, proceso de la transformación de la fibra, análisis de muestras y ensayos de laboratorio, obtención del hilo, tejidos, procesos textiles y normatividad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

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
