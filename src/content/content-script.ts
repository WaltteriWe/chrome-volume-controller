import Browser from "webextension-polyfill"

const browserApi = (typeof Browser !== 'undefined' ? Browser : chrome)

browserApi.runtime.onMessage.addListener((message: any) => {
    const mediaElements = document.querySelectorAll<HTMLMediaElement>('audio, video')

    switch (message.type) {
    case 'SET_VOLUME':
      mediaElements.forEach(el => {
        el.volume = Math.max(0, Math.min(1, message.volume))
      })
        break
    case 'PLAY_PAUSE':
        mediaElements.forEach(el => {
            el.paused ? el.play() : el.pause()
        })
        break
    case 'MUTE':
        mediaElements.forEach(el => {
            el.muted = !el.muted
        })
        break
    case 'PREV':
        mediaElements.forEach(el => {
            el.currentTime = Math.max(0, el.currentTime - 10)
        })
        break
    case 'NEXT':
        mediaElements.forEach(el => {
            el.currentTime += 10
        })
        break
    }
})

let lastServerIsPlaying: boolean | null = null;
let commandLockUntil = 0; // timestamp — suppress sendMediaInfo until this time

function sendMediaInfo() {
  if (Date.now() < commandLockUntil) return; // command in progress, don't overwrite

  const meta = navigator.mediaSession?.metadata;
  const mediaEl = document.querySelector<HTMLMediaElement>('audio, video');
  const isPlaying = navigator.mediaSession?.playbackState === "playing" 
    || (mediaEl ? !mediaEl.paused : false);

  if (!meta && !mediaEl) return;

  fetch("http://localhost:3030/api/media", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: meta?.title || document.title || "",
      artist: meta?.artist || "",
      tab_id: 0,
      is_playing: isPlaying
    })
  }).catch(() => {});
}

async function applyServerCommands() {
  try {
    const res = await fetch("http://localhost:3030/api/status");
    const status = await res.json();

    const mediaElements = document.querySelectorAll<HTMLMediaElement>('audio, video');
    mediaElements.forEach(el => { el.volume = status.volume; });

    if (lastServerIsPlaying !== null && status.is_playing !== lastServerIsPlaying) {
      // Lock out sendMediaInfo for 3 seconds so it doesn't fight this command
      commandLockUntil = Date.now() + 3000;

      mediaElements.forEach(el => {
        if (status.is_playing && el.paused) el.play().catch(() => {});
        else if (!status.is_playing && !el.paused) el.pause();
      });
    }

    lastServerIsPlaying = status.is_playing;
  } catch (_) {}
}

sendMediaInfo();
setInterval(sendMediaInfo, 2000);
setInterval(applyServerCommands, 500); // poll more frequently for faster response