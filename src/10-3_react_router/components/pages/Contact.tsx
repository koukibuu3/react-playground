import React from 'react'

const Contact: React.VFC<{ destAddress: string }> = ({ destAddress }) => (
  <>
    <h1>Contact</h1>
    <address>{destAddress}</address>
  </>
)

export default Contact
