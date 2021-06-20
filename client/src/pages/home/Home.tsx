import React, { useState } from  'react'

import Card from '../../components/card'

import { getCharactersByName } from '../../services'

const Home = () => {
  const [input, setInput] = useState() as any
  const [characters, setCharacters] = useState([] as Array<any>)

  const getCharacters = () => {
    getCharactersByName({
      name: input,
      fields: `
        name,
      `
    }).then(resp => {
      console.log(resp)
      setCharacters(resp as any)
    })
  }

  return (
    <div>
      <input type="text" onChange={(e: any) => setInput(e.target.value)} />
      
      <button onClick={getCharacters}>
        Buscar
      </button>

      {
        characters.map((character, index) => (
          <Card key={`character-${index}`}>
            {character.name}
          </Card>
        ))
      }
    </div>
  )
}

export default Home