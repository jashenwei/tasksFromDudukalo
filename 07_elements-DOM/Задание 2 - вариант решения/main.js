// Создание звголовка
let title = document.createElement("h1")
title.textContent = "Что я узнал в видео"

// Создание списка
let list = document.createElement("ul")

let index = 0 // Счетчик

// Элемент списка 1
index++
let item1 = document.createElement("li")
item1.textContent = `${index}) Как создавать HTML-элементы`

// Элемент списка 2
index++
let item2 = document.createElement("li")
item2.textContent = `${index}) Узнал, как добавлять текст и HTML-код в элемент`

// Элемент списка 3
index++
let item3 = document.createElement("li")
item3.textContent = `${index}) Как добавлять и удалять классы`

// Элемент списка 4
index++
let item4 = document.createElement("li")
item4.textContent = `${index}) Узнал, как вложить один элемент в другой`

// Элемент списка 5
index++
let item5 = document.createElement("li")
item5.textContent = `${index}) Узнал, что такое событие и обработчик события`

// Элемент списка 6
index++
let item6 = document.createElement("li")
item6.textContent = `${index}) Как назначить обработчик события`

// Добавление элементов списка в список
list.append(item1, item2, item3, item4, item5, item6)

// Добавление заголовка и списка в body
document.body.append(title, list)