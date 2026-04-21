import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Mascot from '../components/Mascot'

export default function Reward({ stars = 0 }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-[32px] bg-white/75 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-white/70 md:p-12">
        <div className="pointer-events-none absolute -left-10 top-14 size-40 rounded-full bg-sky-200/60 blur-2xl" />
        <div className="pointer-events-none absolute -right-10 bottom-10 size-40 rounded-full bg-amber-200/70 blur-2xl" />

        <div className="animate-fade-up">
          <div className="mx-auto mb-3 flex justify-center">
            <Mascot state="happy" size={92} />
          </div>
          <div className="mx-auto flex items-center justify-center gap-6 md:gap-10" aria-hidden="true">
            <div className="grid size-16 place-items-center rounded-full bg-amber-200 shadow-[0_20px_50px_rgba(245,158,11,0.35)]">
              <span className="text-3xl">★</span>
            </div>
            <div className="grid size-28 place-items-center rounded-[26px] bg-amber-200 shadow-[0_24px_80px_rgba(245,158,11,0.42)] animate-float">
              <span className="text-6xl">★</span>
            </div>
            <div className="grid size-16 place-items-center rounded-full bg-amber-200 shadow-[0_20px_50px_rgba(245,158,11,0.35)]">
              <span className="text-3xl">★</span>
            </div>
          </div>

          <div className="mt-8 text-5xl font-black tracking-tight text-amber-950 md:text-6xl">
            Great job!
          </div>
          <p className="mt-3 text-base font-semibold text-sky-900/80 md:text-lg">
            ¡Juntaste <span className="font-black text-amber-900">3</span> estrellas!
          </p>

          <div className="mt-10 flex flex-col items-center gap-7">
            <Link to="/games" className="w-full max-w-xs sm:w-auto">
              <Button className="w-full bg-amber-200 text-amber-950 hover:bg-amber-300 focus-visible:ring-amber-200">
                <span className="grid size-10 place-items-center rounded-full bg-white shadow-sm" aria-hidden="true">
                  ↻
                </span>
                Jugar de nuevo
              </Button>
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-sm">
              <span aria-hidden="true">⭐</span>
              <span>Total stars:</span>
              <span className="text-base">{stars}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

