import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  padding: 40px 20px 0;
`;

export const ViewPerson = styled.View`
  /* width: 50%; */
  height: auto;
  
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Image = styled.View`
  width: 60px;
  height: 60px;

  background-color: ${({ theme }) => theme.COLORS.GRAY1};

  border-radius: 30px;

  margin-right: 10px;
`

export const Name = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`
