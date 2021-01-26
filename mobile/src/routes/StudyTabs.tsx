import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          paddingBottom: 0,
          height: (Platform.OS === 'ios') ? 100 : 70,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 30,
          height: 30,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#FAFAFC',
        activeBackgroundColor: '#EBEBF5',
        inactiveTintColor: '#C1BCCC',
        activeTintColor: '#32264D',
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (<Ionicons name="ios-easel" size={size} color={focused ? '#8257E5' : color} />),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (<Ionicons name="ios-heart" size={size} color={focused ? '#8257E5' : color} />),
        }}
      />
    </Navigator>
);

export default StudyTabs;
