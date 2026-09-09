import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from 'lucide-react';

const projects = [
  { number:'01', title:'AFM Explorer', eyebrow:'Deployed ML platform', description:'A full-stack scientific analysis platform for force-spectroscopy data, with a FastAPI service, Streamlit interface, authenticated MCP tools, Docker deployment, and automated delivery to AWS.', proof:['Live on AWS','39 tests','CI/CD'], stack:'Python · FastAPI · MCP · Docker · AWS', image:'/projects/afm-curve-analysis.png', imageAlt:'AFM force curve with an automatically detected contact point', repo:'https://github.com/KashishMendiratta/afm-explorer', live:'https://afm.kashishmendiratta.com', accent:'cyan' },
  { number:'02', title:'Scaling DataSAIL', eyebrow:'Master’s thesis · ML research', description:'A balance-aware approximation for leakage-aware dataset splitting. It cuts the optimization burden while preserving split quality, evaluated across four molecular ML benchmarks.', proof:['5.8× faster','≤0.5 pp deviation','4 benchmarks'], stack:'Python · RDKit · scikit-learn · ILP', image:'/projects/datasail-runtime.png', imageAlt:'Runtime comparison of dataset splitting approaches', repo:'https://github.com/KashishMendiratta/DataSAIL_scaling', accent:'amber' },
  { number:'03', title:'Multilingual Speech ID', eyebrow:'Deep learning · Audio', description:'Fine-tuned speech transformers to identify 22 Indian languages in a low-resource setting, then traced speaker-dependent failure modes through per-speaker evaluation and embedding analysis.', proof:['22 languages','43.4% top-1','Error analysis'], stack:'PyTorch · Transformers · MMS · XLS-R', image:'/projects/speech-confusion.png', imageAlt:'Confusion matrix for multilingual speech language identification', repo:'https://github.com/KashishMendiratta/Multilingual_Speech_Language_Identification', accent:'violet' },
  { number:'04', title:'Bike Demand Intelligence', eyebrow:'Applied ML · Explainability', description:'The classification workstream of a three-person demand modelling project: an imbalance-aware ensemble, explainability across every model, and structured analysis of ordinal errors.', proof:['0.8477 macro-F1','5-fold CV','SHAP analysis'], stack:'CatBoost · XGBoost · Random Forest · SHAP', image:'/projects/bike-shap.png', imageAlt:'SHAP feature importance analysis for bike demand classification', repo:'https://github.com/KashishMendiratta/seoul-bike-demand-forecasting', accent:'rose' },
  { number:'05', title:'Binary Image Segmentation', eyebrow:'Computer vision', description:'A reproducible comparison of segmentation approaches with quantitative evaluation and qualitative error inspection across challenging image regions.', proof:['Tested pipeline','Visual QA','Reproducible'], stack:'Python · scikit-image · OpenCV', image:'/projects/segmentation-comparison.jpg', imageAlt:'Qualitative comparison of binary image segmentation outputs', repo:'https://github.com/KashishMendiratta/Binary_Image_Segmentation', accent:'green' },
];

