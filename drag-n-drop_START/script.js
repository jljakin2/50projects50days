// NOTE: draggle attribute on whatever you want to be draggable has to be set to "true" in HTML
// 1. grab the filler element and all of the empty places where the filler can go
// 2. for the filler element:
//  - add event listeners that listen for start and end of dragging
//  - options are: "dragstart" and "dragend"
// 3. loop through all of the empty spaces:
//  - add event listeners for when:
//      - filler is dragged over
//      - filler enters empty space
//      - filler leaves empty space
//      - filler is dropped on top of empty space
//      - options are: "dragover", "dragenter", "dragleave", "drop"
// 4. add class names depending on how you want styling to be for each of the states of dragging the filler/empty spaces

const content = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

content.addEventListener("dragstart", dragStart);
content.addEventListener("dragend", dragEnd);

empties.forEach(empty => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

// draggable content related
function dragStart() {
  this.className += " hold";
  // use setTimeout to make sure the hold class is applied first before turning the content div invisible by removing all class names
  setTimeout(() => (this.className = ""), 0);
}

function dragEnd() {
  this.className = "fill";
}

// empty content related
function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(content);
}
