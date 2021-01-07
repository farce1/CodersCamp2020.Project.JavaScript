import axios from 'axios';
const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
export const StarWarsApi = () => {
  return {
    async get({ mode, id }) {
      const response = await axios.get(`https://swapi.dev/api/${mode}/${id}`);
      return { id: id, name: response.data.name };
    },
  };
};
