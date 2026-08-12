import { skillGroups } from '../data/content'
import SectionHeading from './SectionHeading'
import SkillGroup from './SkillGroup'

export default function TechStack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <SectionHeading eyebrow="Stack" title="Languages, tools, and frameworks" />
        <div className="tech-stack__grid">
          {skillGroups.map((group, i) => (
            <SkillGroup title={group.title} skills={group.skills} key={group.title} delay={(i % 3) * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}
