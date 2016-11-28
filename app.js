'use strict';

var paths = ['sweep.png', 'dog-duck.jpg', 'breakfast.jpg', 'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'tauntaun.jpg', 'unicorn.jpg','usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var displayIndex = 0;
var items = [];

var displayArea = document.getElementById('image_area');

for(var i = 0; i < paths.length; i++){
  var newItem = new ItemImage(paths[i]); //creates a new ItemImage instance and attaches it to our object
  items.push(newItem); //pushes to an array of all of our items
}

displayArea.addEventListener('click', clickHandler);

function clickHandler(event) {
  var targetString = event.target.src;
  var targetPath = targetString.split('bus_mall')[1];
  var itemPath;

  for (var i = 0; i < items.length; i++) {
    itemPath = items[i].path.split('bus_mall')[1];
    if (itemPath === targetPath) {
      items[i].clicked += 1;
    }
  }
  changePicture();
}

function ItemImage (path) {
  this.path = path;
  this.clicked = 0;
}

function changePicture() {
  var imageOne = document.getElementById('image_one');
  var imageTwo = document.getElementById('image_two');
  var imageThree = document.getElementById('image_three');
  var randomIndex = generateRandomNumber();

  while (displayIndex === randomIndex) {
    randomIndex = generateRandomNumber();
  }

  displayIndex = randomIndex;
  imageOne.src = '../bus_mall/assets/' + paths[randomIndex]; //need to get these to turn into different images from each other - loop?
  imageTwo.src = '../bus_mall/assets/' + paths[generateRandomNumber()];
  imageThree.src = '../bus_mall/assets/' + paths[generateRandomNumber()];

  while (imageTwo.src === imageOne.src) {
    imageTwo.src = '../bus_mall/assets/' + paths[generateRandomNumber()];
  }

  while (imageThree.src === imageOne.src || imageThree.src === imageTwo.src) {
    imageThree.src = '../bus_mall/assets/' + paths[generateRandomNumber()];
  }

  function generateRandomNumber() {
    return Math.floor(Math.random() * paths.length);
  }
}
