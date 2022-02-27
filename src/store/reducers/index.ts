import { authApi } from '../api/auth.api';

const customReducers = {
  [authApi.reducerPath]: authApi.reducer,
};

export default customReducers;
