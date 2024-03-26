import {combineReducers} from 'redux';
import authReducer from './authReducer';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer:{
        user: authReducer,
    }
})