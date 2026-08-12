import type { ExperienceEntry } from '../data/content'
import Reveal from './Reveal'

export default function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <Reveal className="experience-card">
      <div className="experience-card__head">
        <div>
          <span className="experience-card__company">{entry.company} · {entry.location}</span>
          <h3 className="experience-card__role">{entry.role}</h3>
        </div>
        <span className="experience-card__meta">{entry.dates}</span>
      </div>

      <ul className="experience-card__bullets">
        {entry.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <div className="experience-card__pipeline" aria-label="Workflow: Figma to maintainable frontend">
        {entry.pipeline.map((step, i) => (
          <span className="pipeline-chip" key={step}>
            <span className="pipeline-chip__label">{step}</span>
            {i < entry.pipeline.length - 1 && (
              <span className="pipeline-chip__arrow" aria-hidden="true">
                →
              </span>
            )}
          </span>
        ))}
      </div>
    </Reveal>
  )
}
