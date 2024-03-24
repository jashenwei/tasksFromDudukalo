// Функция, возвращающая новую кнопку
function getButton(text, className) {
  let button = document.createElement("button")
  button.textContent = text
  button.classList.add(className)
  return button
}

// Функция, возвращающая новый input
function getInput(placeholder, type, className) {
  let input = document.createElement("input")
  input.type = type
  input.placeholder = placeholder
  input.classList.add(className)
  return input
}

// Функция, возвращающая элемент списка задач
function getTaskItem(name) {
  let newTask = document.createElement("li")
  newTask.classList.add("list__item")

  let nameSpan = document.createElement("span")
  nameSpan.classList.add("list__name")
  nameSpan.textContent = name

  let actionsBox = document.createElement("div")
  actionsBox.classList.add("list__actions")

  let editBtn = getButton("Изменить", "list__btn")
  editBtn.onclick = function () {
    let newName = prompt("Введите название задачи", nameSpan.textContent)
    nameSpan.textContent = newName
  }

  let removeBtn = getButton("Удалить", "list__btn")
  removeBtn.onclick = function () {
    newTask.remove()
  }

  let doneBtn = getButton("Выполнено", "list__green-btn")
  doneBtn.onclick = function () {
    newTask.classList.add("list__item_done")
    editBtn.remove()
    doneBtn.remove()
  }

  actionsBox.append(doneBtn, editBtn, removeBtn)
  newTask.append(nameSpan, actionsBox)  // Добавляем элементы в newItem

  return newTask
}

// Блок для добавления задач
let addBox = document.createElement("div")
addBox.classList.add("add-box")

// Текстовое поле для ввода новой задачи
let newTaskNameInp = getInput("Задача", "text", "add-box__input") // Функция возвращает input

// Кнопки добавления задачи
let addTaskBtn = getButton("Создать задачу", "add-box__btn") // Кнопка button


addBox.append(newTaskNameInp, addTaskBtn)

// Список задач
let taskList = document.createElement("ul")
taskList.classList.add("list")

// Добавляем обработчик события клика
addTaskBtn.onclick = function () {
  let name = newTaskNameInp.value

  let newTask = getTaskItem(name) // Функция возвращает li задачи
  taskList.append(newTask)

  newTaskNameInp.value = ""
}

// Добавление элементов в body
document.body.append(addBox, taskList)