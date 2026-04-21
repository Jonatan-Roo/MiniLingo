import { playUiSound } from '../utils/audio'

export default function Button({
  children,
  className = '',
  onClick,
  type = 'button',
}) {
  return (
    <button
      type={type}
      onClick={(e) => {
        void playUiSound('click')
        onClick?.(e)
      }}
      className={[
        'inline-flex items-center justify-center gap-3 rounded-full px-7 py-4',
        'text-base font-extrabold shadow-[0_14px_30px_rgba(0,0,0,0.12)] transition',
        'hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4',
        'active:scale-[0.98]',
        className,
      ].join(' ')}
    >
      {children}
    </button>
  )
}

