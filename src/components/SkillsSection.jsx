import { Row, Col } from 'react-bootstrap';
import SkillCard from './SkillCard';

// Sección de habilidades: cuadrícula responsiva (1 col en móvil, 2 en sm, 3 en md, 4 en lg)
export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="my-5">
      <h2 className="section-title mb-4">Habilidades</h2>
      <Row className="g-4">
        {skills.map((skill) => (
          <Col key={skill.name} xs={6} md={4} lg={3} className="d-flex justify-content-center">
            <SkillCard name={skill.name} icon={skill.icon} experience={skill.experience} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
