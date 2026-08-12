import { experience } from '../data/content'
import SectionHeading from './SectionHeading'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Frontend development"
          description=""
        />
        <ExperienceCard entry={experience} />
      </div>
    </section>
  )
}
