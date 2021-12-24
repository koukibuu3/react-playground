import { VFC } from 'react'

import Greets from './Greets'
import CharacterList, { Character } from './CharacterList'
import 'App.css'

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
    {
      id: 3,
      name: '赤木剛憲',
      grade: 3,
      height: 197,
    },
  ]

  return (
    <div className="container">
      <div>
        <Greets name="Patty" times={4} />
      </div>

      <header>
        <h1>『SLAM DUNK』登場人物</h1>
      </header>
      <CharacterList school="湘北高校" characters={characters} />
    </div>
  )
}

export default App
