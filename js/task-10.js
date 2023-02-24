// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");

btnCreate.addEventListener("click", createBoxes);

function createBoxes() {
  const array = [];
  const arrayLength = Number(inputEl.value);
  array.length = arrayLength;
  array.fill(0);
  array.forEach((e, i) =>
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div id="boxes" 
      style="width:${30 + 10 * i}px; 
      display: flex;
      justify-content: center;
      align-items: center;
      height:${30 + 10 * i}px; 
      background-color:${getRandomHexColor()}; 
      "><span>${i + 1}</span></div>`
    )
  );
}

btnDestroy.addEventListener("click", () => {
  const divElements = document.querySelectorAll("#boxes");
  divElements.forEach((e) => e.remove());
  inputEl.value = "";
});
