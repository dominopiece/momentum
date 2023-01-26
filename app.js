const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const onLoginSubmit = (event) => {
  // 브라우저 기능 방지(새로고침)
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

// TODO: 주소 변경
const link = document.querySelector("a");

const onLinkClick = (event) => {};

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", onLinkClick);
