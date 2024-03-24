// Сделайте код программы создания списка пользователей короче, используя цикл.

// Заголовок
let title = document.createElement("h1");
title.textContent = "Список пользователей";

let list = document.createElement("ul"); // Список

let index = 0; // Счетчик

// Пользователь 1
for (let i = 1; i <= 5; i++) {
  let userName = prompt(`Введите имя пользователя ${i}`);
  let userItem = document.createElement("li");
  userItem.textContent = `${i}) ${userName}`;
  list.append(userItem);
}
document.body.append(title, list);
