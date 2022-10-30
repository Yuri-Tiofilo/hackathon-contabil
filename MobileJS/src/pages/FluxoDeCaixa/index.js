import React, {useEffect, useState} from 'react';

import CardFluxo from '../../components/CardFluxo';

import Api from '../../mock/api.json';

import { Container, Header, Title, Body, ViewInputDate, TextDate, TextInputStyled, ScrollView, ViewScrollView, SaldoFinal, Saldos, ViewSaldo } from './styles';

const FluxoDeCaixa = () => {
  const [dateDe, setDateDe] = useState('')
  const [dateAte, setDateAte] = useState('')
  const [newApi, setNewApi] = useState([])
  const [loading, setLoading] = useState(false)
;
  const maskDate = value => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };

  useEffect(() => {
    const newArray = []

    Api.results.map((e) => {
      newArray.unshift(e)
    })

    setNewApi(newArray)
    setLoading(true)
  }, []);

  function entrada() {
    let value = 0;
    Api.results.map((e) => {
      if(e.amount > 0) {
        value = value + e.amount
      }
    })
    return value.toFixed(2).replace('.', ',');
  }

  function saida() {
    let value = 0;
    Api.results.map((e) => {
      if(e.amount < 0) {
        value = value - e.amount
      }
    })
    return value.toFixed(2).replace('.', ',');
  }

  return (
    <Container>
      {loading && (
        <>
          <Header>
        <Title>Fluxo de caixa</Title>
      </Header>
      <Body>
        <ViewInputDate>
          <TextDate>De:</TextDate>
          <TextInputStyled 
            // label="CNPJ"
            mode="flat"
            max={10}
            underlineColor='#2d2d2d'
            activeUnderlineColor="#0075FF"
            value={dateDe}
            onChangeText={text => setDateDe(maskDate(text))}
            keyboardType="number-pad"
          />
          <TextDate>Até:</TextDate>
          <TextInputStyled 
            // label="CNPJ"
            mode="flat"
            max={10}
            underlineColor='#2d2d2d'
            activeUnderlineColor="#0075FF"
            value={dateAte}
            onChangeText={text => setDateAte(maskDate(text))}
            keyboardType="number-pad"
          />
        </ViewInputDate>
        <ViewSaldo>
          <Saldos>Entrada: R${entrada()}</Saldos>
          <Saldos>Saida: R${saida()}</Saldos>
        </ViewSaldo>
        <ViewScrollView>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            {newApi.map((e, i) => (
              <CardFluxo 
                key={i}
                type={e.type == 'CREDIT' ? 'CREDITO' : 'DEBITO'}
                definition={e.definition}
                category={e.category}
                date={e.date}
                value={e.amount}
                balance={e.balance}
              />
            ))}
          </ScrollView>
        </ViewScrollView>
        <SaldoFinal>Saldo Final: R${newApi[newApi.length - 1].balance}</SaldoFinal>
      </Body>
        </>
      )}
    </Container>
  );
}

export default FluxoDeCaixa;