let task = [];

let taskInput = document.getElementById('taskInput');
let addTaskButton = document.getElementById('addTask');
let taskList = document.getElementById('taskList');



function addTask(){
       let taskText = taskInput.value.trim()
       if (taskText !== ""){
        taskInput.value ="";
        renderTasks();
        task.push(taskText);
       }else{
        alert("дебил пиши нормально инвалид ");
  }
}



addTaskButton.addEventListener("click" ,addTask);
taskInput.addEventListener("keydown",function(e){
    if (e.key === "Enter") {
        addTask();
    }
});



function renderTasks(){
    taskList.innerHTML = "";
    for(let i = 0; i < task.length; i++){
        let tasItem = document.createElement("li");
        tasItem.classList.add("tasks");
        tasItem.innerHTML = `<span>${task[i]}</span>
        <button class="deleteBtn" onclick="deleteTask(${i})">удаляй</button>`;
        taskList.appendChild(tasItem)
    }
}


function deleteTask(index){
    task.splice(index, 1);
    renderTasks();
}



