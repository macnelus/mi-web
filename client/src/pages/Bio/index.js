import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Bio = () => {
  return (
    <>
      <Header />
      <main id="bio">
        <div className="photo-bio"></div>
        <div className="text-bio"></div>
      </main>
      <Footer />
    </>
  );
};

export default Bio;
