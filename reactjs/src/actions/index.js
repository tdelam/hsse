import axios from 'axios';
import { 
  AUTH_USER, 
  AUTH_ERROR, 
  CONFIRM_USER_EMAIL, 
  FORGOT_PASSWORD_EMAIL,

  CURRENT_USER,
  CURRENT_USER_ERROR,

  HSE_CREATE_ARTICLE,
  HSE_CREATE_ARTICLE_ERROR,
  HSE_CREATE_BATCHFILE,
  HSE_CREATE_BATCHFILE_ERROR,

  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE,
  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR,

  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT,
  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_ERROR,

  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE,
  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE_ERROR,

  HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE,
  HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR,

  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE,
  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR,

  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH,
  HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR,

  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER,
  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR,

  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER,
  HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR,

  // Quality Appraisals 
  HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE,
  HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,

  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT,
  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_ERROR,

  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE,
  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE_ERROR,

  HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE,
  HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR,

  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE,
  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,

  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH,
  HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR,

  HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER,
  HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR,

  HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER,
  HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR,

/* SSE */
  SSE_CREATE_ARTICLE,
  SSE_CREATE_ARTICLE_ERROR,
  SSE_CREATE_BATCHFILE,
  SSE_CREATE_BATCHFILE_ERROR,

  SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE,
  SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR,

  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT,
  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_ERROR,

  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE,
  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE_ERROR,

  SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE,
  SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR,

  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE,
  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR,

  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH,
  SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR,

  SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER,
  SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR,

  SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER,
  SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR,

  // Quality Appraisals
  SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE,
  SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,

  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT,
  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_ERROR,

  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE,
  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE_ERROR,

  SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE,
  SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR,

  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE,
  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR,

  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH,
  SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR,

  SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER,
  SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR,

  SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER,
  SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR

} from './types';

const backendServer = "/api";

const headers = {
  'Content-Type': 'application/json',
  'Authorization': localStorage.getItem('token') 
};

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

export const getCurrentUser = ( ) => async dispatch => {
  
  try {
      const response = await axios.get(`${backendServer}/currentuser`, {
      headers: { authorization: localStorage.getItem('token') }
    });
    
    dispatch({ type: CURRENT_USER, payload: response.data });

  } catch (e) {
    
    dispatch({ type: CURRENT_USER_ERROR, payload: e });

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

    dispatch({ type: HSE_CREATE_ARTICLE, payload: response.data })

  } catch(e) {

    dispatch({ type: HSE_CREATE_ARTICLE_ERROR, payload: 'Error creating Article'});

  }
};

export const submitHSEBatchFile = (state, history) => async dispatch => {console.log(state);

  const uploadConfig = await axios.get('/api/hse/getfileurl');

  await axios.put(uploadConfig.data.url, state.file, {
    headers: {
      'Content-Type': state.file.type,
    }
  });

  const articleBatch = await axios.post('/api/hse/batchfile', { 
    url: uploadConfig.data.key, 
    language: state.selectedLanguageOption.label, 
    articleSource: state.selectedSourceOption.label, 
    harvestDate: state.harvestDate,
    fileName: state.file.name
  });
  console.log(state.file.name);
  if(articleBatch) {
    
    dispatch({ type: HSE_CREATE_BATCHFILE, payload: 'Batchfile succesfully uploaded' });

    // Successful upload
    history.push('/hse/pendingeligibilityfiltersarticlequeue');

  } else {
    // Unsuccesful upload
    dispatch({ type: HSE_CREATE_BATCHFILE_ERROR, payload: 'Batchfile succesfully uploaded' });
    history.push('/hse/pendingeligibilityfiltersarticlequeue');
    console.log("Batchfile upload failed")
  }

};

export const listHSEPendingEligibilityFiltersArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/pendingeligibilityfiltersarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR, payload: 'Error showing hse eligibility filter article pending queue'});
  }
};

export const listHSEPendingQualityAppraisalsArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/pendingqualityappraisalsarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR, payload: 'Error showing hse quality appraisals article pending queue'});
  }
};

export const listHSEPendingEligibilityFiltersBatchfilesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/articlebatchfiles`);

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR, payload: 'Error showing hse eligibility filter batchfile pending queue'});
  }
};

export const listHSEPendingQualityAppraisalsBatchfilesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/articlebatchfiles`);

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR, payload: 'Error showing hse quality appraisals batchfile pending queue'});
  }
};

export const listHSEAssignedEligibilityFiltersArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/assignedeligibilityfiltersarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR, payload: 'Error showing hse eligibility filter article assigned queue'});
  }
};

export const listHSEAssignedQualityAppraisalsArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/assignedqualityappraisalsarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR, payload: 'Error showing hse quality appraisal article assigned queue'});
  }
};

