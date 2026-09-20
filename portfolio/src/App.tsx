import { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { profile, routes } from './content'
import { Contact, Experience, Home, NotFound, Projects, Stack } from './pages'
import './App.css'

function useClock(timeZone: string) {
  const [now, setNow] = useState('')

  useEffect(() => {
    const format = new Intl.DateTimeFormat('pl-PL', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    const tick = () => setNow(format.format(new Date()))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [timeZone])

  return now
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const read = () => {
      frame = 0
      const scrollable = document.body.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0)
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(read)
    }

    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return progress
}

function useReveal(key: string) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])
}

function useScrollReset(key: string) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [key])
}

function Rail({ progress }: { progress: number }) {
  const now = useClock(profile.timezone)

  return (
    <header className="rail">
      <NavLink className="rail__mark" to="/">
        {profile.firstName} {profile.lastName}
      </NavLink>

      <div className="rail__block rail__block--wide">
        <span className="rail__key">Status</span>
        <span className="rail__val">
          {profile.available && <i className="rail__dot" aria-hidden="true" />}
          {profile.available ? 'Dostępny' : 'Zajęty'}
        </span>
      </div>

      <div className="rail__block rail__block--wide">
        <span className="rail__key">{profile.location}</span>
        <span className="rail__val">{now}</span>
      </div>

      <nav className="rail__nav" aria-label="Nawigacja">
        {routes.map((route) => (
          <NavLink key={route.path} to={route.path} className="rail__link" end>
            {route.label}
          </NavLink>
        ))}
      </nav>

      <div className="rail__progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  )
}

function App() {
  const { pathname } = useLocation()
  const progress = useScrollProgress()
  useScrollReset(pathname)
  useReveal(pathname)

  return (
    <>
      <a className="skip" href="#main">
        Przejdź do treści
      </a>

      <Rail progress={progress} />

      <main className="page" id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doswiadczenie" element={<Experience />} />
          <Route path="/projekty" element={<Projects />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="colophon mono">
          <span>
            {profile.firstName} {profile.lastName} / {profile.role}
          </span>
          <span>Archivo · Newsreader · JetBrains Mono</span>
        </footer>
      </main>
    </>
  )
}

export default App
