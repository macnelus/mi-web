import React from 'react';

const FlickrItem = ({ source }) => {

  return (

    <figure>
      <img src={source} alt="Gallery" />
    </figure>

  );
};

export default FlickrItem;
