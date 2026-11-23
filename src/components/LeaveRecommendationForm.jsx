import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

// Formulario para dejar una recomendación (campos controlados con useState)
export default function LeaveRecommendationForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message.trim()) return; // el mensaje es obligatorio
    onSubmit({ name: name.trim(), message: message.trim() });
    setName('');
    setMessage('');
  };

  return (
    <Row className="my-5">
      <Col xs={12} md={8} lg={6} className="mx-auto">
        <h4 className="mb-3">Deja una recomendación</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="recName">
            <Form.Label className="visually-hidden">Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre (opcional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="recMessage">
            <Form.Label className="visually-hidden">Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button type="submit" className="btn-submit">
              Enviar
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
