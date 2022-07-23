// TASK6

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const Input = document.querySelector('#validation-input')
console.log(Input.getAttribute('data-length'))

Input.addEventListener('blur', event => {
	if (event.target.value.length == Input.getAttribute('data-length')) {
		Input.classList.add('valid');

		if (Input.classList.contains('invalid')) {
			Input.classList.remove('invalid')
		};
	} else {
		if (Input.classList.contains('valid')) {
			Input.classList.remove('valid')
		};
		Input.classList.add('invalid')
	}
});







