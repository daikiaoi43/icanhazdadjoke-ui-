const joke = document.querySelector(".joke-container p");
const jokeBtn = document.querySelector(".joke-container button");

getNewJoke();

// get new joke from icanhazdadjoke API
function getNewJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => displayNewJoke(data));
}

// display a joke to the dom
function displayNewJoke(data) {
  joke.innerHTML = data["joke"];
}

// listen to new Joke button
jokeBtn.addEventListener("click", getNewJoke);
