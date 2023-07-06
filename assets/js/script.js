let objPeople = [
  {
    username: "user",
    password: "123",
    role: "user",
  },
  {
    username: "david",
    password: "321",
    role: "admin",
  },
];

function cekLogin(event) {
  event.preventDefault(); // Prevent form submission

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  for (let i = 0; i < objPeople.length; i++) {
    if (
      username === objPeople[i].username &&
      password === objPeople[i].password
    ) {
      alert("Welcome " + username);
      sessionStorage.setItem("login", "true");
      sessionStorage.setItem("role", objPeople[i].role);

      window.location.href = "index.html";
      return;
    }
  }
  sessionStorage.setItem("login", "false");

  alert("Username and/or password is incorrect");
}

function cekSignup(event) {
  let name = document.getElementById("name").value;

  alert("Congratulation " + name + " Successfully Signup, Please login");
  window.location.href = "login.html";
  return;
}
