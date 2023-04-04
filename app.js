const btnEL = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const btn_ring = document.getElementById("btn-ring");

const apiKey = "OsUGNOpvFnJ8ZB3I3tY57A==Rhqy2uKdm0hss8iX";

// const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEL.disabled = true;
    btnEL.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEL.disabled = false;
    btnEL.innerText = "Tell me a Joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "Ann Error Happened, try again later";
    btnEL.disabled = false;
    btnEL.innerText = "Tell me a Joke";

    // jokeEl.innerText = data[0].joke;
  }
}

btnEL.addEventListener("click", getJoke);
