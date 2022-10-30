import React from 'react';

import { format } from 'date-fns'
import Icon from 'react-native-vector-icons/Entypo'

import { 
  ContainerCard,
  TextDate,
  TextMount,
  TextPrimary,
  TextSecundary,
  ViewRow,
  TextTotal
} from './styles';

const CardFluxo = ({
  type, definition, category, date, value, balance
}) => {
  return (
    <ContainerCard>
      <ViewRow>
        <TextPrimary>{definition}</TextPrimary>
        <TextDate>{format(new Date(date), "dd/MM/yyyy")}</TextDate>
      </ViewRow>
      <ViewRow>
        <TextSecundary>{category}</TextSecundary>
        <TextMount 
          isDebit={type == 'DEBITO' ? true : false}
        >
          {type == 'DEBITO' ? (
            <Icon name="triangle-down" size={20} color="#F00"/>
          ) : (
            <Icon name="triangle-up" size={20} color="#05FC2D"/>
          )}  
          R${value.toFixed(2).replace('.', ',')}
        </TextMount>
      </ViewRow>
      <ViewRow>
        <TextTotal>Saldo Atual: R${balance}</TextTotal>
      </ViewRow>
    </ContainerCard>
  );
}

export default CardFluxo;