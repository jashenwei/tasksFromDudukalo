//создание инпута и кнопки
let container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

let containerTasks = document.createElement("div");
containerTasks.classList.add("containerTasks");
document.body.append(containerTasks);

let taskInp = document.createElement("input");
taskInp.placeholder = "Задача";
taskInp.type = "text";
taskInp.classList.add("taskInp");

let taskBtnAdd = document.createElement("button");
taskBtnAdd.classList.add("taskBtnAdd");
taskBtnAdd.textContent = "Создать задачу";

//Функция добавления задачи
taskBtnAdd.onclick = function () {
  let containerTask = document.createElement("div");
  containerTask.classList.add("containerTask");
  containerTasks.append(containerTask);

  let titleTask = document.createElement("h1");
  titleTask.classList.add("titleTask");

  titleTask.textContent = taskInp.value;
  taskInp.value = "";

  let taskBtnDone = document.createElement("button");
  taskBtnDone.classList.add("taskBtnDone");
  taskBtnDone.textContent = "Выполнено";
  taskBtnDone.onclick = function () {
    taskBtnDone.remove();
    taskBtnEdit.remove();
    containerTask.classList.add("taskDone");
    containerTask.append(containerTasks);
    taskBtnDelete.classList.add("taskDoneBtn");
  };

  let taskBtnEdit = document.createElement("button");
  taskBtnEdit.classList.add("taskBtnEdit");
  taskBtnEdit.textContent = "Изменить";
  taskBtnEdit.onclick = function () {
    let editPromt = prompt("Введите изменение задачи", titleTask.textContent);
    titleTask.textContent = editPromt;
  };

  let taskBtnDelete = document.createElement("button");
  taskBtnDelete.classList.add("taskBtnDelete");
  taskBtnDelete.textContent = "Удалить";
  //функция удаления таски
  taskBtnDelete.onclick = function () {
    return containerTask.remove();
  };
  containerTask.append(titleTask, taskBtnDone, taskBtnEdit, taskBtnDelete);
};

container.append(taskInp, taskBtnAdd);
