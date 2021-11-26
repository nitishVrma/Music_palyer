let playBtn = document.getElementById('play')
const canvas = document.getElementById('canvas1');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let isplaying = false;
const music = document.getElementById('player');

let icon = document.getElementsByClassName('fas')[0]


let audioCtx = new AudioContext();


const container = document.getElementById("container")


// Rendering intial bars//
let n =0;
let total = canvas.getBoundingClientRect().width;
console.log(canvas.getBoundingClientRect().height)
music.onloadedmetadata = function() {
    let y = music.duration;
    let barWidth = Math.floor(total/250);
    let x= 0;
    
    
    while(x<total){
        let arr =[];
        let barHeight = Math.floor((Math.random()+.4)*canvas.getBoundingClientRect().height*.8);
        arr.push(barHeight)
        ctx.fillStyle = 'red';
        // console.log(barHeight)
        ctx.fillRect(x, canvas.getBoundingClientRect().height-barHeight, barWidth, barHeight);
        ctx.fillRect(x, canvas.getBoundingClientRect().height, barWidth, barHeight);
        x += 2*barWidth;
        n++;
    }
};





//  Audio Play-pause//

playBtn.addEventListener('click', () => {
    if(isplaying){
       
       music.pause()
       icon.classList.replace("fa-pause","fa-play")
    }else{
        music.play()
        icon.classList.replace("fa-play","fa-pause")
    }
    isplaying = !isplaying;
    
    
  })

  setInterval(function(){ 
      if(isplaying){
          console.log(music.currentTime)
      }
   }, 29/2n);