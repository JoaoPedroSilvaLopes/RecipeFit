import { HStack } from 'native-base'
import styled from 'styled-components/native'

export const Container = styled(HStack)`
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: ${(props) =>
    props.theme.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colors.background};
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  position: absolute;
`

export const ActionGroup = styled(HStack)`
  gap: 5px;
  right: 40%;
`
