const video = document.querySelector('video');
const MuteTogglebtn = document.querySelector('#toggle-mute');
const PlayTogglebtn = document.querySelector('#toggle-play');
const VolumeSlider = document.querySelector('#Volume-slider');
const ChangeSrcButton = document.querySelector('#change-src');

MuteTogglebtn.addEventListener('click', () => {
  video.muted = !video.muted;
  MuteTogglebtn.innerText = video.muted ? 'Sound: Off' : 'Sound: On';
});

PlayTogglebtn.addEventListener('click', () => {
  togglePlay(video);
  PlayTogglebtn.innerText = video.paused ? 'Play' : 'Pause';
});

VolumeSlider.addEventListener('change', () => {
  video.volume = VolumeSlider.value;
});

const srcs = [
  'https://ia601500.us.archive.org/26/items/video-1_20210301/video-1.mp4',
  'https://ia601406.us.archive.org/31/items/video-2_20210301/video-2.mp4',
  './assets/video-1.mp4',
  './assets/video-2.mp4',
];

ChangeSrcButton.addEventListener('click', () => {
  const videoSrc = video.src;
  newSrcs = srcs.filter((src) => src != videoSrc);
  //   console.log(newSrcs);
  let randomNum = Math.floor(Math.random() * newSrcs.length);
  video.src = newSrcs[randomNum];
  //   console.log(video.src);
    PlayTogglebtn.innerText = 'Pause';
});

const togglePlay = (video) => {
  video.paused ? video.play() : video.pause();
};
