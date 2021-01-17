import '@testing-library/jest-dom';
import { getByTestId } from '@testing-library/dom';
import { questions, vehicles } from '../src/constants';
import { QuestionPanel } from '../src/components/questionPanel/QuestionPanel';
import {
  onMenuItemClick,
  renderComponentIntoSelectedTag,
} from '../src/utils/functions';

describe('Test question-panel', () => {
  const questionPanel = new QuestionPanel();
  beforeAll(() => {
    document.body.innerHTML = `<div id="swquiz-app">
      <div id="swquiz-header" class="header">
      </div>
    </div>`;
    let currentQuestion = questions.peopleQuestion;

    renderComponentIntoSelectedTag(
      questionPanel.render(currentQuestion),
      'swquiz-app',
    );
  });

  it('should render properly', () => {
    expect(
      getByTestId(document.documentElement, 'html-q-panel'),
    ).toBeInTheDocument();
  });

  it('should update label properly', () => {
    onMenuItemClick(vehicles, questionPanel);
    expect(questionPanel.qPanelComponent.innerHTML).toBe(
      `MODE: ${questions.vehiclesQuestion}`,
    );
  });
});
