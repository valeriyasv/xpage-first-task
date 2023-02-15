const btnVideo = document.querySelector('.video-preview__play');
btnVideo.addEventListener('click', () => {
  const video = document.querySelector('video')
  console.log(' asdf')
  if(video.paused){
    btnVideo.style.display = 'none'
    video.play();
  } else if(video.play()) {
    btnVideo.style.display = 'none'
    video.play();
  }
});