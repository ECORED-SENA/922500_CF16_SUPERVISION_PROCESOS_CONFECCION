<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.fondo-intro.align-items-center.py-3.mb-2
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

          .fondo-intro2.row.align-items-center.mb-5.p-md-5.p-4
            .col-md-1.col-3.mx-2.mb-4.mb-md-0(data-aos="fade-right")
              img(src='@/assets/curso/temas/intro/ico.svg', alt='')
            .col-md-10(data-aos="fade-left")
              p.mb-0 Dentro de la industria textil, la corroboración de los componentes de las fibras es uno de los procedimientos más importantes; para comenzar con su estudio, lo invitamos a ver el siguiente video.

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/dKAOus_Xpns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Laboratorio textil

    p(data-aos="fade") Para la elaboración de este componente, se abordaron varios autores conocidos en 
      b.t-red laboratorio textil
      |, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
