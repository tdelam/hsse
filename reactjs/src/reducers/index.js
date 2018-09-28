import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';

import HSEArticleReducer from './HSEArticleReducer';

export default combineReducers({
    hse: HSEArticleReducer,
    form: formReducer,
    auth: authReducer
});