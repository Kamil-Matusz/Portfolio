import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  LangContext,
  content,
  currentRouteId,
  defaultLang,
  hrefFor,
  identity,
  langs,
  pageIds,
  routeIds,
} from './content'
import type { Lang, PageId } from './content'
import { Contact, Education, Experience, Home, NotFound, Projects, Stack } from './pages'
import './App.css'

const views: Readonly<Record<PageId, ReactElement>> = {
  experience: <Experience />,
  education: <Education />,
  projects: <Projects />,
  stack: <Stack />,
  contact: <Contact />,
}

function useClock(locale: string) {
  const [now, setNow] = useState('')

  useEffect(() => {
    const format = new Intl.DateTimeFormat(locale, {
      timeZone: identity.timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    const tick = () => setNow(format.format(new Date()))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [locale])

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

function alternate(hreflang: string, href: string) {
  const selector = `link[rel="alternate"][hreflang="${hreflang}"]`
  let link = document.head.querySelector<HTMLLinkElement>(selector)
  if (!link) {
    link = document.createElement('link')
    link.rel = 'alternate'
    link.hreflang = hreflang
    document.head.appendChild(link)
  }
  link.href = href
}

function useDocumentHead(lang: Lang, pathname: string) {
  useEffect(() => {
    const { pages, ui } = content[lang]
    const id = currentRouteId(pathname, lang)

    document.documentElement.lang = lang
    document.title = id === 'home' ? ui.siteTitle : `${pages[id].title} / ${ui.siteTitle}`

    const { origin } = window.location
    for (const code of langs) alternate(code, origin + hrefFor(code, id))
    alternate('x-default', origin + hrefFor(defaultLang, id))
  }, [lang, pathname])
}

function Rail({ lang, progress }: { lang: Lang; progress: number }) {
  const { pathname } = useLocation()
  const { nav, ui, locale } = content[lang]
  const now = useClock(locale)
  const here = currentRouteId(pathname, lang)

  return (
    <header className="rail">
      <NavLink className="rail__mark" to={hrefFor(lang, 'home')}>
        {identity.firstName} {identity.lastName}
      </NavLink>

      <div className="rail__block rail__block--wide">
        <span className="rail__key">{ui.status}</span>
        <span className="rail__val">
          {identity.available && <i className="rail__dot" aria-hidden="true" />}
          {identity.available ? ui.available : ui.busy}
        </span>
      </div>

      <div className="rail__block rail__block--wide">
        <span className="rail__key">{identity.location}</span>
        <span className="rail__val">{now}</span>
      </div>

      <nav className="rail__nav" aria-label={ui.nav}>
        {routeIds.map((id) => (
          <NavLink key={id} to={hrefFor(lang, id)} className="rail__link" end>
            {nav[id].label}
          </NavLink>
        ))}
      </nav>

      <nav className="rail__lang" aria-label={ui.language}>
        {langs.map((code) => (
          <Link
            key={code}
            to={hrefFor(code, here)}
            className="rail__lang-link"
            aria-current={code === lang ? 'true' : undefined}
            hrefLang={code}
          >
            {code.toUpperCase()}
          </Link>
        ))}
      </nav>

      <div className="rail__progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  )
}

function Site({ lang }: { lang: Lang }) {
  const { pathname } = useLocation()
  const { nav, profile, ui } = content[lang]
  const progress = useScrollProgress()

  useScrollReset(pathname)
  useReveal(pathname)
  useDocumentHead(lang, pathname)

  return (
    <LangContext.Provider value={lang}>
      <a className="skip" href="#main">
        {ui.skip}
      </a>

      <Rail lang={lang} progress={progress} />

      <main className="page" id="main">
        <Routes>
          <Route index element={<Home />} />
          {pageIds.map((id) => (
            <Route key={id} path={nav[id].path} element={views[id]} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="colophon mono">
          <span>
            {identity.firstName} {identity.lastName} / {profile.role}
          </span>
          <span>Archivo · Newsreader · JetBrains Mono</span>
        </footer>
      </main>
    </LangContext.Provider>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/en/*" element={<Site lang="en" />} />
      <Route path="/*" element={<Site lang="pl" />} />
    </Routes>
  )
}

export default App
