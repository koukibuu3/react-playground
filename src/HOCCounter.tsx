/* eslint-disable react/destructuring-assignment */

import React, { FC, Component, ReactElement } from 'react'

type InjectedProps = {
  count: number
  reset: () => void
  increment: () => void
}
type Props = { max: number }
type State = { count: number }

const withCounter = (WrappedComponent: FC<Props & Partial<InjectedProps>>) =>
  class EnhancedComponent extends Component<Props, State> {
    constructor(props: Props) {
      super(props)
      this.state = { count: 0 }
    }

    componentDidUpdate = (): void => {
      if (this.state.count > this.props.max) this.reset()
    }

    reset = (): void => this.setState({ count: 0 })
    increment = (): void =>
      this.setState((state) => ({ count: state.count + 1 }))

    render = (): ReactElement => (
      <WrappedComponent
        max={this.props.max}
        count={this.state.count}
        reset={this.reset}
        increment={this.increment}
      />
    )
  }

const CounterComponent: FC<Props & Partial<InjectedProps>> = ({
  max,
  count = 0,
  reset = () => undefined,
  increment = () => undefined,
}) => (
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

export default withCounter(CounterComponent)
