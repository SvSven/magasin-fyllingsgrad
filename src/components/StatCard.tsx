import { convertToPercentage } from '../util'

export type StatCardProps = {
  name: string
  description: string
  level: number
}

export const StatCard = ({ name, description, level }: StatCardProps) => {
  const levelPercentage = convertToPercentage(level)

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{name}</p>
        <div className="card-header-icon">
          <span className="tag is-primary">{levelPercentage}%</span>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <p>{description}</p>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-footer-item">
          <progress className="progress is-primary is-large" value={levelPercentage} max="100">
            {levelPercentage}%
          </progress>
        </div>
      </div>
    </div>
  )
}
