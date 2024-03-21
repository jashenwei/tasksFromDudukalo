// В этой программе реализовано создание списка пользователей со следующей механикой: при клике на кнопку "Добавить пользователя", появляются окна ввода prompt для ввода имени и потом возраста. После ввода данных в списке ul создается новый элемент пользователя li.

// Заказчик этого приложения выразил желание изменить способ ввода имени и возраста. Вместо окон prompt для ввода данных он хочет видеть два текстовых поля input. После нажатия на кнопку "Добавить пользователя" имя и возраст берутся именно из этих текстовых полей. Далее создается элемент списка li и добавляется в ul. Текстовые полня input очищаются после добавления кода.

const nameInp = document.createElement("input");
nameInp.placeholder = "Имя";
nameInp.type = "text";

const ageInp = document.createElement("Input");
ageInp.placeholder = "Возраст";
ageInp.type = "num";

// Функция, возвращающая элемент списка с именем и возрастом пользователя
function getUserItem(name, age) {
  let userItem = document.createElement("li");
  userItem.textContent = `${name}, возраст: ${age}`;

  return userItem;
}

// Создание заголовка
let title = document.createElement("h1");
title.textContent = "Список пользователей";

// Создание списка
let list = document.createElement("ul");

// Создание кнопки добавления
let addNewBtn = document.createElement("button");
addNewBtn.textContent = "Добавить пользователя";

// Создание обработчика события для кнопки добавления
addNewBtn.onclick = function () {
  let name = nameInp.value;
  let age = ageInp.value;
  nameInp.value = "";
  ageInp.value = "";
  let newItem = getUserItem(name, age);
  list.append(newItem);
};

// Добавление элементов в body
document.body.append(title, nameInp, ageInp, addNewBtn, list);
