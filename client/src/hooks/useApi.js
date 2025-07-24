import axios from 'axios';
export const useApi = (endpoint) => {
  const fetchData = async () => {
    const res = await axios.get(`/api/${endpoint}`);
    return res.data;
  };
  return { fetchData };
};
