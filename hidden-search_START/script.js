const search = document.querySelector(".search");

function addActive() {
  this.classList.toggle("active");
}

search.addEventListener("click", addActive);
