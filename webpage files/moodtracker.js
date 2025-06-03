// Define mood colors
const moodColors = {
  happy: '#FFD700',   // yellow
  sad: '#6495ED',     // blue
  angry: '#FF4500',   // red
  anxious: '#FFA07A', // light orange
  calm: '#90EE90'     // light green
};

let currentCellIndex = 0;

function createHeatmapGrid() {
  const grid = document.getElementById('heatmap-grid');
  for (let i = 0; i < 70; i++) { // 10x7 grid
    const cell = document.createElement('div');
    cell.classList.add('heatmap-cell');
    grid.appendChild(cell);
  }
}

function logMood() {
  const mood = document.getElementById('mood-select').value;
  const note = document.getElementById('mood-note').value;

  if (!mood) {
    alert("Please select a mood before logging.");
    return;
  }

  const cells = document.querySelectorAll('.heatmap-cell');
  if (currentCellIndex >= cells.length) {
    cells[currentCellIndex].style.backgroundColor = moodColors[mood];
    cells[currentCellIndex].title = note || mood; // Add tooltip with note/mood
    currentCellIndex++;
    alert("You've filled the entire mood tracker!");
    return;
  }

  // Optional: reset form
  document.getElementById('mood-select').value = '';
  document.getElementById('mood-note').value = '';

  cells[currentCellIndex].style.backgroundColor = moodColors[mood];
  currentCellIndex++;

  // Optional: Store mood and note in localStorage or backend later
  console.log("Mood:", mood, "Note:", note);
}

window.onload = createHeatmapGrid;
