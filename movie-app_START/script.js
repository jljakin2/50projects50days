const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

// 1. grab the elements ✅
// 2. call the function to get the movies ✅
// - function calls api to get data, then calls function to show results ✅
// - show results function creates inner html for the container, then loops through
// each movie and adds all of the data to the innerHTML for each movie container
// 3. listen for any search queries from form and run getMovies() and showMovies() with a queried API instead of the main API

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
        ${overview}
    </div>
    `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(avg) {
  // classifies ratings with different colors based on their scores
  return avg >= 8 ? "green" : avg >= 5 ? "orange" : "red";
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm.value !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload(); // reloads the current page as a fail safe against user submitting blank search query
  }
});
