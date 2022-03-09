import { authApi } from '../api/auth.api';
import { usersApi } from '../api/users.api';

const customReducers = {
  [authApi.reducerPath]: authApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
};

export default customReducers;
