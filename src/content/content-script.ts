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

function sendMediaInfo() {
  const meta = navigator.mediaSession?.metadata;
  const state = navigator.mediaSession?.playbackState;

  // Also check for any playing audio/video element as fallback
  const mediaEl = document.querySelector<HTMLMediaElement>('audio, video');
  const isPlaying = state === "playing" || (mediaEl ? !mediaEl.paused : false);

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

sendMediaInfo();
setInterval(sendMediaInfo, 2000);

let lastServerIsPlaying: boolean | null = null;

async function applyServerCommands() {
  try {
    const res = await fetch("http://localhost:3030/api/status");
    const status = await res.json();

    const mediaElements = document.querySelectorAll<HTMLMediaElement>('audio, video');

    // Always sync volume — this is safe to apply every tick
    mediaElements.forEach(el => { el.volume = status.volume; });

    // Only apply play/pause if the server state CHANGED since last poll
    // (meaning someone clicked the Tauri button — not a manual browser action)
    if (lastServerIsPlaying !== null && status.is_playing !== lastServerIsPlaying) {
      mediaElements.forEach(el => {
        if (status.is_playing && el.paused) el.play().catch(() => {});
        else if (!status.is_playing && !el.paused) el.pause();
      });
    }

    lastServerIsPlaying = status.is_playing;
  } catch (_) {}
}

setInterval(applyServerCommands, 1000);