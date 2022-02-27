// Styles
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;

const Input = styled.TextInput`
  background: #aaa;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
`;

const Button = styled.TouchableOpacity`
  background: #111;
  padding: 15px;
  border-radius: 10px;
  margin-top: 40px;
`;

const ButtonText = styled.Text`
  color: #fff;
  align-self: center;
`;

export { Container, Input, Button, ButtonText };
