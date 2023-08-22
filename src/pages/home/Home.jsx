import'./Home.css';
import ImageCarousel from './ImageCarousel';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <section className="hero">
        <ImageCarousel />
        <div className="welcome-text">
          <h1>Bem-vindo ao Parque Nacional da Serra dos Órgãos</h1>
          <Link to="/form" className="button">
            Agendar Sua Visita
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;

