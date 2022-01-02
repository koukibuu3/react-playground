import { VFC } from 'react'
import { useHistory } from 'react-router-dom'

const HistoryButtons: VFC = () => {
  const history = useHistory()

  return (
    <>
      <button type="button" onClick={() => history.goBack()}>
        戻る
      </button>
      <button type="button" onClick={() => history.push('/')}>
        トップページへ
      </button>
    </>
  )
}

export default HistoryButtons
