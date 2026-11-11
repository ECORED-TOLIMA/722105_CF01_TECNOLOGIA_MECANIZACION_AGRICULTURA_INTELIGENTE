export default {
  global: {
    Name: 'Planeación de servicios agrícolas mecanizados',
    Description:
      'El componente formativo aborda los fundamentos de la planeación de recursos para la producción agropecuaria mecanizada, considerando las características de la empresa y los sistemas de producción, la gestión de inventarios, la elaboración de presupuestos y los requisitos de seguridad, salud en el trabajo y protección ambiental aplicables a la prestación de servicios agrícolas mecanizados.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        titulo: 'Empresa y sistemas de producción agropecuarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y características de la empresa',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos y finalidad de la empresa',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Procesos y procedimientos empresariales',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Concepto de sistema de producción agropecuario',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Tipos de sistemas de producción agropecuarios',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Características de los sistemas de producción',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planeación de recursos e inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas y métodos de planeación de recursos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Procesos, tipos y características de la planeación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Disponibilidad de recursos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Clases e importancia del inventario',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Sistemas de inventario, cuantificación y pronósticos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Manejo, rotación y <em>stock<em>',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Presupuesto en los servicios mecanizados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características del presupuesto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de presupuesto',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Costos de poseer y operar la maquinaria',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Elaboración del presupuesto',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Finalidad y aplicación del presupuesto',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguridad y salud en el trabajo en la mecanización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Marco normativo de la seguridad y salud en el trabajo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Peligros y riesgos en la operación de maquinaria',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipos de elementos de protección personal',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Equipos y elementos de emergencia y sus métodos de empleo',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Medidas preventivas y sus tipos',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Matriz de compatibilidad de sustancias',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Protocolo de seguridad',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Aspectos ambientales de la mecanización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características de los aspectos ambientales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Clases de aspectos ambientales según el contexto productivo',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Problemática ambiental asociada a la mecanización',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Normativa ambiental aplicable',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Contexto social de los aspectos ambientales',
            hash: 't_5_5',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722105_CF01_CFA.pdf',
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
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'elemento de una actividad productiva que puede interactuar con el medio ambiente, como las emisiones, los residuos o el consumo de combustible.',
    },
    {
      termino: 'Costos de operación',
      significado:
        'gastos asociados al funcionamiento de la maquinaria, como combustible, lubricantes, mano de obra y mantenimiento.',
    },
    {
      termino: 'Costos de posesión',
      significado:
        'gastos derivados de tener maquinaria, independientemente de su uso, como la depreciación, los seguros y otros costos asociados a su propiedad.',
    },
    {
      termino: 'Disponibilidad de recursos',
      significado:
        'existencia de maquinaria, insumos, personal y demás elementos necesarios para ejecutar una labor agrícola.',
    },
    {
      termino: 'Elemento de protección personal (EPP)',
      significado:
        'equipo o dispositivo utilizado por el trabajador para reducir la exposición a peligros durante la ejecución de sus actividades.',
    },
    {
      termino: 'Empresa agropecuaria',
      significado:
        'organización dedicada al desarrollo de actividades agrícolas, pecuarias o relacionadas con la producción del sector agropecuario.',
    },
    {
      termino: 'Gestión de inventarios',
      significado:
        'proceso de registro, control y seguimiento de las existencias de materiales, insumos, repuestos y otros recursos.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'cambio en el medio ambiente generado por una actividad productiva, que puede ser positivo o negativo.',
    },
    {
      termino: 'Inventario',
      significado:
        'registro organizado de los bienes, materiales, insumos y repuestos disponibles para el desarrollo de las actividades productivas.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'conjunto de actividades programadas para conservar la maquinaria en condiciones adecuadas de funcionamiento y reducir la probabilidad de fallas.',
    },
    {
      termino: 'Matriz de compatibilidad de sustancias',
      significado:
        'herramienta que permite identificar qué sustancias químicas pueden almacenarse o manipularse conjuntamente y cuáles requieren separación para evitar reacciones peligrosas.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'estimación de los ingresos, costos y gastos previstos para planificar y ejecutar un servicio agrícola mecanizado.',
    },
    {
      termino: 'Protocolo de seguridad',
      significado:
        'conjunto de instrucciones y procedimientos que orientan la prevención de riesgos y la actuación ante situaciones de emergencia.',
    },
    {
      termino: 'Rotación de inventarios',
      significado:
        'movimiento de las existencias mediante su uso o reposición, con el propósito de evitar acumulaciones innecesarias y controlar su disponibilidad.',
    },
    {
      termino: 'Sistema de producción agropecuario',
      significado:
        'conjunto organizado de recursos, procesos y actividades que interactúan para obtener productos agrícolas o pecuarios.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Society of Agricultural and Biological Engineers. (2011). ASAE D497.7 MAR2011 (R2020): Agricultural machinery management data. ASABE.',
      link: '',
    },
    {
      referencia: 'Congreso de Colombia. (1993). Ley 99 de 1993.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=297',
    },
    {
      referencia: 'Congreso de Colombia. (2008). Ley 1252 de 2008.',
      link: 'https://www1.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=33965',
    },
    {
      referencia: 'Congreso de Colombia. (2012). Ley 1562 de 2012.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48365',
    },
    {
      referencia:
        'Consejo Colombiano de Seguridad. (2021). Conozca la Resolución 773 de 2021 de aplicación del Sistema Globalmente Armonizado (SGA) en los lugares de trabajo.',
      link: 'https://ccs.org.co/portfolio/conozca-la-resolucion-773-de-2021-de-aplicacion-del-sistema-globalmente-armonizado-sga-en-los-lugares-de-trabajo/',
    },
    {
      referencia:
        'Heizer, J., y Render, B. (2014). Principios de administración de operaciones (9.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2015). Quality management systems - Requirements (ISO Standard No. 9001:2015).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Resolución 0631 de 2015.',
      link: 'https://www.minambiente.gov.co/wp-content/uploads/2021/11/resolucion-631-de-2015.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s. f.). Guías ambientales de buenas y mejores prácticas.',
      link: 'https://bpm.minambiente.gov.co/index.php/asuntos-ambientales-sectorial-y-urbana/sostenibilidad-sectores-productivos/guias-ambientales-buenas-y-mejores-practicas',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2019). Resolución 0312 de 2019.',
      link: 'https://www.fondoriesgoslaborales.gov.co/wp-content/uploads/2018/09/RESOLUCION-0312-DEL-2019.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s. f.). Mecanización agrícola sostenible. FAO.',
      link: 'https://www.fao.org/sustainable-agricultural-mechanization/en/',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2024). Promoting sustainable agricultural mechanization for smallholder farmers: Five steps to develop effective business models.',
      link: 'https://openknowledge.fao.org/handle/20.500.14283/cd2358en',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (s. f.). Sustainable agricultural mechanization.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Decreto 1072 de 2015.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72173',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2018). Decreto 1496 de 2018.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=87910',
    },
    {
      referencia:
        'República de Colombia. (2015). Decreto 1076 de 2015.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (1968). Normas de seguridad en el uso de tractores.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (1984). Reglas para labores agropecuarias.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Cindy Carolina Gámez Ávila',
          cargo: 'Instructora técnica',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez ',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}