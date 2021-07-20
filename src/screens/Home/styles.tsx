import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background_primary};
`

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.secondary_600};
  font-size: 30px;
`