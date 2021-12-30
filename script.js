let ball = document.getElementById('ball');
let timeCounter = document.querySelector('.time-counter');
let pointCounter = document.querySelector('.point');
let clickCounter = 0;
let time = 3;
let isWorking = false;

function randomPlaceForBall(){

   let randomTop = Math.round(Math.random() * window.innerHeight);
   let randomLeft = Math.round(Math.random() * window.innerWidth);

   ball.style.top = (randomTop > window.innerHeight-100) ? (window.innerHeight-100 + 'px') : (randomTop + 'px');
   ball.style.left = (randomLeft > window.innerWidth-100) ? (window.innerWidth-100 + 'px') : (randomLeft + 'px');

   console.log('Top ', randomTop);
   console.log('Left ', randomLeft);

}

function start(){

   isWorking = true;
   time--;
   timeCounter.innerHTML = time;
   if(time == -1){
      alert('Süreniz sona erdi! Puanınız: ' + clickCounter);
      location.reload();
   }
   console.log('time ', time);

}

ball.addEventListener('click', () => {

   time = 3;
   timeCounter.innerHTML = time;

   if(!isWorking){
      let timer = setInterval(start, 1000);
   }
   
   clickCounter++;
   pointCounter.innerHTML = clickCounter;
   randomPlaceForBall();

});


