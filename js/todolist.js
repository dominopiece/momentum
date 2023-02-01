const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

// localstorage update
let toDos = [];

const saveToDos = () => {
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
};

const deleteToDo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  // .filter는 true만 반환 !== 삭제할 대상
  toDos = toDos.filter((toDo) => {
      return toDo.id !== parseInt(li.id); // return 없을 경우 새로 고침시 버그 발생 {}, return 제거 또는 return 삽입
  });
  saveToDos();
};

const paintToDo = (newToDo) => {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  //
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "delete";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const onToDoSubmit = (event) => {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  //
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
};

toDoForm.addEventListener("submit", onToDoSubmit);

// const showParsedToDos = (item) => {
//   console.log("ToDos", item);
// };

const savedToDos = localStorage.getItem("TODOS_KEY");
// console.log(savedToDos);

// const parsedToDos = JSON.parse(savedToDos);
// console.log(parsedToDos)

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos);
  // parsedToDos.forEach(showParsedToDos);
  // parsedToDos.forEach((item) => {
  //   console.log("savedToDOs", item);
  // });
  // update
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