const capabilities = [
  ['Build','Python, SQL, PyTorch, scikit-learn, Hugging Face'],
  ['Ship','FastAPI, Docker, AWS EC2, GitHub Actions'],
  ['Evaluate','SHAP, model evaluation, error analysis, leakage'],
  ['Explore','Agents, MCP, retrieval, reliable AI systems'],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Kashish Mendiratta, home">KM</a>
      <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="availability" href="mailto:kashishmendiratta14@gmail.com"><span /> Open to ML / AI roles</a>
    </header>

    <section className="hero section-shell" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <p className="kicker">Applied ML engineer · Bioinformatics</p>
        <h1>I turn uncertain data into<span>working ML systems.</span></h1>
        <p className="hero-intro">I build, evaluate, and deploy machine-learning products, from scientific prototypes to tested APIs and live cloud applications.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={18} /></a>
          <a className="button button-quiet" href="https://github.com/KashishMendiratta" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <aside className="hero-proof" aria-label="Portfolio summary">
        <div className="proof-label">Currently</div>
        <p>Completing an M.Sc. in Bioinformatics at Saarland University.</p>
        <div className="mini-rule" />
        <dl>
          <div><dt>Focus</dt><dd>End-to-end ML & AI engineering</dd></div>
          <div><dt>Based</dt><dd>Saarbrücken, Germany</dd></div>
          <div><dt>Languages</dt><dd>English C2 · German B2 · Hindi C2</dd></div>
        </dl>
      </aside>
      <div className="hero-index" aria-hidden="true">00 / SIGNAL</div>
    </section>

    <section className="proof-strip" aria-label="Key outcomes">
      <div><strong>5.8×</strong><span>faster dataset splitting</span></div><div><strong>0.8477</strong><span>macro-F1 demand classifier</span></div><div><strong>22</strong><span>spoken languages modelled</span></div><div><strong>Live</strong><span>containerized ML platform</span></div>
    </section>

    <section className="section-shell projects-section" id="work">
      <div className="section-heading"><div><p className="kicker">Selected work · 2024—2026</p><h2>Evidence, not adjectives.</h2></div><p>Five projects showing the path from research question to evaluated model to shipped software.</p></div>
      <div className="project-list">
        {projects.map((project) => <article className={`project-card accent-${project.accent}`} key={project.title}>
          <div className="project-meta"><span>{project.number}</span><span>{project.eyebrow}</span></div>
          <div className="project-body">
            <div className="project-copy">
              <h3>{project.title}</h3><p>{project.description}</p>
              <div className="proof-pills">{project.proof.map((item) => <span key={item}>{item}</span>)}</div>
              <p className="stack">{project.stack}</p>
              <div className="project-links"><a href={project.repo} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={15} /></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}</div>
            </div>
            <a className="project-visual" href={project.repo} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`}>
              {/* oxlint-disable-next-line next/no-img-element -- project charts are already optimized static assets */}
              <img src={project.image} alt={project.imageAlt} /><span className="visual-corner"><ArrowUpRight size={20} /></span>
            </a>
          </div>
        </article>)}
      </div>
    </section>

    <section className="section-shell about-section" id="about">
      <div className="about-lead"><p className="kicker">About · The connective tissue</p><h2>Scientist’s curiosity.<br />Engineer’s audacity.</h2></div>
      <div className="about-copy"><p className="large-copy">My background sits where data complexity meets strong computational systems. I care about what a model learns, where it fails, and whether someone else can reliably run it.</p><p>That means clean experiments, honest evaluation, useful interfaces, and deployment practices that move a project beyond the notebook. I’m now looking for an ML / AI engineering role where I can build systems with measurable real-world value.</p></div>
      <div className="capability-list">{capabilities.map(([label,detail]) => <div key={label}><strong>{label}</strong><span>{detail}</span></div>)}</div>
    </section>

    <section className="section-shell experience-section">
      <p className="kicker">Trajectory</p>
      <div className="timeline">
        <article><time>2025—Now</time><div><h3>Master’s thesis · HIPS</h3><p>Scaling leakage-aware dataset splitting for large ML datasets under Prof. Dr. Olga Kalinina.</p></div></article>
        <article><time>2021—2027</time><div><h3>M.Sc. Bioinformatics · Saarland University</h3><p>Advanced study across machine learning, computation, and the life sciences.</p></div></article>
        <article><time>2020—2021</time><div><h3>Freelance Data Science Analyst</h3><p>Built a churn-prediction pipeline on 10,000+ transactions and connected model output to stock planning.</p></div></article>
      </div>
    </section>

    <footer className="footer section-shell" id="contact">
      <div><p className="kicker">Let’s build something useful</p><h2>Have a hard ML problem?</h2></div>
      <a className="footer-email" href="mailto:kashishmendiratta14@gmail.com">kashishmendiratta14@gmail.com <ArrowUpRight size={24} /></a>
      <div className="footer-bottom"><p><MapPin size={15} /> Saarbrücken, Germany</p><div><a href="https://github.com/KashishMendiratta" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/kashishmendiratta" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:kashishmendiratta14@gmail.com"><Mail size={18} /> Email</a></div><p>© 2026 Kashish Mendiratta</p></div>
    </footer>
  </main>;
}
