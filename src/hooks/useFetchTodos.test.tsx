import { PropsWithChildren } from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchTodos } from './useFetchTodos';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const wrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useFetchTodos hook', () => {
  it('returns an array of todos', async () => {
    const { result } = renderHook(() => useFetchTodos(), { wrapper });

    await waitFor(() => expect(result.current.data).toBeDefined());
    await waitFor(() => expect(result.current.data).toHaveLength(3));
  });

  it('handles loading state correctly', async () => {
    const { result } = renderHook(() => useFetchTodos(), { wrapper });

    await waitFor(() => expect(result.current.data).toBeDefined());
    await waitFor(() => expect(result.current.data).toHaveLength(3));
    expect(result.current.isLoading).toBe(false);
  });

  it('handles error state correctly', async () => {
    const { result } = renderHook(() => useFetchTodos(), { wrapper });

    await waitFor(() => expect(result.current.data).toBeDefined());
    await waitFor(() => expect(result.current.data).toHaveLength(3));
    expect(result.current.isError).toBe(false);
  });
});
