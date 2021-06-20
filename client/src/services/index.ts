import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient, gql } from 'apollo-boost'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  link: httpLink,
  cache,
})

export const getCharactersByName = async ({ name, fields }: { name: string, fields: string }) => {
  let characterList

  await client.query({
    query: gql`
      {
        charactersByName(name: "${name}") {
          ${fields}
        }
      }
    `
  }).then(resp => characterList = resp.data.charactersByName).catch(e => console.log(e))

  return characterList
}
