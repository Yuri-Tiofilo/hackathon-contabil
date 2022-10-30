import React from 'react';
import { Text, View } from 'react-native';

import { format } from 'date-fns'

import { 
  ContainerCard, 
  ColorType, 
  ViewColor, 
  InfoTrans, 
  ViewRowInfo,
  TextRowTop,
  TextRowBottom
} from './styles';

const CardExtrato = ({
  type, definition, category, date, value
}) => {
  return (
    <ContainerCard>
      <ViewColor>
        <ColorType isDebit={type == 'DEBITO' ? true : false}/>
      </ViewColor>
      <InfoTrans>
        <ViewRowInfo>
          <TextRowTop>{type}</TextRowTop>
          <TextRowTop>{format(new Date(date), "dd/MM/yyyy")}</TextRowTop>
        </ViewRowInfo>
        <ViewRowInfo>
          <TextRowBottom numberOfLines={1}>{definition}</TextRowBottom>
          <TextRowBottom>R${value.toFixed(2).replace('.', ',')}</TextRowBottom>
        </ViewRowInfo>
        <ViewRowInfo>
          <TextRowTop numberOfLines={1}>{category}</TextRowTop>
        </ViewRowInfo>
      </InfoTrans>
    </ContainerCard>
  );
}

export default CardExtrato;