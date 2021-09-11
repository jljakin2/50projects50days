// 1. grab images container, next/prev buttons, and images
// 2. run the images every 2 seconds
// 3. restart the carousel when it gets to the end and vice versa
// 4. change image and reset automatic carousel advancement when next/prev are clicked

const imgContainer = document.querySelector("#imgs");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const images = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  moveSlide();
}

function moveSlide() {
  if (idx > images.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = images.length - 1;
  }

  imgContainer.style.transform = `translateX(${-idx * 500}px)`;
}

prevBtn.addEventListener("click", moveBack);
nextBtn.addEventListener("click", moveNext);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

function moveBack() {
  idx--;
  moveSlide();
  resetInterval();
}

function moveNext() {
  idx++;
  moveSlide();
  resetInterval();
}
