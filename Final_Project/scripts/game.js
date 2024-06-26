// game.js
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let targetLetter = '';
let score = 0;
let gameFinished = false;

function getRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}

function displayLetters() {
    const container = document.getElementById('letters-container');
    container.innerHTML = '';

    // Create an array to hold the options (including the target letter)
    const options = [];

    // Generate 9 random letters
    for (let i = 0; i < 9; i++) {
        options.push(getRandomLetter());
    }

    // Add the target letter to the options
    options.push(targetLetter);

    // Shuffle the options array to randomize the order
    options.sort(() => Math.random() - 0.5);

    // Create div elements for each option
    options.forEach(letter => {
        const option = document.createElement('div');
        option.textContent = letter;
        option.classList.add('letter');
        option.addEventListener('click', checkLetter);
        container.appendChild(option);
    });
}

function setTargetLetter() {
    targetLetter = getRandomLetter();
    document.getElementById('target-letter').textContent = targetLetter;
}

function checkLetter(event) {
    if (gameFinished) return; // Prevent checking after game is finished

    const clickedLetter = event.target.textContent;
    const feedback = document.getElementById('feedback');
    if (clickedLetter === targetLetter) {
        feedback.textContent = 'Great job!';
        score += 10; // Increase score for correct answer
        updateScore();
        disableLetters();
    } else {
        feedback.textContent = 'Try again!';
    }
}

function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
}

function disableLetters() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => {
        letter.removeEventListener('click', checkLetter);
    });
    
    // Show next button after correct answer
    document.getElementById('next-button').style.display = 'block';
}

document.getElementById('next-button').addEventListener('click', () => {
    gameFinished = false; // Reset game state
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-button').style.display = 'none';
    setTargetLetter();
    displayLetters();
    enableLetters();
});

function enableLetters() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => {
        letter.addEventListener('click', checkLetter);
    });
}

document.getElementById('show-score-button').addEventListener('click', () => {
    document.getElementById('final-score').textContent = `Final Score: ${score}`;
    document.getElementById('show-score-button').style.display = 'none';
    document.getElementById('replay-button').style.display = 'block';
    gameFinished = true; // Set game to finished state
    disableLetters();
});

document.getElementById('replay-button').addEventListener('click', () => {
    gameFinished = false; // Reset game state
    score = 0; // Reset score
    updateScore();
    document.getElementById('final-score').textContent = '';
    document.getElementById('show-score-button').style.display = 'block';
    document.getElementById('replay-button').style.display = 'none';
    setTargetLetter();
    displayLetters();
    enableLetters();
});

// Initialize game on page load
window.onload = () => {
    setTargetLetter();
    displayLetters();
    updateScore();
};
