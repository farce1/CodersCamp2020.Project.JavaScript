import { iconButton } from '../../src/components/iconButton/iconButton.js'
import '@testing-library/jest-dom'

describe('iconButton', () => {
    it('should show iconButton', () => {
        const component = iconButton().render();
        
        expect(component).not.toBeNull();
        expect(component.innerHTML).not.toBeNull();
    });

    it('should show button text', () => {
        const text = '123';
        
        const component = iconButton(text).render();

        expect(component.innerHTML).toEqual(text);
    });

    it('should show icon when given icon property', () => {
        const text = 'label';
        const icon = '12345663445';
        
        const component = iconButton(text, icon).render();
        
        expect(component.firstChild).toHaveClass('button__icon');
    });

    it('should not show icon when icon property not provided', () => {
        const text = 'label';

        const component = iconButton(text).render();
        expect(component.firstChild).not.toBe('span')
    });

    it('should invoke onClick function', () => {
        const text = 'label';
        const icon = '123456634454';
        const mockedOnClick = jest.fn();

        const component = iconButton(text, icon, mockedOnClick).render();
        
        component.click();
        
        expect(mockedOnClick).toBeCalled();
    });
});