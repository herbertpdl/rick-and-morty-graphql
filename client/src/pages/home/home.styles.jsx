import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 0;
  background-color: #262c3a;
  overflow: auto;
`

export const Logo = styled.img`
  max-width: 200px;
  margin-right: 8px;
`

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  height: 32px;
  margin-right: 4px;
  border: 1px solid #14b1c8;
  border-radius: 6px;
  box-sizing: border-box;
  outline: 0;

  &:focus {
    border-color: #cadc52;
  }
`

export const SearchButton = styled.button`
  height: 32px;
  border: 0;
  border-radius: 3px;
  color: #262c3a;
  background: #cadc52;
  font-size: 16px;
  font-weight: semibold;
  border: 1px solid #14b1c8;
  cursor: pointer;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  gap: 24px;
  margin: 0 auto;
`