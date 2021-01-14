import {
    buttonPlay
} from '../src/components/buttonPlay/buttonPlay';
import '@testing-library/jest-dom'

describe('buttonPlay', () => {
    it('should show buttonPlay', () => {
        const component = buttonPlay();

        expect(component).not.toBeNull();
        expect(component.innerHTML).not.toBeNull();
    });
});