const controls = document.querySelector("#queue-controls");
const elapsed = document.querySelector("#elapsed");
const elapsedValue = document.querySelector("#elapsed-value");
const probability = document.querySelector("#busy-probability");
const bar = document.querySelector("#prob-bar");
const note = document.querySelector("#queue-note");
const point = document.querySelector("#curve-point");
const cursor = document.querySelector("#curve-line");

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
  // Match the plot's axes, including their margins and small vertical padding.
  const xPosition = (0.132 + (0.978 - 0.132) * time / 3) * 100 + "%";
  const yPosition = (0.10 + 0.66 * (1.04 - percent / 100) / 1.08) * 100 + "%";
  point.style.left = cursor.style.left = xPosition;
  point.style.top = yPosition;
  point.dataset.state = state;
  point.hidden = cursor.hidden = false;
  note.textContent = time === 0
    ? "A fresh report shows the server is " + state + "."
    : "The server was " + state + " " + interval + " ago.";
}

controls.addEventListener("input", showBelief);
showBelief();
controls.hidden = false;
