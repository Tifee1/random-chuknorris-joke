const btn = document.querySelector(".btn");
const content = document.querySelector(".result");
const URL = "https://api.chucknorris.io/jokes/random";
const img = document.querySelector(".img");

btn.addEventListener("click", async () => {
  try {
    const resp = await fetch(URL);
    const data = await resp.json();
    displayData(data);
  } catch (err) {
    console.log(err);
  }
});

function displayData(data) {
  img.classList.add("shake-img");
  const { value: joke } = data;
  content.textContent = joke;
  const time = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, time);
}
