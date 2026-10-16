import { SAV, mailto } from '../data'
import { Cta, Icon, PageHead, Reveal, Steps } from '../components/ui'

export default function Sav() {
  return (
    <>
      <PageHead
        crumb="SAV"
        kicker="SAV"
        title="Un service d'ingénierie et technique performant"
        text="La maintenance de votre parc est assurée par des équipes locales, formées par nos partenaires fabricants, pour une rapidité d'intervention maximale."
      />
      <section className="section">
        <div className="container grid-2">
          {SAV.map((s, i) => (
            <Reveal key={s.title} className="card real" delay={(i % 2) * 120}>
              <span className="ic"><Icon name={s.icon} size={22} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <div className="bg-panel border-y"><Steps title="Notre chaîne de service" /></div>
      <Cta
        title="Un équipement à faire vérifier ?"
        text="Pré-diagnostic à distance sous 24h ouvrées."
        label="Demander une intervention"
        href={mailto("Demande d'intervention SAV", "Bonjour,\n\nÉquipement concerné :\nPays / site :\nDescription du problème :\n\nCordialement,")}
      />
    </>
  )
}
