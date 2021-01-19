import {
    buttonPlay
} from '../../src/components/buttonPlay/buttonPlay';
import '@testing-library/jest-dom'

describe('buttonPlay', () => {

    it('should show buttonPlay', () => {
        const component = buttonPlay();

        expect(component).toBeTruthy();
    });

    it('should show button text', () => {
        const text = '123';
        const component = buttonPlay(text);

        expect(component.innerText).toEqual(text);
    });

    it('should invoke onClick function', () => {
        const text = 'label';
        const mockedOnClick = jest.fn();
        const component = buttonPlay(text, mockedOnClick);
        component.click();

        expect(mockedOnClick).toBeCalled();
    });

})