import { achievements } from '../data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Achievements() {
  return (
    <section id="achievements" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="Achievements" title="Awards & extracurricular" />
        <div className="achievements__grid">
          {achievements.map((item) => (
            <Reveal as="div" className="achievement" key={item.title}>
              <div>
                <div className="achievement__title">{item.title}</div>
                <div className="achievement__org">{item.org}</div>
              </div>
              <span className="achievement__date">{item.date}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
