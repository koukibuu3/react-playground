import { Component, ReactElement, SyntheticEvent } from 'react'
import { Button, Card, Statistic } from 'semantic-ui-react'
import 'App.css'

type State = { count: number }

class Counter extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props)
    this.state = { count: 0 }
  }

  // アロー関数で定義
  reset = (e: SyntheticEvent): void => {
    // this.state.count = 0
    e.preventDefault()
    this.setState({ count: 0 })
  }

  // 従来型の関数定義
  increment(): void {
    // ここで参照するstateはその時点の最新の値であると保証されないため以下のように関数をsetStateに渡す形を取る
    this.setState((state) => ({ count: state.count + 1 }))
  }

  render(): ReactElement {
    const { count } = this.state

    return (
      <div className="container">
        <span>---- ここからカウンターコンポーネント（class） ----</span>
        <header>
          <h1>カウンター</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              <Button color="red" onClick={this.reset}>
                Reset
              </Button>
              <Button color="green" onClick={() => this.increment()}>
                +1K
              </Button>
            </div>
          </Card.Content>
        </Card>
        <span>---- ここまでカウンターコンポーネント（class） ----</span>
      </div>
    )
  }
}

export default Counter
