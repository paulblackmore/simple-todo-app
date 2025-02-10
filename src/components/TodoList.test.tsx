import { render, screen } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import { TodoList } from './TodoList';
import { vi, Mock } from 'vitest';

vi.mock('@tanstack/react-query', () => ({
  ...vi.importActual('@tanstack/react-query'),
  useQuery: vi.fn(),
  useMutation: vi.fn(),
  useQueryClient: vi.fn(),
}));

describe('TodoList component', () => {
  it('renders loading state when isLoading is true', () => {
    (useQuery as Mock).mockImplementation(() => ({
      isLoading: true,
      isError: false,
      data: undefined,
    }));

    render(<TodoList />);
    expect(screen.getByText('Your todos are loading...')).toBeInTheDocument();
  });

  it('renders empty state', () => {
    (useQuery as Mock).mockImplementation(() => ({
      isLoading: false,
      isError: false,
      data: [],
    }));

    render(<TodoList />);
    expect(screen.getByText('Nothing to do...')).toBeInTheDocument();
  });

  it('renders error state when isError is true', () => {
    (useQuery as Mock).mockImplementation(() => ({
      isLoading: false,
      isError: true,
      data: undefined,
    }));

    render(<TodoList />);
    expect(screen.getByText("We're sorry!")).toBeInTheDocument();
  });

  it('renders todo list', () => {
    (useQuery as Mock).mockImplementation(() => ({
      isLoading: false,
      isError: false,
      data: [
        { id: '1', value: 'Todo 1', done: false, createdAt: 1650804402054 },
        { id: '2', value: 'Todo 2', done: true, createdAt: 1650804402054 },
      ],
    }));

    render(<TodoList />);
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
  });
});
