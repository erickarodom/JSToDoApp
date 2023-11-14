// Global Variables
const x = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");

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


        // Add delete button 
        const deleteBtn = document.createElement("button");
        const deleteBtnText = document.createTextNode("Delete");
        deleteBtn.appendChild(deleteBtnText);
        deleteBtn.classList.add("delete-btn");
        item.appendChild(deleteBtn);

        // toggle strike on/off for completed task.
        completeBtn.addEventListener("click", function(){
        newTaskText.classList.toggle("task-done");
        // display button if task is complete
        deleteBtn.classList.toggle("delete-btn");
    });
       
        //delete "this" to do on click
        deleteBtn.addEventListener("click", function(){
        item.remove();
});
// add task to list
document.getElementById("list-ctnr").appendChild(item);

//clear value from input
x.value= " ";
 }
}
addBtn.addEventListener("click", toDo);