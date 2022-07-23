
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике 
// на button.change-color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
   changeButton : document.querySelector('.change-color'),
   body : document.querySelector('body'),
   colorValue : document.querySelector('.color')
};


refs.changeButton.addEventListener('click', e => {
  let color = getRandomHexColor();

  refs.body.style.backgroundColor = color;
  refs.colorValue.textContent = color;

});