import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  width: 30px;

  background-color: ${({theme}) => theme.COLORS.WHITE};

  border-top-width: 2px;
  border-style: solid;
  /* border-color: ${({ theme }) => theme.COLORS.PRIMARY}; */
`;
