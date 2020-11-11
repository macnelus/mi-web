const { REACT_APP_YOUTUBE_API_KEY } = process.env;
const YOUTUBE_ITEMS_API = 'https://www.googleapis.com/youtube/v3/channels';

export const getYoutubeApi = async () => {
  console.log({ REACT_APP_YOUTUBE_API_KEY });
  const res = await fetch(
    `${YOUTUBE_ITEMS_API}?part=snippet%2Cstatistics&id=UC-jqp9Jz_9tiGiVVtSiPkmw&key=${REACT_APP_YOUTUBE_API_KEY}`,
  );

  const data = res.json();

  console.log({ data });
  return data;
};
