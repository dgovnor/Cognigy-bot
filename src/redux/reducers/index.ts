import { combineReducers } from "redux";
import MessageReducer from './message'

const rootReducer =  combineReducers({ data: MessageReducer });
export default rootReducer