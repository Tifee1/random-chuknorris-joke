const btn = document.querySelector(".btn");
const content = document.querySelector(".result");
const URL = "https://api.chucknorris.io/jokes/random";
const img = document.querySelector(".img");

btn.addEventListener("click", () => {
  getData(URL)
    .then((data) => displayData(data))
    .catch((err) => console.log(err));
});

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        console.log({
          status: xhr.status,
          statusText: xhr.statusText,
        });
        reject();
      }
    };
  });
}
function displayData(data) {
  img.classList.add("shake-img");
  const { value: joke } = JSON.parse(data);
  content.textContent = joke;
  const time = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, time);
}
