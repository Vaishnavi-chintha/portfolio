import { profile, education } from '../data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

// If you'd like to add a photo, drop the image into /public (e.g. as
// profile.jpg) and set this to its path, e.g. '/profile.jpg'.
const photoSrc: string | undefined = undefined

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About" title="CS graduate working across frontend and AI/ML research" />

        <div className={`about__grid ${photoSrc ? '' : 'about__grid--full'}`}>
          <Reveal className="about__text">
            <p>
              I'm a Computer Science graduate specialising in artificial intelligence, machine learning, and automated planning with hands-on frontend development. 
            </p>
            <p>
              My frontend experience comes from an internship rebuilding a production web interface end to end, and from a React Native app built with a team. My research background centres on a published hybrid LLM-guided planning system, alongside coursework and independent projects spanning NLP, reinforcement learning, and data analysis.
              I tend to gravitate toward projects where there's something new to figure out.
            </p>
          </Reveal>

          {photoSrc && (
            <Reveal delay={80} className="about__photo-card">
              <img src={photoSrc} alt={profile.name} />
              <p className="about__photo-caption">{profile.location}</p>
            </Reveal>
          )}
        </div>

        <Reveal delay={120} className="about__facts">
          <div className="about__fact">
            <span className="about__fact-label">Education</span>
            <span className="about__fact-value">
              {education.degree} · {education.school} · {education.honours}, {education.gpa} · {education.dates}
            </span>
          </div>
          <div className="about__fact">
            <span className="about__fact-label">Location</span>
            <span className="about__fact-value">{profile.location}</span>
          </div>
          <div className="about__fact">
            <span className="about__fact-label">Status</span>
            <span className="about__fact-value">{profile.workAuth}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
