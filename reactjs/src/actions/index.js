import axios from 'axios';
import { 
  AUTH_USER, 
  AUTH_ERROR, 
  CONFIRM_USER_EMAIL, 
  FORGOT_PASSWORD_EMAIL, 
  CREATE_HSE_ARTICLE, 
  HSE_ARTICLE_ERROR, 
  CREATE_HSE_BATCHFILE,

  HSE_PENDING_ELIGIBILITY_FILTERS_QUEUE,
  HSE_PENDING_ELIGIBILITY_FILTERS_QUEUE_ERROR
} from './types';

//const backendServer = "https://nameless-hollows-27940.herokuapp.com";
//const backendServer = "http://localhost:5000";
const backendServer = "/api";

export const signup = (formProps, callback) => async dispatch => {
  
  try {
    await axios.post(
      `${backendServer}/signup`,
      formProps
    );

    dispatch({ type: CONFIRM_USER_EMAIL, payload: 'Please confirm your email' });

    callback();

  } catch (e) {

    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });

  }
};

export const signin = (formProps, callback) => async dispatch => {
  
  try {
    const response = await axios.post(
      `${backendServer}/signin`,
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });

    localStorage.setItem('token', response.data.token);

    callback();

  } catch (e) {

    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials or Unconfirmed email' });

  }
};

export const resetPassword = (formProps, token, callback) => async dispatch => {
  try {
    await axios.post(
      `${backendServer}/resetpassword/${token}`,
      formProps
    );

    dispatch({ type: AUTH_USER, payload: 'Password has been reset' });
    
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Password could NOT be reset' });
  }
};

export const forgotpassword = (formProps, callback) => async dispatch => {
  try {
    await axios.post(
      `${backendServer}/forgotpassword`,
      formProps
    );

    dispatch({ type: FORGOT_PASSWORD_EMAIL, payload: 'Sending password reset email' });
    
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials or Unconfirmed email' });
  }
};

export const signout = () => {
  
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: 'Successfully signed out'
  };

};

// HSE Article
export const onHSEArticleSubmit = (values, history) => async dispatch => {
  
  try {
    const response = await axios.post(
      `${backendServer}/hsearticles`,
      values
    );

    history.push('/dashboard');

    dispatch({ type: CREATE_HSE_ARTICLE, payload: response.data })

  } catch(e) {

    dispatch({ type: HSE_ARTICLE_ERROR, payload: 'Error creating Article'});

  }
};

export const submitHSEBatchFile = (values, file, history) => async dispatch => {

  const uploadConfig = await axios.get('/api/hse/getfileurl');

  await axios.put(uploadConfig.data.url, file, {
    headers: {
      'Content-Type': file.type,
    }
  });

  axios.post('/api/hse/batchfile', { url: uploadConfig.data.key } );
  
  dispatch({ type: CREATE_HSE_BATCHFILE, payload: '' });

  history.push('/hse/pendingeligibilityfiltersqueue');

};

export const listHSEPendingEligibilityFiltersQueueArticles = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/pendingqualityappraisalqueue`);

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_QUEUE_ERROR, payload: 'Error showing hse eligibility pending queue'});
  }
};