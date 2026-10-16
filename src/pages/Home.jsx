import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Wrench } from 'lucide-react'
import { CATEGORIES, PAYS, PRODUITS } from '../data'
import { Agences, CategoryCard, ProductCard, Reveal, SectionTitle, Stats, Steps, Timeline } from '../components/ui'

const ROTATE = ['de la qualité', 'des laboratoires', 'des blocs opératoires', "de l'imagerie", 'de la réanimation']

/** Types, holds, erases and cycles through the phrases. */
function useTypewriter(words, { type = 65, erase = 35, hold = 1800 } = {}) {
  const [i, setI] = useState(0)
  const [text, setText] = useState(words[0])
  const [phase, setPhase] = useState('hold')
  useEffect(() => {
    let t
    const word = words[i]
    if (phase === 'hold') t = setTimeout(() => setPhase('erase'), hold)
    else if (phase === 'erase') {
      if (text.length) t = setTimeout(() => setText(text.slice(0, -1)), erase)
      else { setI((i + 1) % words.length); setPhase('type') }
    } else if (phase === 'type') {
      if (text.length < word.length) t = setTimeout(() => setText(word.slice(0, text.length + 1)), type)
      else setPhase('hold')
    }
    return () => clearTimeout(t)
  }, [text, phase, i, words, type, erase, hold])
  return text
}

function Hero() {
  const typed = useTypewriter(ROTATE)
  const words = "L'équipement biomédical,".split(' ')
  return (
    <section className="hero bg-panel" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="hero-blob b1" /><div className="hero-blob b2" />
      <div className="container">
        <div>
          <span className="badge"><span className="dot" />Depuis 1997 · 6 pays</span>
          <h1>
            {words.map((w, i) => <span key={i} className="word" style={{ animationDelay: `${i * 90}ms` }}>{w}&nbsp;</span>)}
            <span className="word" style={{ animationDelay: '220ms' }}><span className="rotator">au service {typed}<span className="caret" /></span></span>
          </h1>
          <Reveal as="p" className="lead" delay={300}>
            EDIMAMEL GROUP fournit, installe, forme et maintient les équipements des laboratoires, blocs opératoires, services d'imagerie et d'anesthésie-réanimation en Afrique de l'Ouest.
          </Reveal>
          <Reveal className="hero-actions" delay={420}>
            <Link to="/produits" className="btn btn-brand">Voir nos produits <ArrowRight /></Link>
            <Link to="/contact" className="btn btn-outline">Nous contacter</Link>
          </Reveal>
          <div className="chips">
            {PAYS.map((p, i) => (
              <Link key={p} to={`/contact#agence-${p}`} className="chip" style={{ animationDelay: `${600 + i * 80}ms` }}>{p}</Link>
            ))}
          </div>
        </div>
        <div className="hero-media">
          <img src="/images/hero-bloc.jpg" alt="Bloc opératoire équipé par EDIMAMEL GROUP" />
          <svg className="ecg" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 30 H170 L185 30 L195 8 L208 52 L220 22 L230 30 H360 L375 30 L385 8 L398 52 L410 22 L420 30 H600" />
          </svg>
          <div className="float-card c1"><span className="ic"><Wrench size={18} /></span><div><b>6 pays</b><span>SAV local & réactif</span></div></div>
          <div className="float-card c2"><span className="ic"><ShieldCheck size={18} /></span><div><b>Depuis 1997</b><span>Équipements certifiés</span></div></div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...Array(2)].flatMap((_, k) => [...PAYS, 'Laboratoire', 'Bloc opératoire', 'Imagerie', 'Réanimation'].map((p) => <span key={k + p}>{p}</span>))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <SectionTitle>Nos produits à la une</SectionTitle>
            <Reveal><Link to="/produits" className="link">Tous les produits <ArrowRight /></Link></Reveal>
          </div>
          <div className="grid-3">{PRODUITS.map((p, i) => <ProductCard key={p.id} p={p} delay={i * 120} />)}</div>
        </div>
      </section>

      <section className="section bg-panel border-y">
        <div className="container split">
          <div className="prose">
            <SectionTitle>Présentation EDIMAMEL GROUP</SectionTitle>
            <Reveal as="p" delay={100}>
              <b>EDIMAMEL GROUP</b>, dont fait partie BIORAMED, est installé dans six pays de la sous-région ouest-africaine : le Togo, le Bénin, le Mali, le Niger, le Burkina Faso et la Guinée. Créé en 1997, le groupe occupe une place centrale dans le domaine biomédical à travers la fourniture et l'installation d'équipements de grande qualité, la formation des utilisateurs et la maintenance assurée par un service d'ingénierie performant.
            </Reveal>
            <Reveal delay={180}><Link to="/a-propos" className="link">En savoir plus sur le groupe <ArrowRight /></Link></Reveal>
          </div>
          <Timeline />
        </div>
      </section>

      <Stats />

      <section className="section">
        <div className="container">
          <div className="section-head"><SectionTitle>Shop par catégories</SectionTitle></div>
          <div className="grid-3">{CATEGORIES.map((c, i) => <CategoryCard key={c.id} c={c} delay={(i % 3) * 100} />)}</div>
        </div>
      </section>

      <div className="bg-panel border-y"><Steps /></div>

      <Agences />
    </>
  )
}
