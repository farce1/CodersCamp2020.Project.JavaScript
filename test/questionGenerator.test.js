import axios from 'axios';
import QuestionGenerator from '../src/domain/functions/questionGenerator/QuestionGenerator';

const generator = new QuestionGenerator('people', 1, 12);
describe('question generate function', () => {
  it('should return 4 answers and right answer', async () => {
    const getSpySuccess = jest.spyOn(axios, 'get').mockImplementation(() => {
      return new Promise((resolve, reject) => {
        return resolve({
          data: { name: 'olaf' },
        });
      });
    });
    const response = await generator.generateAnswers();

    expect(response).toHaveProperty('answers');
    expect(response.answers.length).toBe(4);
    expect(response).toHaveProperty('rightAnswer');
  });
});

describe('get image for right answer function', () => {
  it('should return base64 string', async () => {
    const getSpySuccess = jest.spyOn(axios, 'get').mockImplementation(() => {
      return new Promise((resolve, reject) => {
        return resolve({
          data: new ArrayBuffer(120),
        });
      });
    });
    const response = await generator.getImageforRightAnswer();

    let base64reg = /^(?:[a-zA-Z0-9+\/]{4})*(?:|(?:[a-zA-Z0-9+\/]{3}=)|(?:[a-zA-Z0-9+\/]{2}==)|(?:[a-zA-Z0-9+\/]{1}===))$/;
    expect(typeof response).toBe('string');
    expect(response).toMatch(base64reg);
  });
});
