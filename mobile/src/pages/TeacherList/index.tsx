import React, { useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import {
  Container, TeacherListView, SearchForm, Label, Input, InputGroup, InputBlock, SubmitButton, SubmitButtonText,
} from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFilterVisible] = useState(true);

  const handleToogleFiltersVisible = () => {
    setIsFilterVisible(!isFiltersVisible);
  };

  return (
    <Container>
      <PageHeader title="Proffys disponíveis" headerRight={(
        <BorderlessButton onPress={handleToogleFiltersVisible} >
          <Feather name="filter" size={20} color="#FFF" />
        </BorderlessButton>
      )} >
        { isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input placeholder="Qual a matéria?" placeholderTextColor="#C1BCCC" />

            <InputGroup>
              <InputBlock>
                <Label>Dia da Semana</Label>
                <Input placeholder="Qual o dia?" placeholderTextColor="#C1BCCC" />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input placeholder="Qual horário?" placeholderTextColor="#C1BCCC" />
              </InputBlock>
            </InputGroup>

            <SubmitButton>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <TeacherListView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 260 }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </TeacherListView>
    </Container>
  );
};

export default TeacherList;
