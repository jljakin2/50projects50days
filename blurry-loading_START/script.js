// grab what we need
const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

// track the percentage of load up to 100
let load = 0;

// call the set interval that will handle the blur of the image every 30ms
let int = setInterval(blurring, 30);

function blurring() {
  // increase load amount
  load++;

  // cap it at 100 and stop the set interval
  if (load > 99) {
    clearInterval(int);
  }

  // change the text to indicate the load progress
  loadText.innerText = `${load}%`;
  // use scale() to reduce opacity for load text
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  // use scale() to make image less blurry as load increases
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
