import React from 'react';
import renderer from 'react-test-renderer';
import { Register } from './index';
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
    useDispatch: ()=>jest.fn()
  };
});

test('Stepper Loads', () => {
  const component = renderer.create(
    <Register />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Simulating Form submit', () => {
  const wrapper = shallow((<Register />));
  const fakeEvent = { preventDefault: () => jest.fn() };
  expect(wrapper.find('form')).toHaveLength(1);
  const entries = jest.fn()
  const get = (key) => {
    switch (key) {
      case "usr_name":
      return "Md Nawaz Khan";
      case "usr_phn":
      return "9121223331";
      case "usr_email":
      return "nawazmd230@gmail.com";
      case "usr_add_1":
      return "169, Mukti";
      case "usr_add_2":
      return "Malleshwaram, Bnglr";
      case "usr_add_3":
      return "India, 560003";
      default:
        return "";
    }
  }
  const append = jest.fn()
  global.FormData = () => ({ entries, append, get })
  wrapper.find("form").simulate('submit', fakeEvent);
   expect(wrapper.find('form')).toHaveLength(1);
});


