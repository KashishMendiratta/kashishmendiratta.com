import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from 'lucide-react';

type Locale = 'en' | 'de';

const sharedProjects = [
  { number:'01', title:'AFM Explorer', stack:'Python · FastAPI · MCP · Docker · AWS', image:'/projects/afm-curve-analysis.png', repo:'https://github.com/KashishMendiratta/afm-explorer', live:'https://afm.kashishmendiratta.com', accent:'cyan' },
  { number:'02', title:'Scaling DataSAIL', stack:'Python · RDKit · scikit-learn · ILP', image:'/projects/datasail-runtime.png', repo:'https://github.com/KashishMendiratta/DataSAIL_scaling', accent:'amber' },
  { number:'03', title:'Multilingual Speech ID', stack:'PyTorch · Transformers · MMS · XLS-R', image:'/projects/speech-confusion.png', repo:'https://github.com/KashishMendiratta/Multilingual_Speech_Language_Identification', accent:'violet' },
  { number:'04', title:'Bike Demand Intelligence', stack:'CatBoost · XGBoost · Random Forest · SHAP', image:'/projects/bike-shap.png', repo:'https://github.com/KashishMendiratta/seoul-bike-demand-forecasting', accent:'rose' },
  { number:'05', title:'Binary Image Segmentation', stack:'Python · scikit-image · OpenCV', image:'/projects/segmentation-comparison.jpg', repo:'https://github.com/KashishMendiratta/Binary_Image_Segmentation', accent:'green' },
];

