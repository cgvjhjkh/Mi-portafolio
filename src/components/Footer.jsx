import { Button } from 'react-bootstrap';

// Footer: botón flotante para volver al inicio de la página
export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer>
      <Button className="scroll-top-btn" onClick={scrollToTop} aria-label="Volver arriba">
        <i className="bi bi-arrow-up"></i>
      </Button>
    </footer>
  );
}
