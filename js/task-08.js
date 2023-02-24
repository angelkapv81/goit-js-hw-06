// Обработка отправки формы form.login-form должна быть по событию submit.

// При отправке формы страница не должна перезагружаться.

// Если в форме есть незаполненные поля, выводи alert с предупреждением
// о том, что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем
// свойства, а значение поля - значением свойства. Для доступа к
// элементам формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти значения
// полей формы методом reset.

const loginEl = document.querySelector("input[name='email']");

const passwordEl = document.querySelector("input[name='password']");

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

const userData = {};

function onFormSubmit(event) {
  event.preventDefault();
  if (loginEl.value === "" || passwordEl.value === "") {
    alert("всі поля повинні бути заповнені");
  } else {
    console.log("Форма відіслана");
    userData.login = loginEl.value;
    userData.password = passwordEl.value;
    console.log(userData);
    form.reset();
  }
}
