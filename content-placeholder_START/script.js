// NOTE: start with the content loader classes on the html, then turn them off with JS when
// the content is loaded and populated into the HTML
// 1. grab elements:
//  - header
//  - title
//  - excerpt
//  - profileImg
//  - name
//  - date
// 2. grab the content loader elements:
//  - animatedBgs
//  - animatedBgTexts
// 3. add content to the innerHTML of the elements
// 4. call the function that gets the content/data (in this case we use a setTimeout to simulate requesting data from API)

const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08, 2020";

  animatedBgs.forEach(bg => bg.classList.remove("animated-bg"));
  animatedBgTexts.forEach(text => text.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2000);
