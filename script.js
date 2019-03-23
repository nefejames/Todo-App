const todoInput = document.getElementById("todo-input");
const addTaskButton = document.querySelector("#add-task");
const listSection = document.getElementById("list-section");

addTaskButton.addEventListener("click", function(e){
    e.preventDefault();

    //create elements
    const div = document.createElement("div");
    const li = document.createElement("li");
    const deleteButton = document.createElement("a");

    //appending elements to DOM 
    div.appendChild(li);
    div.appendChild(deleteButton);    
    listSection.appendChild(div);

    //adding content to created DOM elements
    deleteButton.textContent = "Delete";
    li.textContent = todoInput.value;
    
    //adding css styles classes to created DOM elements
    div.classList.add("todo-lists");
    listSection.classList.add("todo");
    deleteButton.classList.add("delete");

})

//removing todos
const div = document.createElement("div");
const li = document.createElement("li");
const deleteButton = document.createElement("a");

deleteButton.addEventListener("click", function(){
    deleteButton.parentElement.remove();
    event.stopPropagation();
    console.log("yay");
})





