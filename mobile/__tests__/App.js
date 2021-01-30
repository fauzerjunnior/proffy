import renderer from 'react-test-renderer';
// Note: test renderer must be required after react-native.

import 'react-native';
import React from 'react';
import App from '../App.tsx';

it('renders correctly', () => {
  renderer.create(<App />);
});
