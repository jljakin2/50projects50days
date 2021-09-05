const boxes = document.querySelectorAll(".box");

// listen for main scroll event
window.addEventListener("scroll", checkBoxes);

// call the function to add the initial "active" classes to the boxes above the triggerBottom
checkBoxes();

function checkBoxes() {
  // find the bottom of the window that you want to set as the trigger.
  // note: i honestly don't know why we divide by 5 and multiply by 4 but my guess is that we want the trigger to be just
  // before the very bottom so we can play around with this number depending on how many content boxes there are
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach(box => {
    // find where the top of the box is. note: getBoundingClientRect() can find all sides of content if need be
    const boxTop = box.getBoundingClientRect().top;

    // check if top of the box is at a point that is inside of the triggerBottom which is just smaller than the full window height
    boxTop < triggerBottom
      ? box.classList.add("active")
      : box.classList.remove("active");
  });
}
