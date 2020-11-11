import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Bio = () => {
  return (
    <>
      <Header />
      <main id="bio">
        <div className="photo-bio">
          <img alt="Landscape photo" />
        </div>

        <div className="title-bio">
          <h1>Bio</h1>
          <p>Me llamo Mariano</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Bio;
