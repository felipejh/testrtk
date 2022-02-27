import { useLoginMutation } from '~/store/api/auth.api';

// Packages
import React, { ReactElement, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Alert } from 'react-native';

// Styles
import { Container, Input, Button, ButtonText } from './styles';

function SignIn(): ReactElement {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [login, { isLoading, isError }] = useLoginMutation();

  useEffect(() => {
    if (isError) {
      console.error('Ocorreu um erro');
    }
  }, [isError]);

  const handleSignIn = async (): Promise<void> => {
    const params = { email, password };

    try {
      const result = await login(params);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Input placeholder="E-mail" onChangeText={setEmail} value={email} placeholderTextColor="#111" />
      <Input placeholder="Senha" onChangeText={setPassword} value={password} placeholderTextColor="#111" />
      <Button onPress={handleSignIn}>
        {isLoading ? <ActivityIndicator color="#fff" /> : <ButtonText>Entrar</ButtonText>}
      </Button>
    </Container>
  );
}

export default SignIn;
