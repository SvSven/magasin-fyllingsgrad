import React from 'react'

type CellProps = {
  children: React.ReactNode
}

export const Cell = ({ children, ...rest }: CellProps) => (
  <div className="cell" {...rest}>
    {children}
  </div>
)
