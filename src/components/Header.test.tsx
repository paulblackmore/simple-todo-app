import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { AllTheProviders } from '../test/test.utils';

describe('Header component', () => {
  it('renders the header with the title "Todos"', () => {
    render(
      <AllTheProviders>
        <Header />
      </AllTheProviders>
    );
    expect(screen.getByRole('heading', { name: 'Todos' })).toBeInTheDocument();
  });

  it('renders the TodoCount component', () => {
    render(
      <AllTheProviders>
        <Header />
      </AllTheProviders>
    );
    expect(screen.getByText('Completed 1 of 3')).toBeInTheDocument();
  });
});
