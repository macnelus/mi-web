import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getYoutubeApi } from '../../../lib/api.js';

const Video = () => {
  const [youtubeData, setYouTubeData] = useState([]);

  const fetchYouTubeData = async () => {
    const data = await getYoutubeApi();
    setYouTubeData(data);
  };

  useEffect(() => {
    fetchYouTubeData();
  }, [youtubeData]);

  return (
    <div className="">
      <Header />

      <main className="">
        <h1 className="">NoSoyUnPDF</h1>

        <ul className=""></ul>
        <Footer />
      </main>
    </div>
  );
};

export default Video;
