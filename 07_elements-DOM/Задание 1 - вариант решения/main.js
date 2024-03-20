// Создание контейнера
let container = document.createElement("div")
container.classList.add("container")

// Создание заголовка
let title = document.createElement("h1")
title.classList.add("main-title")
title.textContent = "Добро пожаловать на сайт!"

// Создание кнопки
let button = document.createElement("button")
button.classList.add("btn")
button.textContent = "Дневная тема"

// Добавление обработчика клика по кнопке
button.onclick = function () {
  document.body.classList.add("day-theme")
  button.remove() // Удаление кнопки. remove() удаляет указанные перед точной элемент
}

// Добавление элементов
container.append(title, button)
document.body.append(container)