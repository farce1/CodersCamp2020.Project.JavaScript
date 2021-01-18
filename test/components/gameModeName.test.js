import { gameModeName } from '../../src/components/gameModeName/gameModeName'

describe('iconButton', () => {
    it('should show gameModeName', () => {
        const component = gameModeName();
        
        expect(component).not.toBeNull();
        expect(component.innerHTML).not.toBeNull();
    });

    it('should show gameModeName text', () => {
        const text = '123';
        
        const component = gameModeName(text);
        console.log(component.firstElementChild.innerText);
        expect(component.firstElementChild.innerText).toEqual(text);
    });

    it('should show gameModeName with mode', () => {
        const text = 'label';
        const mode = 'MODE';
        
        const component = gameModeName(text, mode);
        
        expect(component.firstElementChild.innerText).toEqual(mode + ': ' + text);
    });

});