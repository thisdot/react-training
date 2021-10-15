import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
});

it('renders the main menu', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Components')).toBeInTheDocument();
  expect(screen.getByText('Hooks')).toBeInTheDocument();
  expect(screen.getByText('Routing')).toBeInTheDocument();
  expect(screen.getByText('Context')).toBeInTheDocument();
  expect(screen.getByText('Redux')).toBeInTheDocument();
});