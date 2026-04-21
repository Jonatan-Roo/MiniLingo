import { Link } from 'react-router-dom'
import Button from '../components/Button'

function FeatureCard({ icon, title, text, className }) {
  return (
    <div
      className={[
        'rounded-[28px] bg-white/80 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-white/70',
        className,
      ].join(' ')}
    >
      <div className="flex items-start gap-4">
        <div className="grid size-14 place-items-center rounded-2xl bg-amber-100 shadow-sm">
          <span className="text-2xl" aria-hidden="true">
            {icon}
          </span>
        </div>
        <div className="text-left">
          <div className="text-lg font-extrabold text-zinc-900">{title}</div>
          <p className="mt-1 text-sm font-semibold text-zinc-600">{text}</p>
        </div>
      </div>
    </div>
  )
}

function BenefitPill({ icon, title, text }) {
  return (
    <div className="rounded-[22px] bg-white/75 p-5 shadow-sm ring-1 ring-white/70">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-full bg-emerald-100">
          <span aria-hidden="true">{icon}</span>
        </div>
        <div className="text-left">
          <div className="text-sm font-extrabold text-zinc-900">{title}</div>
          <div className="text-xs font-semibold text-zinc-600">{text}</div>
        </div>
      </div>
    </div>
  )
}

function ScreenshotCard({ label, className }) {
  return (
    <div className="overflow-hidden rounded-[28px] bg-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-white/70">
      <div className={['aspect-[4/3] w-full', className].join(' ')} />
      <div className="p-4">
        <div className="text-sm font-extrabold text-zinc-900">{label}</div>
        <div className="mt-1 text-xs font-semibold text-zinc-600">MiniLingo screen preview</div>
      </div>
    </div>
  )
}

