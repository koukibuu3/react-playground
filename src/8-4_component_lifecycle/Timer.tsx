import { Component, ReactElement } from 'react'
import { Button, Card, Icon, Statistic } from 'semantic-ui-react'

const LIMIT = 60
type State = { timeLeft: number }

class Timer extends Component<unknown, State> {
  // eslint-disable-next-line react/sort-comp
  timerId: NodeJS.Timer | null = null

  constructor(props: unknown) {
    super(props)
    this.state = { timeLeft: LIMIT }
  }

  componentDidMount = (): void => {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentDidUpdate = (): void => {
    const { timeLeft } = this.state
    if (timeLeft === 0) this.reset()
  }

  componentWillUnmount = (): void => {
    if (this.timerId) clearInterval(this.timerId)
  }

  tick = (): void =>
    this.setState((prevState) => ({ timeLeft: prevState.timeLeft - 1 }))

  reset = (): void => this.setState({ timeLeft: LIMIT })

  // eslint-disable-next-line react/require-render-return
  render = (): ReactElement => {
    const { timeLeft } = this.state

    return (
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>time</Statistic.Label>
          <Statistic.Value>{timeLeft}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <Button color="red" fluid onClick={this.reset}>
            <Icon name="redo" />
            Reset
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

export default Timer
