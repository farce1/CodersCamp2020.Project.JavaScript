import axios from 'axios';
import {
  fetch,
  generateQuestions,
  getImag,
  getImage,
  getImageforRightAnswer,
} from '../src/scripts/questionGenerator';
describe('question generate function', () => {
  it('should return 4 answers and right answer', async () => {
    const response = await generateQuestions({
      mode: 'people',
      maxId: 12,
      minId: 1,
    });

    expect(response).toHaveProperty('answers');
    expect(response.answers.length).toBe(4);
    expect(response).toHaveProperty('rightAnswer');
  });
});

describe('get image for right answer function', () => {
  it('should return base64 string', async () => {
    const response = await getImageforRightAnswer('people', 4);
    let base64reg = /^(?:[a-zA-Z0-9+\/]{4})*(?:|(?:[a-zA-Z0-9+\/]{3}=)|(?:[a-zA-Z0-9+\/]{2}==)|(?:[a-zA-Z0-9+\/]{1}===))$/;
    expect(response).toMatch(base64reg);
  });
});
