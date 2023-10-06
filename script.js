




const picArray = [
{src: "./images/illustration.jpg", title:訪れ},
{src: "./images/illustration2.jpg", title:哀愁},
{src: "./images/illustration3.jpg", title: '振り返って'},
{src: "./images/illustration4.jpg", title: '欲しがり'}
{src: "./images/illustration4.jpg", title: '儚い恋'}
  
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
