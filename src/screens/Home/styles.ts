import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background_primary};
`

export const Header = styled.View`
  font-family: ${props => props.theme.fonts.secondary_600};
  width: 100%;
  height: 113px;
  background-color: ${props => props.theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px;
  `

export const HeaderContent = styled.View`
justify-content: space-between;
flex-direction: row;
align-items: center;
`

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${props => props.theme.fonts.primary_400};
  color: ${props => props.theme.colors.text};
`

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 24 },
  showsVerticalScrollIndicator: false
})``
