import { fireEvent, render } from '@testing-library/react';
import MyLink from './MyLink';

test('MyLink changes the class when hovered', () => {
  const { queryByText, getByText } = render(
    <MyLink />,
  );

  expect(queryByText(/hovered/i)).toBeFalsy();
  
  expect(queryByText(/normal/i)).toBeTruthy();

  // hover over the text
  fireEvent.mouseOver(getByText(/normal/i));

  expect(queryByText(/hovered/i)).toBeTruthy();
});
