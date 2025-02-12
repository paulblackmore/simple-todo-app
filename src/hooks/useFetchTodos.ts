import { useQuery } from '@tanstack/react-query';
import { Todo } from '../types/Todo';

const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/todos`);
    if (!response.ok) throw new Error('Network response was not ok');

    return response.json();
  } catch (error) {
    throw new Error(error as string);
  }
};

export const useFetchTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });
};
