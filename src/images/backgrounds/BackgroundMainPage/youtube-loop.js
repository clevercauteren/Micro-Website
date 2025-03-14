// Laad de YouTube API script
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: "4zCL1HDgR3o", // Video ID
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
    playerVars: {
      start: 0, // Starttijd in seconden
      autoplay: 1, // Automatisch afspelen
      controls: 0, // Verwijder de bedieningsknoppen
      modestbranding: 1, // Minimaliseer YouTube-branding
      rel: 0, // Geen gerelateerde video's aan het einde
      showinfo: 0, // Verberg videoinformatie
      disablekb: 1, // Schakel toetsenbordbediening uit
      fs: 0, // Geen fullscreen-knop
      iv_load_policy: 3, // Verwijder annotaties
      mute: 1, // Video standaard op mute
    },
  });
}
function onPlayerReady(event) {
  // Stel de afspeelsnelheid in op 0.33 (3 keer trager)
  player.setPlaybackRate(0.33);

  // Start de video
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    let loopInterval = setInterval(function () {
      if (player.getCurrentTime() >= 10) {
        player.seekTo(0); // Ga terug naar 0 seconden
      }
    }, 100);
  }
}
