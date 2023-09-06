<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Laboratorio textil

    .row.fondo-t1.align-items-center.py-3.mb-2
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

          .row.justify-content-center.mb-3
            .col-lg-8.mb-4(data-aos="fade-right")
              .cajon.color-secundario.p-4.mb-4
                p.mb-0 Un laboratorio textil es un espacio ambientado con condiciones específicas que propician la aplicación de ensayos en la identificación de fibras textiles, comportamiento y estructura de los diferentes tejidos planos, de punto y no tejidos. Para que este espacio funcione entorno a la aplicación de ensayos técnicos y no técnicos, se hace indispensable emplear equipos en los que se desarrollen los diferentes análisis de corte cualitativo y cuantitativo, asimismo, las condiciones óptimas en las que estos deben ejecutarse, con la finalidad de evitar malinterpretación en los datos obtenidos y que estos puedan ser fiables y verificables.
              p 
                b.t-red El SENA posee uno de los laboratorios textiles más importantes en Latinoamérica, dado que su estructura tiene las condiciones óptimas en las que se desarrollan ensayos de acuerdo con normatividad técnica y con criterios de calidad que exigen los diferentes organismos de la industria textil, como la ONAC (Organismo Nacional de Acreditación). 
                | Esto ha hecho que el SENA obtenga la acreditación del Laboratorio de Calidad Textil hasta el año 2025, con proyección de renovación. Actualmente, más de quinientas empresas a nivel nacional e internacional realizan aproximadamente 22 ensayos que cuentan con acreditación, como los de resistencia a roturas, desgarre de las telas, solidez en el color sometidos a frote, entre otros. (SENA, 2020)  
            .col-lg-4.col-md-6.col-9.mb-4.ps-md-0(data-aos="fade-left")
              img(src='@/assets/curso/temas/t1/img.png' alt='')

          .col-lg-10.mb-5(data-aos="fade-down")   
            .tarjeta.bg-color-secundario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-lg-4
                  img.px-lg-4(src="@/assets/curso/temas/t1/video.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Certificación Laboratorio Textil 
                      p.mb-0 Observe el siguiente video, podrá visualizar generalidades del laboratorio textil SENA.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="('https://youtu.be/45ORlEwcfqs')" target="_blank")
                        span Ver video
                        i.fas.fa-video

          .col-md-12
            .subt.mb-4(data-aos="fade")   
              img.me-2(src='@/assets/curso/temas/t1/boton.svg' alt='' style="width: 40px;") 
              h3.text-white.mb-0.pe-5 Equipos de medición
            p.mb-4(data-aos="fade") A lo largo de la historia, los seres humanos han desarrollado todo tipo de artefactos que les permiten solventar las necesidades presentadas en el día a día. En el contexto textil, fueron muchos años en los que se actualizaron constantemente los procesos para lograr los resultados esperados, haciendo uso de los materiales existentes (Pesok, 2012). Con el paso del tiempo y gracias al desarrollo de nuevas tecnologías, se generaron nuevas alternativas de uso de distintos elementos, para lograr la funcionalidad esperada de acuerdo con lo que demanda el contexto.

          .col-md-4.pe-md-0.mb-4.mb-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/t1/img2.png' alt='')
          .col-md-8.ps-md-0.mb-4.mb-md-0(data-aos="fade-left")
            .bg-1.h-100.p-4.px-md-5.d-flex.align-items-center
              p.mb-0 Teniendo en cuenta lo anterior, a medida que los tiempos cambiaron, las necesidades fueron otras y se solventaron con ayuda de la tecnología, fueron creados diversos equipos para desarrollar funciones precisas con relación al amplio espectro de la calidad en el mundo textil. De acuerdo con las funcionalidades y el avance tecnológico, se han definido diversos tipos de equipos o máquinas directamente relacionados con el acabado del producto final que permiten evaluar si realmente el resultado cumple con los estándares establecidos.

          .col-md-12.mt-5
            .subt.mb-4(data-aos="fade")   
              img.me-2(src='@/assets/curso/temas/t1/boton.svg' alt='' style="width: 40px;") 
              h3.text-white.mb-0.pe-5 Tipos de equipos
          
          .col-lg-8.mb-4.mb-md-0(data-aos="fade-right")
            .bg-blue.p-4.mb-4
              p.mb-0 A partir del avance tecnológico, la industria textil se fue ajustando a las necesidades del mercado, logrando mejores resultados con la adaptación de equipos industriales capaces de optimizar recursos, medir los procesos y obtener productos de alta calidad.
            p De esta manera, se generaron nuevos equipos que miden dichos acabados. Entendiendo que hay una gran cantidad de maquinaria para medir un sinfín de productos, se han determinado los siguientes equipos según su función de medición de fibras textiles, color y diversas propiedades:
          .col-lg-4.d-none.d-lg-block.mb-4.mb-md-0(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.png' alt='')

          h4.t-red.mt-5(data-aos="fade") A. Equipos de medición de las fibras
          p.mb-4(data-aos="fade") Estos equipos de medición se enfocan en evaluar aspectos característicos de las fibras textiles en cuanto a sus diferentes elementos compositivos. Entre una gran variedad, se destacan los siguientes:

          .col-md-12
            .tarjeta.fondo-slider.p-4.pt-5
              SlyderA(tipo="b" data-aos="fade-down")
                .row.justify-content-center
                  .col-lg-6
                    h4 Microscopio de proyección
                    p Este equipo amplía la imagen de un textil para ser proyectada en una pantalla, lo cual facilita la medición del diámetro de 100 fibras con una regla graduada. Esta información permitirá construir un histograma para determinar la finura media en micras y su coeficiente de variación (CV%). Sin embargo, se destaca que no es un método muy práctico, por lo que consume bastante tiempo en su aplicación (Pesok, 2012).
                  .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide-img1.png' alt='')
                .row.justify-content-center
                  .col-lg-6
                    h4 #[em Air Flow Meter] o Medidor de Flujo de Aire
                    p Este equipo permite realizar una medición del flujo de aire a presión constante o determina la caída de presión a flujo constante y usualmente se aplica sobre lana, aunque también puede utilizarse en algodón. (Pesok, 2012)
                    p Su función consiste en pasar una corriente de aire a través de una muestra del tejido de fibras que han pasado por el proceso de lavado y cardado. Para utilizar dicho equipo, se hace uso de la siguiente fórmula, la cual determina la caída de presión teniendo en cuenta el diámetro de la fibra:
                    img.mx-auto.mb-4(src='@/assets/curso/temas/t1/form.svg' alt='El caudal es igual a la multiplicación de las constantes del aparato y la variable constante, dividido 1 menos la constante e por la constante L.' style="width: 350px")
                    p.mb-0 Donde: 
                    p.mb-0 Q = caudal que se mide a través del rotámetro.
                    p.mb-0 d= diámetro de la fibra.
                    p.mb-0 K, A, L, e = constantes del aparato.
                    p ΔP = Variable constante.
                  .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide-img2.png' alt='')
                .row.justify-content-center
                  .col-lg-6
                    h4 Optical Fibre Diameter Analyser (OFDA)
                    p Al igual que un microscopio, este equipo permite ampliar la imagen de cada una de las fibras de un textil al usar una cámara de video para observarlas a través de una pantalla, lo cual facilita la medición del diámetro aparente de dichas fibras (Pesok, 2012).
                  .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide-img3.png' alt='')
                .row.justify-content-center
                  .col-lg-6
                    h4 Sirolan-Laserscan o Escáner Láser Sirolan
                    p Este equipo desarrollado en Australia permite medir el diámetro aparente de la fibra textil utilizando un rayo láser, al sumergirla en un líquido determinado; cada una de las fibras pasa por la zona de medición que facilita su observación. (Pesok, 2012). 
                  .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide-img4.png' alt='')
                .row.justify-content-center
                  .col-lg-6
                    h4 Micronaire
                    p Este equipo permite medir la finura de la fibra textil que se relaciona con el diámetro de ésta. Además, los valores determinados en este equipo tienen influencia directa en la madurez de la fibra, de esta forma, los valores bajos hacen referencia a fibras maduras o aquellas que por su naturaleza son finas. (Pesok, 2012)
                  .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide-img5.png' alt='')
                .row.justify-content-center
                  .col-lg-6
                    h4 High Volume Instrument (HVI)
                    p Este equipo, que en español significa “instrumento de medición de altos volúmenes de fibra”, es utilizado para medir en muy poco tiempo una gran cantidad de características de fibras textiles, como la finura, el color, la madurez, entre otros.
                  .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide-img6.png' alt='')

    
    h4.t-red.mb-4(data-aos="fade") B. Equipos de medición de características textiles
    p.mb-4(data-aos="fade") Después de conocer los equipos que permiten medir las partes más pequeñas de un textil, es decir, las fibras, es momento de conocer aquellos instrumentos que permiten evaluar las distintas características de las telas. Teniendo en cuenta que hay una gran variedad, se han destacado los siguientes:

    .row.fondo2-t1.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-3.d-none.d-lg-block.mb-4.mb-md-0
            img(src="@/assets/curso/temas/t1/img4.png")
          .col-lg-9.mb-4.mb-md-0
            SlyderE.bg-white.p-4.p-md-5(indicadores="derecha")
              .row
                .col-lg-7.mb-4.mb-md-0
                  h4.t-red Lupas
                  p Este sencillo artefacto permite visualizar de mejor manera un tejido para contar sus hilos e identificar sus diseños (Universidad Técnica del Norte, 2020).
                .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide2-img1.png', alt='')
              .row
                .col-lg-7.mb-4.mb-md-0
                  h4.t-red Torsiómetro
                  p Este equipo permite determinar la cantidad de torsiones o vueltas que son capaces de formar los diferentes hilos que componen un hilo compuesto. Su función se centra en generar tensión en el hilo que se ha sujetado de los dos extremos. Al encender el aparato, los hilos empiezan a girar para deshacer la torsión de cada uno de ellos. (Universidad Técnica del Norte, 2020)
                .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide2-img2.png', alt='')
              .row
                .col-lg-7.mb-4.mb-md-0
                  h4.t-red Dinamómetro
                  p Este instrumento de medición no se utiliza en tejidos, pero se puede aplicar en telas, piel y demás materiales, permitiendo identificar una gran cantidad de variaciones que puede sufrir el material al aplicar una fuerza diferente, como la tensión, el desgarre, la flexión, rotura, etc. (Universidad Técnica del Norte, 2020)
                .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide2-img3.png', alt='')
              .row
                .col-lg-7.mb-4.mb-md-0
                  h4.t-red Martindale
                  p Este equipo permite medir el nivel de abrasión de una tela. Para ello, se debe ubicar el material en las capas inferiores del instrumento de medición y se continúa con la frotación del abradante, que usualmente puede estar compuesto de lana peinada o malla de alambre. Al realizar este procedimiento, será posible identificar el nivel de desgaste, establecer si hay un cambio de apariencia o la durabilidad de los hilos al momento en que se rompen. (Bastos, 2019)
                .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide2-img4.png', alt='')
              .row
                .col-lg-7.mb-4.mb-md-0
                  h4.t-red Flexiburn
                  p Este equipo permite medir el nivel de inflamabilidad de un textil y la facilidad de propagación de la llama sobre la tela, lo cual está directamente relacionado con la seguridad de los materiales con los que se fabrican textiles del hogar como cortinas, tapicerías, etc. (Bastos, 2019)
                .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide2-img5.png', alt='')
              .row
                .col-lg-7.mb-4.mb-md-0
                  h4.t-red Elmatear
                  p Este equipo permite medir el nivel de desgarre de un material textil, haciendo uso del método balístico. El instrumento se manipula a través de un mecanismo electrónico que contiene un conjunto de pesas para tratar la tela y evaluar su resistencia. (Bastos, 2019)
                .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide2-img6.png', alt='')
              .row
                .col-lg-7.mb-4.mb-md-0
                  h4.t-red Medidor de arrugas
                  p Como su nombre lo indica este equipo permite medir el nivel de recuperación de arrugas que se genera en un material textil. Este funciona con un conjunto de pesas que se aplican en la tela para contraerla, de la cual se evalúa su capacidad para regresar a su estado. (Bastos, 2019)
                .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide2-img7.png', alt='')
              .row
                .col-lg-7.mb-4.mb-md-0
                  h4.t-red Flexiframe
                  p Este equipo permite definir el nivel de estiramiento y restablecimiento de tejidos textiles. Para hacer uso de este, el instrumento posee una serie de pesas y enganches donde se sujeta el material textil para realizar los distintos ensayos que se requieran. (Bastos, 2019)
                .col-lg-5
                    img(src='@/assets/curso/temas/t1/slide2-img8.png', alt='')


    h4.t-red.mb-4(data-aos="fade") C. Equipos de medición de color
    p.mb-4(data-aos="fade") Los diferentes tipos de medición en cuanto al color de un textil se llevan a cabo utilizando diversos equipos o instrumentos que, dependiendo de la característica que se desea comprobar, es cómo se aplican; entre ellos, se encuentran: 

    LineaTiempoD.color-primario.mb-5(data-aos="fade-down")
      .row(numero="1" titulo="Espectrofotómetro de reflectancia")
        .col-md-7.mb-4.mb-md-0
          p Este equipo permite medir a nivel general el color y los matices de un elemento opaco. Especialmente en el material textil, este instrumento facilita conocer la cantidad de luz que refleja una superficie. El uso de este artefacto radica en iluminar la muestra elegida con una luz blanca y determinar la cantidad de luz que se refleja en el material textil, a través de secuencias de longitudes de onda. (Lockuán, 2012)     
        .col-md-5
          img(src='@/assets/curso/temas/t1/acord-img1.png', alt='')
      .row(numero="2" titulo="Frotímetro")
        .col-md-7.mb-4.mb-md-0
          p Este equipo permite determinar la resistencia del color de un material textil al aplicarle frote. Para ello, se utiliza un paño de algodón seco o húmedo, con lo cual se determinarán los efectos producidos en las dos pruebas, donde el color que permanece en la superficie se medirá en una escala de grises, de 1 a 5; en el menor valor, se evidencian cambios profundos en el textil, y el de mayor valor indica que no existen cambios notables. (Bastos, 2019)
        .col-md-5
          img(src='@/assets/curso/temas/t1/acord-img2.png', alt='')
      .row(numero="3" titulo="Incubator – Estufa eléctrica")
        .col-md-7.mb-4.mb-md-0
          p Este equipo facilita el secado de muestras textiles para determinar la fijación del color a la tela en cuanto al contacto con el agua, la transpiración y demás líquidos. Para ello, se debe introducir el material a evaluar y esperar un tiempo determinado para conocer los resultados. (Universidad Técnica del Norte, 2020)
        .col-md-5
          img(src='@/assets/curso/temas/t1/acord-img3.png', alt='')
      .row(numero="4" titulo="Trufade")
        .col-md-7.mb-4.mb-md-0
          p Este equipo ofrece resultados consistentes en cuanto a la medición de la resistencia del color en los materiales textiles que se exponen a la luz, lo cual se realiza al introducir dicha muestra y se especifica lo que se va a realizar a través del tablero táctil. Además, con este instrumento es posible realizar pruebas como la ISO 105-B02 e ISO 105-B04. (Bastos, 2019)
        .col-md-5
          img(src='@/assets/curso/temas/t1/acord-img4.png', alt='')
      .row(numero="5" titulo="Perspirómetro")
        .col-md-7.mb-4.mb-md-0
          p Al igual que el incubator, este equipo permite realizar medición de la solidez del color de un material textil al entrar en contacto con distintos líquidos, como el agua, el agua de mar o el sudor. Para usar este instrumento, se debe remojar la muestra a estudiar y se somete a una constante presión contra una tela blanca, para determinar el nivel de transferencia de color; además, se mantiene a una temperatura de 38°C. A partir de esto, se mide el cambio del color de la primera muestra y su transferencia en la otra.
          p Según el portal web Suttex (2018), este equipo cumple con los estándares AATCC15, AATCC 106, AATCC 107 e ISO 105.
        .col-md-5
          img(src='@/assets/curso/temas/t1/acord-img5.png', alt='')
      .row(numero="6" titulo="Cámara de luces")
        .col-md-7.mb-4.mb-md-0
          p Este equipo permite evaluar el color de un tejido, visualizando su iluminación, matices y demás elementos que intervienen en la medición cromática. Este instrumento facilita la eliminación de problemas generados por la variación de la luz y asegura la precisión del color, elevando la calidad del producto final. (Bastos, 2019)
        .col-md-5
          img(src='@/assets/curso/temas/t1/acord-img6.png', alt='')
      .row(numero="7" titulo="Plancha térmica")
        .col-md-7.mb-4.mb-md-0
          p Este equipo permite determinar la fijación del color a un textil al entrar en contacto con el calor seco, la aplicación de sublimación y la contracción de los tejidos. Para su uso, se introduce la muestra y se controla la temperatura en el tablero de control.       (Bastos, 2019)
        .col-md-5
          img(src='@/assets/curso/temas/t1/acord-img7.png', alt='')


    .row.justify-content-center 
      .col-lg-10.mb-5(data-aos="fade-down")  
        .tarjeta.bg-color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-4(src="@/assets/curso/temas/t1/pdf.svg")
            .col.ps-md-0
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Reglamento Laboratorio Textil y Gestión Industrial – SENA  
                  p.mb-0 Le invitamos a revisar las normas del laboratorio SENA, donde se detallan las reglas sobre cómo se debe administrar y mantener seguro el lugar mientras se realizan diferentes actividades.	
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo-1_REGLAMENTO_LABORATORIO_TEXTIL_SENA.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-download 

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
