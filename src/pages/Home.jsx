import { Link } from 'react-router-dom'
import { site } from '../data/site'

function Home() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-story reveal delay-2">
          <p className="kicker">{site.cover.kicker}</p>
          <h2>{site.cover.title}</h2>
          <p className="lead">{site.cover.lead}</p>
          <div className="cta-row">
            <Link className="primary button-link" to="/journal">
              Read the journal
            </Link>
            <Link className="ghost button-link" to="/about">
              Start here
            </Link>
          </div>
        </div>
        <div className="hero-grid">
          {site.featureCards.map((card, index) => (
            <article
              className={`feature-card reveal delay-${index + 3}${
                card.highlight ? ' highlight' : ''
              }`}
              key={card.title}
            >
              <p className="meta">{card.meta}</p>
              <h3>{card.title}</h3>
              <p className="summary">{card.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid">
        <div className="column-main">
          <section className="section-block reveal delay-2">
            <header className="section-header">
              <h2>Start Exploring</h2>
              <p>Each section now lives on its own page.</p>
            </header>
            <div className="page-stack">
              <div className="page-panel">
                <h3>Journal</h3>
                <p>Short essays on learning, building, and noticing.</p>
                <Link className="button-link" to="/journal">
                  Go to Journal
                </Link>
              </div>
              <div className="page-panel">
                <h3>Projects</h3>
                <p>Case studies and experiments with a tactile edge.</p>
                <Link className="button-link" to="/projects">
                  See Projects
                </Link>
              </div>
              <div className="page-panel">
                <h3>Notes</h3>
                <p>Quick snapshots, micro-lessons, and small wins.</p>
                <Link className="button-link" to="/notes">
                  Read Notes
                </Link>
              </div>
            </div>
          </section>
        </div>

        <aside className="column-side">
          <section className="section-block reveal delay-3">
            <h2>About {site.name}</h2>
            <p className="drop-cap">{site.about}</p>
            <div className="side-links">
              <Link to="/about">Full story</Link>
              <Link to="/journey">Journey map</Link>
              <Link to="/notes">Quick notes</Link>
            </div>
          </section>
        </aside>
      </section>
    </>
  )
}

export default Home
