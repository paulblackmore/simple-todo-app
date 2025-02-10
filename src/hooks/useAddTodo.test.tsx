import { renderHook, waitFor } from '@testing-library/react';
import { useAddTodo } from './useAddTodo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { vi } from 'vitest';
import { newTodo } from '../test/mockData';

const queryClient = new QueryClient();

describe('useAddTodo hook', () => {
  it('adds a new todo', async () => {
    const { result } = renderHook(() => useAddTodo(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    result.current.mutate(newTodo);
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual(newTodo);
  });

  it('handles error on adding a new todo', async () => {
    const { result } = renderHook(() => useAddTodo(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    // Simulate a network error
    vi.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network error'));

    result.current.mutate(newTodo);
    await waitFor(() => expect(result.current.isError).toBe(true));
  });
});
