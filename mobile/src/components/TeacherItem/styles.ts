import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #FFF;
  border: 1px #E6E6F0;
  border-radius: 8px;
  margin-bottom: 16px; /* CUSTOM */
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #EEE;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-family: Archivo_700Bold;
  color: #32264D;
  font-size: 20px;
`;

export const Subject = styled.Text`
  font-family: Poppins_400Regular;
  color: #6A6180;
  font-size: 12px;
  margin-top: 4px; 
`;

export const Bio = styled.Text`
  margin: 0px 24px 14px;
  font-family: Poppins_400Regular;
  font-size: 14px;
  line-height: 24px;
  color: #6A6180;
`;

export const Footer = styled.View`
  background-color: #FAFAFC;
  padding: 24px;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: Poppins_400Regular;
  color: #6A6180;
  font-size: 14px;
`;

export const PriceValue = styled.Text`
  font-family: Archivo_700Bold;
  color: #8257E5;
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

interface FavoriteButtonProps {
  favorited: boolean;
}

export const FavoriteButton = styled(RectButton)<FavoriteButtonProps>`
  background-color: ${((props) => (props.favorited ? '#E33D3D' : '#8257E5'))};
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const IconButton = styled.Image``;

export const ContactButton = styled(RectButton)`
  background-color: #04D361;
  flex: 1;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButtonText = styled.Text`
  color: #FFF;
  font-family: Archivo_700Bold;
  font-size: 16px;
  margin-left: 16px;
`;
