import React from 'react';
import renderer from 'react-test-renderer';
import { Confirmation } from './index';
import '@testing-library/jest-dom/extend-expect';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
    location: { pathname: '/' }
  }),
}));
jest.mock('react-router', () => ({
  useHistory: () => ({
    push: jest.fn(),
    location: { pathname: '/' }
  }),
}));
jest.mock('firebase', () => ({
  initializeApp: () => ({
    analytics: jest.fn(),
    auth: jest.fn(),
  }), firestore: jest.fn(),
}));

jest.mock('react-redux', () => {
  const ActualReactRedux = require.requireActual('react-redux');
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => {
      return 1;
    }),
    useDispatch: () => jest.fn()
  };
});


test('Confirmation Loads', () => {
  const component = renderer.create(
    <Confirmation />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Simulating Form submit', () => {
  const wrapper = shallow((<Confirmation />));
  wrapper.find('.red').simulate('click');
  wrapper.find('#reset').simulate('click');
});
test('Simulating Back', () => {
  const wrapper = shallow((<Confirmation />));
  wrapper.find('.grey').simulate('click');
});

