// Эта программа выводит в документ список достижений в Javascript. Ваша задача изменить способ вывода, используя встроенные функции создания, стилизации и настройки HTML-элементов.
// document.write() в итоговой реализации быть не должно.

// Напомню, что функции - удобный инструмент сокращения кода. Используйте функции, аргументы функций и return для оптимизации кода. Найдите повторяющиеся фрагменты кода в программе и используйте функции для сокращения кода.
let container = document.createElement("div");
document.body.append(container);
container.className = "container";

let title = document.createElement("h1");
container.append(title);
title.className = "main-title";
title.textContent = "Достижения в изучении Javascript";

let ul = document.createElement("ul");
container.append(ul);
ul.className = "list";

let i = 0; // Счетчик

const addCart = (text) => {
  i++;
  let li = document.createElement("li");
  li.classList.add("list__item");
  ul.append(li);

  let span = document.createElement("span");
  span.classList.add("list__index");
  span.textContent = i;
  li.append(span);

  let p = document.createElement("p");
  p.classList.add("list__desc");
  p.textContent = text;
  li.append(p);

  return;
};

addCart("Знаю, что такое вывод и ввод информации");
addCart("Знаю о способах вывода информации");
addCart("Знаю, что такое числа, строки, и переменные");
addCart("Умею создавать функции и пользоваться ими");
addCart("Учусь создавать HTML - элементы с помощью встроенных функций");

// Карточка 1
//i++;
// document.write(`<li class="list__item">
//                   <span class="list__index">${i}</span>
//                   <p class="list__desc">
//                     Знаю, что такое вывод и ввод информации
//                   </p>
//                 </li>`);

// // Карточка 2
// i++;
// document.write(`<li class="list__item">
//                   <span class="list__index">${i}</span>
//                   <p class="list__desc">
//                     Знаю о способах вывода информации
//                   </p>
//                 </li>`);

// // Карточка 3
// i++;
// document.write(`<li class="list__item">
//                   <span class="list__index">${i}</span>
//                   <p class="list__desc">
//                     Знаю, что такое числа, строки, и переменные
//                   </p>
//                 </li>`);

// // Карточка 4
// i++;
// document.write(`<li class="list__item">
//                   <span class="list__index">${i}</span>
//                   <p class="list__desc">
//                     Умею создавать функции и пользоваться ими
//                   </p>
//                 </li>`);

// // Карточка 5
// i++;
// document.write(`<li class="list__item">
//                   <span class="list__index">${i}</span>
//                   <p class="list__desc">
//                     Учусь создавать HTML - элементы с помощью встроенных функций
//                   </p>
//                 </li>`);
