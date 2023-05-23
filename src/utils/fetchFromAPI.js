import axios from 'axios';

const Base_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
  url: Base_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '2cfe3331d9msh31ae271b5730d9cp11f7e5jsn140696171214',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
 const {data} = await axios.get(`${Base_URL}/${url}`, options);
 return data;
}