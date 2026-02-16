import { site } from '../data/site'

function Notes() {
  return (
    <section className="page-hero reveal delay-2">
      <header className="page-intro">
        <p className="kicker">Notes</p>
        <h2 className="page-title">Quick Notes</h2>
        <p className="page-subtitle">Snapshots, reminders, and a few open questions.</p>
      </header>
      <ul className="note-list">
        {site.quickNotes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  )
}

export default Notes
