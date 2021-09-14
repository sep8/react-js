import React from 'react'

export const Component = ({ name, children }) => {

  return <div style={{ padding: 10, boder: '1px solid #ededed' }}>
    <h3>{name}</h3>
    {children}
  </div>
}