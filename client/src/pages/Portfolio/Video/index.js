import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getYoutubeApi } from '../../../lib/api.js';
import YouTubeItem from '../../../components/YoutubeItem.js';

const Video = () => {
  const [youtubeData, setYouTubeData] = useState([]);

  const fetchYouTubeData = async () => {
    const data = await getYoutubeApi();
    setYouTubeData(data);
  };

  useEffect(() => {
    fetchYouTubeData();
  }, []);

  return (
    <div className="">
      <Header />

      <main className="">
        <h1 className="">NoSoyUnPDF</h1>

        <section>
          {youtubeData.map((video) => (
            <YouTubeItem key={video.videoId} video={video} />
          ))}
        </section>

        <ul className=""></ul>
        <Footer />
      </main>
    </div>
  );
};

export default Video;
