'use strict';

var paths = ['sweep.png', 'dog-duck.jpg', 'breakfast.jpg', 'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'tauntaun.jpg', 'unicorn.jpg','usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var items = [];
var previousSet = [];
var clickCounter = 0;
var clickedArray = [];

var displayArea = document.getElementById('image_area');
var storedItems = localStorage.getItem('items');
if (storedItems) {
  items = JSON.parse(storedItems);
} else {
  for(var i = 0; i < paths.length; i++){
    var newItem = new ItemImage(paths[i]); //creates a new ItemImage instance and attaches it to our object
    items.push(newItem); //pushes to an array of all of our items
  }
}

var imageShownToHTML = function() {
  var mallTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var nameTableHeader = document.createElement('th');

  nameTableHeader.textContent = items[i];
  tableRow.appendChild(nameTableHeader);

  if (clickCounter > 25) {
    for (var i = 0; i < items[i]; i++) {
      var imageViews = document.createElement('td');
      imageViews.textContent = items[i].imageShown;
      tablerow.appendChild(imageViews);
    }
    mallTable.appendChild(tableRow);
  }
};

imageShownToHTML() ;


//if() there are values in local storage THEN push to items, if not then run the for loop?
displayArea.addEventListener('click', clickHandler);

function clickHandler(event) {
  var targetString = event.target.src;
  var targetPath = targetString.split('assets/')[1];
  var itemPath;

  if (clickCounter < 25){
    for (var i = 0; i < items.length; i++) {
      itemPath = items[i].path.split('assets/')[1];
      if (itemPath === targetPath) {
        items[i].clicked ++;
        clickCounter ++;
      }
    }
    changePicture();} else {
    displayArea.addEventListener.disabled = true;
    trackClickedItems();
    saveData();
    renderChart();
  }
  function trackClickedItems() {
    for (var j = 0; j < items.length; j++) {
      clickedArray.push(items[j].clicked);
    }
  }
}

function ItemImage (path) {
  this.path = '../bus_mall/assets/' + path;
  this.clicked = 0;
  this.imageShown = 0;
}

function changePicture() {
  var imageOne = document.getElementById('image_one');
  var imageTwo = document.getElementById('image_two');
  var imageThree = document.getElementById('image_three');
  previousSet = [imageOne.src, imageTwo.src, imageThree.src];

  imageOne.src = items[generateRandomNumber()].path;
  imageTwo.src = items[generateRandomNumber()].path;
  imageThree.src = items[generateRandomNumber()].path;

  while (imageOne.src === previousSet[0] || imageOne.src === previousSet[1] || imageOne.src === previousSet[2]) {
    imageOne.src = items[generateRandomNumber()].path;
  }
  while (imageTwo.src === imageOne.src || imageTwo.src === previousSet[0] || imageTwo.src === previousSet[1] || imageTwo.src === previousSet[2]) {
    imageTwo.src = items[generateRandomNumber()].path;
  }
  while (imageThree.src === imageOne.src || imageThree.src === imageTwo.src || imageThree.src === previousSet[0] || imageThree.src === previousSet[1] || imageThree.src === previousSet[2]) {
    imageThree.src = items[generateRandomNumber()].path;
  }

  function generateRandomNumber() {
    return Math.floor(Math.random() * paths.length);
  }
  function showCount() {
    for(i = 0; i < items.length; i++) {
      if (items[i].path.split('..')[1] === imageOne.src.split('labs')[1] || items[i].path.split('..')[1] === imageTwo.src.split('labs')[1] || items[i].path.split('..')[1] === imageThree.src.split('labs')[1]) {
        items[i].imageShown ++;
      }
    }
  }
  showCount();
}

function saveData() {
  var itemsJSON = JSON.stringify(items);
  localStorage.setItem('items', itemsJSON);
}

function renderChart(){
  var ctx = document.getElementById('my_chart');

  var chartConfig = {
    type: 'bar',
    data: {
      labels: paths,
      datasets: [{
        label: '# of Votes',
        data: clickedArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: true,
        text: "User Product Preferences",
        fontSize: 22
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  };
  var myChart = new Chart(ctx, chartConfig);
}

Chart.defaults.global.defaultFontColor = '#FFAAAA';
