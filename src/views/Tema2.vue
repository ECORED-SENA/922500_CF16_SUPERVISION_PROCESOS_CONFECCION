<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis y desarrollo de muestras

    .row.fondo-t2.align-items-center.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          
          .row.justify-content-center.mb-5
            .col-lg-4.col-md-8.pe-lg-0(data-aos="fade-right")
              img(src='@/assets/curso/temas/t2/img.png' alt='')
            .col-lg-6.ps-lg-0(data-aos="fade-left")
              .bg-2.h-100.p-4.px-md-5.d-flex.align-items-center
                p.mb-0 Como se pudo observar anteriormente, hay un método en el que se pueden desarrollar pruebas para determinar la composición de una fibra junto con los atributos que contiene, una vez estas pasan por un proceso de combustión. Esto, en gran parte, es insumo en las pruebas que se llevan a cabo dentro de un laboratorio textil. En este apartado, se ahondará más en la identificación de fibras a través de ensayos técnicos; por ello, tenga presente que son dos grupos los que se establecen en este proceso, siendo el segundo el que se abordará.

          .col-md-10
            .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")   
              p.mb-0 #[b Figura 1.] Tipos de ensayos 
            figure.mb-4(data-aos="fade-down")    
              img(src='@/assets/curso/temas/t2/fig.svg' alt='Los tipos de ensayos en identificación de fibras son: no técnicos, los cuales son por tacto o por combustión; y los técnicos, que son por observación microscópica, por solubilidad química, por determinación del punto de fusión, por gravedad específica, por teñido y  por espectroscopía infrarroja.')
              figcaption.mt-3
                p.mb-0 Nota. Tomado de Lockuán (2013).
            p.mb-0(data-aos="fade") En la realización de ensayos técnicos, se emplean instrumentos y equipos bajo los cuales se determinan ciertas características que deben conducir a estándares establecidos, de acuerdo con la composición de una fibra textil, esto hace que los ensayos puedan ser de corte cualitativo, relacionados con su apariencia y comportamiento, y cuantitativos, enfocados en el peso y porcentaje de la mezcla total de una fibra.


    Separador

    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.1 Método microscópico

    p.mb-4(data-aos="fade") Este método consiste en observar a través de un microscopio las fibras textiles para determinar características que son comparadas con microfotografías de patrones, estas deberán coincidir para constatar la base principal de una fibra, y para ello se pueden realizar dos procedimientos:    

    .row.fondo2-t2.align-items-center.py-3.mb-2
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

          .col-md-6.mb-4(data-aos="fade-right")
            .hover-1.tarjeta.bg-blue2.p-4.d-flex.align-items-center
              img.me-4(src='@/assets/curso/temas/t2/ico1.svg' alt='' style="width: 110px;")
              h4.mb-0 Análisis de la fibra según vista longitudinal.
          .col-md-6.mb-4(data-aos="fade-left")
            .hover-1.tarjeta.bg-blue2.p-4.d-flex.align-items-center
              img.me-4(src='@/assets/curso/temas/t2/ico2.svg' alt='' style="width: 110px;")
              h4.mb-0 Análisis de la fibra según vista transversal.
          
          p.mb-4(data-aos="fade") En este método, los resultados del análisis son de corte cualitativo, es especialmente aplicado cuando existe mezcla de fibras; pasa a ser cuantitativo una vez se realizan los suficientes ensayos para reducir el margen de error en las conclusiones a las que se llega una vez finaliza este proceso. 

          .col-lg-8.mb-4(data-aos="fade-right")
            .bg-3.p-4.mb-4
              p.mb-0 Suele emplearse con mayor frecuencia en el análisis de fibras naturales, dado que las estructuras de las diferentes variantes son muy características y ya se encuentran parametrizadas, lo contrario a las fibras manufacturadas, en las que su estructura puede llegar a variar. Por ende, no será fiable determinar por este método el análisis de una fibra artificial o sintética.  
            p Las microfotografías de fibras consisten en resaltar las características principales de las fibras de acuerdo con las vistas longitudinal y transversal, mostradas en una sección longitudinal a 250 aumentos (250X) o 500 aumentos (500X) (Lockuán, 2013). Para ello, se muestra a continuación cómo se pueden llegar a identificar según una vista en particular:
          .col-lg-4.d-none.d-lg-block.mb-4.ps-md-0(data-aos="fade-left")
            img(src='@/assets/curso/temas/t2/img2.png' alt='')

          .col-lg-10
            .subt.mb-4(data-aos="fade")   
              img.me-2(src='@/assets/curso/temas/t1/boton.svg' alt='' style="width: 40px;") 
              h3.text-white.mb-0.pe-5 Identificación de fibras según vista longitudinal
            
            p.mb-4(data-aos="fade") Esta vista consiste en observar una determinada fibra o elemento a lo largo de su eje longitudinal, lo que permite observar:

          .row.justify-content-center.align-items-center.mb-3
            .col-lg-3.col-md-4.mb-4.hover-mini
              .row
                .col-md-9.col-9.pe-0.px-md-0
                  .bg-part-1.h-100.p-3
                    p.mb-0 Forma, irregularidades, circunvoluciones, escamas.
                .col-md-3.col-3.ps-0
                  .bg-part-2.h-100.p-lg-3.p-1.d-flex.align-items-center
                    img.mx-auto(src='@/assets/curso/temas/t2/ico3.svg' alt='' style="width:34px;")
            .col-lg-4.col-md-4.mb-4
              img(src='@/assets/curso/temas/t2/img3.svg' alt='')
            .col-lg-3.col-md-4.mb-4.hover-mini
              .row
                .col-md-9.col-9.pe-0
                  .bg-part-1.h-100.p-3
                    p.mb-0 Partículas de pigmentos mateados o deslustrados.
                .col-md-3.col-3.ps-0
                  .bg-part-2.h-100.p-lg-3.p-1.d-flex.align-items-center
                    img.mx-auto(src='@/assets/curso/temas/t2/ico3.svg' alt='' style="width:34px;")
            .col-lg-3.col-md-4.mb-4.hover-mini
              .row.h-100
                .col-md-9.col-9.pe-0.px-md-0
                  .bg-part-1.h-100.p-3
                    p.mb-0 Nudos o conjunto de fibras muy unidas.
                .col-md-3.col-3.ps-0
                  .bg-part-2.h-100.p-lg-3.p-1.d-flex.align-items-center
                    img.mx-auto(src='@/assets/curso/temas/t2/ico3.svg' alt='' style="width:34px;")
            .col-lg-3.col-md-4.mb-4.hover-mini
              .row.h-100
                .col-md-9.col-9.pe-0
                  .bg-part-1.h-100.p-3
                    p.mb-0 Estrías formadas a lo largo del eje longitudinal.
                .col-md-3.col-3.ps-0
                  .bg-part-2.h-100.p-lg-3.p-1.d-flex.align-items-center
                    img.mx-auto(src='@/assets/curso/temas/t2/ico3.svg' alt='' style="width:34px;")
            .col-lg-3.col-md-4.mb-4.hover-mini
              .row.h-100
                .col-md-9.col-9.pe-0
                  .bg-part-1.h-100.p-3
                    p Color y sus diferencias. 
                .col-md-3.col-3.ps-0
                  .bg-part-2.h-100.p-lg-3.p-1.d-flex.align-items-center
                    img.mx-auto(src='@/assets/curso/temas/t2/ico3.svg' alt='' style="width:34px;")        
                
          .col-lg-10.mb-5
            p.mb-4(data-aos="fade") En la siguiente tabla se presentan las características de las fibras en una vista longitudinal.

            .titulo-sexto.color-acento-contenido(data-aos="fade")  
              p.mb-0 #[b Tabla 1.]  Aspecto microscópico de fibras textiles en vista longitudinal
            .tabla-a.color-acento-contenido(data-aos="fade-down")  
              table
                caption.bg-white.mt-2
                  p.mb-0 Nota. Tomado de Lockuán (2013, p. 115).
                thead
                  tr
                    th.colum-30 Fibra
                    th Aspecto longitudinal 
                tbody.bg-white
                  tr
                    td.text-center Algodón
                    td Forma de cinta con frecuentes torsiones, en algunas con cambio de dirección. En fibras aún no maduradas, se encuentran paredes delgadas y algunas torsiones.
                  tr
                    td.text-center Lana
                    td Presencia de escamas.
                  tr
                    td.text-center Alpaca, mohair y cashmere
                    td La superficie de esta fibra presenta escamas finas con piel suave.
                  tr
                    td.text-center Lino
                    td Presencia de nudos y dislocaciones transversales muy similares a las de la caña de azúcar.
                  tr
                    td.text-center Rayón viscosa
                    td Presencia de estrías paralelas en los bordes. 
                  tr
                    td.text-center Acetato y triacetato
                    td Posee un aspecto liso, con presencia de algunas estrías paralelas.
                  tr
                    td.text-center Nylon 6.6
                    td Con apariencia cilíndrica y liso, bordes remarcados y de color negro.
                  tr
                    td.text-center Nylon trilobal
                    td Con presencia de estrías longitudinales.
                  tr
                    td.text-center Dralón y orlón
                    td Es similar a una cinta, pero con escasa tensión, remarcado con rayas a lo largo del eje.
                  tr
                    td.text-center Poliéster 77
                    td Con forma cilíndrica y liso. 
          
          .col-lg-10(data-aos="fade-down")   
            .tarjeta.bg-color-secundario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-lg-4
                  img.px-lg-3(src="@/assets/curso/temas/t1/video.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Identificación fibras  
                      p.mb-0 Le invitamos a revisar el siguiente video donde se detalla el proceso de identificación de fibras por microscopía óptica.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="('https://youtu.be/wu3aDXIOEaU')" target="_blank")
                        span Ver video
                        i.fas.fa-video
    
    .row.justify-content-center
      .col-md-10
        .subt.mb-4(data-aos="fade")   
          img.me-2(src='@/assets/curso/temas/t1/boton.svg' alt='' style="width: 40px;") 
          h3.text-white.mb-0.pe-5 Identificación de fibras textiles según vista transversal
      .row.justify-content-center.mb-3
        .col-lg-2.col-md-2.col-5.mb-3(data-aos="fade-right")  
          .p-lg-4.p-2.bg-blue5.h-100
            img.px-lg-4(src='@/assets/curso/temas/t2/ico4.svg' alt='') 
        .col-lg-8.col-md-10.mb-3(data-aos="fade-left")  
          .p-4.bg-blue6.h-100.d-flex.align-items-center
            p.mb-0 Esta vista consiste en observar una determinada fibra o elemento de frente; se emplean láminas metálicas con agujeros donde es introducida la fibra; posteriormente, se corta y se inicia la observación a través del microscopio.

    p.mb-4(data-aos="fade") A continuación, observará las formas de diferentes fibras con vista transversal:

    .row.fondo3-t2.align-items-center.py-4.pt-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-end.mb-4

          .col-lg-3.d-none.d-lg-block.mb-4.mb-md-0
            img(src="@/assets/curso/temas/t2/img4.png")
          .col-lg-9.mb-4.mb-md-0
            SlyderE.bg-white.p-4(indicadores="derecha")
              .row.justify-content-center
                h4.t-red Forma de la sección 
                .col-md-4.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img1-1.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Circular
                .col-md-4.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img1-2.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Triangular
                .col-md-4.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img1-3.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Cinta irregular lobulada 
              .row.justify-content-center
                h4.t-red Variabilidad en el tamaño de todas las fibras 
                .col-md-4.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img2-1.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Trilobal 
                .col-md-4.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img2-2.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Irregular  
                .col-md-4.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img2-3.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Circular, diámetros variables 
              .row.justify-content-center
                h4.t-red Tipo de estructura 
                .col-md-6.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img3-1.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Sólida 
                .col-md-6.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img3-2.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Hueca 
              .row.justify-content-center
                h4.t-red Formas especiales 
                .col-md-4.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img4-1.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Matriz fibrilar 
                .col-md-4.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img4-2.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Núcleo  concéntrico 
                .col-md-4.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img4-3.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Núcleo cubierto concéntrico 
              .row.justify-content-center
                h4.t-red Contornos
                .col-md-4.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img5-1.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Lobulada
                .col-md-4.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img5-2.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Aserrada  
                .col-md-4.col-8.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/slide-img5-3.png', alt='')
                  .p-3.text-center.bg-color-secundario.borders-bottom
                    h5.mb-0 Angular       
                    

    p.mb-4(data-aos="fade") En la siguiente tabla, se determinan características de fibras con aspecto transversal.

    .row.justify-content-center
      .col-lg-10      
        .titulo-sexto.color-acento-contenido(data-aos="fade")  
          p.mb-0 #[b Tabla 2.] Fibras textiles con vista transversal
        .tabla-a.color-acento-contenido(data-aos="fade-down")  
          table
            caption.mt-2
              p.mb-0 Nota. Tomado de Lockuán (2013, p. 118).
            thead
              tr
                th.colum-30 Fibra
                th Aspecto transversal
            tbody.bg-white
              tr
                td.text-center Algodón
                td Presenta una forma similar a la de un riñón. En fibras con maduración, tienden a formarse de manera circular, poseen lumen. 
              tr
                td.text-center Lana
                td Con apariencia circular parcialmente elíptica, su fibras poseen variados diámetros.
              tr
                td.text-center Alpaca, mohair y cashmere
                td Son de forma circular.
              tr
                td.text-center Lino
                td Poseen forma poligonal y poseen un canal interior similar al algodón.
              tr
                td.text-center Rayón viscosa
                td Tienen formas irregulares, como nubes o similares a las palomitas de maíz. 
              tr
                td.text-center Acetato
                td Tienen formas irregulares, con ligeras formas lobuladas.
              tr
                td.text-center Nylon 6.8
                td Tienen forma circular y no poseen variaciones en sus diámetros.
              tr
                td.text-center Nylon trilobal
                td Tienen forma trilobal.
              tr
                td.text-center Dralón y orlón
                td Poseen forma similar a la de un hueso de perro o también a la de un maní.
              tr
                td.text-center Poliéster
                td Son, en general, con forma circular. 


    Separador

    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.2 Método de la solubilidad química
      
    .row.fondo-t2-2.align-items-center.py-3.pb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

          .col-lg-8.mb-4(data-aos="fade-right")
            p Este método consiste en fundir una fibra con agentes químicos específicos, esperando que se comporte de forma inalterable frente a otros; por ejemplo, que dos fibras de diferente origen presenten un comportamiento diferente ante ácidos, bases y solventes orgánicos. 
            .cajon.color-primario.p-4.mb-4
              p.mb-0 No es recomendable este ensayo si una muestra de fibra tiene mezcla o tiene fibras bicomponentes, como las de doble núcleo. Antes de realizar cualquier proceso de solubilidad química, es recomendable verificar estas condiciones con microscopio.  
            p A continuación, se muestran fibras pasadas por este método.
          .col-lg-4.d-none.d-lg-block.mb-4.ps-md-0(data-aos="fade-left")
            img(src='@/assets/curso/temas/t2/img2-2.png' alt='')

          .col-lg-10.mb-4
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 3.]  Identificación de fibras por disolución o solubilidad
            .tabla-a.color-acento-contenido
              table
                caption.bg-white.mt-2
                  p.mb-0 Nota. Tomado de Química textil (2014).
                thead
                  tr
                    th.colum-30 Fibras
                    th Disolución 
                tbody.bg-white
                  tr
                    td Acrílicas
                    td Disolver en ácido nítrico con concentración en frío. 
                  tr
                    td Algodón
                    td Disolver en ácido sulfúrico con concentración en frío.
                  tr
                    td Lana
                    td Disolver en sosa cáustica en un 10 %, con tiempo de ebullición de 15 minutos.
                  tr
                    td Nylon 11
                    td Disolver en ácido sulfúrico hasta llegar a la ebullición.
                  tr
                    td Nylon 6.6
                    td Disolver en ácido fórmico en un 85 % con concentración en frío.
                  tr
                    td Poliéster
                    td Disolver en ácido sulfúrico en un 70 % con concentración en frío.
                  tr
                    td Polipropileno
                    td Disolver xileno hasta llegar a la ebullición.
                  tr
                    td Rayón acetato
                    td Disolver en acetona en frío.
                  tr
                    td Rayón viscosa
                    td Disolver en acetona en frío.
                  tr
                    td Seda natural
                    td Disolver en sosa cáustica en un 10 %, con tiempo de ebullición de 15 minutos. 


    Separador

    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.3 Método del punto de fusión

    p.mb-4(data-aos="fade") Para que un elemento sólido pase a estado líquido, se requiere de cierta temperatura, a esto se le llama punto de fusión. Este método consiste en ubicar una selección de muestras de fibra sobre una placa de Petri; posteriormente, es llevada al horno, inicia con temperaturas de 10 o 20° C hasta llegar a la temperatura estimada; para que el incremento después de los 20° C se dé de manera gradual, se irá incrementado de a 2° C/min (centígrados por minuto); una vez las fibras empiecen a ablandarse y se forme una masa, este tendrá una apariencia de cobertura líquida. 

    .row 
      .col-lg-4.d-none.d-lg-block.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/img2-3.png' alt='')
      .col-lg-8.mb-4(data-aos="fade-left")
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Al igual que en el método de solubilidad, no es recomendable este ensayo si una muestra de fibra tiene mezcla o tiene fibras bicomponentes como las de doble núcleo. Antes de realizar cualquier proceso de solubilidad química, es recomendable verificar estas condiciones con microscopio. 
        p En la siguiente tabla, se muestra el comportamiento de fibras al pasarlas por este método.
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 4.] Fibras con ensayo de punto de fusión
        .tabla-a.color-acento-contenido.tabla2-3
          table
            caption.mt-2
              p.mb-0 Nota. Tomado de Lockuán (2013, p. 122).
            thead
              tr
                th Fibra
                th Punto de fusión (° c) 
            tbody.bg-white
              tr
                td Acetato
                td 260
              tr
                td Acrílica
                td No se funde
              tr
                td Asbesto
                td No se funde
              tr
                td Naturales celulósicas, rayón viscosa y modal
                td No se funden
              tr
                td Naturales proteínicas
                td No se funden
              tr
                td Poliamida 11
                td 190
              tr
                td Poliamida 6
                td 213-225
              tr
                td Poliamida 6.6
                td 256-265
              tr
                td Poliéster
                td 250-260
              tr
                td Polietileno
                td 135
              tr
                td Polipropileno
                td 170
              tr
                td Triacetato
                td 288
              tr
                td Vidrio
                td 850


    Separador

    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.4 Método de la densidad o peso específico

    .row 
      .col-lg-8.mb-4(data-aos="fade-right")
        p Este método emplea una serie de mezclas de disolventes que ayudan en la caracterización del peso o densidad que contiene una fibra en específico; 
          b.t-red consiste en determinar si la densidad de una fibra llega a ser mayor que la del líquido empleado; aquí, la muestra de una fibra se hundirá. 
          | Por el contrario, si la gravedad específica de la fibra es inferior a la del líquido, la muestra de fibra flotará sobre él. Si las densidades son iguales, la muestra de fibra alcanza la mitad del nivel del líquido. (Lockuán, 2013, p.123)
        p
          b.t-red Los solventes empleados para este ensayo suelen ser: 
        .row 
          .col-lg-6.col-md-8.mb-4.hover-mini
            .row
              .col-md-10.col-9.pe-0
                .bg-part-1.h-100.p-4
                  p.text-center.mb-0 Tetracloroetileno (p = 1,263 g/cm3)
              .col-md-2.col-3.ps-0
                .bg-part-2.h-100.p-md-3.p-4
                  img(src='@/assets/curso/temas/t2/ico2-4.svg' alt='')
          .col-lg-6.col-md-8.mb-4.hover-mini
            .row
              .col-md-10.col-9.pe-0
                .bg-part-1.h-100.p-4
                  p.text-center.mb-0 Xileno (p = 0,865 g/cm3)
              .col-md-2.col-3.ps-0
                .bg-part-2.h-100.p-md-3.p-4
                  img(src='@/assets/curso/temas/t2/ico2-4.svg' alt='')
        p Ambos solventes, vistos puros o en mezclas de volumen de: 10/90, 20/80, 30/70, 40/60, 50/50, 60/40, 70/30, 80/20 y 90/10, ofrecerán un gradiente que llega a abarcar densidades en la mayoría de las fibras textiles pasadas por este método. 
        .bg-4.mb-4.p-4.p-md-3
          .row 
            .col-md-2.col-3.mb-4.mb-md-0
              img.px-lg-3(src='@/assets/curso/temas/t2/alert.svg' alt='Alert')
            .col-md-10
              p.mb-0 Durante el proceso, se comparan las muestras de fibras con otra conocida, actuando de testigo; serán sumergidas en recipientes transparentes con alguno de los solventes mencionados anteriormente, si ambas fibras llegan a alcanzar el mismo nivel en el líquido, estas densidades serán iguales. 
        p Al igual que en los dos métodos anteriores, no es recomendable este ensayo si una muestra de fibra tiene mezcla o tiene fibras bicomponentes, como las de doble núcleo. Antes de realizar cualquier proceso de solubilidad química, es recomendable verificar estas condiciones con microscopio..
      .col-lg-4.d-none.d-lg-block.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img2-4.png' alt='')


    Separador

    #t_2_5
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.5 Método del teñido
    
    p.mb-4(data-aos="fade") Existen fibras cuya tintura y afinidad por los colorantes dependerá de su estructura química y morfológica. Suelen emplearse mezclas de colorantes con afinidades específicas en distintos tipos de fibras, que ayudan a identificar muestras sin teñir. Hay fibras que pueden llegar a teñirse en tonos similares con mezclas de colorantes, usualmente, dos o más colorantes son utilizados para confirmar la identificación de una fibra. 
    
    .row.fondo2-t2-5.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
          
          .row.mb-4
            .col-lg-8.mb-4.mb-md-0(data-aos="fade-right")
              .bg-blue4.mb-4.p-4.p-md-3
                .row 
                  .col-md-2.col-3.mb-4.mb-md-0
                    img.px-lg-2(src='@/assets/curso/temas/t2/alert.svg' alt='Alert')
                  .col-md-10
                    p.mb-0 Se establece que para que este método sea efectivo es preferible emplear fibras no teñidas o desmotadas. No es recomendable, como en los métodos anteriores, utilizar mezclas de fibras o con bicomponentes. Antes del proceso, verificar con el método del microscopio.  
              p En la siguiente tabla, se muestran los colorantes que tiñen las fibras: 
            .col-lg-4.d-none.d-lg-block.mb-4.mb-md-0(data-aos="fade-left")
              img(src='@/assets/curso/temas/t2/img2-5.png' alt='')

          .col-lg-10(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 5.] Colorantes en fibras con el método por teñido
            .tabla-a.color-acento-contenido
              table
                caption.mt-2
                  p.mb-0 Nota. Tomado de Lockuán (2013, p. 124).
                thead
                  tr
                    th.colum-30 Fibras
                    th Colorantes 
                tbody.bg-white
                  tr
                    td Acetato y triacetato
                    td Naftoles y dispersos.
                  tr
                    td Acrílico
                    td Catiónicos, dispersos y premetalizado.
                  tr
                    td Aramida
                    td Básicos.
                  tr
                    td Clorofibra
                    td A la tina en algunos, naftoles, dispersos.
                  tr
                    td Elastano
                    td Ácidos, básicos al cromo, directos que son débiles, a la tina con comportamiento débil, naftoles, dispersos, pre-metalizados y reactivos.
                  tr
                    td Fluorofibra
                    td Ninguno.
                  tr
                    td Lana
                    td Ácidos, al cromo, premetalizado y reactivos.
                  tr
                    td Modacrílico
                    td Ácidos, básicos, directos, a la tina, dispersos y premetalizado.
                  tr
                    td Naturales celulósicas, rayón viscosa y modal
                    td Directos, naftoles, sulfurosos, a la tina y reactivos.
                  tr
                    td Novoloid
                    td Catiónicos y dispersos.
                  tr
                    td Poliamida
                    td Ácidos, básicos al cromo, directos que son débiles, a la tina con comportamiento débil, naftoles, dispersos, pre-metalizados y reactivos.
                  tr
                    td Poliéster
                    td Dispersos y a la tina (especiales).
                  tr
                    td Polietileno
                    td Dispersos.
                  tr
                    td Polipropileno
                    td Ninguno.
                  tr
                    td Seda
                    td Ácidos, básicos, al cromo, a la tina (algunos), pre-metalizados y reactivos. 


    Separador

    #t_2_6
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.6 Método de la espectroscopia infrarroja

    .row.fondo-color1.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

          .col-lg-8(data-aos="fade-right")
            .bg-4.mb-4.p-4.p-md-3
              .row 
                .col-md-2.col-3.mb-4.mb-md-0
                  img.px-lg-2(src='@/assets/curso/temas/t2/alert.svg' alt='AvatarTop')
                .col-md-10
                  p.mb-0 Este método es empleado bajo determinación en grupos funcionales que conforman una fibra. Estos grupos son contenidos por un polímero que se encarga de absorber energía infrarroja con longitudes de onda de un grupo en particular, produciendo cambios en modos de vibración. El resultado de este proceso implica la absorción del espectro infrarrojo en la fibra, dentro de los grupos que llegan a identificar una fibra en particular.
            p Este ensayo es realizado a partir de porciones de fibras molidas y bajo suspensión, en los que es usado sobre una placa de sal; también suele emplearse tinturando la muestra y mezclándola con sal, formando una pastilla translúcida medida en un espectrómetro. 
            p Los grupos funcionales mencionados con los colorantes y productos implementados en los acabados pueden llegar a ser detectados con este método. 
          .col-lg-4.col-md-9(data-aos="fade-left")
            img(src='@/assets/curso/temas/t2/img2-6.png' alt='Equipo de medición de espectroscopia infrarroja')



    Separador

    #t_2_7
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.7 Otros ensayos realizados dentro de la industria textil

    p.mb-4(data-aos="fade") Existen diferentes ensayos que se realizan dentro de la industria textil y todos están ajustados de acuerdo con las necesidades de cada textilera en cuanto al producto que fabrican, por ello, no todas las empresas realizan el mismo tipo de ensayo, dado que todo se ajusta dependiendo del producto acabado. Por lo anterior, aquí se relacionan, de forma generalizada, otros que también son empleados.

    .row.fondo-t2-7.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-8.mb-4(data-aos="fade-right")
            .subt.mb-4(data-aos="fade")   
              img.me-2(src='@/assets/curso/temas/t1/boton.svg' alt='' style="width: 40px;") 
              h3.text-white.mb-0.pe-5 Longitud de fibras de algodón a través de clasificador de peines
            p Un clasificador de peines es un instrumento cuyos elementos constituyen todo un equipo para la realización de este proceso.
            .cajon.color-acento-contenido.p-4.mb-4
              p.mb-0 Consiste en la elaboración de un diagrama de distribución con frecuencias para la longitud de las fibras, todo en orden decreciente de acuerdo con su longitud. 
            p Este instrumento contiene nueve peines inferiores y ocho peines superiores, cada peine con espacios de ¼ de pulgada, exceptuando el primer peine inferior de la parte trasera, y con separaciones de 3/16 pulgadas. Como elementos complementarios al peine, está una pinza, un depresor, aguja de disección y tablero  de terciopelo en tonalidad oscura con medidas de 4 pulgadas por 8 pulgadas.
          .col-lg-4.col-md-8.col-10.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/t2/img2-7.png' alt='')

          .col-lg-8.mb-5
            figure.mb-4(data-aos="fade-down")    
              img(src='@/assets/curso/temas/t2/fig2.png' alt='Clasificador de fibras para el algodón')
              figcaption.mt-2.bg-white
                p.mb-0 Nota. Tomado de http://www.pharmacopeia.cn/v29240/usp29nf24s0_c691.html

          .col-md-12
            .subt.mb-4(data-aos="fade")   
              img.me-2(src='@/assets/curso/temas/t1/boton.svg' alt='' style="width: 40px;") 
              h3.text-white.mb-0.pe-5 Longitud de fibras de algodón a través de clasificador de peines
            p.mb-4(data-aos="fade") En este ensayo, se utiliza un instrumento muy similar al del algodón, difiere en la estructura del equipo, consistiendo en ubicar la muestra de fibras de lana en orden longitudinal, sobre un terciopelo con tonalidad oscura, con ello, se obtiene un diagrama de distribución de las fibras de lana según su longitud. 

          .col-lg-4.d-none.d-lg-block.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/t2/img2-7-2.png' alt='')
          .col-lg-8.col-md-9.mb-4(data-aos="fade-left")  
            h5.t-red.text-center.mb-4.mb-md-5 Los instrumentos que terminan de complementar el equipo para este ensayo son:
            SlyderF.mb-3.text-center(columnas="col-lg-6 col-xl-6")
              .tarjeta.bg-5.text-center
                img(src='@/assets/curso/temas/t2/slide2-img1-1.png' alt='')
                h5.p-4.text-white.mb-0 Tableros de terciopelo
              .tarjeta.bg-5.text-center
                img(src='@/assets/curso/temas/t2/slide2-img1-2.png' alt='')
                h5.p-4.text-white.mb-0 Papel milimetrado
              .tarjeta.bg-5.text-center
                img(src='@/assets/curso/temas/t2/slide2-img2-1.png' alt='')
                h5.p-4.text-white.mb-0 Papel acetato
              .tarjeta.bg-5.text-center
                img(src='@/assets/curso/temas/t2/slide2-img2-2.png' alt='')
                h5.p-4.text-white.mb-0 Una regla
              .tarjeta.bg-5.text-center
                img(src='@/assets/curso/temas/t2/slide2-img3-1.png' alt='')
                h5.p-4.text-white.mb-0 Un marcador fuerte
              .tarjeta.bg-5.text-center
                img(src='@/assets/curso/temas/t2/slide2-img3-2.png' alt='')
                h5.p-4.text-white.mb-0 Unas tijeras
              .tarjeta.bg-5.text-center
                img(src='@/assets/curso/temas/t2/slide2-img4-1.png' alt='')
                h5.p-4.text-white.mb-0 Una balanza para precisión
              .tarjeta.bg-5.text-center
                img(src='@/assets/curso/temas/t2/slide2-img4-2.png' alt='')
                h5.p-4.text-white.mb-0 Una calculadora
          
          p.mb-4(data-aos="fade") Para este proceso se necesita preparar la muestra, consistiendo en homogeneizar dicha muestra para condicionarla, y posteriormente paralelizar las fibras. A continuación, se toma una porción de lana de entre 0,4 y 0,8 g, aproximadamente, tomándola con una mano y sujetándola del extremo, así se sujetará con la otra mano realizando una torsión. Es importante que, una vez realizado este paso, se distribuyan las fibras de forma homogénea. Los resultados que dé esta medición se expresan usualmente en milímetros. Recordar que aquí el ensayo es la medición de la longitud de una fibra determinada, en este caso, la lana. 

    .subt.mb-4(data-aos="fade")   
      img.me-2(src='@/assets/curso/temas/t1/boton.svg' alt='' style="width: 40px;") 
      h3.text-white.mb-0.pe-5 Contenido de humedad y recuperación de materiales textiles (higroscopicidad)

    .row.mb-4
      .col-lg-7.mb-4(data-aos="fade-right")
        p Este ensayo consiste en analizar y determinar la humedad y recuperación del agua en un textil. Para este proceso, se utiliza una estufa de laboratorio textil y una balanza de precisión, además de una calculadora y muestras textiles que pueden ser un tejido en particular (plano o punto), mechas, hilos, cintas, etc.
        h5.t-red De acuerdo con Lockuán (2013, p. 21), la higroscopicidad de los materiales se puede expresar como: 
      .col-lg-5.d-none.d-lg-block.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img2-7-3.png' alt='') 

    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .tarjeta.bg-blue7.p-4(titulo="Contenido o porcentaje de humedad (%H)")
        h4 Contenido o porcentaje de humedad (%H)
        p Corresponde a la cantidad de humedad expresada en porcentaje del peso de la muestra antes del secado. Su fórmula es: 
        .row.justify-content-center.mb-4
          .col-md-5
            img(src='@/assets/curso/temas/t2/form1.svg' alt='El porcentaje de humedad es igual al del peso de la muestra húmeda menos el peso de la muestra seca, dividido el peso de la muestra húmeda, por 100.') 
        p Donde: 
        ul.lista-ul--color.color-cento-botones
          li.mb-0
            i.fas.fa-tshirt
            | ph: peso de la muestra húmeda (peso de la fibra + peso de la humedad). 
          li.mb-0 
            i.fas.fa-tshirt
            | ps: peso de la muestra seca (peso de la fibra).
      .tarjeta.bg-blue7.p-4(titulo="Recuperación de la humedad – Regain (%R)")
        h4 Recuperación de la humedad – Regain (%R)
        p Es la recuperación de la humedad expresada en porcentaje del peso de la muestra seca. Se calcula con la fórmula: 
        .row.justify-content-center.mb-4
          .col-md-5
            img(src='@/assets/curso/temas/t2/form2.svg' alt='El porcentaje de recuperación de la humedad es igual al peso de la muestra húmeda menos el peso de l muestra seca, dividido el peso de la muestra seca, por 100.') 

    p.mb-4(data-aos="fade") A continuación, podrá observar los pasos que se deben realizar para hallar la higroscopicidad de un material: 

    .row.fondo2-t2-7.align-items-center.py-3.pb-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

          SlyderF.text-center(columnas="col-lg-6 col-xl-4" data-aos="fade-down")
            .tarjeta.bg-blue3.text-center.p-4
              .row.justify-content-center.mb-3
                .col-5.mb-4
                  img(src='@/assets/curso/temas/t2/slide3-img1.svg' alt='')
                p.text-white.mb-0 Calentar la estufa entre los 105° C - 110° C.
            .tarjeta.bg-blue3.text-center.p-4
              .row.justify-content-center.mb-3
                .col-5.mb-4
                  img(src='@/assets/curso/temas/t2/slide3-img2.svg' alt='')
                p.text-white.mb-0 Homogenizar la muestra secándola sin que esté compacta, para  permitir evaporar el agua del textil o muestra. 
            .tarjeta.bg-blue3.text-center.p-4
              .row.justify-content-center.mb-3
                .col-5.mb-4
                  img(src='@/assets/curso/temas/t2/slide3-img3.svg' alt='')
                p.text-white.mb-0 Secar la muestra en la estufa, controlando la temperatura, durante 40 a 50 minutos. 
            .tarjeta.bg-blue3.text-center.p-4
              .row.justify-content-center.mb-3
                .col-5.mb-4
                  img(src='@/assets/curso/temas/t2/slide3-img4.svg' alt='')
                p.text-white.mb-0 Retirar la muestra de la estufa  y pesarla en la balanza; luego, registrar el valor de su peso en seco. 
            .tarjeta.bg-blue3.text-center.p-4
              .row.justify-content-center.mb-3
                .col-5.mb-4
                  img(src='@/assets/curso/temas/t2/slide3-img5.svg' alt='')
                p.text-white.mb-0 Pesar varias veces la muestra, con intervalos de 15 minutos, para hallar  una constante en el peso para validar los datos. 
            .tarjeta.bg-blue3.text-center.p-4
              .row.justify-content-center.mb-3
                .col-5.mb-4
                  img(src='@/assets/curso/temas/t2/slide3-img6.svg' alt='')
                p.text-white.mb-0 Luego, se realizará un cálculo del %H y %R.
            .tarjeta.bg-blue3.text-center.p-4
              .row.justify-content-center.mb-3
                .col-5.mb-4
                  img(src='@/assets/curso/temas/t2/slide3-img7.svg' alt='')
                p.text-white.mb-0 El valor obtenido es la medición de humedad en un textil. 

    .subt.mb-4(data-aos="fade")   
      img.me-2(src='@/assets/curso/temas/t1/boton.svg' alt='' style="width: 40px;") 
      h3.text-white.mb-0.pe-5 Pruebas para medir la resistencia de un textil

    p.mb-4(data-aos="fade") Estas pruebas pretenden medir la resistencia de los textiles de acuerdo con su composición. Los datos obtenidos le brindan al cliente la posibilidad de una buena programación en cuanto patronaje, trazo y corte de prendas de vestir; asimismo, se tienen en cuenta para recomendaciones a quienes compran dichas prendas. Entre estos ensayos, se encuentran: 

    TabsB.color-secundario.mb-5(data-aos="fade-down")
      .fondo-tabsB.py-4.py-md-5(titulo="Elongación y recuperación de un textil" :icono="require('@/assets/curso/temas/t2/tab-ico1.svg')")
        .row.justify-content-evenly
          .col-md-7.mb-4.mb-md-0
            h4 Elongación y recuperación de un textil
            p La prueba de elongación y recuperación de un textil es un ensayo que pretende medir en un textil la capacidad que tiene de estirarse y recuperar su forma original, para determinar el tiempo y resistencia en su tejido; esta recuperación se mide porcentualmente.        
          .col-md-4
            img(src='@/assets/curso/temas/t2/tab-img1.png', alt='')
      .fondo-tabsB.py-4.py-md-5(titulo="Resistencia a roturas" :icono="require('@/assets/curso/temas/t2/tab-ico2.svg')")
        .row.justify-content-evenly
          .col-md-7.mb-4.mb-md-0
            h4 Resistencia a roturas
            p El ensayo de prueba de resistencia a roturas consiste en someter un textil a una fuerza o tensión máxima, hasta que esta pueda romperse. Se mide el tiempo en el que se da la rotura y la resistencia en valores porcentuales. 
          .col-md-4
            img(src='@/assets/curso/temas/t2/tab-img2.png', alt='')
      .fondo-tabsB.py-4.py-md-5(titulo="Resistencia al rasgado" :icono="require('@/assets/curso/temas/t2/tab-ico3.svg')")
        .row.justify-content-evenly
          .col-md-7.mb-4.mb-md-0
            h4 Resistencia al rasgado
            p El ensayo de prueba de resistencia al rasgado es similar al ensayo anterior, solo que la fuerza a la que se somete el textil se hará teniendo en cuenta la dirección vertical positivo y negativo, aplicando una fuerza máxima que resistirá el textil hasta que se rasgue. Se mide el tiempo y resistencia en valores porcentuales. 
          .col-md-4
            img(src='@/assets/curso/temas/t2/tab-img3.png', alt='')
      .fondo-tabsB.py-4.py-md-5(titulo="Resistencia al deslizamiento de hilos " :icono="require('@/assets/curso/temas/t2/tab-ico4.svg')")
        .row.justify-content-evenly
          .col-md-7.mb-4.mb-md-0
            h4 Resistencia al deslizamiento de hilos 
            p El ensayo de prueba para medir la resistencia al deslizamiento de hilos en una costura es una prueba que consiste en someter a una fuerza máxima un textil con una costura realizada en maquina industrial, esto permite determinar el deslizamiento de los hilos en una tela. 
          .col-md-4
            img(src='@/assets/curso/temas/t2/tab-img4.png', alt='')


    .subt.mb-4(data-aos="fade")   
      img.me-2(src='@/assets/curso/temas/t1/boton.svg' alt='' style="width: 40px;") 
      h3.text-white.mb-0.pe-5 Pruebas para medición de solidez del color

    p.mb-4(data-aos="fade") Estas pruebas permiten determinar la durabilidad y calidad de un color en un textil determinado, color visto desde su tintura o estampado, independientemente del método empleado en estos dos procesos. Dentro del sector textil, se emplea una escala de grises para clasificar y calificar la solidez de los colores en los textiles, en la que medidas de 1 a 5, siendo 1 el más bajo y 5 el más alto, permiten tener un valor en cuanto a la calidad del color. Entre algunas pruebas para medir la solidez de un color, se encuentran: 

    .row.fondo3-t2-7.align-items-center.py-4.pt-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-end.mb-4

          .col-lg-3.d-none.d-lg-block.mb-4.mb-md-0(data-aos="fade")
            img(src="@/assets/curso/temas/t2/img2-7-4.png" alt='' )
          .col-lg-9.mb-4.mb-md-0(data-aos="fade")
            SlyderE.bg-white.p-4(indicadores="derecha")
              .row.justify-content-evenly.mb-3.pt-3
                .col-md-6.mb-4.mb-md-0
                  h4.t-red Solidez del color al frote
                  p 
                    b La prueba de solidez del color al frote 
                    | consiste en determinar la cantidad de un color que puede llegar a transferirse a partir de un material con color o estampado en otra superficie, a través de un frote que se da con el uso de un equipo. Se realiza tanto en textiles húmedos como en secos. 
                .col-md-5
                  img(src="@/assets/curso/temas/t2/slide4-img1.png" alt='' )
              .row.justify-content-evenly.mb-3.pt-3
                .col-md-6.mb-4.mb-md-0
                  h4.t-red Solidez del color al lavado doméstico
                  p 
                    b La prueba de solidez del color al lavado doméstico 
                    | consiste en determinar la resistencia de un color en un textil sometido a lavados domésticos o industriales. Permite observar el deterioro del color sobre el textil. 
                .col-md-5
                  img(src="@/assets/curso/temas/t2/slide4-img2.png" alt='' )
              .row.justify-content-evenly.mb-3.pt-3
                .col-md-6.mb-4.mb-md-0
                  h4.t-red Solidez del color a la transpiración
                  p 
                    b La prueba de solidez del color a la transpiración 
                    | consiste en determinar cuán sólido es un color en estados de transpiración. Esta prueba suele hacerse bajo métodos artificiales y se usa el perspirómetro. 
                .col-md-5
                  img(src="@/assets/curso/temas/t2/slide4-img3.png" alt='' )
              .row.justify-content-evenly.mb-3.pt-3
                .col-md-6.mb-4.mb-md-0
                  h4.t-red Solidez del color a la luz
                  p 
                    b La prueba de solidez del color a la luz 
                    | consiste en determinar cuán sólido es un color en un textil bajo irradiación de luz y humedad. Se simulan condiciones climáticas. Suele emplearse una Cámara Xenotex.
                .col-md-5
                  img(src="@/assets/curso/temas/t2/slide4-img4.png" alt='' )

    .subt.mb-4(data-aos="fade")   
      img.me-2(src='@/assets/curso/temas/t1/boton.svg' alt='' style="width: 40px;") 
      h3.text-white.mb-0.pe-5 Pruebas para procesos químicos

    p.mb-4(data-aos="fade") Estas pruebas ayudan a determinar el comportamiento de un textil ante condiciones cambiantes, con altas temperaturas o las que implican si los textiles son aptos para procesos de fusión de interlones o entretelas; asimismo, telas que han tenido procesos como el de sublimación. Entre algunas de estas pruebas se encuentran:

    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .tarjeta.bg-4.p-4(titulo="Fusionado")
        .row.justify-content-center.mb-3.pt-3
          .col-md-11
            h4 Fusionado
          .col-md-6.mb-4.mb-md-0
            p Consiste en determinar si un textil puede llegar a fusionarse con interlones o entretelas a una temperatura determinada; esto porque existen textiles que llegan a quemarse al unirse al pegante de otro elemento textil. 
          .col-md-5
            img(src="@/assets/curso/temas/t2/tab2-img1.png" alt='' )
      .tarjeta.bg-4.p-4(titulo="Sublimación")
        .row.justify-content-center.mb-3.pt-3
          .col-md-11
            h4 Sublimación
          .col-md-6.mb-4.mb-md-0
            p Consiste en determinar si un textil puede llegar a ser sublimado y bajo qué temperatura y tiempo, siendo muy útil en la proveeduría de materiales base para sublimación. Por ejemplo, este ensayo ha sido muy útil para concluir que, en un textil cuya base es artificial o sintética, la fijación del color es muy alta y los colores quedan muy vivos en estos materiales textiles, a diferencia de las bases naturales, las cuales no son óptimas y eficientes para procesos de sublimación.
          .col-md-5
            img(src="@/assets/curso/temas/t2/tab2-img2.png" alt='' )

    .row 
      .col-lg-3.d-none.d-lg-block.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/temas/t2/img2-7-5.png" alt='' )
      .col-lg-9.mb-4(data-aos="fade-left")
        p Dentro de la industria, se realizan muchas otras pruebas, y esto depende del uso final de un textil. Se pueden llegar a encontrar, basados en normas, más de 200 ensayos; la escogencia de cada uno de ellos depende de la textilera y de las bases que se crean para la producción de elementos o bases textiles. 
        .tarjeta.bg-blue4.mb-4.p-4
          .row 
            .col-md-2.col-3.mb-4.mb-md-0
              img.px-lg-4(src='@/assets/curso/temas/t2/alert.svg' alt='Alert')
            .col-md-10
              h5.mb-0 Cadena de abastecimiento
              p.mb-0 Son todas las actividades, instalaciones y logísticas, de las que hacen parte la entrada y transformación de los materiales en productos terminados y su posterior distribución, teniendo en cuenta cantidades, fechas, velocidad y costos. En la industria de la moda, se ha venido implementando en los últimos años este concepto con gran éxito, debido a que integra todas las actividades a un objetivo común y más grande.

    .row.fondo4-t2-7.align-items-center.py-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

          .col-md-12
            .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")   
              p.mb-0 #[b Figura 2.] Cadena de aprovisionamiento
            figure.mb-5.d-md-block.d-none(data-aos="fade-down")    
              img(src='@/assets/curso/temas/t2/fig3-pc.svg' alt='La cadena de aprovisionamiento tiene este orden: materias prikmas, producción, transporte y logística, agencias o sucursales, almacenamiento o bodegaje, venta, facturación y distribución y entregas.')
            figure.mb-5.d-md-none.d-block(data-aos="fade-down")    
              img(src='@/assets/curso/temas/t2/fig3-mobile.svg' alt='La cadena de aprovisionamiento tiene este orden: materias prikmas, producción, transporte y logística, agencias o sucursales, almacenamiento o bodegaje, venta, facturación y distribución y entregas.')

          p.mb-5(data-aos="fade") Es por lo anterior que, antes de ubicarlo en uno de los pasos de la cadena de abastecimiento, se deben tener en cuenta los procesos previos en la construcción de los diferentes tejidos. En el siguiente diagrama, encontrará resumido el proceso:

          .col-md-10
            .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")   
              p.mb-0 #[b Figura 3.] Proceso elaboración de tejidos
            figure.mb-4.d-md-block.d-none(data-aos="fade-down")    
              img(src='@/assets/curso/temas/t2/fig4-pc.svg' alt='El proceso de elaboración de tejidos es: materia prima, extracción de la fibra, proceso de la transformación de la fibra, análisis de muestras y ensayos de laboratorio, obtención del hilo, tejidos, procesos textiles y normatividad. ')
            figure.mb-4.d-md-none.d-block(data-aos="fade-down")    
              img(src='@/assets/curso/temas/t2/fig4-mobile.svg' alt='El proceso de elaboración de tejidos es: materia prima, extracción de la fibra, proceso de la transformación de la fibra, análisis de muestras y ensayos de laboratorio, obtención del hilo, tejidos, procesos textiles y normatividad. ')




</template>

<script>
export default {
  name: 'Tema2',
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
