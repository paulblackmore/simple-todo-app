import { render, screen, waitFor } from '@testing-library/react';
import { TodoForm } from './TodoForm';
import { AllTheProviders } from '../test/test.utils';
import { userEvent } from '@testing-library/user-event';

describe('TodoForm component', () => {
  it('renders the form with the correct text input and button', () => {
    render(
      <AllTheProviders>
        <TodoForm />
      </AllTheProviders>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('displays an error message when the form is submitted with an empty value', async () => {
    render(
      <AllTheProviders>
        <TodoForm />
      </AllTheProviders>
    );

    userEvent.click(screen.getByRole('button'));
    await screen.findByText('Please enter a todo');
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('adds a todo and submits form', async () => {
    render(
      <AllTheProviders>
        <TodoForm />
      </AllTheProviders>
    );

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Todo 1');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(screen.getByRole('textbox')).toHaveValue(''));
    expect(
      await screen.findByText('Please enter a todo')
    ).not.toBeInTheDocument();
  });
});
