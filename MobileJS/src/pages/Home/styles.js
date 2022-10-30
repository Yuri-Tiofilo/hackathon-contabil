import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  /* height: 100%; */

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ViewGlobal = styled.View`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 0 30px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const ViewSaldoGeral = styled.View`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  flex-direction: row;

  border-bottom-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY1};
`

export const BarLeft = styled.View`
  width: 5px;
  height: 60px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};;
  margin-right: 10px;
`

export const ViewValores = styled.View`
  display: flex;
`

export const TextSaldoTotal = styled.Text`
  font-size:  16px;
  color: ${({ theme }) => theme.COLORS.GRAY1};
`

export const TextValorTotal = styled.Text`
  font-size:  20px;
  color: ${({ theme }) => theme.COLORS.GRAY2};
`

export const TitlePage = styled.Text`
  font-size:  22px;
  color: ${({ theme }) => theme.COLORS.GRAY2};

  margin: 15px 0 20px;
`

export const ScrollView = styled.ScrollView`
  display: flex;

  width: 100%;
  height: 100px;
`

export const ViewScrollView = styled.View`
  display: flex;

  width: 100%;
  height: 400px;
`
