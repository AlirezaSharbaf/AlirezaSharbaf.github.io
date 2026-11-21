const scheduleControls = document.querySelector("#schedule-controls");
const schedule = document.querySelector("#schedule-display");
const finish = document.querySelector("#schedule-finish");
const explanation = document.querySelector("#schedule-story");

const scenarios = {
  planned: {
    finish: "10:00 a.m.",
    story: "Case A runs from 8 to 9 in Room 1, followed by B from 9 to 10. In Room 2, C runs from 8 to 9:30."
  },
  delayed: {
    finish: "11:00 a.m.",
    story: "Case A runs an hour long and finishes at 10. Case B waits for Room 1, running from 10 to 11. Room 2 is free from 9:30."
  },
  adjusted: {
    finish: "10:30 a.m.",
    story: "Case A still finishes at 10. Moving B into Room 2 after C lets B run from 9:30 to 10:30. The morning finishes half an hour earlier than if B waited for Room 1."
  }
};

function updateSchedule() {
  const mode = scheduleControls.querySelector("input:checked").value;
  const scenario = scenarios[mode];
  schedule.dataset.mode = mode;
  finish.textContent = scenario.finish;
  explanation.textContent = scenario.story;
}

scheduleControls.addEventListener("input", updateSchedule);
updateSchedule();
scheduleControls.hidden = false;
