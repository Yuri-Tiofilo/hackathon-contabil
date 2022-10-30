import styled from 'styled-components/native';

export const ContainerCard = styled.View`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY1};
`

export const ViewRow = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  margin-bottom: 5px;
`

export const TextPrimary = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.GRAY2};
`

export const TextSecundary = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY1};
`

export const TextTotal = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY2};

  width: 100%;
  text-align: center;
`

export const TextMount = styled.Text`
  font-size: 16px;
  color: ${({ theme, isDebit }) => isDebit ? theme.COLORS.RED : theme.COLORS.GREEN};

  text-align: center;
`

export const TextDate = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY1};
`

