import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from 'reportWebVitals'

import ComponentPropsApp from '8-2_component_props/App'
import ComponentStateApp from '8-3_component_state/App'
import ComponentStateCounter from '8-3_component_state/Counter'
import ComponentLifecycleTimer from '8-4_component_lifecycle/Timer'
import HooksHocCounter from '9-1_hooks_hoc/Counter'
import HooksStateCounter from '9-2_hooks_state/Counter'
import HooksEffectTimer from '9-3_hooks_effect/Timer'
import HooksMemoizeTimer2 from '9-4_hooks_memoize/Timer2'
import HooksMemoizeTimer3 from '9-4_hooks_memoize/Timer3'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ComponentPropsApp />
    <ComponentStateApp />
    <ComponentStateCounter />
    <ComponentLifecycleTimer />
    <HooksHocCounter max={100} />
    <HooksStateCounter />
    <HooksEffectTimer limit={90} />
    <HooksMemoizeTimer2 limit={90} />
    <HooksMemoizeTimer3 limit={90} />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
