/*Оголоси поза будь-якими функціями об’єкт formData з полями email та message, які спочатку мають порожні рядки як значення: 
{ email: "", message: "" }.
Використовуй метод делегування для відстеження змін у формі через подію input. Зберігай актуальні дані з полів email та message у 
formData та записуй цей об’єкт у локальне сховище. Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.
При завантаженні сторінки перевір, чи є дані у локальному сховищі. Якщо так, використовуй їх для заповнення форми та об'єкта formData. 
Якщо ні, залиш поля форми порожніми.
Перед відправленням форми переконайся, що обидва поля форми заповнені. Якщо будь-яке з полів (властивостей об’єкта formData) порожнє, 
показуй сповіщення з текстом «Fill please all fields». Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними значеннями, 
очисти локальне сховище, об’єкт formData і поля форми.*/
/*На що буде звертати увагу ментор при перевірці:
На живій сторінці відображається форма з двома елементами форми і кнопкою типу submit Форма стилізована згідно з макетом
На формі прослуховуються події input і submit При введенні даних у будь-який елемент форми вони записуються у локальне сховище під ключем 
"feedback-form-state", збережені дані не містять пробіли по краях Введення даних в одне поле форми не видаляє дані в сховищі для іншого
При оновленні сторінки дані з локального сховища підставляються в елементи форми, у полях форми відсутні undefined
При сабміті форми є перевірка, щоб обидва елементи форми були заповнені Під час сабміту форми, якщо обидва елементи форми заповнені, 
виводиться у консоль об'єкт з полями email, message та їхніми поточними значеннями, а також очищаються сховище і поля форми
Якщо після сабміту форми ввести в будь-який елемент форми дані, то в локальному сховищі не з’являються дані від попереднього сабміта */
const formData = { email: "", message: "" };
const localStorageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".form-email");
const textarea = document.querySelector(".form-message");
populateTextarea();
function populateTextarea() {
    console.log('Hello!');
    const smth = localStorage.getItem(localStorageKey);
    const savedValues = JSON.parse(smth);
    //перевірити що об'єкт не пустий
    if (savedValues) {
        email.value = savedValues.email;
        textarea.value = savedValues.message;
    }
}


form.addEventListener("input", (event) => {
    if (event.target.name === 'email') {
        formData.email = event.target.value;
    }
    else
    {
        formData.message = event.target.value;
    }
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    //якщо поля порожні, вивести алерт
    if (event.target.name === 'email') {
        //алерт
    }
});