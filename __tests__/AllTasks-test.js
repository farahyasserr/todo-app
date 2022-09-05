import React from 'react';
import renderer from 'react-test-renderer';
import AllTasks from '../src/screens/AllTasks/AllTasks';

jest.mock('react-native-modal', () => 'Modal');

test('renders correctly', () => {
  const tree = renderer.create(<AllTasks />).toJSON();
  expect(tree).toMatchSnapshot();
});
