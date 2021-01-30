import React, { useEffect, useState } from 'react';

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
import api from '../../services/api';

const Landing: React.FC = () => {
  const navigation = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  });

  function handleNavigateToGiveClasses() {
    navigation.navigate('GiveClasses');
  }

  function handleNavigateToStudy() {
    navigation.navigate('Study');
  }

  return (
    <>
      <Container>
        <Banner source={landingImage} resizeMode="contain" />

        <Text>
          Seja bem-vindo, {'\n'}
          <TextBold>O que deseja fazer?</TextBold>
        </Text>

        <ContainerButton>
          <ButtonPrimary onPress={handleNavigateToStudy}>
            <IconButton source={studyIcon} />
            <TextButton>Estudar</TextButton>
          </ButtonPrimary>

          <ButtonSecondary onPress={handleNavigateToGiveClasses}>
            <IconButton source={giveClasses} />
            <TextButton>Dar aulas</TextButton>
          </ButtonSecondary>
        </ContainerButton>

        <ConnectionText>
          Total de {totalConnections} conexões já realizadas{' '}
          <Icon source={heartIcon} />
        </ConnectionText>
      </Container>
    </>
  );
};

export default Landing;
