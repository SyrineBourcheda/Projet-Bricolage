import { combineReducers } from 'redux';
import ads from './ads_reducers';
import user from './user_reducers';
import comments from './comments-reducers'
const rootReducer = combineReducers({
    ads,
    user,
    comments
});

export default rootReducer;