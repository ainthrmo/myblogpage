import { posts } from '../data/posts'

function Journal() {
  return (
    <section className="page-hero reveal delay-2">
      <header className="page-intro">
        <p className="kicker">Journal</p>
        <h2 className="page-title">Journal Highlights</h2>
        <p className="page-subtitle">Short essays on learning, building, and noticing.</p>
      </header>
      <div className="articles">
        {posts.map((post) => (
          <article className="article" key={post.slug}>
            {post.image && (
              <div className="article-media">
                <img src={post.image} alt={post.title} />
              </div>
            )}
            <div className="article-meta">
              <span>{post.type}</span>
              <span>{post.readingTime}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Journal
