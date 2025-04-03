"use strict";
let timer;
let seconds = 0;
let milliseconds = 0;
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
    milliseconds++;
    if (milliseconds >= 100) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds >= 60) {
      seconds = 0;
    }

    updateDisplay();

    if (isRunning) startTimer();
  }, 10);
}

function updateDisplay() {
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  const displayMilliseconds = milliseconds;

  chronoDisplay.textContent = `${padZero(minutes)}:${padZero(
    displaySeconds
  )}:${padZero(displayMilliseconds)}`;
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

function resetTimer() {
  clearTimeout(timer);
  seconds = 0;
  milliseconds = 0;
  chronoDisplay.textContent = "00:00:00";
  startBtn.textContent = "Start";
  isRunning = false;
}

startBtn.addEventListener("click", startStopTimer);
resetBtn.addEventListener("click", resetTimer);
