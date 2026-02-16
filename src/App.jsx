import './App.css'
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom'
import { site } from './data/site'
import Home from './pages/Home'
import Journal from './pages/Journal'
import Projects from './pages/Projects'
import Notes from './pages/Notes'
import About from './pages/About'
import Journey from './pages/Journey'

function SiteLayout() {
  return (
    <div className="page">
      <div className="page-texture" aria-hidden="true" />

      <header className="masthead">
        <div className="masthead-left reveal delay-1">
          <span className="eyebrow">{site.title}</span>
          <h1 className="logo-type">{site.name}</h1>
          <p className="tagline">{site.tagline}</p>
        </div>
        <nav className="nav reveal delay-2" aria-label="Primary">
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/" end>
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/journal">
            Journal
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/projects">
            Projects
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/notes">
            Notes
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about">
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `ghost button-link${isActive ? ' active' : ''}`
            }
            to="/journey"
          >
            Journey
          </NavLink>
        </nav>
        <div className="issue reveal delay-3">{site.issue}</div>
      </header>

      <main className="page-main">
        <Outlet />
      </main>

      <footer className="footer" id="contact">
        <div>
          <span className="logo-mark">{site.name}</span>
          <p>Portfolio blog - Crafted with curiosity</p>
        </div>
        <div className="footer-links">
          {site.social.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
