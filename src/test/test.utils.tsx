import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mockData } from './mockData';

const queryClient = new QueryClient();

export const AllTheProviders = ({ children }: PropsWithChildren) => {
  queryClient.setQueryData(['todos'], mockData); // Add mock data to queryClient
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
