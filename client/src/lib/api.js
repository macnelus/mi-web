export const getYoutubeApi = async () => {
  const response = await window.gapi.client.request(
    'https://www.googleapis.com/youtube/v3/search?channelId=UC-jqp9Jz_9tiGiVVtSiPkmw&part=snippet,id&order=date&maxResults=50',
  );

  const { items } = JSON.parse(response.body);
  const youtubedata = items.map((video) => {
    const {
      id: { videoId },
      snippet: { title, description },
    } = video;

    return { videoId, title, description };
  });

  return youtubedata;
};
