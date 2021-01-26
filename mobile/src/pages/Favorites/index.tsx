import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { TeacherListView } from '../TeacherList/styles';

import {
  Container,
} from './styles';

const Favorites: React.FC = () => (
  <Container>
    <PageHeader title="Meus proffys favoritos" />

    <TeacherListView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 260 }}>
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </TeacherListView>
  </Container>
);

export default Favorites;
