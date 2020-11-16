import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './index';
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
      location:{pathname:'/'}
    }),
  }));

test('Header Loads', () => {
  const component = renderer.create(
    <Header icon={'Hey'}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});