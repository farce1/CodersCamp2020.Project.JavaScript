import {isCorrectAnswer} from './isCorrectAnswer.js';

describe('Validate answers', () => {
it('returns true when answer is correct', () => {
const rightAnswer="Darth Vader";
const playerAnswer="Darth Vader";
const WrongPlayerAnswer="";

expect(isCorrectAnswer(rightAnswer,playerAnswer)).toBeTruthy();
expect(isCorrectAnswer(rightAnswer,WrongPlayerAnswer)).toBeFalsy();
})
}) 
