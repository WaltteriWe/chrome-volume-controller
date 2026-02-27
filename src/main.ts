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
      <button id="btn-prev" title="Previous">⏮</button>
      <button id="btn-play-pause" title="Play/Pause">⏯</button>
      <button id="btn-next" title="Next">⏭</button>
      <button id="btn-mute" title="Mute">🔇</button>
    </div>
  </div>
`

const slider = document.getElementById('volume-slider') as HTMLInputElement
const display = document.getElementById('volume-display')!

slider.addEventListener('input', () => {
  const value = Number(slider.value)
  display.textContent = `${value}%`

  
  })
})

document.getElementById('btn-play-pause')!.addEventListener('click', () => {
  sendToTab('PLAY_PAUSE')
})
document.getElementById('btn-prev')!.addEventListener('click', () => {
  sendToTab('PREV')
})
document.getElementById('btn-next')!.addEventListener('click', () => {
  sendToTab('NEXT')
})
document.getElementById('btn-mute')!.addEventListener('click', () => {
  sendToTab('MUTE')
})

function sendToTab(command: string) {
    const browserApi = (typeof browser !== 'undefined') ? browser : chrome

 
    }
  })
}