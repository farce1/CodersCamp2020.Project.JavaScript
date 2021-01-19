const setLocalStorage = () => {
    window.localStorage.setItem('people', JSON.stringify([]));
    window.localStorage.setItem('vehicles', JSON.stringify([]));
    window.localStorage.setItem('starships', JSON.stringify([]));
}

export default setLocalStorage;