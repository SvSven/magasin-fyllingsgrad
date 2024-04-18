import React from 'react'
import './RadialProgress.css'

export type RadialProgressProps = {
  percentage: number
  barColor?: string
  labelColor?: string
  fontColor?: string
  shadow?: boolean
  shadowColor?: string
}

export const RadialProgress = ({
  percentage,
  barColor,
  labelColor,
  fontColor,
  shadow = true,
  shadowColor,
  ...rest
}: RadialProgressProps) => {
  const customStyles = {
    ...(barColor && { '--bar-color': barColor }),
    ...(labelColor && { '--label-color': labelColor }),
    ...(fontColor && { '--font-color': fontColor }),
    ...(shadowColor && { '--shadow-color': fontColor }),
  } as React.CSSProperties

  return (
    <div className="radial-progress-wrapper" style={customStyles} {...rest}>
      <div className="rp-container" style={{ '--percentage': percentage } as React.CSSProperties}>
        <span className="rp-label has-text-weight-bold">
          {percentage}
          <span className="rp-label-percentage">%</span>
        </span>
        <div className="rp-circle" style={percentage > 50 ? { clip: 'rect(auto, auto, auto, auto)' } : {}}>
          <div className="rp-half-circle" style={{ transform: `rotate(${percentage * 3.6}deg)` }}></div>
          <div
            className="rp-half-circle"
            style={percentage <= 50 ? { display: 'none' } : { transform: 'rotate(180deg)' }}
          ></div>
        </div>
        {shadow && <div className="rp-shadow"></div>}
      </div>
    </div>
  )
}
