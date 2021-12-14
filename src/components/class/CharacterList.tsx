import { Component, ReactElement } from 'react'
import { Header, Icon, Item } from 'semantic-ui-react'

export type Character = {
  id: number
  name: string
  grade: number
  height?: number
}

type Props = {
  school: string
  characters: Character[]
}

/* eslint-disable react/prefer-stateless-function */
class CharacterList extends Component<Props> {
  render(): ReactElement {
    const { school, characters } = this.props

    return (
      <>
        <Header as="h2">{school}</Header>
        <Item.Group>
          {characters.map((character) => (
            <Item key={character.id}>
              <Icon name="user circle" size="huge" />
              <Item.Content>
                <Item.Header>{character.name}</Item.Header>
                <Item.Meta>{character.name}</Item.Meta>
                <Item.Meta>{character.grade}年生</Item.Meta>
                <Item.Meta>{character.height ?? '???'} cm</Item.Meta>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </>
    )
  }
}
/* eslint-enable react/prefer-stateless-function */

export default CharacterList