const copy = {
  en: {
    nav:['Work','About','Contact'], availability:'Open to ML / AI roles', kicker:'Applied ML engineer · Bioinformatics',
    hero:['I turn uncertain data into','working ML systems.'], intro:'I build, evaluate, and deploy machine-learning products, from scientific prototypes to tested APIs and live cloud applications.', explore:'Explore selected work',
    currently:'Currently', study:'Completing an M.Sc. in Bioinformatics at Saarland University.', details:[['Focus','End-to-end ML & AI engineering'],['Based','Saarbrücken, Germany'],['Languages','English C2 · German B2 · Hindi C2']],
    outcomes:[['5.8×','faster dataset splitting'],['0.8477','macro-F1 demand classifier'],['22','spoken languages modelled'],['Live','containerized ML platform']],
    workKicker:'Selected work · 2024—2026', workTitle:'Evidence, not adjectives.', workIntro:'Five projects showing the path from research question to evaluated model to shipped software.',
    projects:[
      ['Deployed ML platform','A full-stack scientific analysis platform for force-spectroscopy data, with a FastAPI service, Streamlit interface, authenticated MCP tools, Docker deployment, and automated delivery to AWS.',['Live on AWS','39 tests','CI/CD'],'AFM force curve with an automatically detected contact point'],
      ['Master’s thesis · ML research','A balance-aware approximation for leakage-aware dataset splitting. It cuts the optimization burden while preserving split quality, evaluated across four molecular ML benchmarks.',['5.8× faster','≤0.5 pp deviation','4 benchmarks'],'Runtime comparison of dataset splitting approaches'],
      ['Deep learning · Audio','Fine-tuned speech transformers to identify 22 Indian languages in a low-resource setting, then traced speaker-dependent failure modes through per-speaker evaluation and embedding analysis.',['22 languages','43.4% top-1','Error analysis'],'Confusion matrix for multilingual speech language identification'],
      ['Applied ML · Explainability','The classification workstream of a three-person demand modelling project: an imbalance-aware ensemble, explainability across every model, and structured analysis of ordinal errors.',['0.8477 macro-F1','5-fold CV','SHAP analysis'],'SHAP feature importance analysis for bike demand classification'],
      ['Computer vision','A reproducible comparison of segmentation approaches with quantitative evaluation and qualitative error inspection across challenging image regions.',['Tested pipeline','Visual QA','Reproducible'],'Qualitative comparison of binary image segmentation outputs'],
    ],
    repository:'Repository', demo:'Live demo', view:'View repository for',
    aboutKicker:'About · The connective tissue', aboutTitle:['Scientist’s curiosity.','Engineer’s audacity.'], aboutLead:'My background sits where data complexity meets strong computational systems. I care about what a model learns, where it fails, and whether someone else can reliably run it.', aboutBody:'That means clean experiments, honest evaluation, useful interfaces, and deployment practices that move a project beyond the notebook. I’m now looking for an ML / AI engineering role where I can build systems with measurable real-world value.',
    capabilities:[['Build','Python, SQL, PyTorch, scikit-learn, Hugging Face'],['Ship','FastAPI, Docker, AWS EC2, GitHub Actions'],['Evaluate','SHAP, model evaluation, error analysis, leakage'],['Explore','Agents, MCP, retrieval, reliable AI systems']],
    trajectory:'Trajectory', timeline:[['2025—Now','Master’s thesis · HIPS','Scaling leakage-aware dataset splitting for large ML datasets under Prof. Dr. Olga Kalinina.'],['2021—Present','M.Sc. Bioinformatics · Saarland University','Advanced study across machine learning, computation, and the life sciences.'],['2020—2021','Freelance Data Science Analyst','Built a churn-prediction pipeline on 10,000+ transactions and connected model output to stock planning.']],
    contactKicker:'Let’s build something useful', contactTitle:'Have a hard ML problem?', email:'Email', location:'Saarbrücken, Germany', summary:'Portfolio summary', keyOutcomes:'Key outcomes'
  },
  de: {
    nav:['Projekte','Über mich','Kontakt'], availability:'Offen für ML- / AI-Rollen', kicker:'Angewandte ML-Entwicklung · Bioinformatik',
    hero:['Ich verwandle unsichere Daten in','funktionierende ML-Systeme.'], intro:'Ich entwickle, evaluiere und deploye Machine-Learning-Produkte – von wissenschaftlichen Prototypen bis zu getesteten APIs und produktiven Cloud-Anwendungen.', explore:'Ausgewählte Projekte',
    currently:'Aktuell', study:'M.Sc.-Studium der Bioinformatik an der Universität des Saarlandes.', details:[['Fokus','End-to-End ML- & AI-Engineering'],['Standort','Saarbrücken, Deutschland'],['Sprachen','Englisch C2 · Deutsch B2 · Hindi C2']],
    outcomes:[['5,8×','schnelleres Dataset-Splitting'],['0,8477','Macro-F1 im Demand Classifier'],['22','modellierte Sprachen'],['Live','containerisierte ML-Plattform']],
    workKicker:'Ausgewählte Projekte · 2024—2026', workTitle:'Belege statt Behauptungen.', workIntro:'Fünf Projekte zeigen meinen Weg von der Forschungsfrage über ein evaluiertes Modell bis zur ausgelieferten Software.',
    projects:[
      ['Deployte ML-Plattform','Eine Full-Stack-Plattform zur wissenschaftlichen Analyse von Kraftspektroskopie-Daten – mit FastAPI-Service, Streamlit-Oberfläche, authentifizierten MCP-Tools, Docker-Deployment und automatisierter Bereitstellung auf AWS.',['Live auf AWS','39 Tests','CI/CD'],'AFM-Kraftkurve mit automatisch erkanntem Kontaktpunkt'],
      ['Masterarbeit · ML-Forschung','Eine balanceorientierte Approximation für leakage-bewusstes Dataset-Splitting. Sie reduziert den Optimierungsaufwand bei erhaltener Split-Qualität und wurde auf vier molekularen ML-Benchmarks evaluiert.',['5,8× schneller','≤0,5 PP Abweichung','4 Benchmarks'],'Laufzeitvergleich verschiedener Dataset-Splitting-Verfahren'],
      ['Deep Learning · Audio','Fine-Tuning von Speech Transformern zur Erkennung von 22 indischen Sprachen in einem Low-Resource-Szenario; sprecherabhängige Fehlermuster wurden mit Per-Speaker-Evaluation und Embedding-Analysen untersucht.',['22 Sprachen','43,4 % Top-1','Fehleranalyse'],'Konfusionsmatrix für die mehrsprachige Spracherkennung'],
      ['Angewandtes ML · Erklärbarkeit','Der Klassifikations-Workstream eines dreiköpfigen Demand-Modelling-Projekts: ein Ensemble für unausgewogene Klassen, Erklärbarkeit für jedes Modell und strukturierte Analyse ordinaler Fehler.',['0,8477 Macro-F1','5-Fold CV','SHAP-Analyse'],'SHAP-Feature-Importance für die Bike-Demand-Klassifikation'],
      ['Computer Vision','Ein reproduzierbarer Vergleich von Segmentierungsverfahren mit quantitativer Evaluation und qualitativer Fehleranalyse in anspruchsvollen Bildregionen.',['Getestete Pipeline','Visuelle QA','Reproduzierbar'],'Qualitativer Vergleich binärer Bildsegmentierungen'],
    ],
    repository:'Repository', demo:'Live-Demo', view:'Repository ansehen:',
    aboutKicker:'Über mich · Die Verbindung', aboutTitle:['Neugier einer Wissenschaftlerin.','Mut einer Ingenieurin.'], aboutLead:'Mein Hintergrund liegt dort, wo komplexe Daten auf leistungsfähige Computersysteme treffen. Mich interessiert, was ein Modell lernt, wo es scheitert und ob andere es zuverlässig ausführen können.', aboutBody:'Das bedeutet saubere Experimente, ehrliche Evaluation, nützliche Schnittstellen und Deployment-Praktiken, die ein Projekt über das Notebook hinausbringen. Ich suche eine ML- / AI-Engineering-Rolle, in der ich Systeme mit messbarem realem Nutzen entwickeln kann.',
    capabilities:[['Entwickeln','Python, SQL, PyTorch, scikit-learn, Hugging Face'],['Ausliefern','FastAPI, Docker, AWS EC2, GitHub Actions'],['Evaluieren','SHAP, Modellevaluation, Fehleranalyse, Leakage'],['Erkunden','Agents, MCP, Retrieval, zuverlässige AI-Systeme']],
    trajectory:'Werdegang', timeline:[['2025—Heute','Masterarbeit · HIPS','Skalierung von leakage-bewusstem Dataset-Splitting für große ML-Datensätze unter Prof. Dr. Olga Kalinina.'],['2021—Heute','M.Sc. Bioinformatik · Universität des Saarlandes','Vertiefung in Machine Learning, Informatik und Lebenswissenschaften.'],['2020—2021','Freelance Data Science Analyst','Entwicklung einer Churn-Prediction-Pipeline für mehr als 10.000 Transaktionen und Integration der Modellergebnisse in die Bestandsplanung.']],
    contactKicker:'Lassen Sie uns etwas Nützliches entwickeln', contactTitle:'Ein anspruchsvolles ML-Problem?', email:'E-Mail', location:'Saarbrücken, Deutschland', summary:'Portfolio-Übersicht', keyOutcomes:'Wichtigste Ergebnisse'
  }
} as const;

