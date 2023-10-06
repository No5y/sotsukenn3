const picArray = [
{src: './images/picture_2.jpg', title: 'Spring'},
{src: './images/picture_3.jpg', title: 'Summer'},
{src: './images/picture_4.jpg', title: 'Fall'},
{src: './images/picture_5.jpg', title: 'Winter'}
];

let counter = 0;

function changePicture() {
  if (counter < picArray.length) {
    document.getElementById('pics').src = picArray[counter].src;
    document.getElementById('pic-title').innerHTML = picArray[counter].title;
    counter++;
  } else {
    document.getElementById('pics').src = picArray[0].src;
    document.getElementById('pic-title').innerHTML = picArray[0].title;
    counter = 1;
  } 
}

let playingID = 0;

function playSlidedeshow () {
  if (playingID == 0) {
    document.getElementById('playButton').innerHTML = 'STOP';
    playingID = setInterval(changePicture, 2000);
  } else {
    document.getElementById('playButton').innerHTML = 'START';
    clearInterval(playingID);
    playingID = 0;
  }
}
