const form = document.querySelector(".login-form");
const comfirmBtn = document.querySelector(".btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const mail = form.elements.email.value;
  const pass = form.elements.password.value;

  if (pass === "" && mail === "") {
    alert("All the fields should be completed");
  } else {
    alert("success");
  }

  const user = {
    password: pass,
    email: mail,
  };

  console.log(user);
  form.reset();
});
