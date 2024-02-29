function startTimer(durationInSeconds) {
  const timerElement = document.getElementById("timer");
  let timer = durationInSeconds;

  function updateTimer() {
    const days = Math.floor(timer / (3600 * 24));
    const hours = Math.floor((timer % (3600 * 24)) / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    const daysStr = String(days).padStart(2, "0");
    const hoursStr = String(hours).padStart(2, "0");
    const minutesStr = String(minutes).padStart(2, "0");
    const secondsStr = String(seconds).padStart(2, "0");

    timerElement.textContent =
      daysStr +
      "d:" +
      hoursStr +
      "h:" +
      minutesStr +
      "m:" +
      secondsStr +
      "s";

    if (--timer < 0) {
      clearInterval(intervalId);
      timerElement.textContent = "00:00:00";
    }
  }

  updateTimer();
  intervalId = setInterval(updateTimer, 1000);
}

window.onload = function () {
  const durationInSeconds = 9 * 24 * 3600; // 9 days in seconds
  startTimer(durationInSeconds);
};

window.onbeforeunload = function () {
  clearInterval(intervalId);
};
