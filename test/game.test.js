import { async } from 'regenerator-runtime';
import startGame from '../src/domain/functions/game/Game';
import axios from 'axios';

describe('game', () => {
    it('should', async () => {
        jest.spyOn(axios, 'get').mockImplementation(() => {
            return new Promise((resolve, reject) => {
              return resolve({
                data: { name: 'olaf' },
              });
            });
          });
        const questions = await startGame('people');
        console.log(questions);
        // expect(questions).not.toBe(null);
    })
})