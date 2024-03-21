// Функция, возвращающая HTML-элемент карточки
function getListItem(index, text) {
  let listItem = document.createElement("li")
  listItem.classList.add("list__item")

  let listIndex = document.createElement("span")
  listIndex.classList.add("list__index")
  listIndex.textContent = index

  let listDesc = document.createElement("p")
  listDesc.classList.add("list__desc")
  listDesc.textContent = text

  listItem.append(listIndex, listDesc)

  return listItem
}

let container = document.createElement("div")
container.classList.add("container")

let mainTitle = document.createElement("h1")
mainTitle.classList.add("main-title")
mainTitle.textContent = "Достижения в изучении Javascript"

let list = document.createElement("ul")
list.classList.add("list")

let i = 0 // Счетчик

// Карточка 1
i++
let listItem1 = getListItem(i, "Знаю, что такое вывод и ввод информации")

// Карточка 2
i++
let listItem2 = getListItem(i, "Знаю о способах вывода информации")

// Карточка 3
i++
let listItem3 = getListItem(i, "Знаю, что такое числа, строки, и переменные")

// Карточка 4
i++
let listItem4 = getListItem(i, "Умею создавать функции и пользоваться ими")

// Карточка 5
i++
let listItem5 = getListItem(i, "Учусь создавать HTML - элементы с помощью встроенных функций")


list.append(listItem1, listItem2, listItem3, listItem4, listItem5)
container.append(mainTitle, list)
document.body.append(container)