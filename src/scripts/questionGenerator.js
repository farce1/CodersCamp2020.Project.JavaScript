import axios from 'axios';

import { StarWarsApi } from '../api/StarWarsApi';
import { getRandomInt } from '../helpers';

export const generateAnswers = async ({ mode, minId, maxId }) => {
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
      return StarWarsApi().get({ mode: mode, id: id });
    }),
  );

  const rightAnswerId =
    randomIds[getRandomInt({ min: 0, max: randomIds.length })];
  const rightAnswer = {
    id: rightAnswerId,
    name: answers.find((answer) => answer.id === rightAnswerId).name,
  };

  return {
    answers: answers,
    rightAnswer: { id: rightAnswerId, name: rightAnswer },
  };
};

export const getImageforRightAnswer = async (mode, rightAnswerId) => {
  const response = await axios
    .get(`../../static/assets/img/modes/people/2.jpg`, {
      responseType: 'arraybuffer',
    })
    .catch((error) => console.log(error));
  return Buffer.from(response.data).toString('base64');
};

export const getQuestion = async ({ mode, minId, maxId }) => {
  const generatedAnswers = await generateAnswers({
    mode: mode,
    maxId: maxId,
    minId: minId,
  });
  const base64Image = await getImageforRightAnswer(
    mode,
    generatedAnswers.rightAnswer.id,
  );
  const { answers, rightAnswer } = generatedAnswers;
  return {
    image: base64Image,
    answers: answers,
    rightAnswer: rightAnswer,
  };
};
