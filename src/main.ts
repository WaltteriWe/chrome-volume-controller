import Browser from 'webextension-polyfill'
import './style.css'

const app = document.getElementById('app')!

app.innerHTML = `
  <div class="popup-container">
    <h2>Tab Media Controller</h2>
    <div class="volume-section">
      <label for="volume-slider">Volume</label>
      <input type="range" id="volume-slider" min="0" max="100" value="100" step="1" />
      <span id="volume-display">100%</span>
    </div>
    <div class="media-controls">
      <button id="btn-prev" title="Previous">-10s</button>
      <button id="btn-play-pause" title="Play/Pause">⏯</button>
      <button id="btn-next" title="Next">+10s</button>
      <button id="btn-mute" title="Mute">🔇</button>
    </div>
  </div>
`

const slider = document.getElementById('volume-slider') as HTMLInputElement
const display = document.getElementById('volume-display')!

slider.addEventListener('input', async () => {
  const value = Number(slider.value)
  display.textContent = `${value}%`

  const newVolume = value / 100
  sendToTab({ type: 'SET_VOLUME', volume: newVolume })
  await fetch("http://localhost:3030/api/volume", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ volume: newVolume, tab_id: 0 })
  }).catch(() => {});
})

document.getElementById('btn-play-pause')!.addEventListener('click', () => {
  sendToTab({ type: 'PLAY_PAUSE' })
})
document.getElementById('btn-prev')!.addEventListener('click', () => {
  sendToTab({ type: 'PREV' })
})
document.getElementById('btn-next')!.addEventListener('click', () => {
  sendToTab({ type: 'NEXT' })
})
document.getElementById('btn-mute')!.addEventListener('click', () => {
  sendToTab({ type: 'MUTE' })
})

function sendToTab(message: object) {
    const browserApi = (typeof Browser !== 'undefined' ? Browser : chrome)
    browserApi.tabs.query({ active: true, currentWindow: true}, (tabs) => {
        const tabId = tabs[0].id
        if (tabId !== undefined) {
            browserApi.tabs.sendMessage(tabId, message)
        }
    })
}