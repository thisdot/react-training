import { cleanup, fireEvent, render } from '@testing-library/react';
import CheckboxWithLabel from './CheckboxWithLabel';

// unmount and cleanup after each test is finished
// failing to call cleanup when you've called render could result in a memory leak or test issues
afterEach(cleanup);

it('toggles text after clicked', () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );

  expect(queryByLabelText(/test/i)).toBeFalsy();
  
  expect(queryByLabelText(/off/i)).toBeTruthy();

  // toggle it on
  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});

// getBy will throw an error if it doesn't find what it's looking for 
// queryBy will return null if it can't find what its looking for