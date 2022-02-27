// Packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  $id: string;
  code: number;
  message: string;
  data: {
    $id: string;
    Id: number;
    Name: string;
    Email: string;
    Token: string;
  };
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://restapi.adequateshop.com' }),
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: params => ({
        url: 'api/authaccount/login',
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
