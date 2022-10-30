import styled from 'styled-components/native';

export const ContainerCard = styled.View`
  width: 100%;
  height: 65px;

  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
`

export const ViewColor = styled.View`
  width: auto;
  height: auto;
`

export const ColorType = styled.View`
  width: 15px;
  height: 15px;

  display: flex;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
`

export const InfoTrans = styled.View`
  height: 100%;
  flex: 1;

  display: flex;
  /* align-items: center; */
  justify-content: space-around;

  background-color: #F00;
`

export const ViewRowInfo = styled.View`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
`