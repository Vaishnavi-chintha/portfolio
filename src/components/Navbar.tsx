import { useEffect, useState } from 'react'
import { profile } from '../data/content'

const LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#top">
          <span className="navbar__mark" aria-hidden="true">V.</span>
          <span>Vaishnavi Chintha</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} className="navbar__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary btn--sm navbar__cta" href={`mailto:${profile.email}`}>
          Get in touch
        </a>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar__toggle-bars">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav id="mobile-nav" className="navbar__mobile" data-open={open} aria-label="Mobile" aria-hidden={!open}>
        {LINKS.map((link) => (
          <a key={link.href} className="navbar__mobile-link" href={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            {link.label}
          </a>
        ))}
        <div className="navbar__mobile-actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  )
}
