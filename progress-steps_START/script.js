// grab everything we need
const progress = document.querySelector(".progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

// keep track of which step we are on
let currentActive = 1;

next.addEventListener("click", () => {
  // increment current step when next button is clicked
  currentActive++;

  // make sure we can't go over however many steps there are
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  // update the dom
  update();
});

prev.addEventListener("click", () => {
  // decrement current step when prev button is clicked
  currentActive--;

  // make sure we don't go negative
  if (currentActive < 1) {
    currentActive = 1;
  }

  // update dom
  update();
});

function update() {
  // grab all circles and check if the iteration index is less or more than the active step
  // change classList for circle depending on if index is less or more than current active step
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // grab all circles that have the active class
  const actives = document.querySelectorAll(".active");

  progress.style.width =
    // update progress bar depending on the current active step
    // since there are 4 steps we need the progress bar to increment in 1/3 steps
    // if we just did current step divided by length we would get increments of 50%, 75%, and 100% which wouldn't match
    // example: 2 step =
    //          1 / 3 * 100 = 33%
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // make sure the next and prev buttons can't be clicked when there aren't any subsequent steps in either direction
  // while html sets prev disabled initially, we want to have the extra check in case the user goes forward and goes all the way back to step 1
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
