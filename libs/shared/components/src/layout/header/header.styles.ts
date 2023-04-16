import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  flex-direction: row;
  text-align: center;
`

export const Title = styled.Text`
  color: ${props => props.theme.colorPalette.primary};
  font-size: 30px;
  font-weight: bold;
  position: absolute;
`

export const ActionGroup = styled.View`
  margin-right: auto;
  gap: 8px;
  flex-direction: row;
`
