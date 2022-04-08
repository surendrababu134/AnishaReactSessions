import { combineReducers } from 'redux';
import UserReducer from './User';
import FUserReducer from './FUsers';
const rootReducer = combineReducers({
    UserReducer,
    FUserReducer
});

export default rootReducer;