// Packages
import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';

// Models
import { User } from '~/models/user.model';

// Styles
import { Container, TextName, TextEmail } from './styles';

function Users(): ReactElement {
  const users: Array<User> = [
    {
      id: 1,
      name: 'Felipe',
      email: 'felipe@gmail.com',
    },
  ];

  return (
    <Container>
      <FlatList<User>
        data={users}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <>
            <TextName>{item.name}</TextName>
            <TextEmail>{item.email}</TextEmail>
          </>
        )}
      />
    </Container>
  );
}

export default Users;
