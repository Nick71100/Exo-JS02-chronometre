"use strict";
let timer,
  centiseconds = 0,
  running = false;
const display = document.getElementById("chrono");
display.textContent = "00:00:00";

document.body.appendChild(createButton("toggle", "Start", toggleTimer));
document.body.appendChild(createButton("reset", "Reset", resetTimer));

function createButton(id, text, handler) {
  const btn = document.createElement("button");
  btn.id = id;
  btn.textContent = text;
  btn.addEventListener("click", handler);
  return btn;
}

function toggleTimer() {
  running = !running;
  document.getElementById("toggle").textContent = running ? "Stop" : "Start";
  if (running) updateTime();
  else clearTimeout(timer);
}

function resetTimer() {
  clearTimeout(timer);
  running = false;
  centiseconds = 0;
  updateDisplay();
  document.getElementById("toggle").textContent = "Start";
}

function updateTime() {
  if (!running) return;
  centiseconds++;
  updateDisplay();
  timer = setTimeout(updateTime, 10);
}

function updateDisplay() {
  let mins = Math.floor(centiseconds / 6000)
    .toString()
    .padStart(2, "0");
  let secs = Math.floor((centiseconds % 6000) / 100)
    .toString()
    .padStart(2, "0");
  let centis = (centiseconds % 100).toString().padStart(2, "0");
  display.textContent = `${mins}:${secs}:${centis}`;
}
