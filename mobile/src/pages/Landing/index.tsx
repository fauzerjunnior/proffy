import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Banner,
  Text,
  TextBold,
  ContainerButton,
  ButtonPrimary,
  ButtonSecondary,
  IconButton,
  TextButton,
  ConnectionText,
  Icon,
} from './styles';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

const Landing: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToGiveClasses() {
    navigation.navigate('GiveClasses');
  }

  return (
    <>
      <Container>
        <Banner source={landingImage} resizeMode="contain" />

        <Text>Seja bem-vindo, {'\n'}
          <TextBold>O que deseja fazer?</TextBold>
        </Text>

        <ContainerButton>
          <ButtonPrimary>
            <IconButton source={studyIcon} />
            <TextButton>Estudar</TextButton>
          </ButtonPrimary>

          <ButtonSecondary onPress={handleNavigateToGiveClasses}>
            <IconButton source={giveClasses} />
            <TextButton>Dar aulas</TextButton>
          </ButtonSecondary>
        </ContainerButton>

        <ConnectionText>
          Total de 285 conexões já realizadas {' '}
          <Icon source={heartIcon} />
        </ConnectionText>
      </Container>
    </>
  );
};

export default Landing;
