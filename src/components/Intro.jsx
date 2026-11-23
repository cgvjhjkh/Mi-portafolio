import { Row, Col, Image } from 'react-bootstrap';

// Sección de introducción: avatar a la izquierda, texto a la derecha
export default function Intro({ avatar, greeting, bio }) {
  return (
    <Row id="about" className="align-items-center my-5 g-4">
      <Col xs={12} md={4} className="text-center">
        <Image src={avatar} alt="Avatar" fluid style={{ maxHeight: 260 }} />
      </Col>
      <Col xs={12} md={8}>
        <h1 className="section-title display-5">
          {greeting} <span role="img" aria-label="saludo">👋</span>
        </h1>
        <p className="text-secondary">{bio}</p>
      </Col>
    </Row>
  );
}
