import React from 'react';

const YouTubeItem = ({ video }) => {
  const { videoId, title, description } = video;
  return (
    <article>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
};

export default YouTubeItem;
