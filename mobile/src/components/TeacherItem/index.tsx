import React from 'react';

import {
  Container, Profile, Avatar, ProfileInfo, Name, Subject, Bio, Footer, Price, PriceValue, ButtonsContainer, FavoriteButton, IconButton, ContactButton, ContactButtonText,
} from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

const TeacherItem: React.FC = () => (
  <Container>
    <Profile>
      <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/44206464?v=4' }} />

      <ProfileInfo>
        <Name>Fauzer Junior</Name>
        <Subject>Química</Subject>
      </ProfileInfo>
    </Profile>

    <Bio>
      My name is Fauzer Junior, today I live in Campinas / SP 🇧🇷.
      {'\n'}{'\n'}
      I have been working with Web Development since 2016 and currently work as Frontend Developer. I am passionate about development and have been working on my skills with NodeJS, ReactJS and React Native.
    </Bio>

    <Footer>
      <Price>
        Preço/hora {'  '}
        <PriceValue>R$ 20,00</PriceValue>
      </Price>

      <ButtonsContainer>
        <FavoriteButton favorited>
          {/* <IconButton source={heartOutlineIcon} /> */}
          <IconButton source={unfavoriteIcon} />
        </FavoriteButton>
        <ContactButton>
          <IconButton source={whatsappIcon} />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </ButtonsContainer>
    </Footer>
  </Container>
);

export default TeacherItem;
