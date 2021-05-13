var todos = ["buy a hotwheels"];
var ask = prompt("what would you like to do?");
while (ask !== "quit") {
  if (ask === "list") {
    listTodo();
  } else if (ask === "add") {
    addTodo();
  } else if (ask === "delete") {
    deleteTodo();
  }
  ask = prompt("what would you like to do?");
}
console.log("ok you quit");

function listTodo() {
  console.log("~~~~~~~~~~~~~~~~");
  todos.forEach(function (chan, i) {
    console.log(i + ": " + chan);
  });
  console.log("~~~~~~~~~~~~~~~~");
}

function addTodo() {
  var newtodo = prompt("enter a new todo");
  todos.push(newtodo);
}

function deleteTodo() {
  var index = prompt("enter the index to be deleted");
  todos.splice(index, 1);
  console.log("deleted the todo");
}
