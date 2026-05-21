/* app.js - Lógica Interactiva y Base de Datos del Portal CESMAG */

// Base de Datos de Docentes (Extraída directamente de la imagen del Excel)
const TEACHERS_DATA = [
  {
    id: 1,
    name: `Fredy Hernando Ibarra Martínez`,
    modulo: `Régimen Jurídico, Jurisprudencial y Tendencias de la Contratación Estatal`,
    semestre: `Primero`,
    vinculacion: `Hora Catedra`,
    perfil: `Profesional en Derecho con formación posgradual en Derecho Administrativo, Derecho Público, Derecho del Estado o áreas afines, con experiencia en análisis normativo y jurisprudencial en contratación estatal y actualización en tendencias regulatorias asociadas a la Contratación Estatal.`,
    formacion: `Abogado  Universidad de Nariño. Especialista en Derecho Administrativo, Instituciones Jurídico Políticas y Derecho Público`,
    experiencia: `Juez Promiscuo Municipal de Taminango (Nariño)
Juez Penal Municipal de Pasto (Nariño)
Secretario Académico de la Facultad de Derecho de la Universidad de Nariño.
Director de la Oficina Jurídica de la Gobernación del Departamento de Nariño.
Abogado litigante, consultor y asesor jurídico.
Magistrado de la Sección Primera del Tribunal Administrativo de Cundinamarca.
 Magistrado Auxiliar del Consejo de Estado. Magistrado de la Sección Tercera del Consejo de Estado`,
    pedagogia: `Decano de la Facultad de Derecho de la Universidad de Nariño
Docente universitario en programas de pregrado, especialización y maestría en universidades del país.`,
    tecnologias: `Manejo de  IA y herramientas ofimáticas`
  },
  {
    id: 2,
    name: `Diego Arturo Castro López`,
    modulo: `Marco Legal, Jurisprudencial y Generalidades del Presupuesto Público`,
    semestre: `Primero`,
    vinculacion: `Hora Catedra`,
    perfil: `Profesional en Derecho, Administración Pública, Economía o Contaduría Pública, con formación posgradual en Derecho Administrativo, Hacienda Pública, Finanzas Públicas o Gestión Pública, o áreas afines, con conocimientos en sistema presupuestal, principios constitucionales del gasto público y planeación estatal.`,
    formacion: `Magister en Derecho Administrativo, Especialista en Educación en Derechos Humanos, Especialista en Derecho Administrativo, Conciliador en Derecho, profesional del derecho.`,
    experiencia: `18 años de experiencia profesional, desarrollando actividades para el sector público relacionadas con compras públicas, dirección, planeación, auditoria, control disciplinario. Asesor juridico en el Departamento Administrativo de Contratacion de la Gobernacion de Nariño. Asesor Juridico Ecterno Alcaldia Valle del Guamuez (P). Asesor Juridico Externo Alcaldia de Pasto. Conjuez Tribunal Administrativo de Nariño. Asesor juridico Escuela Superior de Administracion Pública. Personero Municipal de Tangua.`,
    pedagogia: `Docencia Universitaria  en entidades como la Superintendencia de Transporte, Tribunal Administrativo de Nariño, Universidad Mariana, Alcaldía de Pasto, Gobernación de Nariño, Escuela Superior de Administración Pública, entre otras.`,
    tecnologias: `Manejo de  IA y herramientas ofimáticas`
  },
  {
    id: 3,
    name: `Alvaro Montenegro Calvachy`,
    modulo: `Planeación del Presupuesto y Equilibrio Económico del Contrato`,
    semestre: `Primero`,
    vinculacion: `Hora Catedra`,
    perfil: `Profesional en Derecho, Contaduría Pública, Administracion Pública o Economía, con formación posgradual en Derecho Económico, Derecho Administrativo, Contratación Estatal, Finanzas Públicas o áreas afines, con experiencia en planeación presupuestal y análisis del equilibrio económico del contrato estatal.`,
    formacion: `Abogado y Economista con amplia formación académica y experiencia laboral tanto en la Rama Judicial como en el sector público. Especialista en Derecho Comercial,  Derecho Administrativo , Derecho Financiero,  Instituciones Jurídicas Políticas y Derecho Público.`,
    experiencia: `Secretario General y Director de Planeación del Departamento de Nariño.
Secretario de Hacienda del Municipio de Pasto.
Secretario General y Decano de la Facultad de Derecho y Ciencias Políticas de la Universidad de Nariño.
Defensor del Pueblo Regional Nariño.
Magistrado de la Sala Administrativa del Consejo Seccional de la Judicatura de Risaralda.Magistrado Tribunal Administrativo de Nariño. Director Académico del Colegio de Jueces y Fiscales de Nariño y Putumayo.`,
    pedagogia: `Docente en las áreas del Derecho Público y Derecho Económico en la Facultad de Derecho y Ciencias Políticas y Facultad de Economía de la Universidad de Nariño. Docente en derecho público en la Escuela Superior de Administración Pública (ESAP). Docente de posgrado en las Especializaciones de Derecho Administrativo de la Universidad de Nariño,  Derecho Económico de la Universidad Externado de Colombia, de Teoría Económica en la Universidad Antonio Nariño, de Ciencia Política de la Universidad Nacional de Colombia.   Docente - Facilitador de la Escuela Judicial “Rodrigo Lara Bonilla” en los módulos de Argumentación Judicial, Interpretación Judicial, Jueces de Paz, Estructura de la Sentencia, Tutela, Derechos Humanos, y Derecho Administrativo.`,
    tecnologias: `Manejo de  IA y herramientas ofimáticas`
  },
  {
    id: 4,
    name: `Juan Daniel Peñuela Calvache`,
    modulo: `Gasto Público y Ejecución del Presupuesto de Ingresos y Gastos`,
    semestre: `Primero`,
    vinculacion: `Hora Catedra`,
    perfil: `Abogado, Economista, Contador Público o Administrador Público, con formación posgradual en Derecho Administrativo, Hacienda Pública, Gestión Financiera Pública o áreas afines, con conocimientos en ejecución del gasto, programación presupuestal y control fiscal.`,
    formacion: `Abogado egresado de la Universidad Externado de Colombia, con formación académica en las áreas del derecho público, económico y comercial. Especialista en Derecho Administrativo (2003), Derecho Comercial (2018) y Derecho Constitucional (2025), Magíster en Derecho Económico (2014) por la misma universidad y Especialista en Gobierno Local de la Universidad de Nariño (2016).`,
    experiencia: `Cuenta con trayectoria en el sector público y académico. Se ha desempeñado como Jefe de Presentaciones Sociales de la Dirección Administrativa de la Rama Judicial en Bogotá y Cundinamarca (2000–2001) y como Director del Departamento Jurídico y de Registros Públicos de la Cámara de Comercio de Pasto (2004–2006). 
En el ejercicio de la función pública ha sido Concejal del Municipio de Pasto (2008–2015) y Diputado de la Asamblea Departamental de Nariño (2016–2021). Represententa a la Camara (2022-2026).`,
    pedagogia: `Ha ejercido la docencia por más de 20 años desde el 2005 hasta la
fecha, siendo docente de la Universidad  CESMAG, Universidad
Cooperativa de Colombia, la Escuela Superior de Administración Pública (ESAP) y
la Universidad Mariana.`,
    tecnologias: `Manejo de  IA y herramientas ofimáticas`
  },
  {
    id: 5,
    name: `Carlos Arturo Cuellar de los Rios`,
    modulo: `Planeación Contractual y Modalidades de Selección de Contratistas`,
    semestre: `Primero`,
    vinculacion: `Hora Catedra`,
    perfil: `Profesional en Derecho con formación posgradual en Derecho Administrativo, Contratación Estatal, Derecho Público o áreas afines, con experiencia en estructuración de procesos contractuales, estudios previos y modalidades de selección de contratistas.`,
    formacion: `Abogado , especialista en derecho constitucional de la , especialista en derecho administrativo y contencioso administrativo, especialista en derecho tributario.  Maestro en derecho de la responsabilidad contractual, extracontractual, civil y del Estado.`,
    experiencia: `Abogado litigante consultor, asesor de entidades públicas.Director del Departamento de Contratacion de la Gobernacion de Nariño y actualemnte se desempeña como Juez Segundo Administrativo de Pasto`,
    pedagogia: `Docente Univeritario Universidad Cesmag, Universidad Mariana entre otras`,
    tecnologias: `Manejo de  IA y herramientas ofimáticas`
  },
  {
    id: 6,
    name: `Johana Gomez Burbano`,
    modulo: `Garantías y Riesgos de la Contratación Estatal`,
    semestre: `Primero`,
    vinculacion: `Hora Catedra`,
    perfil: `Profesional en Derecho con formación posgradual en Derecho Administrativo, Responsabilidad del Estado, Derecho Constitucional o áreas afines, con conocimientos en garantías contractuales, gestión de riesgos y régimen de responsabilidades derivadas de la contratación estatal.`,
    formacion: `Abogada, Especialista en Dercho Constitucional y Magister en Derecho Administativo.`,
    experiencia: `Auxiliar Judicial Grado, Profesional Universitaria Grado 16 y desde el 27 de enero de 2014 hasta 13 de diciembre de 2020
Jueza Primera Administrativa del Circuito de Tumaco, desde el 14 de diciembre de 2020 hasta la actualidad.`,
    pedagogia: `Diplomado en docencia universitaria`,
    tecnologias: `Manejo de  IA y herramientas ofimáticas`
  },
  {
    id: 7,
    name: `Camilo Forero Forero`,
    modulo: `Electiva I: Buenas Practicas Contractuales/ Criterios de sostenibilidad y Responsabilidad Social`,
    semestre: `Primero`,
    vinculacion: `Hora Catedra`,
    perfil: `Profesional en Derecho, Contador Público, Administrador Público, Ingeniería, con formación posgradualen Derecho Administrativo, Derecho Público, Responsabilidad Fiscal, Derecho Disciplinario o áreas afines.

Experiencia en el sector público en materia de responsabilidad fiscal, control y gestión contractual, así como trayectoria en docencia universitaria en programas de pregrado y posgrado. Se valorará experiencia en dirección o coordinación académica de programas en Derecho Administrativo o Derecho Público, y en el análisis de buenas prácticas contractuales, sostenibilidad y responsabilidad social en la gestión estatal.`,
    formacion: `Abogado, especialista en Derecho Administrativo, Magíster en
Derecho Público y Candidato a Doctor en Derecho de la Universidad
Santo Tomás.`,
    experiencia: `Abogado, especialista en Derecho Administrativo, Magíster en 
Derecho Público y Candidato a Doctor en Derecho de la Universidad 
Santo Tomás. Abogado contratista de la Sudireccion de Responsabilidad Fiscal de la Contraloria Distrital de Bogotá entre otras entidades`,
    pedagogia: `Docente de la Universidad Santro Tomás, de la Universidad Gran Colombia, de la Univer5sidad Sergio Arboleda y de la Universidad Libre de Colombia.  Director de la Especialización en Derecho Administrativo y Maestria en Dercho Púbilco`,
    tecnologias: `Manejo de  IA y herramientas ofimáticas`
  },
  {
    id: 8,
    name: `Ángel María Melo`,
    modulo: `Ética, Control y Responsabilidades en Contratación y Presupuesto`,
    semestre: `Segundo`,
    vinculacion: `Hora Catedra`,
    perfil: `Profesional en Derecho, Contaduría Pública o Administración Pública, con formación posgradual en Derecho Administrativo, Responsabilidad Fiscal, Derecho Disciplinario, Gestión Pública, Gerencia de Proyectos o áreas afines, con capacidad para abordar buenas prácticas contractuales, sostenibilidad y responsabilidad social en la gestión estatal.`,
    formacion: `Contador Público, Especialista en Gerencia de Proyectos,`,
    experiencia: `Cuenta con más de 26 años de experiencia en el sector público, desempeñándose en cargos estratégicos en el ámbito departamental y municipal. Ha ejercido como Profesional Universitario en la Secretaría de Hacienda de la Gobernación de Nariño, así como Secretario de Despacho y contratista en la Alcaldía de Los Andes Sotomayor. También se desempeñó como Subgerente Administrativo y Financiero de una ESE Centro de Salud y como Profesional Universitario en la Secretaría de Educación Departamental. Su trayectoria evidencia experiencia en gestión pública, administración financiera, dirección administrativa y apoyo a procesos institucionales.`,
    pedagogia: `Cuenta con más de 11 años de experiencia docente en educación superior, en el área de Economía, Administración y Contaduría. Ha sido profesor en la Escuela Superior de Administración Pública, la Universidad CESMAG y la Universidad Cooperativa de Colombia. Su trayectoria académica se ha desarrollado fortaleciendo procesos formativos en el ámbito de la administración pública y la gestión financiera.`,
    tecnologias: `Manejo de herramientas ofimáticas y sistemas administrativos propios del sector público`
  },
  {
    id: 9,
    name: `Edgar Humberto Villarareal Arteaga`,
    modulo: `Innovación y Tecnologías Digitales en Contratación y Presupuesto`,
    semestre: `Segundo`,
    vinculacion: `Hora Catedra`,
    perfil: `Profesional en Derecho,Contaduría Pública, Ingeniería de Sistemas, Administración Pública o áreas afines, con formación posgradual en Derecho Digital, Gobierno Digital, Innovación Pública, Gestión de Tecnologías de la Información o áreas afines, con competencias en herramientas tecnológicas aplicadas a la contratación y gestión presupuestal.`,
    formacion: `Contador Público, Especialista en Computación para la Docencia, Magíster en Gestón de Tecnología Educativa de la Universidad de Santander, certificado en presentación de información financiera internacional para las PYMES por ACCA, con Diplomado en Normas Internacional del Sector Publico NIC-SP, con amplio conocimiento en aspectos Presupuestal, Contable, Financiero, Control Interno y Contractual; por la experiencia adquirida como Auditor de la Contraloría Departamental de Nariño por más de doce años`,
    experiencia: `Docente Universitario Hora Cátedra,
Medio Tiempo y tiempo completo de las facultades de Contaduría Pública de las
Universidad Autónoma de Nariño y Universidad de Nariño; Docente Hora Cátedra de la ESAP.

Habilidades de planeación, asesoramiento, dirección, coordinación, capacitaciones y asistencia en procesos de Auditoria, con dominio de las relaciones personales y públicas, con destrezas para trabajar en equipo.`,
    pedagogia: `Magíster en Gestión de Tecnología Educativa`,
    tecnologias: `Experiencia en manejo de ofimática con certificación internacional en competencias digitales.`
  },
  {
    id: 10,
    name: `Alfonso Mario Benavides Cárdenas`,
    modulo: `Interventoría y Supervisión del Contrato`,
    semestre: `Segundo`,
    vinculacion: `Hora Catedra`,
    perfil: `Profesional en Derecho, Ingeniería Civil, Arquitectura, Economía o Administración Pública, con formación posgradual en Contratación Estatal, Gerencia de Proyectos, Interventoría de Proyectos, Derecho Administrativo o áreas afines, con experiencia en supervisión e interventoría contractual.`,
    formacion: `Economísta con especialización en contratación publica y  especialización en formulación y evaluación de proyectos Egresado de Derecho de la Universidad Cesmag`,
    experiencia: `Asesor Administrativo. Municipio de Gualmatán. 2.004-2.005-2.006-2007
Asesor Administrativo .Municipio de la Cruz 2.006
Asesor financiero y Contratación publica. Municipio de San Pedro de Cartago, 2.007-2.008-2009
Asesor Financiero y de Contratación publica Municipio de Puerres 2.006-2.007
Asesor Financiero y de Contratación publica Hospital Ricaurte 2007-2008
Asesor Financiero y de Contratación publica. Municipio de Policarpa 2.008 al 2011`,
    pedagogia: `Diplomado en docencia universitaria`,
    tecnologias: `Manejo de  IA y herramientas ofimáticas`
  },
  {
    id: 11,
    name: `Leider Mauricio Herrera`,
    modulo: `Ejecución y Liquidación del Contrato y sus Efectos en el Presupuesto`,
    semestre: `Segundo`,
    vinculacion: `Hora Cátedra`,
    perfil: `Profesional en Derecho, Contaduría Pública, Administracion Pública,  con formación posgradual en Derecho Administrativo, Contratación Estatal o áreas afines, con conocimientos en ejecución contractual, liquidación de contratos estatales y efectos presupuestales derivados de la actividad contractual.`,
    formacion: `Abogado, Especialista en Dereco Constiruacional, Especialista en Derecho Contencioso Administratico, Magister en Derecho Administrativo.`,
    experiencia: `Amplia experiencia en el Sector Público, Auxiliar Judicial Grado, Profesional Universitaria Grado 1del Tribunal Administrativo de Nariño
Juez Tercerp Administrativo del Circuito de Pasto.`,
    pedagogia: `Diplomado en docencia universitaria`,
    tecnologias: `Manejo de  IA y herramientas ofimáticas`
  },
  {
    id: 12,
    name: `Dario Guerrero Bravo`,
    modulo: `Cierre Presupuestal, de Tesorería y Vigencias Futuras`,
    semestre: `Segundo`,
    vinculacion: `Hora Cátedra`,
    perfil: `Profesional en Economía, Administración de Empresas, Contaduría Pública, Administración Pública o Derecho, con formación posgradual en Finanzas Públicas, Hacienda Pública, Gestión Financiera Estatal o áreas afines, con experiencia en cierre presupuestal, manejo de tesorería y vigencias futuras.`,
    formacion: `Admministrador de Empresas y Especialista en Finanzas de la Unviersidad de Nariño, Magíster en Derecho Económico de la Universidad Pontificia Javeriana, Diplomados en Dirección de Organizaciones Públicas (ESAP), Finanzas y Sistema General de Riesgos Profesionales.`,
    experiencia: `Cuenta con amplia trayectoria en el sector público y privado. Se ha desempeñado como Concejal de Pasto (2020–2023), Subsecretario de Valorización Municipal, Subsecretario de Rentas de la Gobernación de Nariño, Director de Oficina en Colpensiones, y Profesional Universitario en la Contraloría General de la Nación. 
Se ha desempeñado como asesor en la Cámara de Representantes, Ministerio del Deporte y Secretaría Distrital del Hábitat. Su experiencia se concentra en hacienda pública, finanzas, gestión administrativa, control fiscal y dirección organizacional.`,
    pedagogia: `Posee experiencia como docente de tiempo completo y hora cátedra en instituciones como la Escuela Superior de Administración Pública, Universidad Mariana, Fundación Universitaria Panamericana, Corporación Universitaria Autónoma de Nariño y Fundación Universitaria Remington.`,
    tecnologias: `Posee experiencia en manejo de herramientas de análisis financiero, formulación presupuestal y gestión documental en entornos públicos y privados`
  },
  {
    id: 13,
    name: `Ivan Dario Tarazona Manrique`,
    modulo: `Electiva II: Gestion Finacniera / Financiacion y Cofinanciacion Estatal`,
    semestre: `Segundo`,
    vinculacion: `Hora Cátedra`,
    perfil: `Profesional en Derecho, Economía o Administración Pública o afines, con formación posgradual en Derecho Público, Finanzas Públicas, Políticas Públicas, Gestión Pública o áreas afines, con conocimientos en financiación, cofinanciación y estructuración financiera de proyectos públicos.`,
    formacion: `Abogado, Master en droit public
fondamental (convalidado)`,
    experiencia: ``,
    pedagogia: `Conferencista y profesor invitado: Universidad de la Sabana (Políticas públicas y función pública); Universidad
del Rosario (Código de procedimiento administrativo y de lo contencioso administrativo), Universidad Santo
Tomás, Universidad Libre (Sede Cali), Universidad Mariana (Sede Pasto) y de la Universidad de la Amazonía
(Sede Florencia). Coordinador Doctorado en Derecho Universidad Santo Tomás.`,
    tecnologias: `Manejo de  IA y herramientas ofimáticas`
  },
  {
    id: 14,
    name: `Tania  Gabriela Gonzales Vallejos`,
    modulo: `Proyecto Integrador`,
    semestre: `Segundo`,
    vinculacion: `Hora Cátedra`,
    perfil: `Formación posgradual (Especialización, Maestría o Doctorado) en Derecho Administrativo, Contratación Estatal, Finanzas Públicas, Hacienda Pública, Gestión Pública o áreas afines.

Experiencia en docencia universitaria y en gestión o asesoría en el sector público en materia de contratación estatal, programación y ejecución presupuestal, así como en acompañamiento de proyectos académicos o aplicados relacionados con la gestión del gasto público.`,
    formacion: `Abogada egresada de la Universidad de Nariño (2016), Magíster en Derecho Administrativo
(2019) y Doctora en Derecho (2025), titulada con tesis Magna Cum Laude por la Universidad
Libre.`,
    experiencia: ``,
    pedagogia: `Docente Unicesmag desde año 2019. Experiencia en Formulacion de proyectos de investigacion juridica y socio juridica sobre problematiacas contemporaneas e innovadoras del derecho.  Ponente en eventos internacionales y como par evaluadora en encuentros de la Red de Grupos y Centros de Investigación Jurídica y Socio jurídica. Orienta proyectos de investigación en el marco del programa Ondas Nariño.`,
    tecnologias: `Manejo de  IA y herramientas ofimáticas`
  }
];

