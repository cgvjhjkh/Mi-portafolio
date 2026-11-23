import { Navbar, Nav, Container } from 'react-bootstrap';

// Header: nombre, datos de contacto y enlaces de navegación (Navbar de Bootstrap)
export default function Header({ name, email, phone, links }) {
  return (
    <Navbar expand="md" className="navbar-portfolio" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#about" className="d-flex flex-column lh-sm">
          <span>{name}</span>
          <span className="contact-line">
            <i className="bi bi-envelope-fill me-1"></i>
            {email}
          </span>
          <span className="contact-line">
            <i className="bi bi-telephone-fill me-1"></i>
            {phone}
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav>
            {links.map((link) => (
              <Nav.Link key={link.href} href={link.href}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
