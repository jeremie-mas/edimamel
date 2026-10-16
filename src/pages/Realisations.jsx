import { useState } from 'react'
import { REALISATIONS } from '../data'
import { Cta, Icon, PageHead, Reveal, Stats } from '../components/ui'

const FILTRES = ['Tous', ...REALISATIONS.map((r) => r.pays)]

export default function Realisations() {
  const [f, setF] = useState('Tous')
  const list = f === 'Tous' ? REALISATIONS : REALISATIONS.filter((r) => r.pays === f)
  return (
    <>
      <PageHead
        crumb="Réalisations"
        kicker="Réalisations"
        title="Des projets livrés, installés et maintenus"
        text="De la salle d'opération au plateau technique de laboratoire, nos équipes accompagnent chaque projet jusqu'à la formation des utilisateurs."
      />
      <section className="section">
        <div className="container">
          <Reveal className="filters" role="group" aria-label="Filtrer par pays">
            {FILTRES.map((x) => (
              <button key={x} className={`filter ${f === x ? 'on' : ''}`} aria-pressed={f === x} onClick={() => setF(x)}>{x}</button>
            ))}
          </Reveal>
          <div className="grid-2" key={f}>
            {list.map((r, i) => (
              <div key={r.title} className="card real fade-swap" style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}>
                <span className="ic"><Icon name={r.icon} size={22} /></span>
                <span className="flag">{r.pays}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Stats />
      <Cta title="Un projet d'équipement ou de rénovation ?" text="Nos équipes vous accompagnent de l'étude à la formation des utilisateurs." label="Parler de votre projet" />
    </>
  )
}
