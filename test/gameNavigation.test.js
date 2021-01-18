import { gameNavigation } from '../src/components/gameNavigation/GameNavigation';
import '@testing-library/jest-dom';
import { getByTestId } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { people, starships, vehicles } from '../src/constants';
import { renderComponentIntoSelectedTagID } from '../src/utils/functions';
import { QuestionPanel } from '../src/components/questionPanel/QuestionPanel';

describe('Test game navigation', () => {
  beforeAll(() => {
    const questionPanel = new QuestionPanel();
    const swquizApp = document.createElement('div');
    swquizApp.setAttribute('id', 'swquiz-app');
    document.body.appendChild(swquizApp);
    const swquizHeader = document.createElement('div');
    swquizHeader.setAttribute('id', 'swquiz-header');
    swquizApp.appendChild(swquizHeader);
    renderComponentIntoSelectedTagID(gameNavigation(questionPanel), 'swquiz-header');
  });

  it('Should render navigation correctly', () => {
    expect(
      getByTestId(document.documentElement, 'html-navigation'),
    ).toBeInTheDocument();

    expect(getByTestId(document.documentElement, people)).toBeInTheDocument();
    expect(getByTestId(document.documentElement, vehicles)).toBeInTheDocument();
    expect(
      getByTestId(document.documentElement, starships),
    ).toBeInTheDocument();
  });

  it('First button should be marked', () => {
    expect(getByTestId(document.documentElement, people)).toHaveClass(
      'clicked',
    );
  });

  it('Should execute correct action on button click', () => {
    userEvent.click(getByTestId(document.documentElement, vehicles));

    expect(getByTestId(document.documentElement, people)).not.toHaveClass(
      'clicked',
    );

    expect(getByTestId(document.documentElement, starships)).not.toHaveClass(
      'clicked',
    );

    expect(getByTestId(document.documentElement, vehicles)).toHaveClass(
      'clicked',
    );
  });
});
