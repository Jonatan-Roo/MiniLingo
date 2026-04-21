const SOUND_URLS = {
  red: '/audio/colors/red.mp3',
  blue: '/audio/colors/blue.mp3',
  green: '/audio/colors/green.mp3',
  yellow: '/audio/colors/yellow.mp3',
  success: '/audio/ui/success.mp3',
  error: '/audio/ui/error.mp3',
  click: '/audio/ui/click.mp3',
}

class AudioPlayer {
  current = null
  cache = new Map()

  stop() {
    if (!this.current) return
    this.current.pause()
    this.current.currentTime = 0
    this.current = null
  }

  async playUrl(url) {
    if (typeof window === 'undefined') return
    this.stop()

    const audio = this.cache.get(url) ?? new Audio(url)
    audio.preload = 'auto'
    audio.currentTime = 0
    this.cache.set(url, audio)
    this.current = audio

    try {
      await audio.play()
    } catch {
      // puede fallar si el navegador bloquea autoplay
    }
  }
}

const player = new AudioPlayer()

export function stopSounds() {
  player.stop()
}

export async function playColorPronunciation(colorId) {
  const url = SOUND_URLS[colorId]
  if (!url) return
  return player.playUrl(url)
}

export async function playUiSound(name) {
  const url = SOUND_URLS[name]
  if (!url) return
  return player.playUrl(url)
}

