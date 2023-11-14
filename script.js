// Global Variables
const x = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", toDo);


function toDo(){
    const newTask = x.value;
    if( newTask == " "){
        alert("Enter a task first, to add to the list. Thanks");
    } else {
    
    const newTaskText = document.createElement("p");
    newTaskText.innerHTML = newTask
    const item = document.createElement("li");
    item.appendChild(newTaskText);

    // Start of completed task button
    const completeBtn = document.createElement("button");
    const completeBtnText = document.createTextNode("Done");
    completeBtn.appendChild(completeBtnText);
    item.appendChild(completeBtn);

    // toggle strike on/off for completed task.
    completeBtn.addEventListener("click", function(){
        const addStrike = newTaskText.classList.toggle("task-done");
        // Add delete button 
        const deleteBtn = document.createElement("button");
        const deleteBtnText = document.createTextNode("Delete");
        deleteBtn.appendChild(deleteBtnText);
        item.appendChild(deleteBtn);
       
        //delete "this" to do on click
        deleteBtn.addEventListener("click", function(){
        item.remove();
    });
});

// add task to list
const node = document.getElementById("list-ctnr").appendChild(item);

//clear value from input
x.value= " ";
 }
}