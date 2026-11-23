import { Card } from 'react-bootstrap';

// Tarjeta de una recomendación
export default function RecommendationCard({ text }) {
  return (
    <Card className="recommendation-card h-100">
      <Card.Body>
        <Card.Text>“{text}”</Card.Text>
      </Card.Body>
    </Card>
  );
}