export function PortfolioPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const home = locale === 'de' ? '/de' : '/';
  return <main>
    <header className="site-header">
      <a className="wordmark" href={`${home}#top`} aria-label="Kashish Mendiratta, home">KM</a>
      <nav aria-label="Primary navigation"><a href="#work">{t.nav[0]}</a><a href="#about">{t.nav[1]}</a><a href="#contact">{t.nav[2]}</a></nav>
      <div className="header-actions">
        <div className="language-switch" aria-label="Language">
          {/* oxlint-disable-next-line next/no-html-link-for-pages -- full navigation makes locale switching reliable on the deployed worker */}
          <a className={locale==='en'?'active':''} href="/">EN</a><span>/</span>
          {/* oxlint-disable-next-line next/no-html-link-for-pages -- full navigation makes locale switching reliable on the deployed worker */}
          <a className={locale==='de'?'active':''} href="/de">DE</a>
        </div>
        <a className="availability" href="mailto:kashishmendiratta14@gmail.com"><span /> {t.availability}</a>
      </div>
    </header>
    <section className="hero section-shell" id="top"><div className="hero-grid" aria-hidden="true" /><div className="hero-copy"><p className="kicker">{t.kicker}</p><h1>{t.hero[0]}<span>{t.hero[1]}</span></h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button button-primary" href="#work">{t.explore} <ArrowDownRight size={18} /></a><a className="button button-quiet" href="https://github.com/KashishMendiratta" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a></div></div><aside className="hero-proof" aria-label={t.summary}><div className="proof-label">{t.currently}</div><p>{t.study}</p><div className="mini-rule" /><dl>{t.details.map(([a,b])=><div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl></aside><div className="hero-index" aria-hidden="true">PORTFOLIO / 2026</div></section>
    <section className="proof-strip" aria-label={t.keyOutcomes}>{t.outcomes.map(([a,b])=><div key={b}><strong>{a}</strong><span>{b}</span></div>)}</section>
    <section className="section-shell projects-section" id="work"><div className="section-heading"><div><p className="kicker">{t.workKicker}</p><h2>{t.workTitle}</h2></div><p>{t.workIntro}</p></div><div className="project-list">{sharedProjects.map((project,i)=>{const p=t.projects[i]; return <article className={`project-card accent-${project.accent}`} key={project.title}><div className="project-meta"><span>{project.number}</span><span>{p[0]}</span></div><div className="project-body"><div className="project-copy"><h3>{project.title}</h3><p>{p[1]}</p><div className="proof-pills">{p[2].map(item=><span key={item}>{item}</span>)}</div><p className="stack">{project.stack}</p><div className="project-links"><a href={project.repo} target="_blank" rel="noreferrer">{t.repository} <ArrowUpRight size={15} /></a>{project.live&&<a href={project.live} target="_blank" rel="noreferrer">{t.demo} <ArrowUpRight size={15} /></a>}</div></div><a className="project-visual" href={project.repo} target="_blank" rel="noreferrer" aria-label={`${t.view} ${project.title}`}>
      {/* oxlint-disable-next-line next/no-img-element -- project charts are already optimized static assets */}<img src={project.image} alt={p[3]} /><span className="visual-corner"><ArrowUpRight size={20} /></span></a></div></article>})}</div></section>
    <section className="section-shell about-section" id="about"><div className="about-lead"><p className="kicker">{t.aboutKicker}</p><h2>{t.aboutTitle[0]}<br />{t.aboutTitle[1]}</h2></div><div className="about-copy"><p className="large-copy">{t.aboutLead}</p><p>{t.aboutBody}</p></div><div className="capability-list">{t.capabilities.map(([a,b])=><div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div></section>
    <section className="section-shell experience-section"><p className="kicker">{t.trajectory}</p><div className="timeline">{t.timeline.map(([a,b,c])=><article key={a}><time>{a}</time><div><h3>{b}</h3><p>{c}</p></div></article>)}</div></section>
    <footer className="footer section-shell" id="contact"><div><p className="kicker">{t.contactKicker}</p><h2>{t.contactTitle}</h2></div><a className="footer-email" href="mailto:kashishmendiratta14@gmail.com">kashishmendiratta14@gmail.com <ArrowUpRight size={24} /></a><div className="footer-bottom"><p><MapPin size={15} /> {t.location}</p><div><a href="https://github.com/KashishMendiratta" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/kashishmendiratta" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:kashishmendiratta14@gmail.com"><Mail size={18} /> {t.email}</a></div><p>© 2026 Kashish Mendiratta</p></div></footer>
  </main>;
}
