const controls = document.querySelector("#queue-controls");
const elapsed = document.querySelector("#elapsed");
const elapsedValue = document.querySelector("#elapsed-value");
const probability = document.querySelector("#busy-probability");
const bar = document.querySelector("#prob-bar");
const note = document.querySelector("#queue-note");

function showBelief() {
  const state = controls.querySelector("input[name='last-state']:checked").value;
  const time = Number(elapsed.value);
  const sign = state === "busy" ? 1 : -1;
  const percent = 50 * (1 + sign * Math.exp(-2 * time));
  const units = time === 1 ? "time unit" : "time units";
  const interval = time + " " + units;

  elapsedValue.textContent = interval;
  elapsed.setAttribute("aria-valuetext", interval);
  probability.textContent = percent.toFixed(1) + "%";
  bar.style.width = percent + "%";
  note.textContent = time === 0
    ? "A fresh report shows the server is " + state + "."
    : "The server was " + state + " " + interval + " ago.";
}

controls.addEventListener("input", showBelief);
showBelief();
controls.hidden = false;
