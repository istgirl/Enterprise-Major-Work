
  const timerDisplay = document.getElementById("timer");
  const lastSessionNav = document.getElementById("lastSessionNav");
  const progressPath = document.querySelector(".circle-progress");

  let startTime, updatedTime, difference = 0;
  let timerInterval = null;
  const durationLimit = 60 * 60 * 1000;
  const fullOffset = 408;

  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  function updateDisplay() {
    updatedTime = Date.now() - startTime + difference;
    timerDisplay.textContent = formatTime(updatedTime);
    const percent = Math.min(updatedTime / durationLimit, 1);
    progressPath.style.strokeDashoffset = fullOffset * (1 - percent);
  }

  function startTimer() {
    if (!timerInterval) {
      startTime = Date.now();
      timerInterval = setInterval(updateDisplay, 1000);
    }
  }

  function pauseTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      difference = updatedTime || 0;
      const formatted = formatTime(difference);
      lastSessionNav.textContent = `Last Session: ${formatted}`;
    }
  }

  

  function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    difference = 0;
    updatedTime = 0;
    timerDisplay.textContent = "00:00:00";
    progressPath.style.strokeDashoffset = fullOffset;
    lastSessionNav.textContent = `Last Session: None`;
  }

