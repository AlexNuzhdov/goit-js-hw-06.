// Напиши скрипт управления формой логина.

// 1.Обработка отправки формы form.login-form должна быть по событию submit.
// 2.При отправке формы страница не должна перезагружаться.
// 3.Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 4.Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

//

const form = document.querySelector('.login-form'); /*Получаем ссылку на форму*/

form.addEventListener('submit', handleSubmit); /* Обрабатываем отправку формы*/

function handleSubmit(event) {
    event.preventDefault()       /* предотвращаем перезагрузку страницы*/

    const {elements: { email, password }, } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    const userDetails = { email: email.value, Password: password.value }  /* возвращает параметр мейла и пароля*/
    
    console.log(userDetails)
    event.currentTarget.reset()  /* очищаем значения полей формы */
};


