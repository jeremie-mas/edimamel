import { Check } from 'lucide-react'
import { PRIORITES } from '../data'
import { PageHead, Reveal, SectionTitle, Stats, Steps, Timeline } from '../components/ui'

export default function About() {
  return (
    <>
      <PageHead
        crumb="A Propos"
        kicker="A Propos"
        title="Créé en 1997 au Togo, présent dans six pays"
        text="EDIMAMEL GROUP, dont fait partie BIORAMED, occupe une place centrale dans le domaine biomédical ouest-africain : fourniture, installation, formation et maintenance."
      />

      <section className="section">
        <div className="container split">
          <div className="prose">
            <SectionTitle>Présentation</SectionTitle>
            <Reveal as="p" delay={100}>
              EDIMAMEL GROUP est installé dans six pays de la sous-région ouest-africaine : le Togo, le Bénin, le Mali, le Niger, le Burkina Faso et la Guinée. Depuis 1997, le groupe fournit et installe des équipements de grande qualité dans les différents domaines (laboratoire, chirurgie, anesthésie-réanimation-urgences, imagerie…), forme les utilisateurs et assure la maintenance grâce à un service d'ingénierie et technique performant garantissant une rapidité d'intervention.
            </Reveal>
            <Reveal as="p" delay={160}><span className="muted">Nous sommes aujourd'hui en exploration dans les autres pays de l'Afrique de l'Ouest.</span></Reveal>
          </div>
          <Timeline />
        </div>
      </section>

      <section className="section bg-panel border-y">
        <div className="container split">
          <SectionTitle>Priorités et objectifs</SectionTitle>
          <ul className="prio">
            {PRIORITES.map((p, i) => <Reveal as="li" key={p} variant="from-right" delay={i * 90}><Check />{p}</Reveal>)}
          </ul>
        </div>
      </section>

      <Stats />
      <Steps title="Nos métiers" />
    </>
  )
}