// Datos de Mapas Mentales (Estructurados para los Drawers)
const MINDMAP_DETAILS = {
  matriz: {
    title: "MATRIZ DE ESPECIALIZACIÓN",
    categories: {
      rap: {
        title: "Matriz RAP (Resultados de Aprendizaje del Programa)",
        subtitle: "Alineación Curricular y Perfil del Egresado",
        content: `
          <div class="mindmap-detail-content">
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>RAP 1</div>
              <p class="detail-text">Identifica los conceptos teóricos, las disposiciones constitucionales, legales, sustanciales y procesales que rigen la contratación y el presupuesto del Estado colombiano; para prevenir vicios en la contratación e incumplimientos en los procesos presupuestales.</p>
            </div>
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>RAP 2</div>
              <p class="detail-text">Usa las herramientas administrativas en las diferentes etapas contractuales y presupuestales para la correcta toma de decisiones, el cumplimiento de metas de desarrollo y el buen manejo de los recursos fisicos y financieros de las organizaciones.</p>
            </div>
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>RAP 3</div>
              <p class="detail-text">Categoriza las herramientas tecnológicas y sistemas de información especializada; para la gestión de la contratación estatal y el presupuesto público en Colombia, orientadas al alcance de la transparencia, eficacia, comunicación y cumplimiento de los objetivos institucionales.</p>
            </div>
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>RAP 4</div>
              <p class="detail-text">Asume los valores y se fundamenta en los principios administrativos, éticos y de legalidad en la gestión contractual y presupuestal, en coherencia con la Filosofía Personalizante y humanizadora del Padre Guillermo de Castellana; para el cumplimiento del interés general y el uso correcto de los recursos del Estado.</p>
            </div>
            <div style="text-align: center; margin-top: 10px;">
              <a href="matriz_rap.xlsx" download="Matriz_RAP.xlsx" class="download-btn">📥 Descargar soporte</a>
            </div>
          </div>
        `
      },
      resultados: {
        title: "Matriz de Resultados de Aprendizaje",
        subtitle: "Objetivos y Logros por Ciclo Académico",
        content: `
          <div class="mindmap-detail-content">
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>CP 1</div>
              <p class="detail-text">Diferencia los conceptos teóricos, normas constitucionales, legales, sustanciales y procesales en torno a la contratación y el presupuesto en el Estado colombiano; para materializar la prevención de vicios en la contratación y la incoherencia legal y administrativa en el manejo presupuestal.</p>
            </div>
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>CP 2</div>
              <p class="detail-text">Integra los procesos de la gestión contractual y presupuestal de la organización, teniendo como fundamento la buena planeación, ejecución, control y evaluación del contrato y el presupuesto; para la correcta toma de decisiones, el cumplmiento de metas de desarrollo y la optimización de los recursos físicos y financieros.</p>
            </div>
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>CP 3</div>
              <p class="detail-text">Valora en el proceso administrativo las herramientas tecnológicas y sistemas de información especializada; para optimizar la gestión de la contratación estatal y el presupuesto público en Colombia, alcanzando la transparencia, eficacia, comunicación y cumplimiento de los objetivos institucionales.</p>
            </div>
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>CP 4</div>
              <p class="detail-text">Defiende con integridad, resposonsabilidad y transparencia, en coherencia con la Filosofía Personalizante y humanizadora del Padre Guillermo de Castellana, la gestión contractual y presupuestal, fundamentado en los principios administrativos, éticos y de legalidad; para el cumplimiento del interés general y el uso correcto de los recursos del Estado.</p>
            </div>
            <div style="text-align: center; margin-top: 10px;">
              <a href="matriz_resultados.xlsx" download="Matriz_Resultados.xlsx" class="download-btn">📥 Descargar soporte</a>
            </div>
          </div>
        `
      },
      raes: {
        title: "Relación de RAES vs Módulos",
        subtitle: "Mapa de Competencias por Asignatura",
        content: `
          <div class="mindmap-detail-content">
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>I — Introducción/Antecedentes</div>
              <p class="detail-text">Existe una relación indirecta entre el curso y el RAE. El resultado en sí no es el enfoque del curso, pero al menos un elemento del curso sirve como componente básico para el logro del resultado final. Por ejemplo, los elementos del curso pueden proporcionar el conocimiento, las habilidades o las actitudes necesarias para el logro final del resultado.</p>
            </div>
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>M — Intermedio/Transicional</div>
              <p class="detail-text">Existe una relación más directa entre el curso y el RAE. Una combinación de elementos del curso apoya el logro final, pero la integración final de los conocimientos, habilidades y actitudes necesarias para su logro no se logra en este curso. Por ejemplo, el conocimiento, las habilidades y/o las actitudes (al menos dos de los tres) requeridos para lograr el resultado pueden ser el enfoque del curso o elemento del curso.</p>
            </div>
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>E — Enfatizado</div>
              <p class="detail-text">Existe una relación directa entre el curso y el resultado. Al menos un elemento del curso se enfoca específicamente en la integración compleja de conocimientos, habilidades y actitudes.</p>
            </div>
            <div style="text-align: center; margin-top: 10px;">
              <a href="matriz_raes_modulos.xlsx" download="Matriz_RAES_Modulos.xlsx" class="download-btn">📥 Descargar soporte</a>
            </div>
          </div>
        `
      }
    }
  },
  plan: {
    title: "PLAN DE ESTUDIOS",
    categories: {
      plan: {
        title: "Estructura Curricular",
        subtitle: "Organización de Módulos por Semestres",
        content: `
          <div class="mindmap-detail-content">
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>Distribución del Primer Semestre (Nivel de Fundamentación)</div>
              <p class="detail-text">Consta de 7 módulos de gran relevancia académica:<br>
              1. Régimen Jurídico, Jurisprudencial y Tendencias de la Contratación Estatal<br>
              2. Marco Legal, Jurisprudencial y Generalidades del Presupuesto Público<br>
              3. Planeación del Presupuesto y Equilibrio Económico del Contrato<br>
              4. Gasto Público y Ejecución del Presupuesto de Ingresos y Gastos<br>
              5. Planeación Contractual y Modalidades de Selección de Contratistas<br>
              6. Garantías y Riesgos de la Contratación Estatal<br>
              7. Electiva I: Buenas Prácticas Contractuales / Sostenibilidad y Resp. Social</p>
            </div>
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>Distribución del Segundo Semestre (Nivel de Profundización y Cierre)</div>
              <p class="detail-text">Consta de 7 módulos avanzados e integradores:<br>
              1. Ética, Control y Responsabilidades en Contratación y Presupuesto<br>
              2. Innovación y Tecnologías Digitales en Contratación y Presupuesto<br>
              3. Interventoría y Supervisión del Contrato<br>
              4. Ejecución y Liquidación del Contrato y sus Efectos en el Presupuesto<br>
              5. Cierre Presupuestal, de Tesorería y Vigencias Futuras<br>
              6. Electiva II: Gestión Financiera, Financiación y Cofinanciación Estatal<br>
              7. Proyecto Integrador</p>
            </div>
            <div style="text-align: center; margin-top: 10px;">
              <a href="plan_modulos.xlsx" download="Plan_Modulos.xlsx" class="download-btn">📥 Descargar soporte</a>
            </div>
          </div>
        `
      },
      creditos: {
        title: "Créditos Académicos de la Propuesta",
        subtitle: "Intensidad Horaria y Créditos Totales",
        content: `
          <div class="mindmap-detail-content">
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>Resumen de Créditos del Programa</div>
              <p class="detail-text">La Especialización cuenta con una propuesta académica equilibrada que cumple con los requerimientos del Ministerio de Educación Nacional:<br><br>
              • <strong>Total Créditos del Programa:</strong> 28 Créditos.<br>
              • <strong>Créditos Primer Semestre:</strong> 14 Créditos.<br>
              • <strong>Créditos Segundo Semestre:</strong> 14 Créditos.<br>
              • <strong>Relación de Horas:</strong> Cada crédito académico están divididas entre horas presenciales con docente y horas de trabajo independiente.</p>
            </div>
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>Convenciones de Horas</div>
              <p class="detail-text">De la siguiente manera:<br><br>
              * <strong>HAD:</strong> Horas de Acompañamiento Directo<br>
              ** <strong>HTI:</strong> Horas de Trabajo Independiente<br>
              *** <strong>HTTI:</strong> Horas Totales de Trabajo</p>
            </div>
            <div style="text-align: center; margin-top: 10px;">
              <a href="plan_creditos.xlsx" download="Plan_Creditos.xlsx" class="download-btn">📥 Descargar soporte</a>
            </div>
          </div>
        `
      },
      tematicas: {
        title: "Núcleos Temáticos y de Profundización",
        subtitle: "Líneas de Investigación y Desarrollo de la Especialización",
        content: `
          <div class="mindmap-detail-content">
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>Línea 1: Contratación Estatal y Eficiencia Administrativa</div>
              <p class="detail-text">Aborda desde los cimientos constitucionales del contrato hasta el análisis crítico de la jurisprudencia del Consejo de Estado y la Corte Constitucional colombiana. Se estudian esquemas novedosos como los contratos de Asociación Público-Privada (APP) y compras de tecnología.</p>
            </div>
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>Línea 2: Hacienda, Finanzas y Presupuesto del Estado</div>
              <p class="detail-text">Se enfoca en el ciclo presupuestal, la tributación territorial, el impacto de las regalías en la financiación del desarrollo y la rigurosidad de los cierres fiscales anuales. Los estudiantes analizan problemas prácticos del día a día en alcaldías, gobernaciones y entidades nacionales.</p>
            </div>
            <div class="mindmap-detail-item">
              <div class="detail-item-title"><span></span>Línea 3: Ética Pública, Control Fiscal e Inteligencia Artificial</div>
              <p class="detail-text">Una de las temáticas pioneras del programa: la incorporación de herramientas tecnológicas (IA, Big Data, Blockchain) para la auditoría, prevención del fraude y el fortalecimiento de la transparencia en la gestión de compras públicas.</p>
            </div>
            <div style="text-align: center; margin-top: 10px;">
              <a href="plan_tematicas.xlsx" download="Plan_Tematicas.xlsx" class="download-btn">📥 Descargar soporte</a>
            </div>
          </div>
        `
      }
    }
  }
};

