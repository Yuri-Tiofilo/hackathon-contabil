import styled from 'styled-components/native';

import { TextInput } from 'react-native-paper';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.PRIMARY};

  padding-top: 30px;
`

export const Title = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.COLORS.WHITE};
`

export const Body = styled.View`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 0 20px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`

export const ViewInputDate = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  
  margin-top: 15px;
  justify-content: space-around;

  /* background-color: ${({theme}) => theme.COLORS.RED}; */
`

export const TextDate = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.GRAY1};

  margin-top: 10px;
`

export const TextInputStyled = styled(TextInput)`
  width: 35%;
  height: 30px;
  background-color: transparent;
  margin-bottom: 30px;

  padding: 0;
`
export const ScrollView = styled.ScrollView`
  display: flex;

  width: 100%;
  height: 100px;
`

export const ViewScrollView = styled.View`
  display: flex;

  width: 100%;
  height: 500px;
`

export const SaldoFinal = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.COLORS.GRAY2};

  margin-top: 12px;
`

export const Saldos = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.COLORS.GRAY2};
`

export const ViewSaldo = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  
  margin-bottom: 10px;
  justify-content: space-around;

  /* background-color: ${({theme}) => theme.COLORS.RED}; */
`