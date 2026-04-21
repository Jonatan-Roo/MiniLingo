import { playUiSound } from '../utils/audio'

export default function ColorCard({
  label,
  bgClass,
  textClass = 'text-white',
  onClick,
  disabled = false,
  animateClass = '',
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={(e) => {
        void playUiSound('click')
        onClick?.(e)
      }}
      className={[
        'relative h-32 rounded-[28px] shadow-[0_22px_55px_rgba(0,0,0,0.18)] ring-1 ring-white/70',
        'transition hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200',
        'active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70',
        'md:h-44',
        bgClass,
        animateClass,
      ].join(' ')}
    >
      <span className={['text-2xl font-black tracking-wide md:text-3xl', textClass].join(' ')}>
        {label}
      </span>
    </button>
  )
}

