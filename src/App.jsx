import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Realisations from './pages/Realisations'
import Sav from './pages/Sav'
import Produits from './pages/Produits'
import Actualites from './pages/Actualites'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const TITLES = {
  '/': "EDIMAMEL GROUP — Équipements biomédicaux en Afrique de l'Ouest",
  '/a-propos': "À propos d'EDIMAMEL GROUP — Biomédical depuis 1997",
  '/realisations': 'Réalisations et projets | EDIMAMEL GROUP',
  '/sav': 'Service après-vente et maintenance | EDIMAMEL GROUP',
  '/produits': 'Produits et équipements biomédicaux | EDIMAMEL GROUP',
  '/actualites': 'Actualités du groupe | EDIMAMEL GROUP',
  '/contact': 'Contacts par pays | EDIMAMEL GROUP',
}

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { document.title = TITLES[pathname] ?? 'Page introuvable | EDIMAMEL GROUP' }, [pathname])
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="realisations" element={<Realisations />} />
        <Route path="sav" element={<Sav />} />
        <Route path="produits" element={<Produits />} />
        <Route path="actualites" element={<Actualites />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
