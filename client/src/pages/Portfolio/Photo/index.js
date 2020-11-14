
import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getFlickrData } from '../../../lib/api.js';
import FlickrItem from '../../../components/FlickrItem.js';

const Photo = () => {
  const [flickrData, setFlickrData] = useState([]);

  const fetchFlickrData = async () => {
    const data = await getFlickrData();

    setFlickrData(data);
  };

  useEffect(() => {
    fetchFlickrData();
  }, []);

  return (
    <div className="">
      <Header />

      <main className="">
        <h2 className="">Photos</h2>

        <section>
          {flickrData.map((source, i) => (
            <FlickrItem key={i} source={source} />
          ))}
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Photo;
