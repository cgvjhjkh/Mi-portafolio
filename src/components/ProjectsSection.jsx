import { Row, Col } from 'react-bootstrap';
import ProjectItem from './ProjectItem';

// Sección de proyectos: una columna centrada que se ensancha en pantallas grandes
export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="my-5">
      <h2 className="section-title mb-4">Proyectos</h2>
      <Row>
        <Col xs={12} lg={11} className="mx-auto">
          {projects.map((project) => (
            <ProjectItem key={project.title} title={project.title} description={project.description} />
          ))}
        </Col>
      </Row>
    </section>
  );
}
