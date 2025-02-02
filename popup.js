let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let running = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

startButton.addEventListener("click", () => {
    if (!running) {
        running = true;
        startButton.textContent = "Pause";
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alert("Time's up!");
                running = false;
            }
        }, 1000);
    } else {
        clearInterval(timer);
        running = false;
        startButton.textContent = "Start";
    }
});

resetButton.addEventListener("click", () => {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateDisplay();
    running = false;
    startButton.textContent = "Start";
});

updateDisplay();
