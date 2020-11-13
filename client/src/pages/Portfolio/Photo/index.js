import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Photo = () => {

  const [flickrData, setFlickrData] = useState([]);

  const fetchFlickrData = async () => {
    const data = await getYoutubeApi();

    setFlickrData(data);
  };

  useEffect(() => {
    fetchFlickrData();
  }, []);

  return (
    <div className="">
      <Header />

      <main className="">
        <h2 className="">Photo Gallery</h2>

        <section>
          {flickrData.map((video, i) => (
            <flickrItem key={i} video={video} />
          ))}
        </section>
        <ul className=""></ul>
        <Footer />
      </main>
    </div>
  );
};

export default Photo;
