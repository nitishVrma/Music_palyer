let playBtn = document.getElementById('play')
let isplaying = false;
const music = document.querySelector('audio');
let icon = document.getElementsByClassName('fas')[0]

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