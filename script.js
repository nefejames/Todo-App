let input = document.querySelector("input");
let addTaskButton = document.querySelector("button");
let ul = document.querySelector("ul");
let deleteButton = document.querySelector("img");
let item = document.querySelector("li");

console.log(input);
console.log(addTaskButton);
console.log(ul);

function addNewItem(e){
    e.preventDefault();
    if(input.value.length > 0){

        //create elements
        li = document.createElement("li");
        li.textContent = input.value;
        img = document.createElement("img");
        img.src = "trash-2.svg";
        
        //add elements to DOM
        li.appendChild(img);
        ul.appendChild(li);

        //handle deleting items
       img.addEventListener("click", removeItem);
}
}

addTaskButton.addEventListener("click", addNewItem);
document.body.onkeypress = function(e){
    if(e.keyCode == 13){
        addNewItem();
    }
}

function removeItem(e) {
    e.target.parentElement.remove();
  }































