import api from '~/config/api/api';

// Packages
import { createApi } from '@reduxjs/toolkit/query/react';

interface GetListUsersRequest {
  page: number;
}

interface GetListUsersResponse {
  page: number;
  per_page: number;
  totalrecord: number;
  total_pages: number;
  data: any;
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: api,
  keepUnusedDataFor: 5,
  endpoints: builder => ({
    getListUsers: builder.query<GetListUsersResponse, GetListUsersRequest>({
      query: params => ({
        url: `api/users?page=${params.page}`,
      }),
    }),
  }),
});

export const { useGetListUsersQuery } = usersApi;
