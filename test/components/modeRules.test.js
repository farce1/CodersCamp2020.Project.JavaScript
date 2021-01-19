import { getByAltText, getByTestId, getByText } from '@testing-library/dom';
import { ModeRules } from '../../src/components/modeRules/modeRules';
import { renderComponentIntoSelectedTag, renderComponentIntoSelectedTagID } from '../../src/utils/functions';
import '@testing-library/jest-dom/extend-expect';
import { gameRules, vehicles } from '../../src/constants';
describe('Mode rules', () => {
  const modeRulesPanel = new ModeRules();
  beforeAll(() => {
    document.body.innerHTML = `<div id="swquiz-app">
      <div id="swquiz-header" class="header">
      </div>
    </div>`;
    
    renderComponentIntoSelectedTagID(
      modeRulesPanel.render(),
      'swquiz-app',
    );
  });

  it('should render properly', () => {
    expect(
      getByTestId(document.documentElement, 'rules-panel'),
    ).toBeInTheDocument();
  });

  it('should update description properly', () => {
    modeRulesPanel.changeRulesDescription(vehicles)
    expect(modeRulesPanel.modeRulesDescription.innerText).toBe(
       `${gameRules[vehicles]}`
    );
  });
});
