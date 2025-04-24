// Script to apply selected mood to heatmap cells
const emojiButtons = document.querySelectorAll('.emoji-picker button');
let selectedMood = null;

emojiButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedMood = button.getAttribute('data-mood');
  });
});

const moodCells = document.querySelectorAll('.heatmap-cell');
moodCells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (selectedMood) {
      // Remove old mood classes
      for (let i = 1; i <= 5; i++) {
        cell.classList.remove(`mood-${i}`);
      }
      // Add new mood class
      cell.classList.add(`mood-${selectedMood}`);
    }
  });
});
