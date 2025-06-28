const moodColors = {
  happy: '#FFD700',  
  sad: '#6495ED',    
  angry: '#FF4500',  
  anxious: '#FFA07A',
  calm: '#90EE90'    
};

let currentCellIndex = 0;

function createHeatmapGrid() {
  const grid = document.getElementById('heatmap-grid');
  for (let i = 0; i < 70; i++) { 
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
    cells[currentCellIndex].title = note || mood; 
    currentCellIndex++;
    alert("You've filled the entire mood tracker!");
    return;
  }

  document.getElementById('mood-select').value = '';
  document.getElementById('mood-note').value = '';

  cells[currentCellIndex].style.backgroundColor = moodColors[mood];
  currentCellIndex++;
  console.log("Mood:", mood, "Note:", note);
}

window.onload = createHeatmapGrid;

document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.getElementById('navLinks').classList.toggle('active');
});
