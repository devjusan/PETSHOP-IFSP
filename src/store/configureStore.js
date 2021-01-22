import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modal from './modal';

const reducer = combineReducers({ modal });
const store = configureStore({ reducer });

export default store;
