import { getRandomInt } from '../../helpers/index';

const AIPlayer = () => {
    const player = {
        onQuestionAsked: ask => {
            const question = ask();
            const randomId = getRandomInt(0, 4);
            return player.giveAnswer(() => question.answers[randomId]);
        },
        onAnswerGiven: answer => answer(),
        askQuestion: ask => ask ? player.onQuestionAsked(ask) : null,
        giveAnswer: answer => answer ? player.onAnswerGiven(answer) : null,
    }
    return player
}

export default AIPlayer;