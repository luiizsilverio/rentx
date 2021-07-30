import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;
  background-color: ${props => props.theme.colors.header};
  justify-content: center;
  padding: 25px;  
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.shape};
  font-family: ${props => props.theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  margin-top: 24px;
`;

export const SubTitle = styled.Text`
  color: ${props => props.theme.colors.shape};
  font-family: ${props => props.theme.fonts.secondary_400};
  font-size: ${RFValue(16)}px;
  margin-top: 24px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 16px;
`;

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;

export const AppointmentsQtd = styled.Text`
  color: ${props => props.theme.colors.title};
  font-family: ${props => props.theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;

export const CarWrapper = styled.View`
  margin-bottom: 16px;

`;

export const CarFooter = styled.View`
  width: 100%auto;
  padding: 12px;
  
`;

export const CarFooterTitle = styled.Text`
`;

export const CarFooterPeriod = styled.Text`
`;

export const CarFooterDate = styled.Text`
`;

4:40