const voteControls = document.querySelector("#vote-controls");
const accuracyLabel = document.querySelector("#reviewer-accuracy");
const verdict = document.querySelector("#vote-verdict");
const reasoning = document.querySelector("#vote-reason");

function weighVotes() {
  const accuracyC = Number(voteControls.querySelector("input:checked").value);
  const votesGivenTrue = 0.6 * 0.6 * (1 - accuracyC);
  const votesGivenFalse = 0.4 * 0.4 * accuracyC;
  const probabilityTrue = votesGivenTrue / (votesGivenTrue + votesGivenFalse);
  const chooseTrue = probabilityTrue > 0.5;
  const reason = chooseTrue
    ? "With equally reliable reviewers, the two true votes carry the decision."
    : "C’s false vote outweighs A and B’s two true votes.";

  accuracyLabel.textContent = Math.round(accuracyC * 100) + "% accurate";
  verdict.textContent = chooseTrue ? "True" : "False";
  reasoning.textContent = reason + " The probability the claim is true is " + Math.round(probabilityTrue * 100) + "%.";
}

voteControls.addEventListener("input", weighVotes);
weighVotes();
voteControls.hidden = false;
