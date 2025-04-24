const emojis = ['🐶','🐱','🐭','🐹','🦊','🐻','🐼','🐨'];
const board = document.getElementById('board');
let flippedCards = [];
let lockBoard = false;

function shuffle(array) {
  return array.concat(array).sort(() => 0.5 - Math.random());
}

function createCard(emoji) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${emoji}</div>
      <div class="card-back"></div>
    </div>
  `;

  card.addEventListener('click', () => {
    if (lockBoard || card.classList.contains('flipped')) return;

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      lockBoard = true;
      const [first, second] = flippedCards;
      const match = first.querySelector('.card-front').innerText === second.querySelector('.card-front').innerText;


      if (!match) {
        setTimeout(() => {
          first.classList.remove('flipped');
          second.classList.remove('flipped');
          flippedCards = [];
          lockBoard = false;
        }, 1000);
      } else {
        flippedCards = [];
        lockBoard = false;
        checkWin();
      }
    }
  });

  return card;
}

function setupGame() {
    board.innerHTML = '';
    document.getElementById('winPopup').classList.add('hidden');
    flippedCards = [];
    lockBoard = false;
  
    const shuffled = shuffle(emojis);
    shuffled.forEach(emoji => board.appendChild(createCard(emoji)));
  }
  

setupGame();

function checkWin() {
    const allFlipped = document.querySelectorAll('.card.flipped').length;
    if (allFlipped === emojis.length * 2) {
      setTimeout(() => {
        document.getElementById('winPopup').classList.remove('hidden');
      }, 500);
    }
  }

  function restartGame() {
    setupGame();
  }
  
  
