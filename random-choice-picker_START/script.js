const textarea = document.querySelector("textarea");
const tagEl = document.querySelector("#tags");

// allows user to start typing right away on page load
textarea.focus();

textarea.addEventListener("keyup", e => {
  // listen for keyup event then:
  // 1. create tags based on text content
  // 2. if the users hits enter, pick a random choice
  createTags(e.target.value);

  if (e.key === "Enter") {
    e.target.value = "";

    randomSelection();
  }
});

function createTags(input) {
  // create a tag for each word separated by a comma. ensure edge cases like blanks and only commas are removed
  const tags = input
    .split(",")
    .filter(tag => tag.trim() !== "")
    .map(tag => tag.trim());

  // create inner html for the tag container and add each tag with a class name of "tag"
  tagEl.innerHTML = "";
  tags.forEach(tag => {
    const newTag = document.createElement("span");
    newTag.classList.add("tag");
    newTag.innerText = tag;
    tagEl.appendChild(newTag);
  });
}

function randomSelection() {
  // number of times we want the app to look through our choices
  const times = 30;

  // this first interval is to set up the visual effect of the app randomly searching through the tags
  const decidingInterval = setInterval(() => {
    // 1. pick a random tag
    // 2. check to make sure any tags exist, then highlight the found tag
    // 3. wait 100ms, then un-highlight the tag
    const randomTag = pickRandom();

    if (randomTag !== undefined) {
      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);

  // this timeout is set up to eventually stop the interval above which is the visual effect of searching the tags
  setTimeout(() => {
    // 1. the length of time for this to wait 100ms * however many iterations we defined in the "times" variable above
    // 2. once that time elapses, stop the interval
    // 3. set another timeout that takes 100ms to find the final random tag and highlight it
    clearInterval(decidingInterval);

    setTimeout(() => {
      const finalRandomTag = pickRandom();
      highlightTag(finalRandomTag);
    }, 100);
  }, times * 100);
}

function pickRandom() {
  // takes all of the existing tags and returns a random element from the node list
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

// these two functions are what highlights the tags and makes it look like the app is trying to decide which one to pick.
// it is a visual effect for the user.
function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
