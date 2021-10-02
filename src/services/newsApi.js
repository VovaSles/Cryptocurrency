import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {  'x-bingapis-sdk': 'true',
'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_KEY,
'x-rapidapi-key': process.env.REACT_APP_NEWS_RAPIDAPI_HOST};

const createRequest = (url) => ({ url, headers });

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl:process.env.REACT_APP_NEWS_API_URL}),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (newsCategory) => createRequest(`/news/search?q=${newsCategory}`),
    }),
    
  }),
});



export const { useGetNewsQuery} = newsApi;

