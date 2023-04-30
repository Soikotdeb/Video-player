
const videoPlayer = document.getElementById("videoPlayer");
const playButton = document.getElementById("playButton");
const videoUpload = document.getElementById("videoUpload");




const videoSources = [
  {
    src: "video1.mp4",
    type: "video/mp4"
  },
  {
    src: "video2.mp4",
    type: "video/mp4"
  }
];

let currentVideoIndex = 0;

playButton.addEventListener("click", function() {
  videoPlayer.play();
  playButton.style.display = "none";
});

videoPlayer.addEventListener("ended", function() {
  currentVideoIndex++;
  if (currentVideoIndex >= videoSources.length) {
    currentVideoIndex = 0;
  }
  const videoSource = document.createElement("source");
  videoSource.src = videoSources[currentVideoIndex].src;
  videoSource.type = videoSources[currentVideoIndex].type;
  videoPlayer.innerHTML = "";
  videoPlayer.appendChild(videoSource);
  videoPlayer.load();
  videoPlayer.play();
});

videoUpload.addEventListener("change", function() {
  const file = this.files[0];
  const type = file.type;
  const videoSource = document.createElement("source");
  if (type.indexOf("mp4") >= 0) {
    videoSource.src = URL.createObjectURL(file);
    videoSource.type = "video/mp4";
  } else if (type.indexOf("webm") >= 0) {
    videoSource.src = URL.createObjectURL(file);
    videoSource.type = "video/webm";
  }
  videoPlayer.innerHTML = "";
  videoPlayer.appendChild(videoSource);
  videoPlayer.load();
  playButton.style.display = "block";
});



