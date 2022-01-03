import React from 'react'
import { Helmet } from 'react-helmet'

import ComponentPropsApp from '8-2_component_props/App'
import ComponentStateApp from '8-3_component_state/App'
import ComponentStateCounter from '8-3_component_state/Counter'
import ComponentLifecycleTimer from '8-4_component_lifecycle/Timer'

const Home: React.VFC = () => (
  <>
    <Helmet>
      <title>Home | React Playground</title>
    </Helmet>
    <div className="ui two column grid">
      <div className="column">
        <h2 className="ui header">8-2. コンポーネントとProps</h2>
        <ComponentPropsApp />
      </div>
      <div className="column">
        <h2 className="ui header">8-3. コンポーネントで学ぶState</h2>
        <ComponentStateApp />
      </div>
      <div className="column">
        <h2 className="ui header">8-3. コンポーネントで学ぶState</h2>
        <ComponentStateCounter />
      </div>
      <div className="column">
        <h2 className="ui header">8-4. コンポーネントのライフサイクル</h2>
        <ComponentLifecycleTimer />
      </div>
    </div>
  </>
)

export default Home
