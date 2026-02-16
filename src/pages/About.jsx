import { site } from '../data/site'

function About() {
  return (
    <section className="page-hero reveal delay-2">
      <header className="page-intro">
        <p className="kicker">About</p>
        <h2 className="page-title">About {site.name}</h2>
        <p className="page-subtitle">The people, the process, and the creative north star.</p>
      </header>
      <div className="page-stack">
        <div className="page-panel">
          <p className="drop-cap">{site.about}</p>
        </div>
        <div className="page-panel newsletter">
          <h3>Newsletter</h3>
          <p>Monthly highlights, curated links, and project updates.</p>
          <form
            className="newsletter-form"
            action="mailto:hello@ainn.blog"
            method="post"
            encType="text/plain"
          >
            <input type="email" name="email" placeholder="your@email.com" />
            <button className="primary" type="submit">
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default About
