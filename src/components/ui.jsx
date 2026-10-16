import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, ChevronRight, Mail, Phone, MapPin,
  FlaskConical, Stethoscope, Scissors, Baby, HeartPulse, ScanLine,
  PackageCheck, Wrench, GraduationCap, LifeBuoy, Activity, Cog, ClipboardCheck,
} from 'lucide-react'
import { AGENCES, ETAPES, STATS, TIMELINE, mailto } from '../data'

const ICONS = { FlaskConical, Stethoscope, Scissors, Baby, HeartPulse, ScanLine, PackageCheck, Wrench, GraduationCap, LifeBuoy, Activity, MapPin, Cog, ClipboardCheck }
export const Icon = ({ name, ...p }) => { const C = ICONS[name]; return C ? <C {...p} /> : null }

/** true once the element has entered the viewport. */
export function useInView(options = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect() } }, options)
    io.observe(el)
    return () => io.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return [ref, inView]
}

export function Reveal({ as: Tag = 'div', variant = '', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag ref={ref} className={`reveal ${variant} ${inView ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  )
}

export function SectionTitle({ children, kicker }) {
  return (
    <Reveal>
      <div className="title-bar" />
      {kicker && <div className="kicker" style={{ marginBottom: '0.5rem' }}>{kicker}</div>}
      <h2 className="h2">{children}</h2>
    </Reveal>
  )
}

export function PageHead({ crumb, kicker, title, text }) {
  return (
    <section className="page-head">
      <div className="hero-blob b1" />
      <div className="container">
        <Reveal className="crumbs"><Link to="/">Accueil</Link><ChevronRight /><span>{crumb}</span></Reveal>
        <Reveal delay={60}><span className="kicker">{kicker}</span></Reveal>
        <Reveal as="h1" delay={120}>{title}</Reveal>
        <Reveal as="p" delay={200}>{text}</Reveal>
      </div>
    </section>
  )
}

export function ProductCard({ p, delay = 0 }) {
  const href = mailto(`Demande d'information — ${p.title}`, `Bonjour,\n\nJe souhaite recevoir une offre pour : ${p.title}.\n\nCordialement,`)
  return (
    <Reveal className="card" delay={delay}>
      <div className="product-img">
        <img src={p.image} alt={p.title} loading="lazy" />
        <a className="product-quick" href={href}>Demander une offre <ArrowRight size={16} /></a>
      </div>
      <div className="product-body">
        <div className="product-cat">{p.cat}</div>
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        <div className="product-foot"><span>{p.tags}</span><a href={href}>Demander →</a></div>
      </div>
    </Reveal>
  )
}

export function CategoryCard({ c, delay = 0, cta = false }) {
  return (
    <Reveal delay={delay}>
      <Link to={cta ? '/contact' : `/produits?cat=${c.id}`} className="cat-card">
        <span className="cat-ic"><Icon name={c.icon} size={22} /></span>
        <div>
          <h3>{c.title}</h3>
          <p>{c.text}</p>
          {cta && <span className="go">Nous consulter <ArrowRight size={14} /></span>}
        </div>
        <ArrowUpRight className="arrow" size={18} />
      </Link>
    </Reveal>
  )
}

/** Animated number counter. */
function Counter({ to, run, duration = 1800 }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / duration)
      setN(Math.round(to * (1 - Math.pow(1 - k, 3))))
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, to, duration])
  return <>{n}</>
}

export function Stats() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  return (
    <section className="section bg-panel border-y">
      <div className="container stats" ref={ref}>
        {STATS.map((s, i) => (
          <div key={s.label} className={`stat ${inView ? 'in' : ''}`} style={{ transitionDelay: `${i * 120}ms` }}>
            <b><Counter to={s.value} run={inView} /></b>
            <span>{s.label}</span>
            <div className="bar"><i style={{ transitionDelay: `${i * 150}ms` }} /></div>
          </div>
        ))}
      </div>
    </section>
  )
}

/** Timeline whose line fills as the user scrolls past it. */
export function Timeline() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const k = (window.innerHeight * 0.75 - r.top) / r.height
      setProgress(Math.max(0, Math.min(1, k)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="timeline" ref={ref}>
      <div className="timeline-fill" style={{ height: `calc(${progress * 100}% - 1rem)` }} />
      {TIMELINE.map((t, i) => (
        <Reveal key={t.year} variant="from-right" delay={i * 80} className={`tl-row ${progress > (i + 0.5) / TIMELINE.length ? 'lit' : ''}`}>
          <b>{t.year}</b><span>{t.label}</span>
        </Reveal>
      ))}
    </div>
  )
}

export function Steps({ title = 'Un accompagnement de bout en bout' }) {
  const [ref, inView] = useInView({ threshold: 0.3 })
  return (
    <section className="section">
      <div className="container">
        <div className="section-head"><SectionTitle>{title}</SectionTitle></div>
        <div className={`steps ${inView ? 'in' : ''}`} ref={ref}>
          <div className="steps-line"><i /></div>
          {ETAPES.map((e, i) => (
            <Reveal key={e.n} className="step" delay={i * 120}>
              <div className="step-top"><span className="step-n">{e.n}</span><Icon name={e.icon} className="step-ic" size={22} /></div>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AgenceCard({ a, delay = 0 }) {
  const tels = a.tel.split(' / ')
  return (
    <Reveal className="card agence" delay={delay} id={`agence-${a.pays}`}>
      <div className="agence-head">
        <h3>{a.pays}</h3>
        <span className={`agence-badge ${a.badge === 'Société mère' ? 'mere' : ''}`}>{a.badge}</span>
      </div>
      <p>{a.ville}</p>
      <p><a href={`tel:${tels[0].replace(/\s/g, '')}`}><Phone />{a.tel}</a></p>
      <p><a href={`mailto:${a.email}`}><Mail />{a.email}</a></p>
      <MapPin className="pin" size={22} />
    </Reveal>
  )
}

export function Agences({ title = 'Nos agences' }) {
  return (
    <section className="section bg-panel border-y">
      <div className="container">
        <div className="section-head"><SectionTitle>{title}</SectionTitle></div>
        <div className="grid-3">{AGENCES.map((a, i) => <AgenceCard key={a.pays} a={a} delay={(i % 3) * 100} />)}</div>
      </div>
    </section>
  )
}

export function Cta({ title, text, label, to = '/contact', href }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal variant="zoom" className="cta">
          <div><h2>{title}</h2>{text && <p>{text}</p>}</div>
          {href
            ? <a className="btn btn-brand" href={href}>{label} <ArrowRight /></a>
            : <Link className="btn btn-brand" to={to}>{label} <ArrowRight /></Link>}
        </Reveal>
      </div>
    </section>
  )
}
