chrome.runtime.onMessage.addListener((message) => {
  const mediaElements = document.querySelectorAll<HTMLMediaElement>('video, audio')

  switch (message.type) {
    case 'SET_VOLUME':
      mediaElements.forEach(el => {
        el.volume = Math.min(1, message.volume) // clamp to native max
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