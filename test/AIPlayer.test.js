import AIPlayer from '../src/domain/players/AIPlayer';

describe('askQuestion', () => {
    it('should invoke function passed as an argument', () => { 
    expect(humanPlayer().askQuestion(function(){return 2+2})).toBe(4);
    });
});

describe('askQuestion', () => {
    it('should return null when no argument is passed', () => {
        expect(AIPlayer().askQuestion()).toBe(null);
    }); 
});

describe('giveAnswer', () => {
    it('should invoke function passed as an argument', () => { 
    expect(AIPlayer().giveAnswer(function(){return 2+2})).toBe(4);
    });
});

describe('giveAnswer', () => {
    it('should return null when no argument is passed', () => {
        expect(AIPlayer().giveAnswer()).toBe(null);
    }); 
});

describe('askQuestion', () => {
    it('should invoke function passed as an argument and return object contain id and name property', () => { 
        const anserw = AIPlayer().askQuestion(() => {
            return {
                answers: [
                    {id: 1, name: 'R2-D2'},
                    {id: 2, name: 'Luke Skywalker'},
                    {id: 3, name: 'Darth Vader'},
                    {id: 4, name: 'C-3PO'}
                ]
            }
        });
        expect(anserw).not.toBe(null);
        expect(anserw.id).not.toBe(null);
        expect(anserw.name).not.toBe(null);
        });
});
