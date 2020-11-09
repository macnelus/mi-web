import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_ITEMS_API}?part=snippet&maxResults=50&channelid=UC-jqp9Jz_9tiGiVVtSiPkmw&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          NoSoyUnPDF
        </h1>

        <ul className={styles.grid}>
          {data.items.map(({ id, snippet = {} }) => {
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium } = thumbnails;
            return (
              <li key={id} className={styles.card}>
                <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                  <p>
                    <img width={medium.width} height={medium.height} src={medium.url} alt="" />
                  </p>
                  <h3>{ title }</h3>
                </a>
              </li>
            )
          })}
        </ul>
        <Footer />
      </main>
    </div>
