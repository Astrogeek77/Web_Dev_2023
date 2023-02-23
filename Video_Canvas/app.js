const video = document.querySelector('video')
const MuteTogglebtn = document.querySelector('#toggle-mute')
const PlayTogglebtn = document.querySelector('#toggle-play')
const VolumeSlider = document.querySelector('#Volume-slider')
const NextSrcButton = document.querySelector('#next-src')
const PreviousSrcButton = document.querySelector('#previous-src')
const RandomSrcButton = document.querySelector('#random-src')
let lastIndex = 0

const srcs = [
  'https://ia601500.us.archive.org/26/items/video-1_20210301/video-1.mp4',
  './assets/video-1.mp4',
  './assets/video-3.mp4',
  'https://ia601406.us.archive.org/31/items/video-2_20210301/video-2.mp4',
  './assets/video-4.mp4',
  './assets/video-2.mp4',
]

MuteTogglebtn.addEventListener('click', () => {
  toggleAudio(video)
})

PlayTogglebtn.addEventListener('click', () => {
  togglePlay(video)
})

VolumeSlider.addEventListener('change', () => {
  changeVolume(video)
})

NextSrcButton.addEventListener('click', () => {
  nextVideoSrc()
})

PreviousSrcButton.addEventListener('click', () => {
  previousVideoSrc()
})

RandomSrcButton.addEventListener('click', () => {
  randomVideoSrc()
})

const randomVideoSrc = () => {
  const newSrc = getRandomDifferent(srcs, lastIndex)
  lastIndex = srcs.indexOf(newSrc)

  console.log({ newSrc })
  console.log({ lastIndex })

  // const videoSrc = video.src
  // newSrcs = srcs.filter((src) => src != videoSrc)
  //   console.log(newSrcs);
  // let randomNum = Math.floor(Math.random() * newSrcs.length)
  // video.src = newSrcs[randomNum]
  //   console.log(video.src);

  video.src = newSrc
  PlayTogglebtn.innerText = 'Pause'
}

const nextVideoSrc = () => {
  // const newSrc = getRandomDifferent(srcs, lastIndex)
  // lastIndex = srcs.indexOf(newSrc)

  const nextIdx = getNextIndex(srcs, lastIndex)
  const newSrc = srcs[nextIdx]
  lastIndex = nextIdx

  console.log({ newSrc })
  console.log({ lastIndex })

  // const videoSrc = video.src
  // newSrcs = srcs.filter((src) => src != videoSrc)
  //   console.log(newSrcs);
  // let randomNum = Math.floor(Math.random() * newSrcs.length)
  // video.src = newSrcs[randomNum]
  //   console.log(video.src);

  video.src = newSrc
  PlayTogglebtn.innerText = 'Pause'
}

const previousVideoSrc = () => {
  // const newSrc = getRandomDifferent(srcs, lastIndex)
  // lastIndex = srcs.indexOf(newSrc)

  const previousIdx = getPreviousIndex(srcs, lastIndex)
  const newSrc = srcs[previousIdx]
  lastIndex = previousIdx

  console.log({ newSrc })
  console.log({ lastIndex })

  // const videoSrc = video.src
  // newSrcs = srcs.filter((src) => src != videoSrc)
  //   console.log(newSrcs);
  // let randomNum = Math.floor(Math.random() * newSrcs.length)
  // video.src = newSrcs[randomNum]
  //   console.log(video.src);

  video.src = newSrc
  PlayTogglebtn.innerText = 'Pause'
}

const getNextIndex = (arr, lastIndex) => {
  let arrLen = arr.length
  if (lastIndex + 1 < arrLen) return lastIndex + 1
  return 0
}

const getPreviousIndex = (arr, lastIndex) => {
  let arrLen = arr.length
  if (lastIndex - 1 >= 0) return lastIndex - 1
  return arrLen - 1
}

const getRandomDifferent = (arr, lastVal = undefined) => {
  if (arr.length === 0) {
    return null
  } else if (arr.length === 1) {
    return arr[0]
  } else {
    let randNum = 0
    do {
      randNum = Math.floor(Math.random() * arr.length)
    } while (randNum === lastVal)
    return arr[randNum]
  }
}

const changeVolume = (video) => {
  video.volume = VolumeSlider.value
}

const togglePlay = (video) => {
  video.paused ? video.play() : video.pause()
  PlayTogglebtn.innerText = video.paused ? 'Play' : 'Pause'
}

const toggleAudio = (video) => {
  video.muted = !video.muted
  MuteTogglebtn.innerText = video.muted ? 'Sound: Off' : 'Sound: On'
}
