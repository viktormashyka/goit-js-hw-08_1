// Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>
// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import storageApi from './storage';

var throttle = require('lodash.throttle');
const FEEDBACK_FORM_STATE = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');

initialPage();

formRef.addEventListener('input', throttle(handleInput, 500));
function handleInput(event) {
  let saveData = storageApi.load(FEEDBACK_FORM_STATE);
  if (!saveData) {
    saveData = {};
  }
  const { name, value } = event.target;
  console.log(name, value);

  saveData[name] = value;
  storageApi.save(FEEDBACK_FORM_STATE, saveData);
}

function initialPage() {
  const saveData = storageApi.load(FEEDBACK_FORM_STATE);
  if (saveData) {
    Object.entries(saveData).forEach(([name, value]) => {
      formRef.elements[name].value = value;
    });
  }
}

const handleSubmit = event => {
  event.preventDefault();
  const { email, message } = event.currentTarget;
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  storageApi.remove(FEEDBACK_FORM_STATE);
};

formRef.addEventListener('submit', handleSubmit);

//** */
// const CONTACT_FORM_KEY = 'contact-form-key';
// const formRef = document.querySelector('.js-contact-form');
// initialPage();
// formRef.addEventListener('input', handleInput);
// function handleInput(event) {
//   let savedData = storageApi.load(CONTACT_FORM_KEY);
//   if (!savedData) {
//     savedData = {};
//   }
//   const { name, value } = event.target;
//   console.log(name, value);

//   savedData[name] = value;
//   storageApi.save(CONTACT_FORM_KEY, savedData);
// }

// function initialPage() {
//   const savedData = storageApi.load(CONTACT_FORM_KEY);
//   if (savedData) {
//     Object.entries(savedData).forEach(([name, value]) => {
//       formRef.elements[name].value = value;
//     });
//   }
// }

// const handleSubmit = event => {
//   event.preventDefault();
//   const { name, email, message } = event.currentTarget;
//   console.log({ name: name.value, email: email.value, message: message.value });
//   event.currentTarget.reset();
//   storageApi.remove(CONTACT_FORM_KEY);
// };

// formRef.addEventListener('submit', handleSubmit);
