import humanPlayer from '../src/domain/players/HumanPlayer';

describe('askQuestion', () => {
    it('properly invoke function passed as an argument', () => { 
    expect(humanPlayer().askQuestion(function(){return 2+2})).toBe(4);
    });
});

describe('askQuestion', () => {
    it('properly return null when no argument is passed', () => {
        expect(humanPlayer().askQuestion()).toBe(null);
    }); 
});

describe('giveAnswer', () => {
    it('properly invoke function passed as an argument', () => { 
    expect(humanPlayer().giveAnswer(function(){return 2+2})).toBe(4);
    });
});

describe('giveAnswer', () => {
    it('properly return null when no argument is passed', () => {
        expect(humanPlayer().giveAnswer()).toBe(null);
    }); 
});
