import { useSearchParams } from 'react-router-dom'
import { CATEGORIES, PRODUITS } from '../data'
import { CategoryCard, PageHead, ProductCard, Reveal, SectionTitle } from '../components/ui'

export default function Produits() {
  const [params, setParams] = useSearchParams()
  const cat = params.get('cat') ?? 'all'
  const list = cat === 'all' ? PRODUITS : PRODUITS.filter((p) => p.catId === cat)
  const setCat = (id) => setParams(id === 'all' ? {} : { cat: id }, { replace: true })

  return (
    <>
      <PageHead
        crumb="Produits"
        kicker="Produits"
        title="Des équipements calibrés pour chaque plateau technique"
        text="Six domaines couverts, des marques référencées et un service d'ingénierie qui installe, forme et maintient dans les 6 pays."
      />
      <section className="section">
        <div className="container">
          <Reveal className="filters" role="group" aria-label="Filtrer par catégorie">
            <button className={`filter ${cat === 'all' ? 'on' : ''}`} onClick={() => setCat('all')}>Tous</button>
            {CATEGORIES.map((c) => (
              <button key={c.id} className={`filter ${cat === c.id ? 'on' : ''}`} onClick={() => setCat(c.id)}>{c.title}</button>
            ))}
          </Reveal>
          {list.length ? (
            <div className="grid-3" key={cat}>{list.map((p, i) => <ProductCard key={p.id} p={p} delay={i * 120} />)}</div>
          ) : (
            <div className="card fade-swap" style={{ padding: '2rem', textAlign: 'center', color: 'var(--mist)' }} key={cat}>
              Pas de produit à la une dans cette catégorie pour le moment — nos équipes vous présentent la gamme complète sur demande.
            </div>
          )}
        </div>
      </section>
      <section className="section bg-panel border-y">
        <div className="container">
          <div className="section-head"><SectionTitle>Toutes les catégories</SectionTitle></div>
          <div className="grid-3">{CATEGORIES.map((c, i) => <CategoryCard key={c.id} c={c} cta delay={(i % 3) * 100} />)}</div>
        </div>
      </section>
    </>
  )
}
