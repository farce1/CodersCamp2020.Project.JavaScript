import humanPlayer from '../src/domain/players/HumanPlayer';

test('properly invoke function passed as an argument to askQuestion', () => {
    expect(humanPlayer().askQuestion(function(){return 2+2})).toBe(4);
});

test('properly return null when no argument is passed to askQuestion', () => {
    expect(humanPlayer().askQuestion()).toBe(null);
});

test('properly invoke function passed as an argument to giveAnswer', () => {
    expect(humanPlayer().giveAnswer(function(){return 2+2})).toBe(4);
});

test('properly return null when no argument is passed to giveAnswer', () => {
    expect(humanPlayer().giveAnswer()).toBe(null);
});
