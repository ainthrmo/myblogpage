import { site } from '../data/site'
import { posts } from '../data/posts'

function Journey() {
  return (
    <section className="page-hero reveal delay-2">
      <header className="page-intro">
        <p className="kicker">Journey</p>
        <h2 className="page-title">The Journey So Far</h2>
        <p className="page-subtitle">
          A living timeline of experiments, lessons, and turning points.
        </p>
      </header>
      <div className="page-stack">
        {site.featureCards.map((card) => (
          <article className="page-panel" key={card.title}>
            <p className="meta">{card.meta}</p>
            <h3>{card.title}</h3>
            <p>{card.summary}</p>
          </article>
        ))}
      </div>
      <div className="section-block">
        <h3 className="page-title">Recent Entries</h3>
        <div className="articles">
          {posts.map((post) => (
            <article className="article" key={post.slug}>
              <div className="article-meta">
                <span>{post.type}</span>
                <span>{post.readingTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journey
