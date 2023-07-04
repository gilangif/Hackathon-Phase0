let objPeople = [
  {
    username: "user",
    password: "123",
  },
  {
    username: "david",
    password: "321",
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
      window.location.href = "home.html";
      return;
    }
  }
  alert("Username and/or password is incorrect");
}

function cekSignup(event) {
  let name = document.getElementById("name").value;

  alert("Congratulation " + name + " Successfully Signup, Please login");
  window.location.href = "login.html";
  return;
}
