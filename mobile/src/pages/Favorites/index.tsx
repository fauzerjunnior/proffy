import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import { TeacherListView } from '../TeacherList/styles';
import { Container } from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = () => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });
  
  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <TeacherListView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 260 }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem 
            key={teacher.id} 
            teacher={teacher} 
            favorited  
          />
        ))}
      </TeacherListView>
    </Container>
  )}

export default Favorites;
