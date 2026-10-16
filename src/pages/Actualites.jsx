import { CalendarDays, Package, GraduationCap, Users } from 'lucide-react'
import { ACTUALITES } from '../data'
import { PageHead, Reveal } from '../components/ui'

const TAG_ICON = { Produit: Package, Formation: GraduationCap, Équipe: Users }

export default function Actualites() {
  return (
    <>
      <PageHead
        crumb="Actualités"
        kicker="Actualités"
        title="La vie du groupe et de ses agences"
        text="Nouveaux équipements référencés, formations utilisateurs et renforcement de nos équipes techniques."
      />
      <section className="section">
        <div className="container grid-3">
          {ACTUALITES.map((a, i) => {
            const TagIcon = TAG_ICON[a.tag]
            return (
              <Reveal as="article" key={a.title} className="card news" delay={i * 120}>
                <div className="news-top"><TagIcon className="bg" /><span className="news-tag">{a.tag}</span></div>
                <div className="news-body">
                  <span className="news-date"><CalendarDays />{a.date}</span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}
