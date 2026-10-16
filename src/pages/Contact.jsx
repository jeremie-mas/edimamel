import { MapPin, Phone, Printer, Mail, ArrowRight } from 'lucide-react'
import { AGENCES, SIEGE, mailto } from '../data'
import { AgenceCard, PageHead, Reveal } from '../components/ui'

export default function Contact() {
  return (
    <>
      <PageHead
        crumb="Contact"
        kicker="Contact"
        title="Une équipe locale dans chacun de nos six marchés"
        text="Devis, installation, formation ou intervention technique : votre agence la plus proche répond."
      />
      <section className="section">
        <div className="container grid-3">
          {AGENCES.map((a, i) => <AgenceCard key={a.pays} a={a} delay={(i % 3) * 100} />)}
        </div>
      </section>
      <section className="section bg-panel border-y">
        <div className="container">
          <Reveal variant="zoom" className="hq">
            <div className="hq-info">
              <h3>Siège social — Lomé, Togo</h3>
              <div className="hq-row"><MapPin />{SIEGE.address} · {SIEGE.bp}</div>
              <div className="hq-row"><Phone /><a href={`tel:${SIEGE.tel}`}>Téléphone : {SIEGE.phones}</a></div>
              <div className="hq-row"><Printer />Fax : {SIEGE.fax}</div>
              <div className="hq-row"><Mail /><a href={`mailto:${SIEGE.email}`}>E-mail : {SIEGE.email}</a></div>
            </div>
            <div className="hq-cta">
              <span className="ring" /><span className="ring r2" />
              <h3>Une question, un devis ?</h3>
              <p>Écrivez au groupe, nous transmettons à l'agence concernée.</p>
              <a className="btn" href={mailto('Contact — EDIMAMEL GROUP')}>Écrire au groupe <ArrowRight /></a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
