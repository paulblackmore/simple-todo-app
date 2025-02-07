import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo } from '../types';

const addTodoMutation = async (payload: Todo): Promise<Todo> => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/todos`,
      requestOptions
    );
    if (!response.ok) throw new Error('Network response was not ok');

    return response.json();
  } catch (error) {
    throw new Error(error as string);
  }
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodoMutation,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });
};
