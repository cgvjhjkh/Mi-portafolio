import { Card } from 'react-bootstrap';

// Un proyecto individual
export default function ProjectItem({ title, description }) {
  return (
    <Card className="project-item border-0 rounded-0">
      <Card.Body className="px-0 py-0">
        <Card.Title as="h6" className="fw-bold">{title}</Card.Title>
        <ul className="mb-0">
          <li>{description}</li>
        </ul>
      </Card.Body>
    </Card>
  );
}
