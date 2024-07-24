import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TElements } from '../graph/elements';

export interface SqlQueryInput { // Define an interface for your input object
  sqlString: string;
  defaultSchema?: string;
  defaultServer?: string;
  defaultDatabase?: string;
}

// Define a service using a base URL and expected endpoints
export const linetteApi = createApi({
  reducerPath: 'linetteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5268/' }),
  endpoints: (builder) => ({
    getLinetteElements: builder.query<TElements, string>({
      query: () => 'Linettus/Cyto',
    }),
    postRawSqlWrapped: builder.query<TElements, SqlQueryInput>({
      query: (body) => ({
        url: '/Linettus/ProcessWrappedSqlStrings',
        method: 'POST',
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetLinetteElementsQuery,
   useLazyPostRawSqlWrappedQuery,
} = linetteApi;
