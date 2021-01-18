import QuestionGenerator from '../questionGenerator/QuestionGenerator';
import humanPlayer from '../../players/HumanPlayer';

const startGame = async (mode) => {
    const generator = new QuestionGenerator(mode, 1, 12);
    const question = await generator.generateQeustion();
}

export default startGame;
