import { Card } from 'react-bootstrap';

// Tarjeta individual de habilidad (se reutiliza para cada habilidad)
export default function SkillCard({ name, icon, experience }) {
  return (
    <Card className="skill-card text-center">
      <Card.Body>
        <img src={icon} alt={name} className="mb-2" />
        <Card.Subtitle className="mb-3 small fw-bold">{name}</Card.Subtitle>
        <Card.Text>{experience}</Card.Text>
      </Card.Body>
    </Card>
  );
}
