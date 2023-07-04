const showList = () => {
  const box = document.querySelector(".box-list");

  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i);
    let data = JSON.parse(localStorage.getItem(id));

    let haha = `
    <div class="game" productid="${id}">
    <img src="${data.thumb}" class="img-list">
    <div class="game-list-title">
    <p class="game-list-title">${data.title}</p>
  </div>
  <p class="game-list-author">${data.author}</p>
  </div>
  `;

    box.innerHTML += haha;
  }
};

showList();

const games = [...document.querySelectorAll(".game")];

games.map((el) => {
  let id = el.getAttribute("productid");

  el.addEventListener("click", () => {
    console.log("haha");
    window.location.assign(`?id=${id}`);
  });
});

const preview = document.querySelector(".img-preview");
const title = document.querySelector(".img-preview-title");

let url = new URL(window.location.href);
let id = url.searchParams.get("id");
let data = JSON.parse(localStorage.getItem(id));

let randomPreview = JSON.parse(
  localStorage.getItem(
    localStorage.key(Math.floor(Math.random() * localStorage.length))
  )
);
let btnDelete = document.getElementById("delete");
let btnEdit = document.getElementById("edit");

console.log(data.background);

if (id && data) {
  document.body.style.background = `rgba(0, 0, 0, 0.938) url("${data.background}")`
  document.body.style.backgroundRepeat = `no-repeat`
  document.body.style.backgroundSize = `cover`
  preview.src = data.thumb;
  title.innerHTML = data.title;
} else {
  preview.src = randomPreview.thumb;
  title.innerHTML = randomPreview.title;
  btnDelete.style.display = "none";
  btnEdit.style.display = "none";
}

const deleteGame = () => {
  let games = [...document.querySelectorAll(".game")];

  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");

  games.map((el) => {
    let list = el.getAttribute("productid");

    if (list === id) {
      el.remove();
      localStorage.removeItem(id);
      window.location.assign(window.location.origin + window.location.pathname);
    }
  });
};

const editGame = () => {
  const box = document.querySelector(".box-edit");
  const container = document.querySelector(".container");
  const btn = document.querySelector(".edit");

  box.classList.toggle("show");
  document.body.classList.toggle("grayscale");
  container.classList.toggle("blur");
  btn.classList.toggle("hide");

};

const box = document.querySelector(".box-edit");

box.addEventListener("click", () => {
  const container = document.querySelector(".container");
  const btn = document.querySelector(".edit");
  box.classList.toggle("show");
  document.body.classList.toggle("grayscale");
  container.classList.toggle("blur");
  btn.classList.toggle("hide");
});