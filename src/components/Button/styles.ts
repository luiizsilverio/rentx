import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
  color?: string
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color || props.theme.colors.main}
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.primary_500};
  color: ${props => props.theme.colors.shape};
  font-size: ${RFValue(15)}px;  
`;
