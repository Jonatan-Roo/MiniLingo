const SOUND_URLS = {
  red: '/audio/colors/red.mp3',
  blue: '/audio/colors/blue.mp3',
  green: '/audio/colors/green.mp3',
  yellow: '/audio/colors/yellow.mp3',
  success: '/audio/ui/success.mp3',
  error: '/audio/ui/error.mp3',
  click: '/audio/ui/click.mp3',
}

const FALLBACK_SPEECH = {
  red: 'red',
  blue: 'blue',
  green: 'green',
  yellow: 'yellow',
}

function speakEnglish(text) {
  try {
    if (typeof window === 'undefined') return
    const synth = window.speechSynthesis
    if (!synth) return
    synth.cancel()
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = 'en-US'
    utter.rate = 0.9
    synth.speak(utter)
  } catch (err) {
    console.error('[MiniLingo] SpeechSynthesis failed:', err)
  }
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

  async playUrl(url, { fallbackSpeakText } = {}) {
    if (typeof window === 'undefined') return
    this.stop()

    const audio = this.cache.get(url) ?? new Audio(url)
    audio.preload = 'auto'
    audio.currentTime = 0
    this.cache.set(url, audio)
    this.current = audio

    try {
      audio.onerror = () => {
        console.error('[MiniLingo] Audio load error:', url)
      }
      await audio.play()
    } catch (err) {
      console.error('[MiniLingo] Audio play failed:', url, err)
      if (fallbackSpeakText) speakEnglish(fallbackSpeakText)
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
  const fallbackSpeakText = FALLBACK_SPEECH[colorId]
  return player.playUrl(url, { fallbackSpeakText })
}

export async function playUiSound(name) {
  const url = SOUND_URLS[name]
  if (!url) return
  return player.playUrl(url)
}

export function logMissingAudioFiles() {
  const urls = [
    SOUND_URLS.red,
    SOUND_URLS.blue,
    SOUND_URLS.green,
    SOUND_URLS.yellow,
    SOUND_URLS.success,
    SOUND_URLS.error,
    SOUND_URLS.click,
  ]

  urls.forEach(async (url) => {
    try {
      const res = await fetch(url, { method: 'HEAD' })
      if (!res.ok) {
        console.error('[MiniLingo] Missing audio file:', url, res.status)
      }
    } catch (err) {
      console.error('[MiniLingo] Audio file check failed:', url, err)
    }
  })
}

