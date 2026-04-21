import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ColorCard from '../components/ColorCard'
import Mascot from '../components/Mascot'
import { playColorPronunciation, playUiSound } from '../utils/audio'

const CHOICES = [
  { id: 'blue', label: 'BLUE', bg: 'bg-sky-700', text: 'text-sky-100' },
  { id: 'red', label: 'RED', bg: 'bg-rose-700', text: 'text-rose-100' },
  { id: 'green', label: 'GREEN', bg: 'bg-emerald-700', text: 'text-emerald-100' },
  { id: 'yellow', label: 'YELLOW', bg: 'bg-amber-700', text: 'text-amber-100' },
]

const TARGET = CHOICES[1]

export default function Game({ onWin, onCompleteColor }) {
  const navigate = useNavigate()

  const [status, setStatus] = useState('idle') // idle | success | wrong
  const [animKey, setAnimKey] = useState(0)
  const [pickedId, setPickedId] = useState(null)
  const [showCorrectHint, setShowCorrectHint] = useState(false)
  const [showStars, setShowStars] = useState(false)
  const [mascotState, setMascotState] = useState('thinking')

  const instruction = useMemo(() => {
    return status === 'success' ? 'Great job!' : status === 'wrong' ? 'Try again' : 'Tap'
  }, [status])

  function onPick(choice) {
    setAnimKey((k) => k + 1)
    setPickedId(choice.id)

    if (choice.id === TARGET.id) {
      setStatus('success')
      setShowCorrectHint(false)
      setShowStars(true)
      setMascotState('happy')
      void playUiSound('success')
      void playColorPronunciation(choice.id)
      onWin?.(3)
      onCompleteColor?.(choice.id)
      window.setTimeout(() => {
        navigate('/reward', { replace: true })
      }, 650)
      return
    }

    setStatus('wrong')
    setMascotState('thinking')
    setShowCorrectHint(true)
    void playUiSound('error')
    window.setTimeout(() => setShowCorrectHint(false), 800)
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
      <div className="flex flex-col items-center gap-4">
        <Mascot state={mascotState} size={90} className="mb-1" />
        <div className="flex items-center justify-center gap-3">
          <span className="text-5xl font-black tracking-tight text-zinc-900 md:text-6xl">
            {instruction}
          </span>
          <span className="inline-flex items-center rounded-full bg-rose-700 px-6 py-2 text-4xl font-black tracking-tight text-white shadow-[0_18px_50px_rgba(225,29,72,0.25)] md:text-5xl">
            {TARGET.label}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className={[
                'size-10 rounded-full shadow-sm ring-1 ring-white/70',
                i < 2 ? 'bg-emerald-600' : 'bg-emerald-200',
              ].join(' ')}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <div className="grid w-full grid-cols-2 gap-5 md:gap-8">
        {CHOICES.map((c) => (
          <div key={c.id} className="relative">
            <ColorCard
              label={c.label}
              bgClass={[
                c.bg,
                showCorrectHint && c.id === TARGET.id ? 'ring-4 ring-amber-200 shadow-[0_0_0_10px_rgba(251,191,36,0.18)]' : '',
              ].join(' ')}
              textClass={c.text}
              onClick={() => onPick(c)}
              animateClass={[
                status === 'success' && c.id === TARGET.id ? 'animate-pop' : '',
                status === 'wrong' && pickedId === c.id ? 'animate-shake' : '',
              ].join(' ')}
            />

            {showStars && c.id === TARGET.id ? (
              <div
                className="pointer-events-none absolute inset-0"
                key={animKey}
                onAnimationEnd={() => setShowStars(false)}
              >
                <span className="absolute left-6 top-6 text-3xl animate-star-float" aria-hidden="true">
                  ⭐
                </span>
                <span
                  className="absolute right-8 top-8 text-2xl animate-star-float"
                  style={{ animationDelay: '90ms' }}
                  aria-hidden="true"
                >
                  ⭐
                </span>
                <span
                  className="absolute left-1/2 top-10 -translate-x-1/2 text-4xl animate-star-float"
                  style={{ animationDelay: '140ms' }}
                  aria-hidden="true"
                >
                  ✨
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

