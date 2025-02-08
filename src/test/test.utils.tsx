import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mockData } from './mockData';

const queryClient = new QueryClient();

export const AllTheProviders = ({ children }: PropsWithChildren) => {
  // Add mock data to queryClient
  queryClient.setQueryData(['todos'], mockData);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
