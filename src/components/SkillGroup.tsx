import Reveal from './Reveal'

export default function SkillGroup({ title, skills, delay = 0 }: { title: string; skills: string[]; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <h3 className="skill-group__title">{title}</h3>
      <div className="skill-group__list">
        {skills.map((skill) => (
          <span className="skill-chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </Reveal>
  )
}
