import { profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {year} {profile.name}
        </span>
        <span>Built with React, TypeScript &amp; Vite</span>
      </div>
    </footer>
  )
}
