import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';

import HSEArticleReducer from './HSEArticleReducer';
import HSEPendingEligibilityFiltersQueueReducer from './HSEPendingEligibilityFiltersQueueReducer';

export default combineReducers({
    hsePendingEligibilityFiltersQueue: HSEPendingEligibilityFiltersQueueReducer,
    hse: HSEArticleReducer,
    form: formReducer,
    auth: authReducer
});