import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '55vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div className="container">
        <div className="kicker">Erreur 404</div>
        <h1 className="h2" style={{ margin: '0.75rem 0 1rem' }}>Page introuvable</h1>
        <p style={{ color: 'var(--mist)', marginBottom: '1.5rem' }}>Cette page n'existe pas ou a été déplacée.</p>
        <Link to="/" className="btn btn-brand">Retour à l'accueil <ArrowRight /></Link>
      </div>
    </section>
  )
}