// --- LÓGICA DE NAVEGACIÓN SPA (Single Page Application) ---
function initNavigation() {
  const sections = document.querySelectorAll('.app-section');
  const homeSection = document.getElementById('home-section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Elementos de mosaicos del Home
  const mosaicTeachers = document.getElementById('mosaic-teachers');
  const mosaicMatriz = document.getElementById('mosaic-matriz');
  const mosaicPlan = document.getElementById('mosaic-plan');
  
  // Función para cambiar de sección
  function navigateTo(targetId) {
    // Si el destino es 'home', mostrar home-section y ocultar los demás
    if (targetId === 'home') {
      sections.forEach(sec => sec.classList.remove('active'));
      homeSection.style.display = 'block';
      
      // Actualizar links activos
      navLinks.forEach(link => {
        if (link.dataset.target === 'home') link.classList.add('active');
        else link.classList.remove('active');
      });
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Si el destino es una sección SPA
    homeSection.style.display = 'none';
    sections.forEach(sec => {
      if (sec.id === targetId) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
    
    // Actualizar links de navegación activos
    navLinks.forEach(link => {
      if (link.dataset.target === targetId) link.classList.add('active');
      else link.classList.remove('active');
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Escuchar clics en el menú superior
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.target;
      navigateTo(target);
    });
  });

  // Escuchar clics en los mosaicos del dashboard (Home)
  if (mosaicTeachers) {
    mosaicTeachers.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('teachers-section');
    });
  }
  if (mosaicMatriz) {
    mosaicMatriz.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('matriz-section');
    });
  }
  if (mosaicPlan) {
    mosaicPlan.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('plan-section');
    });
  }
  
  // Botones de "Volver al inicio" dentro de las secciones
  const backButtons = document.querySelectorAll('.btn-back-home');
  backButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('home');
    });
  });
}

