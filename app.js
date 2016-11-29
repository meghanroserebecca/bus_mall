'use strict';

var paths = ['sweep.png', 'dog-duck.jpg', 'breakfast.jpg', 'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'tauntaun.jpg', 'unicorn.jpg','usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var items = [];
var previousSet = [];

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
  previousSet = [imageOne.src, imageTwo.src, imageThree.src];

  imageOne.src = '../bus_mall/assets/' + paths[generateRandomNumber()];
  imageTwo.src = '../bus_mall/assets/' + paths[generateRandomNumber()];
  imageThree.src = '../bus_mall/assets/' + paths[generateRandomNumber()];

  /*for (var i = 0; i < previousSet; i++) {
    if (imageOne.src !== previousSet[1]) {
      previousSet.shift;
      previousSet.push(imageOne.src);
    }

    if (imageTwo.src !== previousSet[2]) {
      previousSet.shift;
      previousSet.push(imageTwo.src);
    }

    if (imageThree.src !== previousSet[3]){
      previousSet.shift;
      previousSet.push(imageThree.src);
    }*/
  while (imageOne.src === previousSet[0] || imageOne.src === previousSet[1] || imageOne.src === previousSet[2]) {
    imageOne.src = '../bus_mall/assets/' + paths[generateRandomNumber()];
  }
  while (imageTwo.src === imageOne.src || imageTwo.src === previousSet[0] || imageTwo.src === previousSet[1] || imageTwo.src === previousSet[2]) {
    imageTwo.src = '../bus_mall/assets/' + paths[generateRandomNumber()];
  }
  while (imageThree.src === imageOne.src || imageThree.src === imageTwo.src || imageThree.src === previousSet[0] || imageThree.src === previousSet[1] || imageThree.src === previousSet[2]) {
    imageThree.src = '../bus_mall/assets/' + paths[generateRandomNumber()];
  }

  function generateRandomNumber() {
    return Math.floor(Math.random() * paths.length);
  }
}
