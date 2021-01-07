import axios from 'axios';
import { StarWarsApi } from '../api/StarWarsApi';
import { getRandomInt } from '../helpers';

export const generateQuestions = async ({ mode, minId, maxId }) => {
  const starWarsApi = StarWarsApi();
  const randomIds = [];
  for (let x = 0; x < 4; x++) {
    let randomId;
    do {
      randomId = getRandomInt({ min: minId, max: maxId });
    } while (randomIds.includes(randomId));
    randomIds.push(randomId);
  }

  const answers = await Promise.all(
    [...randomIds].map((id) => {
      return starWarsApi.get({ mode: mode, id: id });
    }),
  );

  const rightAnswerId =
    randomIds[getRandomInt({ min: 0, max: randomIds.length })];
  const rightAnswer = {
    id: rightAnswerId,
    name: answers.find((answer) => answer.id === rightAnswerId).name,
  };
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = (error) => reject(error);
    });
  const getImage = async () => {
    return axios
      .get(`../../static/assets/img/modes/${mode}/${rightAnswerId}.jpg`, {
        responseType: 'blob',
      })

      .then(async (response) => await toBase64(response.data))
      .catch((error) => console.log(error));

    await toBase64(blob);
  };
  return {
    image: await getImage(),
    answers: answers,
    rightAnswer: { id: rightAnswerId, name: rightAnswer },
  };
};
