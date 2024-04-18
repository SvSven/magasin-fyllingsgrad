import React from 'react'

type GridWrapperProps = {
  type?: string
  children: React.ReactNode
}

export const Wrapper = ({ type, children }: GridWrapperProps) => {
  const Container = ({ children }: { children: React.ReactNode }) =>
    type === 'fixed' ? <div className="fixed-grid has-1-cols-mobile">{children}</div> : <></>

  return (
    <Container>
      <div className="grid">{children}</div>
    </Container>
  )
}
