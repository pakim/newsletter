const email = document.querySelector(".email");
const form = document.querySelector(".form");
const error = document.querySelector(".error");

form.setAttribute("novalidate", "");

const checkEmail = value => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(value)) return false;
  else return true;
};

const addError = () => {
  error.classList.remove("hidden");
  email.classList.add("wrong");
};

const removeError = () => {
  error.classList.add("hidden");
  email.classList.remove("wrong");
};

form.addEventListener("submit", e => {
  e.preventDefault();

  if (checkEmail(email.value)) {
    localStorage.setItem("email", email.value);
    form.submit();
  } else {
    addError();
  }
});

email.addEventListener("focus", () => {
  removeError();
});

email.addEventListener("blur", () => {
  if (!checkEmail(email.value)) {
    addError();
  }
});
