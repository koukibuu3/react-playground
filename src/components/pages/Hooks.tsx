import React from 'react'
import { Helmet } from 'react-helmet'

import HooksHocCounter from '9-1_hooks_hoc/Counter'
import HooksStateCounter from '9-2_hooks_state/Counter'
import HooksEffectTimer from '9-3_hooks_effect/Timer'
import HooksMemoizeTimer2 from '9-4_hooks_memoize/Timer2'
import HooksMemoizeTimer3 from '9-4_hooks_memoize/Timer3'
import HooksCustomTimer from '9-5_hooks_custom/Timer'
import HooksCustomTimer2 from '9-5_hooks_custom/containers/Timer'

const Hooks: React.VFC = () => (
  <>
    <Helmet>
      <title>Hooks | React Playground</title>
    </Helmet>
    <div className="ui two column grid">
      <div className="column">
        <h2 className="ui header">9-1. Hooksに至るまでの物語</h2>
        <HooksHocCounter max={100} />
      </div>
      <div className="column">
        <h2 className="ui header">9-2. HooksでStateを扱う</h2>
        <HooksStateCounter />
      </div>
      <div className="column">
        <h2 className="ui header">9-3. Hooksで副作用を扱う</h2>
        <HooksEffectTimer limit={90} />
      </div>
      <div className="column">
        <h2 className="ui header">9-4. Hooksにおけるメモ化を理解する</h2>
        <HooksMemoizeTimer2 limit={90} />
      </div>
      <div className="column">
        <h2 className="ui header">9-4. Hooksにおけるメモ化を理解する</h2>
        <HooksMemoizeTimer3 limit={90} />
      </div>
      <div className="column">
        <h2 className="ui header">
          9-5. Custom Hookでロジックを分離・再利用する
        </h2>
        <HooksCustomTimer limit={90} />
      </div>
      <div className="column">
        <h2 className="ui header">
          9-5. Custom Hookでロジックを分離・再利用する
        </h2>
        <HooksCustomTimer2 limit={90} />
      </div>
    </div>
  </>
)

export default Hooks
