import { render, screen } from '@testing-library/react';
import App from './App';
import { AllTheProviders } from './test/test.utils';

describe('App component', () => {
  it('renders App component', () => {
    render(
      <AllTheProviders>
        <App />
      </AllTheProviders>
    );
    expect(screen.getByText('Todos')).toBeInTheDocument();
  });

  it('renders App with todo count', () => {
    render(
      <AllTheProviders>
        <App />
      </AllTheProviders>
    );
    expect(screen.getByText('Completed 1 of 3')).toBeInTheDocument();
  });

  it('renders App without loading state', () => {
    render(
      <AllTheProviders>
        <App />
      </AllTheProviders>
    );
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('renders App with loading state', () => {
    render(
      <AllTheProviders data={[]}>
        <App />
      </AllTheProviders>
    );
    expect(screen.queryByText('Nothing to do...')).toBeInTheDocument();
  });
});
