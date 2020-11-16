import React from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './ReduxFiles/reducers';
import {rootSaga} from './ReduxFiles/sagas';
import createSagaMiddleware from 'redux-saga';

import {
  BrowserRouter as Router,
  Switch,
  Route, useHistory, Link
} from "react-router-dom";

import { Header } from './UI Components/Header';
import { Register } from './UI Components/Registration';
import { Confirmation } from './UI Components/Confirmation';
import { OfficeDetails } from './UI Components/OfficeDetails';
import { Steppers } from './UI Components/Steppers';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const steps = ['Personal Info', 'Office Details', 'Confirmation']
const links = ['/','/Office','/Confirm']
export const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header icon={<img className="hamburger-menu" src={require('./images/hamburger_menu.svg')} />}/>
          <Steppers steps={steps} links={links} />
          <div className="d-flex main-container" >
            <Switch>
              <Route exact path="/" children={<Register />} />
              <Route exact strict path="/Office" children={<OfficeDetails />} />
              <Route exact strict path="/Confirm" children={<Confirmation icon={<img src={require('./images/tick.gif')} width={100} height={100} />}/>} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}
