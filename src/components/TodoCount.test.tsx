import { render, screen } from '@testing-library/react';
import { TodoCount } from './TodoCount';
import { AllTheProviders } from '../test/test.utils';

describe('TodoCount component', () => {
  it('renders the correct count of completed and not completed todos', () => {
    render(
      <AllTheProviders>
        <TodoCount />
      </AllTheProviders>
    );

    expect(screen.getByText('Completed 1 of 3')).toBeInTheDocument();
  });

  it('renders a count of 0 when there are no todos', async () => {
    render(
      <AllTheProviders data={[]}>
        <TodoCount />
      </AllTheProviders>
    );

    expect(screen.getByText('Completed 0 of 0')).toBeInTheDocument();
  });
});
