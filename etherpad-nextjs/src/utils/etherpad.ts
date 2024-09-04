import axios from 'axios';

const ETHERPAD_API_URL = process.env.ETHERPAD_API_URL || 'http://localhost:9001/api/1.2.15';
const API_KEY = process.env.ETHERPAD_API_KEY || '4d61b7c1ddaee11192fd594c82380fcc408c852bbc140e797d84c7489d196c00';

export const createPad = async (padID: string) => {
  return axios.post(`${ETHERPAD_API_URL}/createPad`, {
    padID,
    apikey: API_KEY,
  });
};

export const getPadContent = async (padID: string) => {
  return axios.get(`${ETHERPAD_API_URL}/getText`, {
    params: { apikey: API_KEY, padID },
  });
};

export const setPadContent = async (padID: string, text: string) => {
  return axios.post(`${ETHERPAD_API_URL}/setText`, {
    apikey: API_KEY,
    padID,
    text,
  });
};
