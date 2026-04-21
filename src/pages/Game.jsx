import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Mascot from '../components/Mascot'
import { playColorPronunciation, playUiSound } from '../utils/audio'

const CHOICES = [
  { id: 'blue', label: 'BLUE', hex: '#0EA5E9' },
  { id: 'red', label: 'RED', hex: '#E11D48' },
  { id: 'green', label: 'GREEN', hex: '#22C55E' },
  { id: 'yellow', label: 'YELLOW', hex: '#F59E0B' },
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
    return status === 'success' ? 'Great!' : status === 'wrong' ? 'Try again' : 'Tap'
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
      }, 500)
      return
    }

    setStatus('wrong')
    setMascotState('thinking')
    setShowCorrectHint(true)
    void playUiSound('error')
    window.setTimeout(() => setShowCorrectHint(false), 800)
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-8 px-3 text-center sm:px-4">
      <div className="flex flex-col items-center gap-4">
        <Mascot state={mascotState} size={90} className="mb-1" />

        <h1 className="flex flex-wrap items-center justify-center gap-4 text-4xl font-black tracking-tight text-zinc-900 md:text-5xl">
          <span>Tap</span>
          <span className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-3 shadow-sm ring-1 ring-white/70">
            <span
              className="grid size-10 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.18)] ring-1 ring-white/70 md:size-12"
              style={{ backgroundColor: TARGET.hex }}
              aria-hidden="true"
            />
            <span className="text-2xl font-black tracking-tight md:text-3xl">{TARGET.label}</span>
          </span>
        </h1>
        <div className="text-sm font-extrabold text-zinc-600" role="status" aria-live="polite">
          {instruction}
        </div>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-2 place-items-center gap-6 md:grid-cols-4">
        {CHOICES.map((c) => {
          const isCorrect = c.id === TARGET.id
          const showGlow = showCorrectHint && isCorrect
          const shouldPop = status === 'success' && isCorrect
          const shouldShake = status === 'wrong' && pickedId === c.id

          return (
            <div key={c.id} className="relative">
              <button
                type="button"
                onClick={() => onPick(c)}
                className={[
                  'relative rounded-full',
                  'w-[120px] h-[120px] md:w-[160px] md:h-[160px]',
                  'shadow-[0_24px_60px_rgba(0,0,0,0.22)] ring-1 ring-white/70',
                  'transition-transform duration-150',
                  'hover:scale-[1.04] active:scale-[0.94] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200',
                  showGlow ? 'ring-4 ring-amber-200 shadow-[0_0_0_10px_rgba(251,191,36,0.18)]' : '',
                  shouldPop ? 'animate-success-bounce ring-4 ring-white/80 shadow-[0_0_0_10px_rgba(255,255,255,0.16),0_30px_80px_rgba(34,197,94,0.25)]' : '',
                  shouldShake ? 'animate-shake' : '',
                ].join(' ')}
                style={{ backgroundColor: c.hex }}
                aria-label={c.label}
              />

              {showStars && isCorrect ? (
                <div
                  className="pointer-events-none absolute inset-0"
                  key={animKey}
                  onAnimationEnd={() => setShowStars(false)}
                >
                  {/* burst from center */}
                  <span
                    className="absolute left-1/2 top-1/2 text-3xl animate-burst"
                    style={{ '--dx': '-90px', '--dy': '-70px' }}
                    aria-hidden="true"
                  >
                    ⭐
                  </span>
                  <span
                    className="absolute left-1/2 top-1/2 text-2xl animate-burst"
                    style={{ '--dx': '80px', '--dy': '-60px', animationDelay: '40ms' }}
                    aria-hidden="true"
                  >
                    ✨
                  </span>
                  <span
                    className="absolute left-1/2 top-1/2 text-3xl animate-burst"
                    style={{ '--dx': '-110px', '--dy': '20px', animationDelay: '70ms' }}
                    aria-hidden="true"
                  >
                    ⭐
                  </span>
                  <span
                    className="absolute left-1/2 top-1/2 text-2xl animate-burst"
                    style={{ '--dx': '115px', '--dy': '10px', animationDelay: '90ms' }}
                    aria-hidden="true"
                  >
                    ⭐
                  </span>
                  <span
                    className="absolute left-1/2 top-1/2 text-4xl animate-burst"
                    style={{ '--dx': '0px', '--dy': '-110px', animationDelay: '110ms' }}
                    aria-hidden="true"
                  >
                    ✨
                  </span>
                  <span
                    className="absolute left-1/2 top-1/2 text-3xl animate-burst"
                    style={{ '--dx': '0px', '--dy': '120px', animationDelay: '140ms' }}
                    aria-hidden="true"
                  >
                    ⭐
                  </span>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

