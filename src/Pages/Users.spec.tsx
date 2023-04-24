import { render, screen, waitFor } from '@testing-library/react';
import Users from './Users';

const MOCK_PROFILES = [
  {
    login: 'Dan Abramov',
    avatar_url: 'https://avatars.githubusercontent.com/u/810438?v=4',
    url: 'https://github.com/gaearon',
  },
];

describe('<Users />', () => {
  it('calls the github api endpoint', async () => {
    // Arrange
    // Mock needs to be created within the test, CRA resets mocks before each test
    jest.spyOn(global, 'fetch').mockImplementation(async () => {
      await new Promise((r) => setTimeout(r, 0));
      return new Response(JSON.stringify({ items: MOCK_PROFILES }));
    });

    // Act ("onComponentMount" counts as acting)
    render(<Users />);

    // Assert
    expect(screen.queryByText('Loading...')).toBeInTheDocument();
    expect(screen.queryByText('Dan Abramov')).not.toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText('Dan Abramov')).toBeInTheDocument());
  });
});
