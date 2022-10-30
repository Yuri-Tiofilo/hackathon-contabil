import React from 'react';
import { Text, View } from 'react-native';

import { Container, ViewPerson, Image, Name } from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Header = () => {
  return (
    <Container>
      <ViewPerson>
        <Image />
        <Name>Empresario</Name>
      </ViewPerson>
      <ViewPerson>
        <MaterialIcons name="notifications-none" size={24} color="#FFF" />
      </ViewPerson>
    </Container>
  );
}

export default Header;