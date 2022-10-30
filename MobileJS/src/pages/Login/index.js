import React, { useState } from 'react';
import {ScrollView, TouchableNativeFeedback, Keyboard} from 'react-native'

import { 
  Container, 
  ContainerInput, 
  Title, 
  TextInputStyled, 
  ButtonStyled, 
  TextButton 
} from './styles';

import Icon from 'react-native-vector-icons/AntDesign'

const Login = ({navigation}) => {
  const [cnpj, setCnpj] = useState()
  const [password, setPassword] = useState('')

  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
    <Container>
        
        <ContainerInput>
          <Title>Faça seu login</Title>
          <TextInputStyled 
            label="CNPJ"
            mode="flat"
            underlineColor='#2d2d2d'
            activeUnderlineColor="#0075FF"
            value={cnpj}
            onChangeText={text => setCnpj(text)}
            keyboardType="number-pad"
          />
          <TextInputStyled 
            label="Senha"
            mode="flat"
            underlineColor='#2d2d2d'
            activeUnderlineColor="#0075FF"
            value={password}
            onChangeText={text => setPassword(text)}
            right={<Icon name="right" size={14} color="#0075FF"/>}
          />
          <ButtonStyled mode='contained'>
            CONTINUAR
          </ButtonStyled>
          <TextButton
            onPress={() => {console.log("teste")}}
          >
            Esqueci minha senha 
            <Icon name="right" size={14} color="#0075FF"/>  
          </TextButton>
          <TextButton onPress={() => navigation.navigate('Cadastro')}>
            Faça seu cadastro
            <Icon name="right" size={14} color="#0075FF"/>
          </TextButton>
        </ContainerInput>
      </Container>
      </TouchableNativeFeedback>
  );
}

export default Login;