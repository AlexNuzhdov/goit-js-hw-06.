// Task 10

// напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку 
// Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, 
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

const refs = { 
	inputEL : document.querySelector('#controls>input'),
	btnDataCreate : document.querySelector('button[data-create]'),
	btnDataDestroy : document.querySelector('button[data-destroy]'),
	boxes : document.querySelector('#boxes')
	
};

function getRandomHexColor() {                     /* функция случайного цвета фона*/
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes (amount) {          /*Функция createBoxes(amount) */

	const elementAdd = []               /*новый массив*/

	for (let i = 0; i < amount; i++) {          /* перебор цикла*/

		const div = document.createElement('div') /* создаем div*/
        div.style.width = `${30 + 10 * i}px`      /*увеличение элемента в ширину*/
		div.style.height = `${30 + 10 * i}px`     /*увеличение элемента в высоту*/
	
		div.style.background = getRandomHexColor() /*добавляем функцию случайного цвета*/
		elementAdd.push(div)                   /* пушим div в новый массив*/
	}
	return elementAdd                      /*возвращаем массив*/
};


refs.btnDataCreate.addEventListener('click', () => {

	let boxesAdd = createBoxes(refs.inputEL.value)
	boxes.append(...boxesAdd)
});
console.log(refs.inputEL.value);


const destroyBoxes = () => {
	boxes.innerHTML = ''
};

refs.btnDataDestroy.addEventListener('click', () => {
	destroyBoxes()                                     /* удаляем значение*/
});


