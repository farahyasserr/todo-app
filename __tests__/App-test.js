import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

jest.mock('react-native-modal', () => 'Modal');

it('renders correctly', () => {
  renderer.create(<App />);
});
