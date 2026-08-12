import { research } from '../data/content'
import SectionHeading from './SectionHeading'
import PlanningPipeline from './PlanningPipeline'
import Metric from './Metric'
import Reveal from './Reveal'

// log-scale positions so both bars stay legible despite the ~13,500x gap
const HYBRID_STATES_PCT = (Math.log10(research.metrics.hybridStates) / Math.log10(research.metrics.monolithicStates)) * 100
const COST_MAX = Math.max(research.metrics.hybridCost, research.metrics.monolithicCost)

export default function Research() {
  return (
    <section id="research" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Research"
          title="Research in AI planning"
          description="A hybrid LLM-guided planning system for personalised learning interventions."
        />

        <div className="research__grid">
          <Reveal className="research__panel">
            <span className="eyebrow">Publication</span>
            <h3 className="research__title">{research.title}</h3>
            <p className="research__byline">
              <strong>{research.authors}</strong>
            </p>
            <p className="research__venue">{research.venue}</p>
            <span className="research__status">{research.status}</span>

            <p className="research__summary">{research.summary}</p>
            <p className="research__model">Model: {research.model}</p>
            <p className="research__model" style={{ marginTop: 4 }}>
              {research.note}
            </p>

            <div className="research__actions">
              {research.paperUrl ? (
                <a className="btn btn--primary" href={research.paperUrl} target="_blank" rel="noreferrer noopener">
                  Read Paper
                </a>
              ) : (
                <span className="btn btn--disabled" aria-disabled="true">
                  Read Paper — link coming soon
                </span>
              )}
            </div>

            <div className="research__metrics">
              <Metric
                value={research.metrics.reductionLabel}
                label={research.metrics.reductionSub}
                sub={`${research.metrics.hybridStates} vs ${research.metrics.monolithicStates.toLocaleString()} states`}
              />
              <Metric
                value={`${research.metrics.hybridCost} vs ${research.metrics.monolithicCost}`}
                label="plan actions (hybrid vs optimal)"
              />
            </div>


          </Reveal>

          <Reveal delay={100} className="research__panel">
            <span className="eyebrow">Pipeline</span>
            <h3 className="research__title" style={{ fontSize: 19, marginBottom: 24 }}>
              Goal to plan
            </h3>
            <PlanningPipeline />
                        <div className="stat-compare" aria-hidden="false">
              <div className="stat-compare__row">
                <span>Hybrid</span>
                <span className="stat-compare__track">
                  <span className="stat-compare__fill stat-compare__fill--hybrid" style={{ width: `${HYBRID_STATES_PCT}%` }} />
                </span>
                <span className="stat-compare__value">{research.metrics.hybridStates} states</span>
              </div>
              <div className="stat-compare__row">
                <span>Monolithic</span>
                <span className="stat-compare__track">
                  <span className="stat-compare__fill" style={{ width: '100%' }} />
                </span>
                <span className="stat-compare__value">{research.metrics.monolithicStates.toLocaleString()} states</span>
              </div>
              <div className="stat-compare__row">
                <span>Hybrid cost</span>
                <span className="stat-compare__track">
                  <span
                    className="stat-compare__fill stat-compare__fill--hybrid"
                    style={{ width: `${(research.metrics.hybridCost / COST_MAX) * 100}%` }}
                  />
                </span>
                <span className="stat-compare__value">{research.metrics.hybridCost} actions</span>
              </div>
              <div className="stat-compare__row">
                <span>Optimal cost</span>
                <span className="stat-compare__track">
                  <span className="stat-compare__fill" style={{ width: `${(research.metrics.monolithicCost / COST_MAX) * 100}%` }} />
                </span>
                <span className="stat-compare__value">{research.metrics.monolithicCost} actions</span>
              </div>
            </div>
            <p className="research__caveat">{research.caveat}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
