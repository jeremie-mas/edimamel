export const SIEGE = {
  phone: '+228 22 21 60 58',
  tel: '+22822216058',
  phones: '+228 22 21 60 58 / 90 76 82 76',
  fax: '+228 22 20 96 18',
  email: 'info@edimamel.com',
  address: '60 rue des Tilenls à Kodomé',
  bp: 'BP 12754 — Lomé, TOGO',
}

export const PAYS = ['Togo', 'Bénin', 'Mali', 'Niger', 'Burkina Faso', 'Guinée']

export const PRODUITS = [
  { id: 'moniteur', cat: 'Monitorage', catId: 'anesthesie', title: 'Moniteur multiparamétrique', text: 'Suivi ECG, SpO2, pression artérielle et température en temps réel.', tags: 'Bloc · Réanimation', image: '/images/moniteur.jpg' },
  { id: 'echographe', cat: 'Imagerie', catId: 'imagerie', title: 'Échographe portable', text: 'Imagerie haute résolution, sonde polyvalente, idéal en consultation.', tags: 'Gynéco · Général', image: '/images/echographe.jpg' },
  { id: 'analyseur', cat: 'Laboratoire', catId: 'laboratoire', title: 'Analyseur hématologique', text: 'Hémogramme automatisé, rapidité et fiabilité pour les plateaux techniques.', tags: 'Biosécurité', image: '/images/analyseur.jpg' },
]

export const CATEGORIES = [
  { id: 'laboratoire', title: 'Laboratoire', text: 'Biosécurité, analyseurs, réactifs', icon: 'FlaskConical' },
  { id: 'medecine', title: 'Médecine générale', text: 'Consultation, ECG, diagnostic', icon: 'Stethoscope' },
  { id: 'bloc', title: 'Bloc opératoire', text: 'Tables, luminaires, autoclaves', icon: 'Scissors' },
  { id: 'gyneco', title: 'Gynéco-obstétrique', text: 'Tables, échographes, néonatalogie', icon: 'Baby' },
  { id: 'anesthesie', title: 'Anesthésie - Réanimation - Moniteur', text: 'Appareils, moniteurs, aspiration', icon: 'HeartPulse' },
  { id: 'imagerie', title: 'Imagerie médicale', text: 'Radiographie, échographie, IRM', icon: 'ScanLine' },
]

export const TIMELINE = [
  { year: 1997, label: 'TOGO — création & siège social' },
  { year: 1999, label: 'Burkina-Faso' },
  { year: 2003, label: 'Bénin' },
  { year: 2005, label: 'Mali' },
  { year: 2006, label: 'Niger' },
  { year: 2016, label: 'Guinée Conakry' },
]

export const STATS = [
  { value: 800, label: 'Clients satisfaits' },
  { value: 48, label: 'Projets terminés' },
  { value: 34, label: 'Experts' },
  { value: 62, label: 'Publications' },
]

export const ETAPES = [
  { n: '01', title: 'Fourniture', text: "Sélection et approvisionnement d'équipements certifiés.", icon: 'PackageCheck' },
  { n: '02', title: 'Installation', text: 'Mise en service et calibration sur site par nos équipes.', icon: 'Wrench' },
  { n: '03', title: 'Formation', text: 'Prise en main complète des utilisateurs et techniciens.', icon: 'GraduationCap' },
  { n: '04', title: 'Maintenance & SAV', text: 'Assistance, pièces et interventions réactives.', icon: 'LifeBuoy' },
]

export const AGENCES = [
  { pays: 'Togo', badge: 'Société mère', ville: 'Lomé — Siège social', tel: '+228 22 21 60 58 / 90 76 82 76', email: 'info@edimamel.com' },
  { pays: 'Bénin', badge: 'BIORAMED', ville: 'Cotonou — Étoile Rouge, Von Vodjé Sona', tel: '+229 21 33 39 74 / 98 87 00 02', email: 'info@bioramed.com' },
  { pays: 'Burkina Faso', badge: 'Agence', ville: 'Bobo-Dioulasso — 01 BP 2142', tel: '+226 20 97 73 39', email: 'info@edimamel.com' },
  { pays: 'Niger', badge: 'Agence', ville: 'Niamey — Bureau technique', tel: '+227 94 21 53 56', email: 'info@edimamel.com' },
  { pays: 'Mali', badge: 'Agence', ville: 'Bamako — Cellule SAV', tel: '+223 20 00 00 00', email: 'info@edimamel.com' },
  { pays: 'Guinée', badge: 'Implantation 2016', ville: 'Conakry — Bureau régional', tel: '+224 30 00 00 00', email: 'info@edimamel.com' },
]

export const REALISATIONS = [
  { pays: 'Togo', title: "Équipement d'un bloc opératoire — CHU de Lomé", text: 'Tables d\'opération, éclairages scialytiques et autoclaves installés et mis en service.', icon: 'Scissors' },
  { pays: 'Bénin', title: 'Plateau technique de laboratoire — Cotonou', text: "Automates de biochimie et d'hématologie avec formation complète des biologistes.", icon: 'FlaskConical' },
  { pays: 'Burkina Faso', title: "Unité d'imagerie médicale — Bobo-Dioulasso", text: 'Salle de radiographie numérique et échographes, avec contrat de maintenance annuel.', icon: 'ScanLine' },
  { pays: 'Niger', title: 'Service de néonatalogie — Niamey', text: 'Couveuses, tables de réanimation et monitorage néonatal pour la maternité.', icon: 'Baby' },
]

export const SAV = [
  { title: 'Diagnostic rapide', text: 'Prise en charge de la demande et pré-diagnostic à distance sous 24h ouvrées.', icon: 'Activity' },
  { title: 'Intervention sur site', text: 'Techniciens biomédicaux basés dans chacun des six pays desservis.', icon: 'MapPin' },
  { title: 'Pièces détachées', text: "Approvisionnement en pièces d'origine auprès de nos partenaires fabricants.", icon: 'Cog' },
  { title: 'Contrats de maintenance', text: 'Visites préventives planifiées et traçabilité des interventions.', icon: 'ClipboardCheck' },
]

export const PRIORITES = [
  'Contribuer à la promotion de la santé aux côtés des professionnels',
  'Proposer des équipements fiables et de qualité irréprochable',
  'Satisfaire notre clientèle',
  'Aider les clients-partenaires à moderniser leur parc d\'équipements à des prix compétitifs',
  'Offrir le meilleur service technique',
]

export const ACTUALITES = [
  { date: '12 février 2026', title: 'Nouvel automate de biochimie AS-480 disponible', text: 'Un analyseur haute cadence désormais référencé et supporté par notre service technique.', tag: 'Produit' },
  { date: '18 janvier 2026', title: 'Session de formation utilisateurs à Bamako', text: "Trois jours de formation sur le monitorage et l'anesthésie pour les équipes hospitalières.", tag: 'Formation' },
  { date: '05 décembre 2025', title: 'Renforcement du bureau de Conakry', text: "Deux ingénieurs biomédicaux rejoignent l'équipe pour réduire les délais d'intervention.", tag: 'Équipe' },
]

export const mailto = (subject, body = '') =>
  `mailto:${SIEGE.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`
