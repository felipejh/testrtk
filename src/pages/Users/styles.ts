// Models
import { User } from '~/models/user.model';

// Styles
import styled from 'styled-components/native';

// Packages
import { FlatList } from 'react-native';

const Container = styled.View`
  flex: 1;
`;

const List = styled(FlatList as new () => FlatList<User>)``;

const TextName = styled.Text``;

const TextEmail = styled.Text``;

export { Container, List, TextName, TextEmail };
