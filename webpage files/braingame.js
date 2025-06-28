 // Game Elements
    const emojis = ['🐶', '🐱', '🐭', '🐹', '🦊', '🐻', '🐼', '🐨'];
    const board = document.getElementById('board');
    const movesDisplay = document.getElementById('moves');
    const matchesDisplay = document.getElementById('matches');
    const finalMovesDisplay = document.getElementById('finalMoves');
    const rulesPopup = document.getElementById('rulesPopup');
    const winPopup = document.getElementById('winPopup');
    const startGameBtn = document.getElementById('startGameBtn');
    const playAgainBtn = document.getElementById('playAgainBtn');

    // Game State
    let flippedCards = [];
    let lockBoard = false;
    let moves = 0;
    let matches = 0;
    let gameStarted = false;

    // Initialize the game
    function initGame() {
      showRules();
      createCards();
      setupEventListeners();
    }

    // Show rules popup
    function showRules() {
      rulesPopup.classList.add('active');
    }

    // Create cards
    function createCards() {
      board.innerHTML = '';
      const shuffledEmojis = shuffle([...emojis, ...emojis]);
      
      shuffledEmojis.forEach(emoji => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.emoji = emoji;
        card.innerHTML = `
          <div class="card-inner">
            <div class="card-front">${emoji}</div>
            <div class="card-back"></div>
          </div>
        `;
        board.appendChild(card);
      });
    }

    // Shuffle array
    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    // Flip card
    function flipCard(card) {
      if (!gameStarted || lockBoard || card.classList.contains('flipped') || flippedCards.length >= 2) return;

      card.classList.add('flipped');
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        lockBoard = true;
        moves++;
        movesDisplay.textContent = moves;
        checkForMatch();
      }
    }

    // Check for match
    function checkForMatch() {
      const [firstCard, secondCard] = flippedCards;
      const isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;

      if (isMatch) {
        matches++;
        matchesDisplay.textContent = matches;
        flippedCards = [];
        lockBoard = false;
        checkWin();
      } else {
        setTimeout(() => {
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          flippedCards = [];
          lockBoard = false;
        }, 1000);
      }
    }

    // Check for win
    function checkWin() {
      if (matches === emojis.length) {
        setTimeout(() => {
          finalMovesDisplay.textContent = moves;
          winPopup.classList.add('active');
        }, 500);
      }
    }

    // Reset game
    function resetGame() {
      flippedCards = [];
      lockBoard = false;
      moves = 0;
      matches = 0;
      movesDisplay.textContent = '0';
      matchesDisplay.textContent = '0';
      gameStarted = false;
      createCards();
    }

    // Start game
    function startGame() {
      gameStarted = true;
      rulesPopup.classList.remove('active');
    }

    // Setup event listeners
    function setupEventListeners() {
      // Card click
      board.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card) flipCard(card);
      });

      // Start game button
      startGameBtn.addEventListener('click', startGame);

      // Play again button
      playAgainBtn.addEventListener('click', () => {
        winPopup.classList.remove('active');
        resetGame();
        showRules();
      });
    }

    // Initialize the game when DOM is loaded
    document.addEventListener('DOMContentLoaded', initGame);

