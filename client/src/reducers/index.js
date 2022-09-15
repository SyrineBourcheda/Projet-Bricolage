import { combineReducers } from 'redux';
import ads from './ads_reducers';
import user from './user_reducers';
import comments from './comments-reducers';
import msgs from './message_reducers';
const rootReducer = combineReducers({
    ads,
    user,
    comments,
    msgs
});

export default rootReducer;