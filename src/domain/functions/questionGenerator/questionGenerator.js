import axios from 'axios';
import { StarWarsApi } from '../../../api/StarWarsApi';

import { getRandomInt } from '../../../helpers';
export default class QuestionGenerator {
  constructor(mode, minId, maxId) {
    this.mode = mode;
    this.minId = minId;
    this.maxId = maxId;
  }
  async generateQeustion() {
    const generatedAnswers = await this.generateAnswers();

    const base64Image = await this.getImageforRightAnswer(
      mode,
      generatedAnswers.rightAnswer.id,
    );
    const { answers, rightAnswer } = generatedAnswers;
    return {
      image: base64Image,
      answers,
      rightAnswer,
    };
  }
  async generateAnswers() {
    const randomIds = new Set();

    while (randomIds.size < 4) {
      const randomId = getRandomInt(this.minId, this.maxId);
      randomIds.add(randomId);
    }

    const answers = await Promise.all(
      [...randomIds].map((id) => {
        return StarWarsApi().get(this.mode, id);
      }),
    );

    const rightAnswerId = randomIds[getRandomInt(0, randomIds.length)];
    const rightAnswer = {
      id: rightAnswerId,
      name: answers.find((answer) => answer.id === rightAnswerId).name,
    };

    return {
      answers: answers,
      rightAnswer: { id: rightAnswerId, name: rightAnswer },
    };
  }

  async getImageforRightAnswer(rightAnswerId) {
    const response = await axios
      .get(`../../static/assets/img/modes/${this.mode}/${rightAnswerId}.jpg`, {
        responseType: 'arraybuffer',
      })
      .catch((error) => console.log(error));
    return Buffer.from(response.data).toString('base64');
  }
}
