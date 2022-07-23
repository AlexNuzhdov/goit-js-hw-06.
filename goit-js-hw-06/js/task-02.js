// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientlist = document.querySelector('#ingredients') /* получаем ссылку на ul*/
const liArray = []  /* создаем новый массив*/

ingredients.forEach(ingredient => {
	const item = document.createElement('li')
	
  item.classlist = ('item'); /* добавляем класс item*/
	item.textContent = ingredient; /* добавляем название элементов*/

	liArray.push(item) /* пушим */

  ingredientlist.append(...liArray) /* вставляем  в конец элемента */

  

});











 



