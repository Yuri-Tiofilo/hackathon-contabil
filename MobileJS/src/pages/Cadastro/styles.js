import styled from 'styled-components';
import { Platform } from 'react-native';
import { TextInput, Button  } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const ContainerInput = styled.View`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 20px;
  padding-top: 60px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  width: 100%;
  height: 600px;

  border-radius: 30px;
`

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY2};

  margin-bottom: 30px;
`

export const TextInputStyled = styled(TextInput)`
  width: 100%;
  height: 50px;
  background-color: transparent;
  margin-bottom: 15px;
`

export const ButtonStyled = styled(Button)`
  width: 300px;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 0 30px 0;
`

export const TextButton = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  /* margin-bottom: 15px; */
  
  display: flex;
  align-items: center;
  justify-content: center;

`