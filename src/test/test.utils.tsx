import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mockData } from './mockData';
import { Todo } from '../types';

const queryClient = new QueryClient();

type Props = {
  data?: Todo[];
};

export const AllTheProviders = ({
  children,
  data = mockData,
}: PropsWithChildren<Props>) => {
  // Add mock data to queryClient
  queryClient.setQueryData(['todos'], data);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
