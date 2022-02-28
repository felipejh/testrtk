import { useLoginMutation } from '~/store/api/auth.api';
import { setCredentials } from '~/store/slice/auth.slice';

// Packages
import React, { ReactElement, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';

// Stores
import { useAppDispatch } from '~/config/store/create-store';

// Styles
import { Container, Input, Button, ButtonText } from './styles';

function SignIn(): ReactElement {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [login, { isLoading }] = useLoginMutation();

  const handleSignIn = async (): Promise<void> => {
    const params = { email, password };

    try {
      const response = await login(params).unwrap();

      if (response.message === 'success') {
        const { Name, Email, Token } = response.data;

        dispatch(setCredentials({ name: Name, email: Email, token: Token }));
      }
    } catch (error) {
      Alert.alert('Ops', `Ocorreu um erro: ${error}`);
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
