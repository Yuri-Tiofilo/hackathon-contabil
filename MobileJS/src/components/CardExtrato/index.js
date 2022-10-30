import React from 'react';
import { Text, View } from 'react-native';

import { ContainerCard, ColorType, ViewColor, InfoTrans, ViewRowInfo } from './styles';

const CardExtrato = () => {
  return (
    <ContainerCard>
      <ViewColor>
        <ColorType />
      </ViewColor>
      <InfoTrans>
        <ViewRowInfo>
          <Text>CREDITO</Text>
          <Text>20/12/2022</Text>
        </ViewRowInfo>
        <ViewRowInfo>
          <Text>Supermercado do Zé</Text>
          <Text>R$400,00</Text>
        </ViewRowInfo>
      </InfoTrans>
    </ContainerCard>
  );
}

export default CardExtrato;