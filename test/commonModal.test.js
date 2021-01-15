import { getByTestId } from '@testing-library/dom';
import '@testing-library/jest-dom';
import {
  hideElement,
  renderComponentIntoSelectedTagID,
} from '../src/utils/functions';
import { CommonModal } from '../src/components/commonModal/CommonModal';
import userEvent from '@testing-library/user-event';

describe('Test common modal', () => {
  beforeAll(() => {
    document.body.innerHTML = `<div id="swquiz-app">
      <div id="app-structure">
        <div id="swquiz-header" class="header">
        </div>
      </div>
    </div>`;
    renderComponentIntoSelectedTagID(
      CommonModal('kotek', hideElement),
      'swquiz-app',
    );
  });

  it('Should to render correctly', () => {
    expect(
      getByTestId(document.documentElement, 'html-modal'),
    ).toBeInTheDocument();
  });

  it('Should to hide correctly', () => {
    userEvent.click(getByTestId(document.documentElement, 'html-modal'));
    const modal = getByTestId(document.documentElement, 'html-modal');
    expect(modal.classList.contains('hidden'));
  });

  it('Should to display data correctly', () => {
    const modal = getByTestId(document.documentElement, 'html-modal');
    expect((modal.innerText = 'kotek'));
  });
});
