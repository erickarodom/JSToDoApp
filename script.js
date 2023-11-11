// Global Variables
const x = document.getElementById("task-input");

function test(){
const newTask = x.value;
const item = document.createElement("li");
const completeBtn = document.createElement("button");
const completeBtnText = document.createTextNode("Done");
const deleteBtn = document.createElement("button");
const deleteBtnText = document.createTextNode("Delete");
const node = document.getElementById("list-ctnr").appendChild(item);

deleteBtn.appendChild(deleteBtnText);
completeBtn.appendChild(completeBtnText);
node.innerHTML = newTask;
node.appendChild(completeBtn);
node.appendChild(deleteBtn);
x.value= " ";

}

function taskDone(){
    
}

