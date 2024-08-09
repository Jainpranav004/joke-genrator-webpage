const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit";
 
let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    // .then(item => console.log(item.joke));
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
    });
}
btn.addEventListener("click",getJoke)
getJoke();

