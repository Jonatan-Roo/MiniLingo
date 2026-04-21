import { Link } from 'react-router-dom'
import { COLORS, getColorById, getNextColorId } from '../data/colors'
import Button from '../components/Button'

function Pill({ title, icon, className, to }) {
  return (
    <Link
      to={to}
      className={[
        'group relative block w-full rounded-[28px] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition',
        'hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70',
        className,
      ].join(' ')}
    >
      <div className="absolute inset-0 rounded-[28px] bg-white/15 opacity-0 blur-2xl transition group-hover:opacity-100" />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <div className="grid size-14 place-items-center rounded-2xl bg-white/80 shadow-sm">
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="text-lg font-extrabold text-zinc-900">{title}</div>
      </div>
    </Link>
  )
}

function ProgressDots({ done, total }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => {
        const active = i < done
        return (
          <div
            key={i}
            className={[
              'size-10 rounded-full shadow-sm ring-1 ring-white/70',
              active ? 'bg-emerald-600' : 'bg-emerald-200',
            ].join(' ')}
            aria-hidden="true"
          />
        )
      })}
      <button
        type="button"
        className="grid size-12 place-items-center rounded-full bg-amber-200 shadow-sm ring-1 ring-white/70 transition hover:bg-amber-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
        aria-label="Play"
      >
        <span className="text-xl">▶</span>
      </button>
    </div>
  )
}

function PromoCard({ badge, title, subtitle, action, left }) {
  return (
    <div className="overflow-hidden rounded-[28px] bg-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-white/70">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
        <div className="h-44 md:h-full">{left}</div>
        <div className="flex flex-col justify-center gap-2 p-6">
          <div className="inline-flex w-fit rounded-full bg-zinc-100 px-3 py-1 text-xs font-extrabold tracking-wide text-zinc-600">
            {badge}
          </div>
          <div className="text-xl font-extrabold text-zinc-900">{title}</div>
          <p className="text-sm font-semibold text-zinc-600">{subtitle}</p>
          <button
            type="button"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-amber-200 px-5 py-3 text-sm font-extrabold text-amber-950 shadow-sm transition hover:bg-amber-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
          >
            {action}
          </button>
        </div>
      </div>
    </div>
  )
}

function StarsSummary({ stars }) {
  const goal = 30
  const pct = Math.max(0, Math.min(100, Math.round((stars / goal) * 100)))

  return (
    <div className="rounded-[28px] bg-gradient-to-br from-amber-200 to-yellow-100 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.12)] ring-1 ring-white/70">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-extrabold text-amber-900/80">Total Stars</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-4xl font-black tracking-tight text-amber-950">{stars}</span>
            <span className="text-sm font-extrabold text-amber-900/70">/ {goal}</span>
          </div>
        </div>
        <div className="grid size-14 place-items-center rounded-2xl bg-white/80 shadow-sm">
          <span className="text-3xl" aria-hidden="true">
            ⭐
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="h-3 w-full overflow-hidden rounded-full bg-white/60 ring-1 ring-white/70">
          <div
            className="h-full rounded-full bg-amber-500 shadow-[0_10px_20px_rgba(245,158,11,0.35)] transition-[width] duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-2 text-xs font-extrabold text-amber-900/70">{pct}%</div>
      </div>
    </div>
  )
}

function LastLearned({ lastCompletedColor }) {
  if (!lastCompletedColor) return null
  const c = getColorById(lastCompletedColor)

  return (
    <div className="rounded-[28px] bg-white/80 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-white/70">
      <div className="flex items-center gap-4">
        <div
          className="relative grid size-14 place-items-center rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-white/70"
          style={{ background: c.hex }}
          aria-hidden="true"
        >
          <span className="text-2xl">🎨</span>
        </div>
        <div className="text-left">
          <div className="text-xs font-extrabold uppercase tracking-wide text-zinc-500">
            Last learned
          </div>
          <div className="mt-0.5 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-base font-black text-zinc-900">
            {c.label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home({ stars = 0, lastCompletedColor = null }) {
  const lastColorId = COLORS[COLORS.length - 1]?.id

  const continueTo = lastCompletedColor
    ? lastCompletedColor === lastColorId
      ? '/games'
      : `/learn/${getNextColorId(lastCompletedColor)}`
    : '/learn/red'

  return (
    <div className="space-y-8">
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <div className="grid size-36 place-items-center rounded-[28px] bg-white/70 shadow-[0_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-white/70">
          <span className="text-6xl" aria-hidden="true">
            🐝
          </span>
        </div>
        <h1 className="text-5xl font-black tracking-tight text-amber-950 md:text-6xl">MiniLingo</h1>
        <p className="max-w-xl text-base font-semibold text-zinc-600 md:text-lg">
          Let’s explore the magical world of English together with our friend Buzz!
        </p>
      </section>

      <section className="flex justify-center">
        <Link to={continueTo} className="w-full max-w-md">
          <Button className="w-full bg-emerald-200 px-10 py-6 text-xl text-emerald-950 shadow-[0_22px_55px_rgba(16,185,129,0.28)] hover:bg-emerald-300 focus-visible:ring-emerald-200">
            <span className="text-2xl" aria-hidden="true">
              🚀
            </span>
            Continue Learning
          </Button>
        </Link>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <StarsSummary stars={stars} />
        <LastLearned lastCompletedColor={lastCompletedColor} />
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Pill title="Colors" icon="🎨" className="bg-amber-300" to="/learn/red" />
        <Pill title="Animals" icon="🐾" className="bg-emerald-300" to="/" />
        <Pill title="Numbers" icon="🔢" className="bg-sky-300" to="/" />
        <Pill title="Fruits" icon="🍎" className="bg-rose-300" to="/" />
      </section>

      <section className="overflow-hidden rounded-[28px] bg-white/80 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-white/70">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-extrabold text-amber-950">Daily Progress</div>
            <div className="mt-1 text-sm font-semibold text-zinc-600">
              You are doing great! 3 more to reach your goal.
            </div>
          </div>
          <ProgressDots done={2} total={4} />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <PromoCard
          badge="NEW STORY"
          title="The Brave Squirrel"
          subtitle="Join Sam the Squirrel on his big adventure across the park!"
          action="Read Now"
          left={<div className="h-full w-full bg-gradient-to-br from-emerald-200 to-sky-200" />}
        />
        <PromoCard
          badge="MATH FUN"
          title="Counting Stars"
          subtitle="How many stars can you find in the sky tonight? Let’s count!"
          action="Start Game"
          left={<div className="h-full w-full bg-gradient-to-br from-sky-200 to-amber-200" />}
        />
      </section>
    </div>
  )
}

