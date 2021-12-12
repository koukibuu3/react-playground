import React from 'react'

type Props = {
  name: string
  times?: number // eslint-disable-line
}

const Greets: React.FunctionComponent<Props> = (props) => {
  const { name, times = 1, children } = props

  return (
    <>
      {/* eslint-disable-next-line */}
      {[...Array(times)].map((_) => (
        <p>
          Hello, {name}! {children}
        </p>
      ))}
    </>
  )
}

export default Greets
