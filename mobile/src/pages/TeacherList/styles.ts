import { RectButton, ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #F0F0F7;
`;

export const TeacherListView = styled(ScrollView)`
  margin-top: -40px;
`;

export const SearchForm = styled.View`
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  color: #D4C2FF;
  font-family: Poppins_400Regular;
`;

export const Input = styled.TextInput`
  height: 54px;
  background-color: #FFF;
  border-radius: 8px;
  justify-content: center;
  padding: 0px 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const SubmitButton = styled(RectButton)`
  background-color: #04D361;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const SubmitButtonText = styled.Text`
  color: #FFF;
  font-family: Archivo_700Bold;
  font-size: 16px;
`;
