import React, { useState } from  'react'

import Card from '../../components/card'

import { getCharactersByName } from '../../services'

import {
  HomeWrapper,
  Logo,
  Container,
  SearchWrapper,
  Input,
  SearchButton,
} from './home.styles'

const Home = () => {
  const [input, setInput] = useState() as any
  const [characters, setCharacters] = useState([] as Array<any>)

  const getCharacters = () => {
    getCharactersByName({
      name: input,
      fields: `
        name,
        image,
      `
    }).then(resp => {
      setCharacters(resp as any)
    })
  }

  return (
    <HomeWrapper>
      <SearchWrapper>
        <Logo src="https://hyperpix.net/wp-content/uploads/2020/04/rick-and-morty-logo-font-free-download-1200x679.jpg" alt="rick and morty logo" />
        <Input type="text" onChange={(e: any) => setInput(e.target.value)} />
        
        <SearchButton onClick={getCharacters}>
          Search
        </SearchButton>
      </SearchWrapper>

      <Container>
        {
          characters ? characters.map(({ name, image }, index) => (
            <Card title={name} image={image} key={`character-${index}`} />
          ))
          : <span style={{color: 'white'}}>Characters not found</span>
        }
      </Container>
    </HomeWrapper>
  )
}

export default Home