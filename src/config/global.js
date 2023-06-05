export default {
  global: {
    componenteFormativo: 'Laboratorio textil',
    descripcionCurso:
      'La identificación de fibras se logra a través de la implementación de diferentes ensayos que, llevados a cabo dentro de los laboratorios textiles, permiten identificar la estructura y características principales de una fibra, la cual es la base de los textiles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Laboratorio textil',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis y desarrollo de muestras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Método microscópico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Método de la solubilidad química',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Método del punto de fusión',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Método de la densidad o peso específico',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Método del teñido',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Método de la espectroscopia infrarroja',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Otros ensayos realizados dentro de la industria textil',
            hash: 't_2_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Laboratorio textil',
      referencia:
        'SENA. (2018). <em>Certificación laboratorio textil</em> [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/45ORlEwcfqs',
    },
    {
      tema: 'Método microscópico',
      referencia:
        'Proyecto Arce Escuelas de Diseño. (2013). <em>Identificación de fibras</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/45ORlEwcfqs',
    },
    {
      tema: 'Otros ensayos realizados dentro de la industria textil',
      referencia:
        'Instron. (2017). <em>Instron® | ASTM D5035 Breaking Force and Elongation of Textile Fabrics (Strip Method)</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/45ORlEwcfqs',
    },
    {
      tema: 'Otros ensayos realizados dentro de la industria textil',
      referencia:
        'IntertekMexico. (2013). <em>Prueba Textil de Frote Intertek</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Yg1Woy8M9zM',
    },
  ],
  glosario: [
    {
      termino: 'Abradante',
      significado:
        'se refiere al elemento que interviene en la abrasión de un tejido, puesto que al rozarse constantemente generará desgaste.',
    },
    {
      termino: 'Abrasión',
      significado:
        'hace referencia a la acción de frotar un tejido una gran cantidad de veces hasta lograr desgastarlo.',
    },
    {
      termino: 'Cromática',
      significado: 'hace referencia a la colorimetría o el estudio del color.',
    },
    {
      termino: 'Bicompuesto',
      significado:
        'que contiene dos compuestos de un mismo elemento, por ejemplo, una fibra que en su estructura en vista transversal se observan dos núcleos.',
    },
    {
      termino: 'Combustión',
      significado:
        'proceso empleado en ensayos de identificación de fibras que consiste en quemar cada una de las fibras de diferente procedencia para determinar características que las identifican.',
    },
    {
      termino: 'Deslustrado',
      significado:
        'concepto también encontrado como deslustrar, hace referencia al brillo que se obtiene de un elemento.',
    },
    {
      termino: 'Desgarre',
      significado:
        'efecto generado al aplicar presión sobre un material textil hasta que sus tejidos se deshacen o se rompen.',
    },
    {
      termino: 'Fusión',
      significado:
        'proceso empleado en ensayos de identificación de fibras textiles, que consiste en unir dos o más fibras con solventes hasta lograr el ablandamiento de una mezcla de fibras.',
    },
    {
      termino: 'Frote',
      significado:
        'resultado de la acción de rozar constantemente un material textil, con el fin de generar resultados de desgaste.',
    },
    {
      termino: 'Micras',
      significado:
        'unidad de medida de longitud que representa una millonésima parte de un metro.',
    },
    {
      termino: 'Rotámetro',
      significado:
        'dispositivo utilizado para medir el caudal de líquidos y gases.',
    },
    {
      termino: 'Solidez',
      significado:
        'en el contexto textil, hace referencia a la resistencia que posee un material para mantener el color agregado a través del proceso de teñido.',
    },
    {
      termino: 'Trilobal',
      significado:
        'forma que contiene una fibra desde una vista transversal, con tres extremidades ovaladas. ',
    },
    {
      termino: 'Tetracloroetileno',
      significado:
        'es una sustancia química manufacturada, usualmente empleada en procesos de lavado en seco en fibras textiles. ',
    },
    {
      termino: 'Xileno',
      significado:
        'es una sustancia líquida, incolora, usualmente tiene un olor dulce; se debe tener especial cuidado, dado que es inflamable. ',
    },
  ],
  referencias: [
    {
      referencia:
        'AVENO Lab Testing Instruments. (s.f.) <em>Clasificador de grapas de peine de fibra de lana AR10.</em>',
      link:
        'https://es.avenotester.com/wool-fiber-comb-stapling-sorter-ar10_p141.html',
    },
    {
      referencia: 'Bastos. (2019). <em>Equipos James Heal.</em>',
      link: 'https://www.bastoscia.com/textil/calidad/james-heal/',
    },
    {
      referencia:
        'Cromtek. (s.f.). <em>Accesorios ATR para FTIR - Specac</em>. ',
      link: 'https://www.cromtek.cl/producto/accesorios-atr-para-ftir-specac/',
    },
    {
      referencia:
        'Lafayette. (2019). <em>¿Cuáles son las principales pruebas de calidad en la industria textil? </em>',
      link:
        'https://www.lafayette.com/cuales-son-las-principales-pruebas-de-calidad-en-la-industria-textil/',
    },
    {
      referencia:
        'Lockuán, F. (2013). <em>La industria textil y su control de calidad</em>. Budetex. ',
      link: 'http://budetex.com/4.info.html',
    },
    {
      referencia:
        'Ortiz, A. (2017). <em>Procesos textiles</em>. El profe Abdón. Moda y Confección. ',
      link: 'https://abortiz.wixsite.com/textiles/procesos-textiles',
    },
    {
      referencia:
        'Pesok, J. (2012). <em>Introducción a la tecnología textil</em>. Universidad de la República. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/79774?page=10 ',
    },
    {
      referencia:
        'Portales, R. (2014). <em>Identificación de fibras individuales por el método de disolución o solubilidad.</em> Química textil. ',
      link:
        'http://quimica-textil-fiq-unac.blogspot.com/2014/09/identificacion-de-fibras-individuales.html',
    },
    {
      referencia:
        'SENA. (2020). <em>Equipo de Desarrollo Curricular, SENA Programa Técnico en Patronaje Industrial de Prendas de Vestir.</em> Centro de Manufactura en Textil y Cuero, Distrito Capital.',
    },
    {
      referencia: 'Suttex. (2018). <em>Perspirómetro</em>. ',
      link: 'https://suttex.mx/productos/perspirometro/',
    },
    {
      referencia: 'U.S. PHARMACOPEIA. (s.f.). <em>Cotton</em>. ',
      link: 'http://www.pharmacopeia.cn/v29240/usp29nf24s0_c691.html',
    },
    {
      referencia:
        'Universidad Técnica del Norte. (2020). <em>Breve descripción de los equipos disponibles en los laboratorios de la carrera de textiles</em>. Facultad de Ingeniería en Ciencias Aplicadas. ',
      link:
        'https://textiles.utn.edu.ec/wp-content/uploads/2020/11/3.-ANEXO-ESPECIFICACIONES-DE-LOS-EQUIPOS-DE-LABORATORIO.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta Temática',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda',
        },
        {
          nombre: 'María Camila Álvarez Trujillo',
          cargo: 'Experta Temática',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor Metodológico y Pedagógico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Regional Tolima – Centro Agropecuario La Granja',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yerson Fabián Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-Stack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
