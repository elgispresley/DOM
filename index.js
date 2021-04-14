//1) найти корневой элемент
const $root = document.getElementById('root');

//2) Создать 3 тэга div
const $first = document.createElement('div');
const $second = document.createElement('div');
const $third = document.createElement('div');

// $first.classList.add('bordered');
// // $first.classList.add('colored');

$root.append($first)
$root.append($second)
$root.append($third)

//3) Задать размеры
const WIDTH = 150;
const HEIGTH = 150;

const $nodeElements = [$first, $second, $third];

$nodeElements.forEach(function($div) {
    $div.style.width = WIDTH + 'px'; 
    $div.style.height = HEIGTH + 'px'; 
    $div.style.border = '1px solid black'; 
});

//4) Определяем цвета и пишем функцию для случайной выборки цвета
function getRandomColor() {
      const COLORS = ['red', 'blue', 'green', 'orange'];
      return COLORS[Math.floor(Math.random() * COLORS.length)];
};

setInterval(function() {
    $nodeElements.forEach(function($div) {
        $div.style.backgroundColor = getRandomColor()
    });
}, 1000);
// setInterval(function() {
//     $first.classList.toggle('powered');
// //    console.log($first.classList)
// }, 1000);





// setTimeout(function() {
//     console.log('settimeout callback')
// }, 1000);

// $first.innerHTML = `
//      <p>First div</p>
// `;
// $second.innerHTML = `
//      <p>Second div</p>
// `;
// $third.innerHTML = `
//      <p>Third div</p>
// `;



