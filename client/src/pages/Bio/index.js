import React from 'react';
import yo from '../../img/yoweb.png'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Bio = () => {
  return (
    <>
      <Header />
      <main id="bio">
        <div className="photo-bio">
          <img src={yo} alt="Autorretrato" />
        </div>
        <div className="title-bio">
          <h1>Bio</h1>
            <p className="text-bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              dictum libero. Cras maximus elementum ullamcorper. Ut euismod, ipsum
              et sollicitudin viverra, ex justo rhoncus ante, vel volutpat elit
              velit vitae nisi. Ut aliquam eros leo, in auctor mauris laoreet id.
              Morbi laoreet metus quis auctor sagittis. Maecenas nec varius justo.
              In eget nulla justo. Sed molestie porttitor tristique. Duis
              tincidunt, sem at faucibus bibendum, lacus orci efficitur orci, vel
              aliquet diam lectus a mi. Curabitur rhoncus at sapien ut luctus.
              Pellentesque mollis nisl quis ligula lacinia, vitae lobortis neque
              fermentum. Vivamus at egestas ipsum. Sed vehicula dui nec nulla
              aliquam, in blandit dolor placerat. Nulla et varius urna. Nam eu
              pretium erat. Vestibulum fermentum ligula ex, at hendrerit tortor
              feugiat quis. Phasellus magna mauris, posuere et neque accumsan,
              vehicula sagittis magna. 
            </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Bio;
