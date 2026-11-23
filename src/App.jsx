import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Intro from './components/Intro';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import RecommendationsSection from './components/RecommendationsSection';
import LeaveRecommendationForm from './components/LeaveRecommendationForm';
import Footer from './components/Footer';
import {
  profile,
  navLinks,
  skills,
  projects,
  initialRecommendations,
} from './data/portfolioData';

// Componente principal: orquesta todas las secciones y guarda el estado compartido.
export default function App() {
  const [recommendations, setRecommendations] = useState(initialRecommendations);

  // Se pasa al formulario por props; añade una recomendación nueva a la lista
  const addRecommendation = ({ name, message }) => {
    const text = name ? `${message} — ${name}` : message;
    setRecommendations((prev) => [...prev, { id: Date.now(), text }]);
  };

  return (
    <>
      <Header name={profile.name} email={profile.email} phone={profile.phone} links={navLinks} />

      <Container className="pb-5">
        <Intro avatar={profile.avatar} greeting={profile.greeting} bio={profile.bio} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <RecommendationsSection recommendations={recommendations} />
        <LeaveRecommendationForm onSubmit={addRecommendation} />
      </Container>

      <Footer />
    </>
  );
}
