import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="page-hero reveal delay-2">
      <header className="page-intro">
        <p className="kicker">Projects</p>
        <h2 className="page-title">Featured Projects</h2>
        <p className="page-subtitle">Case studies and experiments (details coming soon).</p>
      </header>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            {project.image && (
              <div className="project-media">
                <img src={project.image} alt={project.name} />
              </div>
            )}
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span className="tag">{project.tag}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
