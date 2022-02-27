// Packages
import React, { ReactElement, useState } from 'react';

// Styles
import { Container, Input, Button, ButtonText } from './styles';

function SignIn(): ReactElement {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSignIn = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <Container>
      <Input placeholder="E-mail" onChangeText={setEmail} value={email} placeholderTextColor="#111" />
      <Input placeholder="Senha" onChangeText={setPassword} value={password} placeholderTextColor="#111" />
      <Button onPress={handleSignIn}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
}

export default SignIn;
