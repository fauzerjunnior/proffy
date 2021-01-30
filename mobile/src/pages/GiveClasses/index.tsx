import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  Background,
  Description,
  Button,
  TextButton,
} from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Background source={giveClassesBgImage} resizeMode="contain">
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </Background>

      <Button onPress={handleNavigateBack}>
        <TextButton>Tudo bem</TextButton>
      </Button>
    </Container>
  );
};

export default GiveClasses;