export default function Landing() {
  return (
    <div className="space-y-14 pb-6">
      {/* Hero */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-extrabold text-amber-900 shadow-sm">
            <span aria-hidden="true">🐝</span>
            MiniLingo para peques (4–6)
          </div>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-amber-950 md:text-6xl">
            Aprende inglés jugando
          </h1>
          <p className="mt-4 text-base font-semibold text-zinc-600 md:text-lg">
            Una app segura y divertida para que los peques aprendan inglés con juegos, audio y lecciones
            coloridas. Ideal para padres que quieren una experiencia confiable.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link to="/learn/red" className="w-full sm:w-auto">
              <Button className="w-full bg-emerald-200 px-10 py-6 text-xl text-emerald-950 shadow-[0_22px_55px_rgba(16,185,129,0.28)] hover:bg-emerald-300 focus-visible:ring-emerald-200">
                <span className="text-2xl" aria-hidden="true">
                  🚀
                </span>
                Comenzar gratis
              </Button>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-white/70 px-6 py-4 text-sm font-extrabold text-zinc-800 shadow-sm ring-1 ring-white/70 transition hover:bg-white"
            >
              Ver la app
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-extrabold text-zinc-800 shadow-sm ring-1 ring-white/70">
              ✅ Sin anuncios
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-extrabold text-zinc-800 shadow-sm ring-1 ring-white/70">
              🛡️ 100% seguro para niños
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -left-10 top-12 size-48 rounded-full bg-sky-200/70 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-8 size-48 rounded-full bg-amber-200/70 blur-3xl" />

          <div className="rounded-[32px] bg-white/75 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-white/70">
            <div className="aspect-[4/3] rounded-[26px] bg-gradient-to-br from-amber-200 via-white to-sky-200" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-amber-100 p-3 text-center text-xs font-extrabold text-amber-900">
                Colores
              </div>
              <div className="rounded-2xl bg-emerald-100 p-3 text-center text-xs font-extrabold text-emerald-900">
                Juegos
              </div>
              <div className="rounded-2xl bg-sky-100 p-3 text-center text-xs font-extrabold text-sky-900">
                Audio
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="text-sm font-extrabold uppercase tracking-wide text-zinc-500">Para quién es</div>
          <div className="mt-2 text-3xl font-black tracking-tight text-zinc-900 md:text-4xl">
            Pensado para aprender sin frustración
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-[28px] bg-white/80 p-7 shadow-[0_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-white/70">
            <div className="flex items-start gap-4">
              <div className="grid size-14 place-items-center rounded-2xl bg-amber-100 shadow-sm">
                <span className="text-2xl" aria-hidden="true">
                  🧒
                </span>
              </div>
              <div className="text-left">
                <div className="text-lg font-extrabold text-zinc-900">Niños de 4 a 6 años</div>
                <p className="mt-1 text-sm font-semibold text-zinc-600">
                  Botones grandes, colores brillantes y actividades cortas para mantener la atención.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-white/80 p-7 shadow-[0_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-white/70">
            <div className="flex items-start gap-4">
              <div className="grid size-14 place-items-center rounded-2xl bg-emerald-100 shadow-sm">
                <span className="text-2xl" aria-hidden="true">
                  👨‍👩‍👧
                </span>
              </div>
              <div className="text-left">
                <div className="text-lg font-extrabold text-zinc-900">Padres sin conocimientos de inglés</div>
                <p className="mt-1 text-sm font-semibold text-zinc-600">
                  Todo está guiado con audio y visuales, sin necesidad de ayudar a traducir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="text-sm font-extrabold uppercase tracking-wide text-zinc-500">Funciones</div>
          <div className="mt-2 text-3xl font-black tracking-tight text-zinc-900 md:text-4xl">
            Hecho para manos pequeñas y grandes sonrisas
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <FeatureCard
            icon="🎨"
            title="Aprender colores"
            text="Lecciones grandes y coloridas con palabras simples."
            className="bg-amber-50/60"
          />
          <FeatureCard
            icon="🎮"
            title="Juegos interactivos"
            text="Toca el color correcto y recibe feedback divertido al instante."
            className="bg-emerald-50/60"
          />
          <FeatureCard
            icon="🔊"
            title="Aprendizaje con audio"
            text="Pronunciación clara con audio sin solaparse."
            className="bg-sky-50/60"
          />
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="mx-auto max-w-5xl">
        <div className="rounded-[32px] bg-white/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-white/70 md:p-10">
          <div className="text-center">
            <div className="text-sm font-extrabold uppercase tracking-wide text-zinc-500">Cómo funciona</div>
            <div className="mt-2 text-3xl font-black tracking-tight text-zinc-900 md:text-4xl">
              Un camino simple para avanzar
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-[28px] bg-amber-50/60 p-6 text-center shadow-sm ring-1 ring-white/70">
              <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-amber-100">
                <span className="text-2xl" aria-hidden="true">
                  1️⃣
                </span>
              </div>
              <div className="mt-3 text-lg font-extrabold text-zinc-900">Aprende</div>
              <p className="mt-1 text-sm font-semibold text-zinc-600">Mira, escucha y repite.</p>
            </div>
            <div className="rounded-[28px] bg-emerald-50/60 p-6 text-center shadow-sm ring-1 ring-white/70">
              <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-emerald-100">
                <span className="text-2xl" aria-hidden="true">
                  2️⃣
                </span>
              </div>
              <div className="mt-3 text-lg font-extrabold text-zinc-900">Juega</div>
              <p className="mt-1 text-sm font-semibold text-zinc-600">Toca el color correcto.</p>
            </div>
            <div className="rounded-[28px] bg-sky-50/60 p-6 text-center shadow-sm ring-1 ring-white/70">
              <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-sky-100">
                <span className="text-2xl" aria-hidden="true">
                  3️⃣
                </span>
              </div>
              <div className="mt-3 text-lg font-extrabold text-zinc-900">Gana estrellas</div>
              <p className="mt-1 text-sm font-semibold text-zinc-600">Recompensas que motivan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-5xl">
        <div className="rounded-[32px] bg-white/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-white/70 md:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <div className="text-sm font-extrabold uppercase tracking-wide text-zinc-500">
                Beneficios para padres
              </div>
              <div className="mt-2 text-3xl font-black tracking-tight text-zinc-900 md:text-4xl">
                Seguro. Educativo. Divertido.
              </div>
              <p className="mt-3 text-sm font-semibold text-zinc-600 md:text-base">
                MiniLingo se enfoca en aprender con visuales amigables, botones grandes y un progreso simple.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <BenefitPill icon="🛡️" title="Seguro" text="Sin chat, sin distracciones, UI para peques." />
              <BenefitPill icon="📚" title="Educativo" text="Repetición, audio y aprendizaje visual." />
              <BenefitPill icon="✨" title="Divertido" text="Juegos + recompensas que motivan." />
              <BenefitPill icon="💾" title="Progreso" text="Guardado local con localStorage." />
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <div>
            <div className="text-sm font-extrabold uppercase tracking-wide text-zinc-500">Capturas</div>
            <div className="mt-2 text-3xl font-black tracking-tight text-zinc-900 md:text-4xl">
              Una experiencia brillante y amigable
            </div>
          </div>
          <div className="text-sm font-semibold text-zinc-600">
            Tip: luego podés reemplazar estos placeholders por capturas reales.
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ScreenshotCard label="Inicio" className="bg-gradient-to-br from-amber-200 via-white to-sky-200" />
          <ScreenshotCard label="Aprender Colores" className="bg-gradient-to-br from-rose-200 via-white to-amber-200" />
          <ScreenshotCard label="Juego: Toca el color" className="bg-gradient-to-br from-emerald-200 via-white to-sky-200" />
        </div>
      </section>

      {/* CTA again */}
      <section className="mx-auto max-w-5xl">
        <div className="rounded-[32px] bg-gradient-to-br from-emerald-200 via-white to-amber-200 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-white/70 md:p-10">
          <div className="text-3xl font-black tracking-tight text-zinc-900 md:text-4xl">
            ¿Listos para empezar?
          </div>
          <p className="mt-2 text-sm font-semibold text-zinc-700 md:text-base">
            Entren a la primera lección de colores y empiecen a ganar estrellas.
          </p>
          <div className="mt-6 flex justify-center">
            <Link to="/learn/red" className="w-full max-w-md">
              <Button className="w-full bg-emerald-300 px-10 py-6 text-xl text-emerald-950 shadow-[0_22px_55px_rgba(16,185,129,0.30)] hover:bg-emerald-400 focus-visible:ring-emerald-200">
                <span className="text-2xl" aria-hidden="true">
                  ⭐
                </span>
                Comenzar gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

