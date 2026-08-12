import { profile, education } from '../data/content'
import Reveal from './Reveal'
import graduationPhoto from '../assets/graduation-photo.jpeg'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Frontend Engineering · AI/ML </span>
          <h1 className="hero__title">{profile.name}</h1>
          {/* <p className="hero__tagline">Building interfaces. Researching planning systems.</p> */}
          <p className="hero__lede">
            Computer Science graduate ({education.honours}, {education.gpa}) at {education.school.split(',')[0]} with experience in React, frontend development, machine learning, and AI research - most recently publishing on hybrid LLM-guided planning for personalised learning. I enjoy working across the stack - from turning Figma designs into interfaces to building and evaluating ML models.
            
          </p>

          <div className="hero__meta">
            <span>{profile.location}</span>
            <span>{profile.workAuth}</span>
          </div>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View Work
            </a>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
          </div>
        </div>

        <Reveal className="hero__photo-frame" delay={100}>
          <img
            className="hero__photo"
            src={graduationPhoto}
            alt="Vaishnavi Chintha in graduation attire at Dubai Opera"
          />
        </Reveal>
      </div>
    </section>
  )
}
