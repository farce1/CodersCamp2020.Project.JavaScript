import { getByAltText, getByTestId, getByText } from '@testing-library/dom';
import { modeRules } from '../../src/components/modeRules/modeRules';
import { renderComponentIntoSelectedTag } from '../../src/utils/functions';
import '@testing-library/jest-dom/extend-expect';
describe('modeRules', () => {
  it('should render correctly', () => {
    const component = modeRules();
    expect(component).not.toBeNull();
    expect(component.firstChild.children[1].textContent).toBe('Mode rules');
    expect(component.firstChild.children[0].alt).toBe('rules icon');
  });
  it('should show rules text', () => {
    const text = 'abcdefg';

    const component = modeRules(text);

    expect(component.children[1].textContent).toBe(text);
  });
});
