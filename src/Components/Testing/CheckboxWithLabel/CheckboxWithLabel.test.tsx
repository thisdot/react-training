import { fireEvent, render } from '@testing-library/react';
import CheckboxWithLabel from './CheckboxWithLabel';

// no need to unmount and cleanup DOM after test is finished (it's done automatically)
// afterEach(cleanup);

// getByLabelText = returns the first matching HTML node (error if none match or more than one match)
// queryByLabelText = returns an array of all matching nodes for a query, and an empty array if no elements match

it('CheckboxWithLabel text changes after click', () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );

  expect(queryByLabelText(/test/i)).toBeFalsy();
  
  expect(queryByLabelText(/off/i)).toBeTruthy();

  // toggle it on
  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});