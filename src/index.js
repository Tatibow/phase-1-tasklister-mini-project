document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"); // #create-task-form
 form.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputDescription  = document.querySelector("form > input#new-task-description")
    // or  const inputDescription  = document.querySelector(#new-task-description")
    // or e.target.new-task-description.value

    createListItem(inputDescription.value)
   form.reset();
 })
});


function createListItem(toDo) {
  const li = document.createElement("li");
  li.textContent = `${toDo}  `

  const btn = document.createElement("button")
  btn.textContent = "done";

  btn.addEventListener("click", () => {
    li.remove();
  })

  li.appendChild(btn);
  document.querySelector("#tasks").appendChild(li);
}



