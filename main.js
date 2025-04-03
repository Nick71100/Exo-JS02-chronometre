"use strict";
let timer;
let seconds = 0;
let centiseconds = 0;
let isRunning = false;

const chronoDisplay = document.getElementById("chrono");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

function startStopTimer() {
  if (isRunning) {
    clearTimeout(timer);
    startBtn.textContent = "Start";
  } else {
    startTimer();
    startBtn.textContent = "Stop";
  }
  isRunning = !isRunning;
}

function startTimer() {
  timer = setTimeout(function () {
    centiseconds++;
    if (centiseconds >= 100) {
      centiseconds = 0;
      seconds++;
    }

    updateDisplay();

    if (isRunning) startTimer();
  }, 10);
}

function updateDisplay() {
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  const displaycentiseconds = centiseconds;

  chronoDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    displaySeconds
  ).padStart(2, "0")}:${String(displaycentiseconds).padStart(2, "0")}`;
}

function resetTimer() {
  clearTimeout(timer);
  seconds = 0;
  centiseconds = 0;
  chronoDisplay.textContent = "00:00:00";
  startBtn.textContent = "Start";
  isRunning = false;
}

startBtn.addEventListener("click", startStopTimer);
resetBtn.addEventListener("click", resetTimer);
