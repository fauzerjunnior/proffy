import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

export const Title = styled.Text`
  font-size: 50px;
`;

export const Banner = styled.Image`
  width: 100%;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
  font-family: Poppins_400Regular;
`;

export const TextBold = styled.Text`
  font-family: Poppins_600SemiBold;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const ButtonPrimary = styled(RectButton)`
  height: 150px;
  width: 48%;
  background-color: #9871f5;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const ButtonSecondary = styled(RectButton)`
  height: 150px;
  width: 48%;
  background-color: #04d361;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const IconButton = styled.Image``;

export const TextButton = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 20px;
`;

export const ConnectionText = styled.Text`
  font-family: Poppins_400Regular;
  color: #d4c2ff;
  font-size: 13px;
  line-height: 20px;
  max-width: 160px;
  margin-top: 40px;
`;

export const Icon = styled.Image``;
