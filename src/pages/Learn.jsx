import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getColorById, getNextColorId } from '../data/colors'
import { playColorPronunciation } from '../utils/audio'
import Button from '../components/Button'
import Mascot from '../components/Mascot'

function splitSpelling(word) {
  return word
    .trim()
    .split('')
    .filter(Boolean)
    .join(' - ')
}

export default function Learn({ onCompleteColor }) {
  const navigate = useNavigate()
  const { colorId } = useParams()
  const [mascotState, setMascotState] = useState('idle')

  const color = useMemo(() => getColorById(colorId), [colorId])
  const spelling = useMemo(() => splitSpelling(color.label), [color.label])

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center">
      <div className="w-full rounded-[32px] bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-white/70 md:p-10">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <Mascot state={mascotState} size={92} className="mb-1" />
          <div
            className="relative grid size-[240px] place-items-center rounded-full shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:size-[320px] animate-slow-float"
            style={{ background: color.hex }}
            aria-label={`${color.label} color`}
          >
            {/* soft magical halo */}
            <div className="pointer-events-none absolute -inset-10 rounded-full blur-3xl opacity-70" style={{ background: color.hex }} />
            <div className="pointer-events-none absolute -inset-6 rounded-full bg-white/15 blur-2xl" />
            <div className="pointer-events-none absolute inset-0 rounded-full bg-white/10 blur-2xl" />

            {/* star particles */}
            <span className="pointer-events-none absolute -left-2 top-10 text-2xl animate-twinkle" aria-hidden="true">
              ✨
            </span>
            <span
              className="pointer-events-none absolute -right-1 top-14 text-3xl animate-twinkle"
              style={{ animationDelay: '220ms' }}
              aria-hidden="true"
            >
              ⭐
            </span>
            <span
              className="pointer-events-none absolute left-10 -top-2 text-2xl animate-twinkle"
              style={{ animationDelay: '480ms' }}
              aria-hidden="true"
            >
              ✨
            </span>
            <span
              className="pointer-events-none absolute right-12 -top-1 text-xl animate-twinkle"
              style={{ animationDelay: '700ms' }}
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              className="pointer-events-none absolute bottom-10 -left-1 text-xl animate-twinkle"
              style={{ animationDelay: '360ms' }}
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              className="pointer-events-none absolute bottom-12 -right-2 text-2xl animate-twinkle"
              style={{ animationDelay: '560ms' }}
              aria-hidden="true"
            >
              ✨
            </span>

            <div className="relative grid place-items-center">
              <div className="flex items-center justify-center gap-6 md:gap-8">
                <div className="size-6 rounded-full bg-white md:size-8" />
                <div className="size-6 rounded-full bg-white md:size-8" />
              </div>
              <div className="mt-5 h-3 w-20 rounded-full bg-white/95 md:mt-6 md:h-4 md:w-28" />
            </div>
          </div>

          <div className="text-center">
            <div className="text-6xl font-black tracking-tight text-rose-700 md:text-7xl">
              {color.label}
            </div>
            <div className="mt-2 text-sm font-extrabold tracking-[0.35em] text-zinc-600 md:text-base">
              {spelling}
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={() => {
                setMascotState('thinking')
                void playColorPronunciation(color.id)
                window.setTimeout(() => setMascotState('idle'), 700)
              }}
              className="w-full max-w-md bg-sky-100 px-8 py-5 text-lg text-sky-900 shadow-[0_18px_45px_rgba(2,132,199,0.25)] hover:bg-sky-200 focus-visible:ring-sky-200 sm:w-auto"
            >
              <span className="grid size-10 place-items-center rounded-full bg-white shadow-sm">
                <span className="text-xl leading-none">🔊</span>
              </span>
              <span className="tracking-wide">LISTEN</span>
            </Button>

            <Button
              onClick={() => {
                if (typeof onCompleteColor === 'function' && color?.id) {
                  onCompleteColor(color.id)
                }
                navigate(`/learn/${getNextColorId(colorId)}`)
              }}
              className="w-full max-w-xs bg-amber-200 text-amber-950 hover:bg-amber-300 focus-visible:ring-amber-200 sm:w-auto"
            >
              <span className="tracking-wide">NEXT</span>
              <span className="grid size-10 place-items-center rounded-full bg-white shadow-sm">
                <span className="text-xl leading-none">→</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

