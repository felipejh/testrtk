// Packages
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Stores
import { RootState } from '../store/create-store';

const api = fetchBaseQuery({
  baseUrl: 'http://restapi.adequateshop.com',
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).authSlice;

    if (token) {
      headers.set('authentication', `Bearer: ${token}`);
    }

    return headers;
  },
});

export default api;
