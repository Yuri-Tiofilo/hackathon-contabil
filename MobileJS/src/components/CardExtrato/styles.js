import styled from 'styled-components/native';

export const ContainerCard = styled.View`
  width: 100%;
  height: 65px;

  display: flex;
  flex-direction: row;

  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY1};
`

export const ViewColor = styled.View`
  width: auto;
  height: auto;
`

export const ColorType = styled.View`
  width: 10px;
  height: 10px;

  margin-top: 2px;

  display: flex;
  background-color: ${({ theme, isDebit }) => isDebit ? theme.COLORS.RED : theme.COLORS.GREEN};
`

export const InfoTrans = styled.View`
  height: 100%;
  flex: 1;

  display: flex;
  /* justify-content: space-around; */

  padding-left: 5px;
`

export const ViewRowInfo = styled.View`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;

  margin-bottom: 6px;
`

export const TextRowTop = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.GRAY1};

  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const TextRowBottom = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY2};

  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`