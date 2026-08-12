import { projects } from '../data/content'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="A mix of applied ML systems, a shipped mobile app, and smaller planning and data projects."
        />
        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard project={project} key={project.id} delay={(i % 3) * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}
