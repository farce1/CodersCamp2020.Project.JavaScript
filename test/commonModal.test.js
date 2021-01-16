import { getByTestId } from '@testing-library/dom';
import '@testing-library/jest-dom';
import {
  hideElement,
  renderComponentIntoSelectedTagID,
} from '../src/utils/functions';
import { CommonModal } from '../src/components/commonModal/CommonModal';
import userEvent from '@testing-library/user-event';
import { mockedDomStructure } from './__mocks__/templatesForTests';

describe('Test common modal', () => {
  beforeAll(() => {
    document.body.innerHTML = mockedDomStructure;
    renderComponentIntoSelectedTagID(
      CommonModal('kotek', hideElement).show(),
      'swquiz-app',
    );
  });

  it('Should be visible', () => {
    expect(
      getByTestId(document.documentElement, 'html-modal'),
    ).toBeInTheDocument();
  });

  it('should hide modal when hide called', () => {
    userEvent.click(getByTestId(document.documentElement, 'html-modal'));
    const modal = getByTestId(document.documentElement, 'html-modal');
    expect(modal.classList.contains('hidden'));
  });

  it('Should to display data correctly', () => {
    const modal = getByTestId(document.documentElement, 'html-modal');
    expect((modal.innerText = 'kotek'));
  });
});
