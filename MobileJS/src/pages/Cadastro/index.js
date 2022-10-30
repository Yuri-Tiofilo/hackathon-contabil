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

const Cadastro = ({navigation}) => {
  const [razao, setRazao] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
    <Container>
      <ContainerInput>
        <Title>Faça seu cadastro</Title>
        <TextInputStyled 
          label="Razão social"
          mode="flat"
          underlineColor='#2d2d2d'
          activeUnderlineColor="#0075FF"
          value={razao}
          onChangeText={text => setRazao(text)}
        />
        <TextInputStyled 
          label="CNPJ"
          mode="flat"
          underlineColor='#2d2d2d'
          activeUnderlineColor="#0075FF"
          value={cnpj}
          onChangeText={text => setCnpj(text)}
        />
        <TextInputStyled 
          label="Whatsapp"
          mode="flat"
          underlineColor='#2d2d2d'
          activeUnderlineColor="#0075FF"
          value={whatsapp}
          onChangeText={text => setWhatsapp(text)}
        />
        <TextInputStyled 
          label="Email"
          mode="flat"
          underlineColor='#2d2d2d'
          activeUnderlineColor="#0075FF"
          value={cnpj}
          onChangeText={text => serCnpj(text)}
        />
        <TextInputStyled 
          label="Senha"
          mode="flat"
          underlineColor='#2d2d2d'
          activeUnderlineColor="#0075FF"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <ButtonStyled mode='contained'>
          CADASTRAR
        </ButtonStyled>
        <TextButton onPress={() => navigation.navigate('Login')}>
          <Icon name="left" size={14} color="#0075FF"/>
          Realizar login
        </TextButton>
      </ContainerInput>
    </Container>
    </TouchableNativeFeedback>
  );
}

export default Cadastro;