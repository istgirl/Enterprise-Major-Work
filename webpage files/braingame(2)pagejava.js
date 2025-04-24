let box = document.getElementById('reactionBox');
let message = document.getElementById('message');
let result = document.getElementById('result');

let startTime, timeoutId;
let gameStarted = false;
let greenShown = false;

function startGame() {
  gameStarted = true;
  greenShown = false;
  result.textContent = '';
  message.textContent = 'Wait for green...';
  box.classList.remove('green');

  const waitTime = Math.random() * 2000 + 2000; // 2–4s

  timeoutId = setTimeout(() => {
    box.classList.add('green');
    message.textContent = 'CLICK!';
    startTime = new Date().getTime();
    greenShown = true;
  }, waitTime);
}

box.addEventListener('click', () => {
  if (!gameStarted) {
    startGame();
  } else if (!greenShown) {
    clearTimeout(timeoutId);
    message.textContent = 'Too soon!';
    result.textContent = 'Try again!';
    gameStarted = false;
  } else {
    const reactionTime = new Date().getTime() - startTime;
    message.textContent = `Your time: ${reactionTime} ms`;
    result.textContent = 'Click to try again!';
    gameStarted = false;
    greenShown = false;
  }
});
