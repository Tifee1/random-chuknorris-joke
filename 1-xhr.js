const btn = document.querySelector(".btn");
const content = document.querySelector(".result");
const URL = "https://api.chucknorris.io/jokes/random";
const img = document.querySelector(".img");

btn.addEventListener("click", () => {
  getData(URL);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      img.classList.add("shake-img");
      const response = JSON.parse(xhr.responseText);
      const joke = response.value;
      content.textContent = joke;
      const time = Math.random() * 1000;
      setTimeout(() => {
        img.classList.remove("shake-img");
      }, time);
    } else {
      console.log({
        status: xhr.status,
        statusText: xhr.statusText,
      });
    }
  };
}
