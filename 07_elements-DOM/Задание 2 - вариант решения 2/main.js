// Создаем функцию для создания элемента списка. Это сильно упросит код и сделает его короче. Функция принимает в аргументах индекс и текст. Возвращает HTML-элемент - li
function getItemLi(index, text) {
  let item = document.createElement("li")
  item.textContent = `${index}) ${text}`
  return item
}

// Создание звголовка
let title = document.createElement("h1")
title.textContent = "Что я узнал в видео"

// Создание списка
let list = document.createElement("ul")

let index = 0 // Счетчик

// Элемент списка 1
index++
let item1 = getItemLi(index, "Как создавать HTML-элементы")

// Элемент списка 2
index++
let item2 = getItemLi(index, "Узнал, как добавлять текст и HTML-код в элемент")

// Элемент списка 3
index++
let item3 = getItemLi(index, "Как добавлять и удалять классы")

// Элемент списка 4
index++
let item4 = getItemLi(index, "Узнал, как вложить один элемент в другой")

// Элемент списка 6
index++
let item5 = getItemLi(index, "Узнал, что такое событие и обработчик события")

// Элемент списка 7
index++
let item6 = getItemLi(index, "Как назначить обработчик события")

// Добавление элементов списка в список
list.append(item1, item2, item3, item4, item5, item6)

// Добавление заголовка и списка в body
document.body.append(title, list)