import { NavLink } from 'react-router-dom'

function Tab({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          'flex flex-col items-center gap-1 rounded-2xl px-4 py-3 transition active:scale-[0.98]',
          'focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200',
          isActive
            ? 'bg-amber-100 text-amber-950 shadow-sm ring-1 ring-amber-200/50'
            : 'text-zinc-500 hover:bg-zinc-100',
        ].join(' ')
      }
    >
      <span className="text-xl" aria-hidden="true">
        {icon}
      </span>
      <span className="text-xs font-semibold">{label}</span>
    </NavLink>
  )
}

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-white/60 bg-white/85 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-2 px-3 py-2">
        <Tab to="/games" icon="🎮" label="Juegos" />
        <Tab to="/learn/red" icon="📚" label="Aprender" />
        <Tab to="/parents" icon="🧑‍🧑‍🧒" label="Padres" />
      </div>
    </nav>
  )
}

