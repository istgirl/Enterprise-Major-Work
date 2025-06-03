const cards = document.querySelectorAll('.question-card');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn'); 
let current = 0;
let mood = ""; 

function updateProgress() {
  const percentage = ((current + 1) / cards.length) * 100;
  const progressBar = document.getElementById("progress");
  if (progressBar) {
    progressBar.style.width = percentage + "%";
  }
}

function isCurrentAnswered() {
  const card = cards[current];
  if (card.querySelector('.emoji-options')) {
    return card.querySelector('.emoji.selected') !== null;
  }
  if (card.querySelector('input[type="range"]')) {
    const slider = card.querySelector('input[type="range"]');
    return slider.value > slider.min;
  }
  if (card.querySelector('input[type="radio"]')) {
    const radios = card.querySelectorAll('input[type="radio"]');
    return Array.from(radios).some(radio => radio.checked);
  }
  if (card.querySelector('textarea')) {
    return true; 
  }
  return true;
}

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });

  backBtn.style.display = index === 0 ? 'none' : 'inline-block';


  if (index === cards.length - 1) {
    nextBtn.textContent = "Finish";
  } else {
    nextBtn.textContent = "Next";
  }
}

document.querySelectorAll('.emoji').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.emoji').forEach(e => e.classList.remove('selected'));
    btn.classList.add('selected');
    mood = btn.getAttribute('data-value');
  });
});

nextBtn.addEventListener('click', () => {
  if (!isCurrentAnswered()) {
    alert("Please answer the question before moving on!");
    return;
  }
  if (current < cards.length - 1) {
    current++;
    showCard(current);
    updateProgress();
  } else {
    // Finishing logic
    const sleepSlider = document.getElementById("sleepSlider");
    const activitySlider = document.getElementById("activitySlider");
    const sleep = sleepSlider ? parseInt(sleepSlider.value) : 0;
    const activity = activitySlider ? parseInt(activitySlider.value) : 0;

    let feedback = "Thanks for completing your weekly check-in!";

    if (mood === "sad" || sleep < 4) {
      feedback += "\n\nIt seems like you're feeling down or not sleeping well. Make sure to reach out for help";
    } else if (activity > 7 && mood === "happy") {
      feedback += "\n\nYou're doing great — active and positive! Keep it up! 💪";
    } else if (activity < 3) {
      feedback += "\n\nTry to move a bit more this week — even a short walk helps!";
    } else {
      feedback += "\n\nStay balanced, and keep checking in regularly 😊";
    }

    alert(feedback);
    window.location.href = "studenthomepage.html";
  }
});

backBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    showCard(current);
    updateProgress();
  }
});

// Initialize on page load
showCard(current);
updateProgress();

// Slider background styling (optional, keep your existing code)
document.querySelectorAll('input[type=range]').forEach(slider => {
  const updateSliderBackground = () => {
    const val = slider.value;
    const min = slider.min ? slider.min : 0;
    const max = slider.max ? slider.max : 100;
    const percentage = ((val - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right,rgb(160, 200, 149) 0%,rgb(160, 200, 149) ${percentage}%, #ccc ${percentage}%, #ccc 100%)`;
  };

  slider.addEventListener('input', updateSliderBackground);
  updateSliderBackground();
});
