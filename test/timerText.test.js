import { getByTestId } from '@testing-library/dom';
import { TimerText } from '../src/components/timerTxt/TimerText';
import { renderComponentIntoSelectedTagID } from '../src/utils/functions';
import '@testing-library/jest-dom';

jest.useFakeTimers();

describe('Test text timer', () => {
  beforeAll(() => {
    document.body.innerHTML = ` <div id="swquiz-app">
      <div id="swquiz-header" class="header">
      </div>
    </div>`;
    renderComponentIntoSelectedTagID(TimerText(), 'swquiz-header');
  });

  it('Should display correctly', () => {
    expect(
      getByTestId(document.documentElement, 'html-txt-timer'),
    ).toBeInTheDocument();
  });

  it('Should display time result correctly', () => {
    expect(setInterval).toHaveBeenCalled();
    jest.advanceTimersByTime(10000);
    expect(
      getByTestId(document.documentElement, 'html-txt-timer').innerText,
    ).toBe('1m 51s');
  });

  it('Should start interval correctly', () => {
    expect(setInterval).toHaveBeenCalled();
    jest.advanceTimersByTime(130000);
    expect(
      getByTestId(document.documentElement, 'html-txt-timer').innerText,
    ).toBe('0m 00s');
  });

  it('Should stop', () => {
    expect(clearInterval).toHaveBeenCalled();
  });
});
