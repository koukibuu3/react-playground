/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable react/no-deprecated */
/* eslint-disable no-undef */

/**
 * 動かない
 */

import React from 'react'

const ContentMixin = {
  getInitialState: () => ({ count: 0 }),
  reset: () => {
    this.setState({ count: 0 })
  },
  increment: () => {
    this.setState((state) => ({ count: state.count + 1 }))
  },
  componentDidUpdate: () => {
    if (this.state.count > this.props.max) this.reset()
  },
}

const CounterComponent = React.createClass({
  propTypes: {
    max: React.PropTypes.number.isRequired,
  },
  mixins: [ContentMixin],

  render: () => {
    const { count } = this.state

    return (
      <div>
        <div>
          {count} / {max}
        </div>
        <button onClick={reset} type="button">
          Reset
        </button>
        <button onClick={increment} type="button">
          +1
        </button>
      </div>
    )
  },
})

export default CounterComponent

/* eslint-enable */
