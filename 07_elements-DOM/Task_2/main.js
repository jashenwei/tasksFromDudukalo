// Реализуйте в документе (в body) следующую структуру HTML-элементов с помощью встроенных функция создания элементов в Javascript:

/*
<h1>Что я узнал в видео</h1>
<ul>
  <li>1) Как создавать HTML-элементы</li>
  <li>2) Узнал, как добавлять текст и HTML-код в элемент</li>
  <li>3) Как добавлять и удалять классы</li>
  <li>4) Узнал, как вложить один элемент в другой</li>
  <li>5) Узнал, что такое событие и обработчик события</li>
  <li>6) Как назначить обработчик события</li>
</ul>
*/

// Для создания элементов необходимо использовать:
// document.createElement()
// textContent
// append()

// document.write() мы уже не используем

const title = document.createElement("h1");
title.textContent = "Что я узнал в видео";
document.body.append(title);

const ul = document.createElement("ul");
document.body.append(ul);

// const li = document.createElement("li");
// ul.append(li);

const listLi = [
  "Как создавать HTML-элементы",
  "Узнал, как добавлять текст и HTML-код в элемент",
  "Как добавлять и удалять классы",
  "Узнал, как вложить один элемент в другой",
  "Узнал, что такое событие и обработчик события",
  "Как назначить обработчик события",
];

listLi.forEach((el, index) => {
  const li = document.createElement("li");
  ul.append(li);
  li.textContent = `${index + 1}) ${el}`;
});
