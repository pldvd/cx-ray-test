import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer';

const store = createStore(reducer, compose(applyMiddleware(thunk, createLogger)));

export default store;
