import React from 'react'
import './ProgressBar.css'

export type ProgressBarProps = {
  percentage: number
}

export const ProgressBar = ({ percentage, ...rest }: ProgressBarProps) => {
  return (
    <div className="pie-wrapper m-5" style={{ '--percentage': percentage } as React.CSSProperties} {...rest}>
      <span className="pie-label has-text-weight-bold">
        {percentage}
        <span className="label-percentage">%</span>
      </span>
      <div className="pie" style={percentage > 50 ? { clip: 'rect(auto, auto, auto, auto)' } : {}}>
        <div className="left-side half-circle" style={{ transform: `rotate(${percentage * 3.6}deg)` }}></div>
        <div
          className="right-side half-circle"
          style={percentage <= 50 ? { display: 'none' } : { transform: 'rotate(180deg)' }}
        ></div>
      </div>
      <div className="shadow"></div>
    </div>
  )
}
