const humanPlayer = () => {
    const player = {
        onQuestionAsked: ask => ask(),
        onAnswerGiven: answer => answer(),
        askQuestion: ask => ask ? player.onQuestionAsked(ask) : null,
        giveAnswer: answer => answer ? player.onAnswerGiven(answer) : null,
    }
    return player
}

module.exports = humanPlayer;
