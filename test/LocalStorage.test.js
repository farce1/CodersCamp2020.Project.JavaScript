import setLocalStorage from '../src/domain/functions/localStorage/setLocalStorage';
import setUserResult from '../src/domain/functions/localStorage/saveUserResult';
import ranking from '../src/domain/functions/localStorage/ranking';

describe('setlocalStorage', () => {  
    it('should set three array into localStorage', () => {
        setLocalStorage();
        expect(localStorage.getItem('people')).toBe('[]');
        expect(localStorage.getItem('vehicles')).toBe('[]');
        expect(localStorage.getItem('starships')).toBe('[]');
    });
});

describe('setUserResult', () => {  
    it('should set data into specific array in localStorage', () => {
        setLocalStorage();
        setUserResult('people', 'nickname', 9);
        expect(localStorage.getItem('people')).toBe('[{\"mode\":"people",\"nickname\":"nickname",\"score\":9}]');
        expect(localStorage.getItem('vehicles')).toBe('[]');
        expect(localStorage.getItem('starships')).toBe('[]');
    });

    it('should set data into specific array in localStorage', () => {
        setLocalStorage();
        setUserResult('vehicles', 'nickname', 9);
        expect(localStorage.getItem('people')).toBe('[]');
        expect(localStorage.getItem('vehicles')).toBe('[{\"mode\":"vehicles",\"nickname\":"nickname",\"score\":9}]');
        expect(localStorage.getItem('starships')).toBe('[]');
    });

    it('should set data into specific array in localStorage', () => {
        setLocalStorage();
        setUserResult('starships', 'nickname', 9);
        expect(localStorage.getItem('people')).toBe('[]');
        expect(localStorage.getItem('vehicles')).toBe('[]');
        expect(localStorage.getItem('starships')).toBe('[{\"mode\":"starships",\"nickname\":"nickname",\"score\":9}]');
    });
});

describe('ranking', () => {  
    it('should return ranking for specific game mode', () => {
        setLocalStorage();
        setUserResult('starships', 'nickname', 9)
        setUserResult('starships', 'nickname2', 19)
        expect(ranking('starships')).toEqual([{mode: "starships", nickname: "nickname", score: 9}, {mode: "starships", nickname: "nickname2", score: 19}]);
    });
});