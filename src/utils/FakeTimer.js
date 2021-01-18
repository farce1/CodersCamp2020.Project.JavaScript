export const invokeCounting = function (time) {
  let twoMinutes = 60 * 2;
  startTimer(twoMinutes, time);
};

export function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  const timerInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.innerText = minutes + 'm ' + seconds + 's';

    if (--timer < 0) {
      timer = clearInterval(timerInterval);
    }
  }, 1000);
}
