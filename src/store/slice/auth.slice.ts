// Packages
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Stores
import { RootState } from '~/config/store/create-store';

// Models
import { User } from '~/models/user.model';

interface AuthState extends Partial<Pick<User, 'name' | 'email'>> {
  token: string | undefined;
}

const initialState: AuthState = {
  name: undefined,
  email: undefined,
  token: undefined,
};

const slice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { name, email, token } }: PayloadAction<AuthState>) => {
      state.name = name;
      state.email = email;
      state.token = token;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUserName = (state: RootState) => state.authSlice.name;
