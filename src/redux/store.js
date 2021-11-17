import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducer";

// const reducers = combineReducers({
// });
const middleware = applyMiddleware(thunk)
let store = createStore(reducer, undefined, middleware);

export default store;