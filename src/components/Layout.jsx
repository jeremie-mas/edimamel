import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowUp, ChevronRight, Menu, X } from 'lucide-react'
import { AGENCES, SIEGE, mailto } from '../data'

export const LINKS = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/a-propos', label: 'A Propos' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/sav', label: 'SAV' },
  { to: '/produits', label: 'Produits' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/contact', label: 'Contact' },
]

function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Edimamel Group — accueil">
      <span className="logo-mark">E</span>
      <span><div className="logo-name">Edimamel Group</div><div className="logo-sub">Au service de la qualité</div></span>
    </Link>
  )
}

/** Desktop nav with an underline that slides to the active / hovered link. */
function Nav() {
  const ref = useRef(null)
  const { pathname } = useLocation()
  const [ink, setInk] = useState({ left: 0, width: 0, opacity: 0 })
  const moveTo = (el) => el && setInk({ left: el.offsetLeft + 12, width: el.offsetWidth - 24, opacity: 1 })
  const reset = () => moveTo(ref.current?.querySelector('a.active'))
  useLayoutEffect(() => { reset() }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    window.addEventListener('resize', reset)
    document.fonts?.ready.then(reset)
    return () => window.removeEventListener('resize', reset)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <nav className="nav" ref={ref} onMouseLeave={reset} aria-label="Navigation principale">
      {LINKS.map((l) => (
        <NavLink key={l.to} to={l.to} end={l.end} onMouseEnter={(e) => moveTo(e.currentTarget)}>{l.label}</NavLink>
      ))}
      <span className="nav-ink" style={ink} />
    </nav>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="left">
            <span><b>Siège / Head office :</b> <a href={`tel:${SIEGE.tel}`}>{SIEGE.phone}</a></span>
            <span className="addr">{SIEGE.address} — Lomé — TOGO</span>
          </div>
          <a className="mail" href={`mailto:${SIEGE.email}`}>{SIEGE.email}</a>
        </div>
      </div>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Logo />
          <Nav />
          <a className="btn btn-brand btn-sm header-cta" href={mailto('Demande de devis')}>Demander un devis</a>
          <button className="burger" aria-label="Ouvrir le menu" onClick={() => setOpen(true)}><Menu /></button>
        </div>
      </header>

      <div className={`mnav ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="mnav-bg" onClick={() => setOpen(false)} />
        <div className="mnav-panel" role="dialog" aria-label="Menu">
          <div className="mnav-top"><Logo /><button aria-label="Fermer le menu" onClick={() => setOpen(false)}><X /></button></div>
          <nav>
            {LINKS.map((l, i) => (
              <NavLink key={l.to} to={l.to} end={l.end} style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}>
                {l.label}<ChevronRight />
              </NavLink>
            ))}
          </nav>
          <a className="btn btn-brand" href={mailto('Demande de devis')}>Demander un devis</a>
        </div>
      </div>
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-name">Edimamel Group</div>
            <p className="about">Distributeur d'équipements biomédicaux en Afrique de l'Ouest depuis 1997 : fourniture, installation, formation et maintenance.</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>{LINKS.slice(1).map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Nos agences</h4>
            <ul>{AGENCES.map((a) => <li key={a.pays}><Link to={`/contact#agence-${a.pays}`}>{a.pays}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Siège social</h4>
            <ul>
              <li>{SIEGE.address}<br />{SIEGE.bp}</li>
              <li><a href={`tel:${SIEGE.tel}`}>{SIEGE.phones}</a></li>
              <li><a href={`mailto:${SIEGE.email}`}>{SIEGE.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 1997–{new Date().getFullYear()} EDIMAMEL GROUP — Tous droits réservés.</span>
          <span>Au service de la qualité.</span>
        </div>
      </div>
    </footer>
  )
}

function ScrollFx() {
  const bar = useRef(null)
  const [showTop, setShowTop] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) { setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 120); return }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
      setShowTop(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="progress" aria-hidden="true"><i ref={bar} /></div>
      <button className={`to-top ${showTop ? 'show' : ''}`} aria-label="Retour en haut" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUp size={20} />
      </button>
    </>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollFx />
      <Header />
      <main key={pathname} className="page"><Outlet /></main>
      <Footer />
    </>
  )
}
