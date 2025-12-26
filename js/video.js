
// Video Functionality

const videoWrapper = document.getElementById("videoWrapper")
const promoVideo = document.getElementById("promoVideo")
const playBtn = document.getElementById("playBtn")

let isPlaying = false

function toggleVideo() {
  if (isPlaying) {
    promoVideo.pause()
    playBtn.classList.remove("hidden")
    isPlaying = false
  } else {
    promoVideo.play()
    playBtn.classList.add("hidden")
    isPlaying = true
  }
}

videoWrapper.addEventListener("click", toggleVideo)

// Show play button when video ends
promoVideo.addEventListener("ended", () => {
  playBtn.classList.remove("hidden")
  isPlaying = false
})