// --- LÓGICA DEL DIRECTORIO DE MAESTROS ---
function initTeachersDirectory() {
  const teachersContainer = document.getElementById('teachers-container');
  const searchInput = document.getElementById('teacher-search');
  const selectSemestre = document.getElementById('filter-semestre');
  const selectModulo = document.getElementById('filter-modulo');
  
  // Elementos de Estadísticas
  const statTeachersCount = document.getElementById('stat-teachers-count');
  const statModulosCount = document.getElementById('stat-modulos-count');
  const statSemestresCount = document.getElementById('stat-semestres-count');

  // Rellenar dinámicamente los selectores de filtro con los datos únicos del Excel
  function populateFilters() {
    const semestres = new Set();
    const modulos = new Set();
    
    TEACHERS_DATA.forEach(t => {
      semestres.add(t.semestre);
      modulos.add(t.modulo);
    });
    
    // Semestres
    semestres.forEach(sem => {
      const option = document.createElement('option');
      option.value = sem;
      option.textContent = sem;
      selectSemestre.appendChild(option);
    });
    
    // Módulos (Truncar nombres largos para el select, pero mantener valor completo)
    modulos.forEach(mod => {
      const option = document.createElement('option');
      option.value = mod;
      option.textContent = mod.length > 55 ? mod.substring(0, 52) + '...' : mod;
      selectModulo.appendChild(option);
    });
  }

  // Función para calcular y animar las estadísticas clave
  function calculateStats(filteredData) {
    const totalTeachers = filteredData.length;
    
    const modulosSet = new Set();
    const semestresSet = new Set();
    
    filteredData.forEach(t => {
      modulosSet.add(t.modulo);
      semestresSet.add(t.semestre);
    });
    
    // Actualizar con un efecto dinámico de conteo
    animateCounter(statTeachersCount, totalTeachers);
    animateCounter(statModulosCount, modulosSet.size);
    animateCounter(statSemestresCount, semestresSet.size);
  }

  // Animación suave de números
  function animateCounter(element, targetValue) {
    if (!element) return;
    let start = 0;
    const duration = 400; // ms
    const increment = Math.ceil(targetValue / (duration / 20));
    
    if (targetValue === 0) {
      element.textContent = "0";
      return;
    }
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        element.textContent = targetValue;
        clearInterval(timer);
      } else {
        element.textContent = start;
      }
    }, 20);
  }

  // Renderizar las tarjetas de profesores
  function renderTeachers(teachers) {
    teachersContainer.innerHTML = '';
    
    if (teachers.length === 0) {
      teachersContainer.innerHTML = `
        <div class="no-results">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          <h3>No se encontraron docentes</h3>
          <p>Prueba ajustando los filtros de búsqueda o restableciendo los parámetros.</p>
        </div>
      `;
      return;
    }
    
    teachers.forEach((t, index) => {
      // Tomar las iniciales del docente para la foto simulada
      const initials = t.name.split(' ').map(n => n[0]).filter((x, i) => i < 2).join('');
      
      const card = document.createElement('div');
      card.className = 'teacher-card';
      card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.05}s both`;
      
      card.innerHTML = `
        <div>
          <div class="teacher-header">
            <div class="teacher-avatar-circle">${initials}</div>
            <div class="teacher-title-area">
              <h3 class="teacher-name">${t.name}</h3>
              <div class="teacher-badge-container">
                <span class="teacher-badge semestre">${t.semestre} Semestre</span>
                <span class="teacher-badge modulo">${t.vinculacion}</span>
              </div>
            </div>
          </div>
          
          <div class="teacher-body">
            <div class="teacher-info-row">
              <strong>Módulo Asignado</strong>
              <p>${t.modulo}</p>
            </div>
            <div class="teacher-info-row">
              <strong>Formación Destacada</strong>
              <p>${t.formacion}</p>
            </div>
          </div>
        </div>
        
        <button class="btn-view-details" data-teacher-id="${t.id}">
          Ver Hoja de Vida Completa
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      `;
      
      teachersContainer.appendChild(card);
    });

    // Añadir escuchador a los botones de detalle
    const detailsButtons = teachersContainer.querySelectorAll('.btn-view-details');
    detailsButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.teacherId);
        openTeacherDetail(id);
      });
    });
  }

  // Filtrado de maestros en tiempo real
  function filterTeachers() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedSemestre = selectSemestre.value;
    const selectedModulo = selectModulo.value;
    
    const filtered = TEACHERS_DATA.filter(t => {
      const matchSearch = t.name.toLowerCase().includes(searchText) || 
                          t.formacion.toLowerCase().includes(searchText) ||
                          t.experiencia.toLowerCase().includes(searchText) ||
                          t.perfil.toLowerCase().includes(searchText);
                          
      const matchSemestre = selectedSemestre === '' || t.semestre === selectedSemestre;
      const matchModulo = selectedModulo === '' || t.modulo === selectedModulo;
      
      return matchSearch && matchSemestre && matchModulo;
    });
    
    renderTeachers(filtered);
    calculateStats(filtered);
  }

  // Escuchadores de eventos
  searchInput.addEventListener('input', filterTeachers);
  selectSemestre.addEventListener('change', filterTeachers);
  selectModulo.addEventListener('change', filterTeachers);

  // Inicializar directorio
  populateFilters();
  renderTeachers(TEACHERS_DATA);
  calculateStats(TEACHERS_DATA);
}

// --- LÓGICA DE DETALLE (DRAWER DE DOCENTES) ---
const drawerOverlay = document.getElementById('drawer-overlay');
const detailDrawer = document.getElementById('detail-drawer');
const drawerCloseBtn = document.getElementById('btn-close-drawer');
const drawerTitle = document.getElementById('drawer-title');
const drawerSubtitle = document.getElementById('drawer-subtitle');
const drawerContent = document.getElementById('drawer-content');

function openDrawer(title, subtitle, htmlContent) {
  drawerTitle.textContent = title;
  drawerSubtitle.textContent = subtitle;
  drawerContent.innerHTML = htmlContent;
  
  drawerOverlay.classList.add('active');
  detailDrawer.classList.add('active');
  document.body.style.overflow = 'hidden'; // Evitar scroll del fondo
}

function closeDrawer() {
  drawerOverlay.classList.remove('active');
  detailDrawer.classList.remove('active');
  document.body.style.overflow = '';
}

drawerCloseBtn.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

// Cerrar drawer presionando la tecla Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDrawer();
});

// Desplegar el detalle de un docente
function openTeacherDetail(id) {
  const teacher = TEACHERS_DATA.find(t => t.id === id);
  if (!teacher) return;
  
  const initials = teacher.name.split(' ').map(n => n[0]).filter((x, i) => i < 2).join('');
  
  const html = `
    <div class="teacher-detail-grid">
      <div class="teacher-profile-header">
        <div class="teacher-profile-avatar">${initials}</div>
        <div class="teacher-profile-meta">
          <h3>${teacher.name}</h3>
          <p>${teacher.modulo}</p>
        </div>
      </div>
      
      <div class="detail-section">
        <h4 class="detail-section-title">Perfil Profesional</h4>
        <p class="detail-text">${teacher.perfil}</p>
      </div>
      
      <div class="detail-section">
        <h4 class="detail-section-title">Formación Académica</h4>
        <p class="detail-text">${teacher.formacion}</p>
      </div>
      
      <div class="detail-section">
        <h4 class="detail-section-title">Experiencia Profesional</h4>
        <p class="detail-text">${teacher.experiencia}</p>
      </div>
      
      <div class="detail-section">
        <h4 class="detail-section-title">Formación Pedagógica</h4>
        <p class="detail-text">${teacher.pedagogia}</p>
      </div>
      
      <div class="detail-section">
        <h4 class="detail-section-title">Competencias Tecnológicas</h4>
        <p class="detail-text">${teacher.tecnologias}</p>
      </div>
      
      <div class="detail-section">
        <h4 class="detail-section-title">Semestre y Vinculación</h4>
        <p class="detail-text">Módulo asignado en el <strong>${teacher.semestre} Semestre</strong> bajo la modalidad de <strong>${teacher.vinculacion}</strong>.</p>
      </div>
    </div>
  `;
  
  openDrawer("Ficha del Docente", "Detalle de Hoja de Vida", html);
}

// --- LÓGICA DE MAPAS MENTALES ---
function initMindmaps() {
  const subnodes = document.querySelectorAll('.mindmap-subnode');
  
  subnodes.forEach(node => {
    node.addEventListener('click', () => {
      const type = node.dataset.mapType; // 'matriz' o 'plan'
      const key = node.dataset.mapKey;   // 'rap', 'resultados', 'raes', etc.
      
      if (MINDMAP_DETAILS[type] && MINDMAP_DETAILS[type].categories[key]) {
        const catData = MINDMAP_DETAILS[type].categories[key];
        const sectionTitle = MINDMAP_DETAILS[type].title;
        
        openDrawer(catData.title, sectionTitle, catData.content);
      }
    });
  });
}

// --- INICIALIZACIÓN GLOBAL ---
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTeachersDirectory();
  initMindmaps();
});
