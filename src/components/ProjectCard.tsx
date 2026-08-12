import type { Project } from '../data/content'
import Reveal from './Reveal'

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const hasLinks = project.repoUrl || project.demoUrl

  return (
    <Reveal
      delay={delay}
      className={`project-card ${project.size === 'large' ? 'project-card--large' : 'project-card--small'}`}
    >
      <span className="project-card__category">{project.category}</span>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      {project.detail && (
        <div className="project-card__detail">
          {project.detail.map((row) => (
            <div className="project-card__detail-row" key={row.label}>
              <span className="project-card__detail-label">{row.label}</span>
              <span className="project-card__detail-value">{row.value}</span>
            </div>
          ))}
        </div>
      )}

      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span className="project-card__tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="project-card__links">
        {project.repoUrl && (
          <a className="btn btn--ghost btn--sm" href={project.repoUrl} target="_blank" rel="noreferrer noopener">
            View Code
          </a>
        )}
        {project.demoUrl && (
          <a className="btn btn--ghost btn--sm" href={project.demoUrl} target="_blank" rel="noreferrer noopener">
            Live Demo
          </a>
        )}
        {!hasLinks && <span className="project-card__link-placeholder">Repository link — add in content.ts</span>}
      </div>
    </Reveal>
  )
}
