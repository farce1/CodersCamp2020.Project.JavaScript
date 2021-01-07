import axios from 'axios';
const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
export const StarWarsApi = () => {
  return {
    get({ mode, id }) {
      console.log('id' + id);
      return axios
        .get(`https://swapi.dev/api/${mode}/${id}`)

        .then((response) => ({ id: id, name: response.data.name }));
    },
  };
};
