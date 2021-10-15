// This test uses a React renderer that renders React components to pure JavaScript objects
// without depending on the DOM or a native mobile environment.

// It makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree)
// rendered by a React DOM component without using a browser 

import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import MyLink from './MyLink';

test('MyLink changes the class when hovered', () => {
  // Create a TestRenderer instance with the passed React element. 
  // It doesn’t use the real DOM, but it still fully renders the component tree into 
  // memory so you can make assertions about it
  const component = renderer.create(
    <MyLink page="http://www.facebook.com">Facebook</MyLink>,
  );

  let tree: ReactTestRendererJSON = component.toJSON() as ReactTestRendererJSON;
  // ensure the value matches the most recent snapshot
  expect(tree).toMatchSnapshot();

  const { act } = renderer;

  // manually trigger the callback
  act(() => {
    tree.props.onMouseEnter();
  });  
  // re-rendering
  // toJSON() = returns an object representing the rendered tree.
  tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});

// without using act():

// Warning: An update to MyLink inside a test was not wrapped in act(...).
// When testing, code that causes React state updates should be wrapped into act(...):
// act(() => {
  /* fire events that update state */
// });