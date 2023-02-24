// Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай
//  или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const buttonInc = document.querySelector('[data-action="increment"]');
const buttonDec = document.querySelector('[data-action="decrement"]');
const textElem = document.querySelector("#value");

let counterValue = 0;
buttonInc.addEventListener("click", () => {
  counterValue += 1;
  textElem.textContent = counterValue;
  return textElem.textContent;
});

buttonDec.addEventListener("click", () => {
  counterValue -= 1;
  textElem.textContent = counterValue;
  return textElem.textContent;
});
