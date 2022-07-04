import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import tasksReducer from './reducers/TasksReducer'

export default createStore(tasksReducer, applyMiddleware(thunk))