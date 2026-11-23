// Todos los datos del portafolio en un solo lugar: los componentes los reciben por props.
// Ajusta aquí tu información (correo, teléfono, años de experiencia, etc.).

const icon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

export const profile = {
  name: 'Jeison Gutiérrez',
  email: 'jeisonalfonsogutierrezvillasmi@gmail.com', // TODO: cambia por tu correo
  phone: '+57 320 584 2241', // TODO: cambia por tu teléfono
  avatar: '/avatar.svg',
  greeting: "Hola, soy Jeison Gutiérrez!",
  bio:
    'Soy desarrollador full stack en formación (Tecnología en Análisis y Desarrollo de Software, SENA). ' +
    'He trabajado con React, Node.js, PHP, Python y bases de datos como MySQL, PostgreSQL y MongoDB, ' +
    'construyendo desde sistemas de logística hasta tiendas en línea.',
};

export const navLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Recomendaciones', href: '#recommendations' },
];

export const skills = [
  { name: 'HTML', icon: icon('html5'), experience: '2 años de experiencia' },
  { name: 'JavaScript', icon: icon('javascript'), experience: '1.5 años de experiencia' },
  { name: 'PHP', icon: icon('php'), experience: '1 año de experiencia' },
  { name: 'React', icon: icon('react'), experience: '6 meses de experiencia ' },
  { name: 'Node.js', icon: icon('nodejs'), experience: '6 meses de experiencia' },
  { name: 'CSS', icon: icon('css3'), experience: '2 años de experiencia' },
];

export const projects = [
  {
    title: 'Sistema de Logística  de una biblioteca escolar',
    description:
      'Sistema web para gestionar la logística y prestamos de libros de una biblioteca  de un colegio , con panel de control y base de datos relacional.',
  },
  {
    title: 'NOVA SCHOOL – E-commerce',
    description:
      'Tienda en línea de papelería escolar desarrollada con PHP y MariaDB, con panel de administración y galería de productos.',
  },
  {
    title: 'Minimercado',
    description:
      'Aplicación para un minimercado construida con HTML, CSS, Bootstrap, JavaScript y Node.js.',
  },
];

export const initialRecommendations = [
  
];
