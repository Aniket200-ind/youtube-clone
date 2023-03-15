import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: '50'
      },
  headers: {
    "X-RapidAPI-Key": "8b24c404f8msh87d9da7836b7f2fp1ea7d8jsn395ac033c0dc",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
