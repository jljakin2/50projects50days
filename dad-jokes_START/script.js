const jokeApi = "https://icanhazdadjoke.com";

const joke = document.querySelector(".joke");
const jokeBtn = document.querySelector(".btn");

getJoke();

// using async/await syntax
async function getJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch(jokeApi, config);
  const data = await res.json();

  joke.innerText = data.joke;
}

jokeBtn.addEventListener("click", getJoke);

// using .then() syntax
// function getJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch(jokeApi, config)
//     .then(res => res.json())
//     .then(data => (joke.innerText = data.joke));
// }
