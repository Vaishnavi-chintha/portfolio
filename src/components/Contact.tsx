import { profile } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact__panel">
          <span className="eyebrow contact__eyebrow">Contact</span>
          <h2 className="contact__title">Interested in working together?</h2>
          <p className="contact__desc">
            I'm currently looking for frontend and software engineering roles where I can also bring my AI/ML background.
            Reach out directly or find me on GitHub and LinkedIn.
          </p>
          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
