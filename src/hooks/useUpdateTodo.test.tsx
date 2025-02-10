import { renderHook, waitFor } from '@testing-library/react';
import { useUpdateTodo } from './useUpdateTodo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { vi } from 'vitest';
import { updatedTodo } from '../test/mockData';

const queryClient = new QueryClient();

describe('useUpdateTodo hook', () => {
  it('updates a todo', async () => {
    const { result } = renderHook(() => useUpdateTodo(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    result.current.mutate(updatedTodo);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual(updatedTodo);
  });

  it('handles error on updating a todo', async () => {
    const { result } = renderHook(() => useUpdateTodo(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    // Simulate a network error
    vi.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network error'));

    result.current.mutate(updatedTodo);

    await waitFor(() => expect(result.current.isError).toBe(true));
  });
});