export const fetchHSEAssignedEligibilityFiltersArticle = (articleId, history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/assignedeligibilityfiltersarticle/fetcharticle/${articleId}`, { headers });
  
    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR, payload: 'Error fetching hse eligibility filter assigned article'});
  }
};

export const fetchHSEAssignedQualityAppraisalsArticle = (articleId, history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/hse/assignedqualityappraisalsarticle/fetcharticle/${articleId}`, { headers });
  
    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH, payload: response.data })
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR, payload: 'Error fetching hse quality appraisals assigned article'});
  }
};

export const assignHSEPendingEligibilityFiltersArticlesJuniorFilter = (articleId , history) => async dispatch => {

  try {
    const response = await axios.post(`${backendServer}/hse/pendingeligibilityfiltersarticle/addjuniorfilter/${articleId}`, 
    {
      articleId
    },
    {
      headers 
    });
    
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER, payload: response.data });
    history.push('/hse/assignedeligibilityfiltersarticlequeue');
  } catch(e) {
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR, payload: 'Error assigning junior filter role for article'});
  }
};

export const assignHSEPendingQualityAppraisalsArticlesJuniorAppraiser = (articleId , history) => async dispatch => {

  try {
    const response = await axios.post(`${backendServer}/hse/pendingqualityappraisalsarticle/addjuniorfilter/${articleId}`, 
    {
      articleId
    },
    {
      headers 
    });
    
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER, payload: response.data });
    history.push('/hse/assignedeligibilityfiltersarticlequeue');
  } catch(e) {
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR, payload: 'Error assigning junior appraiser role for article'});
  }
};

export const assignHSEPendingEligibilityFiltersArticlesSeniorFilter = (articleId, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/hse/pendingeligibilityfiltersarticle/addseniorfilter/${articleId}`,
    {
      articleId
    },
    {
      headers
    });

    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER, payload: response.data });
    history.push('/hse/assignedeligibilityfiltersarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR, payload: 'Error assigning senior filter role for article'});
  }
};

export const assignHSEPendingQualityAppraisalsArticlesSeniorAppraiser = (articleId, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/hse/pendingqualityappraisersarticle/addseniorfilter/${articleId}`,
    {
      articleId
    },
    {
      headers
    });

    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER, payload: response.data });
    history.push('/hse/assignedeligibilityfiltersarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR, payload: 'Error assigning senior appraiser role for article'});
  }
};

export const assignHSEPendingEligibilityFiltersArticleEdit = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/hse/assignedeligibilityfiltersarticle/savevalues/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT, payload: response.data });
    //history.push('/hse/assignedeligibilityfiltersarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_ERROR, payload: 'Error saving values for article'});
  }
};

export const assignHSEPendingQualityAppraisalsArticleEdit = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/hse/assignedqualityappraisalsarticle/savevalues/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT, payload: response.data });
    //history.push('/hse/assignedqualityappraisalsarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_ERROR, payload: 'Error saving values for article'});
  }
};

export const assignHSEPendingEligibilityFiltersArticleEditComplete = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/hse/assignedeligibilityfiltersarticle/setcompleted/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE, payload: response.data });
    history.push('/hse/assignedeligibilityfiltersarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE_ERROR, payload: 'Error completing values for article'});
  }
};

export const assignHSEPendingQualityAppraisalsArticleEditComplete = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/hse/assignedqualityappraisalsarticle/setcompleted/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE, payload: response.data });
    history.push('/hse/assignedqualityappraisalsarticlequeue');
    
  } catch(e) {
    dispatch({ type: HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE_ERROR, payload: 'Error completing values for article'});
  }
};

export const onSSEArticleSubmit = (values, history) => async dispatch => {
  
  try {
    const response = await axios.post(
      `${backendServer}/ssearticles`,
      values
    );

    history.push('/dashboard');

    dispatch({ type: SSE_CREATE_ARTICLE, payload: response.data })

  } catch(e) {

    dispatch({ type: SSE_CREATE_ARTICLE_ERROR, payload: 'Error creating Article'});

  }
};

export const submitSSEBatchFile = (state, history) => async dispatch => {

  const uploadConfig = await axios.get('/api/sse/getfileurl');

  await axios.put(uploadConfig.data.url, state.file, {
    headers: {
      'Content-Type': state.file.type,
    }
  });

  const articleBatch = await axios.post('/api/sse/batchfile', { 
    url: uploadConfig.data.key, 
    language: state.selectedLanguageOption.label, 
    articleSource: state.selectedSourceOption.label, 
    harvestDate: state.harvestDate,
    fileName: state.file.name
  });
  console.log(state.file.name);
  if(articleBatch) {
    
    dispatch({ type: SSE_CREATE_BATCHFILE, payload: 'Batchfile succesfully uploaded' });

    // Successful upload
    history.push('/sse/pendingeligibilityfiltersarticlequeue');

  } else {
    // Unsuccesful upload
    dispatch({ type: SSE_CREATE_BATCHFILE_ERROR, payload: 'Batchfile succesfully uploaded' });
    history.push('/sse/pendingeligibilityfiltersarticlequeue');
    console.log("Batchfile upload failed")
  }

};

export const listSSEPendingEligibilityFiltersArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/pendingeligibilityfiltersarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR, payload: 'Error showing sse eligibility filter article pending queue'});
  }
};

export const listSSEPendingQualityAppraisalsArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/pendingqualityappraisalsarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR, payload: 'Error showing sse quality appraisals article pending queue'});
  }
};

export const listSSEPendingEligibilityFiltersBatchfilesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/articlebatchfiles`);

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR, payload: 'Error showing sse eligibility filter batchfile pending queue'});
  }
};

export const listSSEPendingQualityAppraisalsBatchfilesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/articlebatchfiles`);

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR, payload: 'Error showing sse quality appraisals batchfile pending queue'});
  }
};

export const listSSEAssignedEligibilityFiltersArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/assignedeligibilityfiltersarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR, payload: 'Error showing sse eligibility filter article assigned queue'});
  }
};

export const listSSEAssignedQualityAppraisalsArticlesQueue = (history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/assignedqualityappraisalsarticlequeue`, {
      headers: { authorization: localStorage.getItem('token') }
    });

    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR, payload: 'Error showing sse quality appraisals article assigned queue'});
  }
};

export const fetchSSEAssignedEligibilityFiltersArticle = (articleId, history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/assignedeligibilityfiltersarticle/fetcharticle/${articleId}`, { headers });
  
    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR, payload: 'Error fetching sse eligibility filter assigned article'});
  }
};

export const fetchSSEAssignedQualityAppraisalsArticle = (articleId, history) => async dispatch => {
  try {
    const response = await axios.get(`${backendServer}/sse/assignedqualityappraisalsarticle/fetcharticle/${articleId}`, { headers });
  
    // history.push('/dashboard');
    // console.log(response.data);
    dispatch({ type: SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH, payload: response.data })
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR, payload: 'Error fetching sse quality appraisals assigned article'});
  }
};

export const assignSSEPendingEligibilityFiltersArticlesJuniorFilter = (articleId , history) => async dispatch => {

  try {
    const response = await axios.post(`${backendServer}/sse/pendingeligibilityfiltersarticle/addjuniorfilter/${articleId}`, 
    {
      articleId
    },
    {
      headers 
    });
    
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER, payload: response.data });
    history.push('/sse/assignedeligibilityfiltersarticlequeue');
  } catch(e) {
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR, payload: 'Error assigning junior filter role for article'});
  }
};

export const assignSSEPendingQualityAppraisalsArticlesJuniorFilter = (articleId , history) => async dispatch => {

  try {
    const response = await axios.post(`${backendServer}/sse/pendingqualityappraisalsarticle/addjuniorappraiser/${articleId}`, 
    {
      articleId
    },
    {
      headers 
    });
    
    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER, payload: response.data });
    history.push('/sse/assignedqualityappraisalsarticlequeue');
  } catch(e) {
    dispatch({ type: SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR, payload: 'Error assigning junior appraiser role for article'});
  }
};

export const assignSSEPendingEligibilityFiltersArticlesSeniorFilter = (articleId, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/sse/pendingeligibilityfiltersarticle/addseniorfilter/${articleId}`,
    {
      articleId
    },
    {
      headers
    });

    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER, payload: response.data });
    history.push('/sse/assignedeligibilityfiltersarticlequeue');
    
  } catch(e) {
    dispatch({ type: SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR, payload: 'Error assigning senior filter role for article'});
  }
};

export const assignSSEPendingEligibilityFiltersArticleEdit = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/sse/assignedeligibilityfiltersarticle/savevalues/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT, payload: response.data });
    //history.push('/sse/assignedeligibilityfiltersarticlequeue');
    
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_ERROR, payload: 'Error saving values for article'});
  }
};

export const assignSSEPendingEligibilityFiltersArticleEditComplete = (articleId, inputValues, history) => async dispatch => {
  try {
    const response = await axios.post(`${backendServer}/sse/assignedeligibilityfiltersarticle/setcompleted/${articleId}`,
    {
      inputValues
    },
    {
      headers
    });

    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE, payload: response.data });
    history.push('/sse/assignedeligibilityfiltersarticlequeue');
    
  } catch(e) {
    dispatch({ type: SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE_ERROR, payload: 'Error completing values for article'});
  }
};


