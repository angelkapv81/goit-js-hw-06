// Напиши скрипт, который при потере фокуса на инпуте
//  (событие blur), проверяет его содержимое на правильное
//  количество введённых символов.
// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data-length.
// Если введено подходящее количество символов,
//  то border инпута становится зелёным, если
//   неправильное - красным.
// Для добавления стилей, используй CSS-классы
// valid и invalid, которые мы уже добавили в
// исходные файлы задания.

const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", (event) => {
  if (inputEl.value.length === 6) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
