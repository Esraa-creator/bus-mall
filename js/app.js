// 'use strict';
// let goatArray = [
//   'cruisin-goat',
//   'float-your-goat',
//   'goat-out-of-hand',
//   'kissing-goat',
//   'sassy-goat',
//   'smilling-goat',
//   'sweeter-goat'
// ];

// const imageSection = document.getElementById('imageSection');
// const leftImage = document.getElementById('leftImage');
// const rightImage = document.getElementById('rightImage');

// function Goat(name){
//   this.name = name;
//   this.image =`./img/${name}.jpg`;
//   Goat.all.push(this);
// }

// Goat.all =[];

// for(let i = 0; i<goatArray.length; i++){
//   new Goat (goatArray[i]);
// }

// leftImage.scr = Goat.all[0].image;

// console.log(Goat.all);


// // helper function
// function randomNumber(min, max){
//   return Math.floor(Math.random() * (max - min +1)) + min ;
// }

'use strict';

let productsArray = [
  'bag',
  'banana',
  'bathroom',
  'boots',
  'breakfast',
  'bubblegum',
  'chair',
  'cthulhu',
  'dog-duck',
  'dragon',
  'pen',
  'pet-sweep',
  'scissors',
  'shark',
  'sweep',
  'tauntaun',
  'unicorn',
  'usb',
  'water-can',
  'wine-glass',
];

const imageSection = document.getElementById('imageSectionProduct');
const firstImage = document.getElementById('firstImage');
const secondImage = document.getElementById('secondImage');
const thirdImage = document.getElementById('thirdImage');

let firstImageIndex = 0;
let secondImageIndex = 0;
let thirdImageIndex = 0;
const clickCounter = 25;

function BussMall(name) {
  this.name = name;
  this.image = `./img/${name}.jpg`;
  this.clicks = 0;
  this.shown = 0;
  BussMall.all.push(this);
}

BussMall.all = [];
BussMall.counter = 0;

for (let i = 0; i < productsArray.length; i++) {
  new BussMall(productsArray[i]);
}

function getName(fileName) {
  return fileName.split('.').slice(0, -1).join('.');
}

function renderNewProducts() {
  let firstIndex = randomNumber(0, BussMall.all.length - 1);
  firstImage.src = BussMall.all[firstIndex].image;
  firstImage.alt = BussMall.all[firstIndex].name;
  firstImageIndex = firstIndex;

  let secondIndex;
  let thirdIndex;
  do {
    secondIndex = randomNumber(0, BussMall.all.length - 1);
    thirdIndex = randomNumber(0, BussMall.all.length - 1);
  } while ((firstIndex === secondIndex) || (firstIndex === thirdIndex) || (secondIndex === thirdIndex));

  secondImage.src = BussMall.all[secondIndex].image;
  secondImage.alt = BussMall.all[secondIndex].name;
  secondImageIndex = secondIndex;

  thirdImage.src = BussMall.all[thirdIndex].image;
  thirdImage.alt = BussMall.all[thirdIndex].name;
  thirdImageIndex = thirdIndex;

  BussMall.all[firstIndex].shown++;
  BussMall.all[secondIndex].shown++;
  BussMall.all[thirdIndex].shown++;

}

function handelClick(event) {

  if (BussMall.counter < clickCounter) {
    const clickedElement = event.target;
    if (clickedElement.id === 'firstImage' || clickedElement.id === 'secondImage' || clickedElement.id === 'thirdImage') {
      if (clickedElement.id === 'firstImage') {
        BussMall.all[firstImageIndex].clicks++;
      }

      if (clickedElement.id === 'secondImage') {
        BussMall.all[secondImageIndex].clicks++;
      }

      if (clickedElement.id === 'thirdImage') {
        BussMall.all[thirdImageIndex].clicks++;
      }

      BussMall.counter++;
      renderNewProducts();

      console.log(BussMall.all);
    }
      else {
        renderChart();
    }
  }
} 




imageSection.addEventListener('click', handelClick);

console.log(BussMall.all);

// GLOBAL RANDOM FUNCTION
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

renderNewProducts();




let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});