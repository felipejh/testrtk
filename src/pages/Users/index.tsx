import { useGetListUsersQuery } from '~/store/api/users.api';

// Packages
import React, { ReactElement, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';

// Models
import { User } from '~/models/user.model';

// Styles
import { Container, TextName, TextEmail, List } from './styles';

function Users(): ReactElement {
  const { data: listUsersResponse, isFetching, error, refetch } = useGetListUsersQuery({ page: 1 });

  useEffect(() => {
    if (error) {
      Alert.alert('Ops', `Ocorreu um erro: ${error}`);
    }
  }, [error]);

  return (
    <Container>
      <List
        data={listUsersResponse?.data}
        keyExtractor={item => String(item.id)}
        refreshing={isFetching}
        onRefresh={refetch}
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
