import React from 'react';
import { Text, View } from 'react-native';

import { 
  Container, 
  ViewGlobal, 
  ViewSaldoGeral, 
  BarLeft, 
  ViewValores, 
  TextSaldoTotal, 
  TextValorTotal
} from './styles';

import Header from './../../components/Header'
import CardExtrato from './../../components/CardExtrato'

const Home = () => {
  return (
    <Container>
      <Header />
      <ViewGlobal>
        <ViewSaldoGeral>
          <BarLeft />
          <ViewValores>
            <TextSaldoTotal>Saldo Geral</TextSaldoTotal>
            <TextValorTotal>R$9.999.999,99</TextValorTotal>
          </ViewValores>
        </ViewSaldoGeral>
        <Text>Transações financeiras</Text>
        <CardExtrato />
      </ViewGlobal>
    </Container>
  );
}

export default Home;