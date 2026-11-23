import { Row, Col } from 'react-bootstrap';
import RecommendationCard from './RecommendationCard';

// Sección de recomendaciones: 1 tarjeta por fila en móvil, 3 por fila en pantallas medianas
export default function RecommendationsSection({ recommendations }) {
  return (
    <section id="recommendations" className="my-5">
      <h2 className="section-title mb-4">Recomendaciones</h2>
      <Row className="g-3">
        {recommendations.map((rec) => (
          <Col key={rec.id} xs={12} md={4}>
            <RecommendationCard text={rec.text} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
