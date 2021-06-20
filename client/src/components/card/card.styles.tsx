import styled from 'styled-components'

export const Card = styled.div`
  max-width: 180px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  overflow: hidden;
`
export const CardTitle = styled.span`
  display: block;
  padding: 8px;
  margin-bottom: 4px;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    color: lightblue;
  }
`

export const CardImage = styled.img`
  max-width: 100%;
  display: block;
`