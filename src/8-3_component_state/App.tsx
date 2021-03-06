import { Component, ReactElement } from 'react'

import CharacterList, { Character } from './CharacterList'

class App extends Component {
  characters: Character[] = [
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

  render(): ReactElement {
    return (
      <div className="container">
        <CharacterList school="湘北高校" characters={this.characters} />
      </div>
    )
  }
}

export default App
