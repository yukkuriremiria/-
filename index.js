window.addEventListener('DOMContentLoaded', function(){

  const audioElement = document.querySelector("audio");

  audioElement.addEventListener('loadeddata', (e)=> {
    audioElement.muted = true;
    audioElement.autoplay = true;
  });
});
