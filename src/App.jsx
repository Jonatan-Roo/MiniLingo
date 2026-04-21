import { Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Game from './pages/Game'
import Reward from './pages/Reward'

function Shell({ stars, children }) {
  return (
    <div className="min-h-svh bg-gradient-to-b from-amber-50 via-white to-sky-50">
      <Navbar stars={stars} />
      <main className="mx-auto max-w-5xl px-4 pb-24 pt-6 md:pb-10">{children}</main>
      <BottomNav />
    </div>
  )
}

export default function App() {
  const [stars, setStars] = useState(12)
  const [lastCompletedColor, setLastCompletedColor] = useState(null)

  useEffect(() => {
    try {
      const savedStars = window.localStorage.getItem('stars')
      if (savedStars != null) {
        const n = Number(savedStars)
        if (Number.isFinite(n)) setStars(n)
      }

      const savedProgress = window.localStorage.getItem('progress')
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress)
        if (parsed && typeof parsed.lastCompletedColor === 'string') {
          setLastCompletedColor(parsed.lastCompletedColor)
        }
      }
    } catch {
      // si localStorage está bloqueado o el JSON está corrupto, ignoramos
    }
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem('stars', String(stars))
    } catch {
      // ignore
    }
  }, [stars])

  useEffect(() => {
    try {
      window.localStorage.setItem(
        'progress',
        JSON.stringify({ lastCompletedColor: lastCompletedColor ?? null }),
      )
    } catch {
      // ignore
    }
  }, [lastCompletedColor])

  function addStars(amount = 1) {
    setStars((s) => s + amount)
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Shell stars={stars}>
            <Home stars={stars} lastCompletedColor={lastCompletedColor} />
          </Shell>
        }
      />
      <Route path="/learn" element={<Navigate to="/learn/red" replace />} />
      <Route
        path="/learn/:colorId"
        element={
          <Shell stars={stars}>
            <Learn onCompleteColor={(colorId) => setLastCompletedColor(colorId)} />
          </Shell>
        }
      />
      <Route
        path="/games"
        element={
          <Shell stars={stars}>
            <Game
              onWin={(amount) => addStars(amount)}
              onCompleteColor={(colorId) => setLastCompletedColor(colorId)}
            />
          </Shell>
        }
      />
      <Route
        path="/reward"
        element={
          <Shell stars={stars}>
            <Reward stars={stars} />
          </Shell>
        }
      />
      <Route
        path="/parents"
        element={
          <Shell stars={stars}>
            <div className="mx-auto max-w-xl rounded-[28px] bg-white/75 p-8 text-center shadow-[0_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-white/70">
              <div className="text-2xl font-extrabold text-zinc-900">Parents</div>
              <p className="mt-2 text-sm font-semibold text-zinc-600">Coming soon.</p>
            </div>
          </Shell>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

