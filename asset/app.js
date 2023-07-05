// generate list from local storage
const showList = () => {
  const box = document.querySelector(".box-list");
  const add = document.getElementById("add");
  const del = document.getElementById("delete");
  const edit = document.getElementById("edit");

  if (localStorage.length !== 0) {
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
  } else {
    box.innerHTML = `<marquee direction="right" style="margin: 150px 30px">data not available</marquee>`;
    del.style.display = "none";
    edit.style.display = "none";
  }
};

showList();

// add button
document.querySelector("#add").addEventListener("click", () => {
  const box = document.querySelector(".box-edit");
  const container = document.querySelector(".container");

  box.classList.toggle("show");
  container.classList.toggle("grayscale");
  container.classList.toggle("blur");
});

// delete game action button
document.getElementById("delete").addEventListener("click", () => {
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
});

// add button on edit box
document.querySelector("#tambah").addEventListener("click", () => {
  const title = document.getElementById("inputTitle").value;
  const author = document.getElementById("inputAuthor").value;
  const thumb = document.getElementById("inputThumb").value;
  const background = document.getElementById("inputBackground").value;
  const about = document.getElementById("inputAbout").value;

  let id = "gilangif" + Math.ceil(Math.random() * 99999999999999999);

  let data = { title, author, about, thumb, background };

  localStorage.setItem(id, JSON.stringify(data));
  window.location.assign(window.location.origin + window.location.pathname);
});

// cancel on edit box
document.querySelector("#cancel").addEventListener("click", () => {
  const box = document.querySelector(".box-edit");
  const container = document.querySelector(".container");

  box.classList.toggle("show");
  container.classList.toggle("grayscale");
  container.classList.toggle("blur");
});

// url thumb onchage
const thumbVal = document.getElementById("inputThumb");
thumbVal.addEventListener("change", () => {
  const thumb = document.getElementById("imgThumbEdit");

  thumb.src = thumbVal.value;
});

// url background onchage
const backgroundVal = document.getElementById("inputBackground");
backgroundVal.addEventListener("change", () => {
  const bg = document.getElementById("imgBackgroundEdit");

  bg.src = backgroundVal.value;
});

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
let btnAdd = document.getElementById("add");

if (id && data) {
  document.body.style.background = `rgba(0, 0, 0, 0.938) url("${data.background}")`;
  document.body.style.backgroundRepeat = `no-repeat`;
  document.body.style.backgroundSize = `cover`;
  preview.src = data.thumb;
  title.innerHTML = data.title;
  // btnAdd.style.display = "block"
} else {
  document.body.style.background = `rgba(0, 0, 0, 0.938) url("${randomPreview.background}")`;
  document.body.style.backgroundRepeat = `no-repeat`;
  document.body.style.backgroundSize = `cover`;
  preview.src = randomPreview.thumb;
  title.innerHTML = randomPreview.title;
  btnDelete.style.display = "none";
  btnEdit.style.display = "none";
  // btnAdd.style.display = "none"
}
