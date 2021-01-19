const saveUserResult = (mode, nickname, score) => {
    const modeRanking = JSON.parse(window.localStorage.getItem(mode));
    const result = {
        mode,
        nickname,
        score
    };

    modeRanking.push(result)
    window.localStorage.setItem(mode, JSON.stringify(modeRanking))
}

export default saveUserResult;