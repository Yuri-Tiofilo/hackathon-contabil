import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { 
  Container, 
  ViewGlobal, 
  ViewSaldoGeral, 
  BarLeft, 
  ViewValores, 
  TextSaldoTotal, 
  TextValorTotal,
  TitlePage,
  ScrollView,
  ViewScrollView
} from './styles';

import Header from './../../components/Header'
import CardExtrato from './../../components/CardExtrato'

const Array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

import Api from '../../mock/api.json'

const Home = () => {
  
  function valueTotal() {
    let returnValue = 0;

    Api.results.map((data) => {
      returnValue = returnValue + data.amount
    })

    return returnValue;
  }
  
  return (
    <>
    <Container>
      <Header />
      <ViewGlobal>
        <ViewSaldoGeral>
          <BarLeft />
          <ViewValores>
            <TextSaldoTotal>Valor Geral</TextSaldoTotal>
            <TextValorTotal>R${valueTotal()}</TextValorTotal>
          </ViewValores>
        </ViewSaldoGeral>
        <TitlePage>Transações financeiras</TitlePage>
        <ViewScrollView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {Api.results.map((e, i) => (
            <CardExtrato 
              key={i}
              type={e.type == 'CREDIT' ? 'CREDITO' : 'DEBITO'}
              definition={e.definition}
              category={e.category}
              date={e.date}
              value={e.amount}
            />
          ))}
        </ScrollView>

        </ViewScrollView>
      </ViewGlobal>
    </Container>
    </>
  );
}

export default Home;