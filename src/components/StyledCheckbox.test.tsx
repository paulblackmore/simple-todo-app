import { render, screen } from '@testing-library/react';
import { StyledCheckbox } from './StyledCheckbox';
import { Todo } from '../types';
import { vi } from 'vitest';

vi.mock('@tanstack/react-query', () => ({
  ...vi.importActual('@tanstack/react-query'),
  useQuery: vi.fn(),
  useMutation: vi.fn(),
  useQueryClient: vi.fn(),
}));

describe('StyledCheckbox component', () => {
  it('renders a checkbox with the correct default checked state', () => {
    const todo: Todo = {
      id: '1',
      value: 'Todo 1',
      done: true,
      createdAt: 1650804402054,
    };
    render(<StyledCheckbox todo={todo} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('renders a checkbox with the correct default unchecked state', () => {
    const todo: Todo = {
      id: '1',
      value: 'Todo 1',
      done: false,
      createdAt: 1650804402054,
    };
    render(<StyledCheckbox todo={todo} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
});
