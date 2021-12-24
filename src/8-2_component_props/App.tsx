import { VFC } from 'react'

import Greets from './Greets'
import CharacterList, { Character } from './CharacterList'

const App: VFC = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: '桜木花道',
      grade: 1,
      height: 189.2,
    },
    {
      id: 2,
      name: '三井 寿',
      grade: 3,
    },
  ]

  return (
    <div className="container">
      <CharacterList school="湘北高校" characters={characters} />
      <div>
        <Greets name="Patty" times={2} />
      </div>
    </div>
  )
}

export default App
