export const getYoutubeApi = async () => {
  const response = await window.gapi.client.request(
    'https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=UC-jqp9Jz_9tiGiVVtSiPkmw',
  );

  const data = JSON.parse(response.body);
  console.log({ data });
  return data;
};
