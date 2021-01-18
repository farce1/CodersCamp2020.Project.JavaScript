import { invokeCounting } from '../../utils/FakeTimer';

export const TimerText = ()=>{
  const timer = document.createElement('div');
  let time = document.createElement('span');
  timer.classList.add('timer-txt');
  time.setAttribute('id', 'time');
  time.setAttribute('data-testid', 'html-txt-timer');
  timer.innerText = 'Time Left: ';
  timer.appendChild(time);
  window.onload = invokeCounting(time);
  return timer;
};
