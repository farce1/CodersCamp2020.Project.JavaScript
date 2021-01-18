const ranking = (mode) => {
    const result = JSON.parse(window.localStorage.getItem(mode));
    return result;
}

export default ranking;