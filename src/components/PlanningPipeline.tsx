import { research } from '../data/content'

export default function PlanningPipeline() {
  return (
    <ol className="pipeline" aria-label="Planning pipeline, high-level goal to goal satisfied">
      {research.pipeline.map((step, i) => {
        const isGoal = i === research.pipeline.length - 1
        return (
          <li className={`pipeline-step ${isGoal ? 'pipeline-step--goal' : ''}`} key={step.label}>
            <span className="pipeline-step__rail" aria-hidden="true">
              <span className="pipeline-step__node" />
              <span className="pipeline-step__line" />
            </span>
            <span className="pipeline-step__body">
              <span className="pipeline-step__label">
                <span className="pipeline-step__index">S{i}</span>
                {step.label}
              </span>
            </span>
          </li>
        )
      })}
    </ol>
  )
}
