import { render, screen } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import { Todo } from '../types';
import { AllTheProviders } from '../test/test.utils';

describe('TodoItem component', () => {
  it('renders todo text', () => {
    const todo: Todo = {
      id: '1',
      value: 'Todo 1',
      done: false,
      createdAt: 1650804402054,
    };
    render(
      <AllTheProviders>
        <TodoItem todo={todo} />
      </AllTheProviders>
    );
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
  });

  it('renders checkbox with correct checked state', () => {
    const todo: Todo = {
      id: '1',
      value: 'Todo 1',
      done: true,
      createdAt: 1650804402054,
    };
    render(
      <AllTheProviders>
        <TodoItem todo={todo} />
      </AllTheProviders>
    );
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('renders checkbox with correct unchecked state', () => {
    const todo: Todo = {
      id: '1',
      value: 'Todo 1',
      done: false,
      createdAt: 1650804402054,
    };
    render(
      <AllTheProviders>
        <TodoItem todo={todo} />
      </AllTheProviders>
    );
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('renders todo with completed class when done is true', () => {
    const todo: Todo = {
      id: '1',
      value: 'Todo 1',
      done: true,
      createdAt: 1650804402054,
    };
    render(
      <AllTheProviders>
        <TodoItem todo={todo} />
      </AllTheProviders>
    );
    expect(screen.getByTestId('todo-item')).toHaveAttribute(
      'data-completed',
      'true'
    );
  });

  it('renders todo without completed class when done is false', () => {
    const todo: Todo = {
      id: '1',
      value: 'Todo 1',
      done: false,
      createdAt: 1650804402054,
    };
    render(
      <AllTheProviders>
        <TodoItem todo={todo} />
      </AllTheProviders>
    );
    expect(screen.getByTestId('todo-item')).not.toHaveAttribute(
      'data-completed',
      'true'
    );
  });
});
