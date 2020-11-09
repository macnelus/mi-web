import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


const Portfolio = () => {
  return (
    <>
      <Header />
      <main>
        <Link to="./photo">Bio</Link>
        <Link to="./video">Video</Link>
      </main>
      <Footer />
    </>
  );
}



export default Portfolio;
