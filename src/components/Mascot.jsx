const FACES = {
  idle: { eyes: '• •', mouth: '◡' },
  thinking: { eyes: '• •', mouth: '…' },
  happy: { eyes: '^ ^', mouth: '⏜' },
}

export default function Mascot({ state = 'idle', size = 96, className = '' }) {
  const face = FACES[state] ?? FACES.idle

  return (
    <div
      className={[
        'relative grid place-items-center rounded-[26px] bg-white/70 shadow-[0_18px_50px_rgba(0,0,0,0.10)] ring-1 ring-white/70',
        'animate-float',
        className,
      ].join(' ')}
      style={{ width: size, height: size }}
      aria-label="Buzz the bee"
    >
      <div className="text-5xl leading-none" aria-hidden="true">
        🐝
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/80 px-3 py-1 text-xs font-extrabold text-zinc-700 shadow-sm">
        <span className="mr-2" aria-hidden="true">
          {face.eyes}
        </span>
        <span aria-hidden="true">{face.mouth}</span>
      </div>
    </div>
  )
}

