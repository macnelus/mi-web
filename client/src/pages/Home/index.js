import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main id="home">
      <div className="left-image">
        <img alt="Landscape photo" /> 
      </div>
      <div className="home">
        <div className="principal">
          <h1 className="home-titulo">Mariano<br />Cuesta</h1>
          <nav className="home-menu">
            <Link to="/bio">Bio</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contacto</Link>
          </nav>
        </div>
        <nav className="tags-menu">
          <Link to="#">video</Link>
          <Link to="#">social media</Link>
          <Link to="#">web</Link>
          <Link to="/contact">programming</Link>
        </nav>
      </div>
      <div className="right-image">
        <img alt="Landscape photo" />
      </div>
    </main>
  );
};

export default Home;
