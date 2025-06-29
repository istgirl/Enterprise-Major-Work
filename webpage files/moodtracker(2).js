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
  const moodBox = document.getElementById('mood-box');
  const caption = document.getElementById('mood-caption');

  if (!mood) {
    alert("Please select a mood before logging.");
    return;
  }

  // Set box color and caption
  moodBox.style.backgroundColor = moodColors[mood];
  caption.textContent = `You logged your mood as: ${mood.charAt(0).toUpperCase() + mood.slice(1)}`;

  // Reset form
  document.getElementById('mood-select').value = '';
  document.getElementById('mood-note').value = '';

  console.log("Mood:", mood, "Note:", note);
}

