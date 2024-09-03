import axios from 'axios';

axios.defaults.baseURL = "https://api.unsplash.com";

export async function fetchImages(topic, page = 1) {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "E2UtTr5b8gG1KAgDHvcZedsXUcDVKWl2iwVtCWx-58g",
      query: topic,
      orientation: "landscape",
      page: page,
      per_page: 15,
    },
  });

  return {
    images: response.data.results,
    total_pages: response.data.total_pages
  };
}