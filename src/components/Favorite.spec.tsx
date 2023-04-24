import FavoriteButton from './FavoriteButton';
import FavoriteCount from './FavoriteCount';
import { fireEvent, render, screen } from '@testing-library/react';

describe('favorites store', () => {
  it('starts with 0 favorites', () => {
    render(<FavoriteCount />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  it('increments when adding a profile', () => {
    render(
      <>
        <FavoriteCount />
        <FavoriteButton id='dummy' />
      </>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
