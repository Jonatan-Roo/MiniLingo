import { NavLink } from 'react-router-dom'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          'rounded-full px-3 py-2 text-sm font-semibold transition active:scale-[0.98]',
          'focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200',
          isActive
            ? 'bg-amber-100 text-amber-900 shadow-sm ring-1 ring-amber-200/50'
            : 'text-zinc-600 hover:bg-zinc-100',
        ].join(' ')
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar({ stars = 0 }) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="grid size-10 place-items-center rounded-2xl bg-amber-100 shadow-sm">
            <span className="text-lg font-black text-amber-900">M</span>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-amber-900">MiniLingo</span>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
          <NavItem to="/">Inicio</NavItem>
          <NavItem to="/learn/red">Aprender</NavItem>
          <NavItem to="/games">Juegos</NavItem>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-2 shadow-sm">
            <span aria-hidden="true">⭐</span>
            <span className="text-sm font-extrabold text-emerald-900">{stars}</span>
          </div>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full bg-white shadow-sm ring-1 ring-zinc-200 transition hover:bg-zinc-50 active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
            aria-label="Profile"
          >
            <span aria-hidden="true">👤</span>
          </button>
        </div>
      </div>
    </header>
  )
}

