import React from 'react';
import renderer from 'react-test-renderer';
import { Steppers } from './index';
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
  };
});


const steps = ['Personal Info', 'Office Details', 'Confirmation']
const links = ['/', '/Office', '/Confirm']

test('Stepper Loads', () => {
  const component = renderer.create(
    <Steppers steps={steps} links={links} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('detecting the number of steps', () => {
  const wrapper = shallow((<Steppers steps={steps} links={links} />));
  expect(wrapper.find('ul').childAt(0).type()).toEqual('li');
  expect(wrapper.find('li')).toHaveLength(3);
  expect(wrapper.find('ul').childAt(0).hasClass('completed')).toEqual(true);
});
test('Simulating Click on a completed step ', () => {
  const wrapper = shallow((<Steppers steps={steps} links={links} />));
  wrapper.find('.completed').simulate('click');
  expect(wrapper.find('ul').childAt(0).hasClass('active')).toEqual(true);
});

