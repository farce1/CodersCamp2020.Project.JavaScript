const buttonPlay = require('../../src/components/buttonPlay/ButtonPlay');
import '@testing-library/jest-dom'

describe('buttonPlay', () => {

    it('should show buttonPlay', () => {
        const component = buttonPlay();
        expect(component).toBeTruthy();
    });

})