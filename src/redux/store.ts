import {createStore,applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from './root-reducer';
const middlewares=[reduxThunk];
// import { configureStore } from '@reduxjs/toolkit'
if(process.env.MODE_ENV==='development'){
// middlewares.push(logger);

}
const store=createStore(rootReducer,applyMiddleware(...middlewares));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store
