/**
 * @name types.js
 * @author Kwadwo Sakyi
 * @description This file defines all types of events which are dispatched by components, which are in turn
 * rendered as a result of a route.  See ../Routes.js for more details. 
 */

export const AUTH_USER = 'auth_user';
export const AUTH_ERROR = 'auth_error';
export const CONFIRM_USER_EMAIL = 'confirm_user_email';
export const FORGOT_PASSWORD_EMAIL = 'forgot_password_email';

export const FETCH_ALL_USERS = 'fetch_all_users';
export const FETCH_ALL_USERS_ERROR = 'fetch_all_users_error';

export const FETCH_USER_BY_EMAIL = 'fetch_user_by_email';
export const FETCH_USER_BY_EMAIL_ERROR = 'fetch_user_by_email_error';

export const CURRENT_USER = 'current_user';
export const CURRENT_USER_ERROR = 'current_user_error';

export const ADD_USER_ROLE = 'add_user_role';
export const ADD_USER_ROLE_ERROR = 'add_user_role_error';

export const REMOVE_USER_ROLE ='remove_user_role';
export const REMOVE_USER_ROLE_ERROR ='remove_user_role_error';

export const UPDATE_USER_ROLE = 'update_user_role';
export const UPDATE_USER_ROLE_ERROR = 'update_user_role_error';

export const ACTIVATE_USER = 'activate_user';
export const ACTIVATE_USER_ERROR = 'activate_user_error';

export const DEACTIVATE_USER = 'deactivate_user';
export const DEACTIVATE_USER_ERROR = 'deactivate_user_error';

export const HSE_ARTICLE_ERROR = 'hse_article_error';

export const HSE_ADD_ARTICLE_TO_COMPLICATED_QUEUE = 'hse_add_article_to_complicated_queue';
export const HSE_ADD_ARTICLE_TO_COMPLICATED_QUEUE_ERROR = 'hse_add_article_to_complicated_queue_error';

export const HSE_ADD_ARTICLE_TO_LOST_QUEUE = 'hse_add_article_to_lost_queue';
export const HSE_ADD_ARTICLE_TO_LOST_QUEUE_ERROR = 'hse_add_article_to_lost_queue_error';

export const HSE_FETCH_ARTICLE = 'hse_fetch_article';
export const HSE_FETCH_ARTICLE_ERROR = 'hse_fetch_article_error';
export const HSE_CREATE_ARTICLE = 'hse_create_article';
export const HSE_CREATE_ARTICLE_ERROR = 'hse_create_article_error';
export const HSE_CREATE_BATCHFILE = 'hse_create_batchfile';
export const HSE_CREATE_BATCHFILE_ERROR = 'hse_create_batchfile_error';

export const HSE_CREATE_RECIPIENT = 'hse_create_recipient';
export const HSE_CREATE_RECIPIENT_ERROR = 'hse_create_recipient_error';

export const HSE_DELETE_ARTICLE = 'delete_hse_article';

export const SSE_ARTICLE_ERROR = 'sse_article_error';

export const SSE_FETCH_ARTICLE = 'sse_fetch_article';
export const SSE_FETCH_ARTICLE_ERROR = 'sse_fetch_article_error';
export const SSE_CREATE_ARTICLE = 'sse_create_article';
export const SSE_CREATE_ARTICLE_ERROR = 'sse_create_article_error';
export const SSE_CREATE_BATCHFILE = 'sse_create_batchfile';
export const SSE_CREATE_BATCHFILE_ERROR = 'sse_create_batchfile_error';

export const SSE_DELETE_ARTICLE = 'delete_sse_article';

// HSE PENDING QUEUE
export const HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER = 'hse_pending_eligibility_filters_article_assign_junior_filter';
export const HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR = 'hse_pending_eligibility_filters_article_assign_junior_filter_error';

export const HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_ALL_JUNIOR_FILTER = 'hse_pending_eligibility_filters_article_assign_all_junior_filter';
export const HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_ALL_JUNIOR_FILTER_ERROR = 'hse_pending_eligibility_filters_article_assign_all_junior_filter_error';

export const HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER = 'hse_pending_eligibility_filters_article_assign_seniorfilter';
export const HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR = 'hse_pending_eligibility_filters_article_assign_seniorfilter_error';

export const HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_ALL_SENIOR_FILTER = 'hse_pending_eligibility_filters_article_assign_all_seniorfilter';
export const HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_ALL_SENIOR_FILTER_ERROR = 'hse_pending_eligibility_filters_article_assign_all_seniorfilter_error';

export const HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE = 'hse_pending_eligibility_filters_article_queue';
export const HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE = 'hse_pending_eligibility_filters_batchfile_queue';

export const HSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR = 'hse_pending_eligibility_filters_article_queue_error';
export const HSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR = 'hse_pending_eligibility_filters_batchfile_queue_error';

export const HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER = 'hse_pending_quality_appraisals_article_assign_junior_appraiser';
export const HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER_ERROR = 'hse_pending_quality_appraisals_article_assign_junior_appraiser_error';

export const HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER = 'hse_pending_quality_appraisals_article_assign_senior_appraiser';
export const HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER_ERROR = 'hse_pending_quality_appraisals_article_assign_senior_appraiser_error';

export const HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE = 'hse_pending_quality_appraisals_article_queue';
export const HSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR = 'hse_pending_quality_appraisals_article_queue_error';

export const HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE = 'hse_pending_quality_appraisals_batchfile_queue';
export const HSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR = 'hse_pending_quality_appraisals_batchfile_queue_error';

// HSE PENDING LINKING STUDIES
export const HSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE = 'hse_pending_linking_studies_article_queue';
export const HSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE_ERROR = 'hse_pending_linking_studies_article_queue_error';

export const HSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE = 'hse_pending_linking_studies_batchfile_queue';
export const HSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE_ERROR = 'hse_pending_linking_studies_batchfile_queue_error';

export const HSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER = 'hse_pending_linking_studies_article_assign_junior_linker';
export const HSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER_ERROR = 'hse_pending_linking_studies_article_assign_junior_linker_error';

// HSE PENDING PRESENTATION DETAILS
export const HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE = 'hse_pending_presentation_details_article_queue';
export const HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR = 'hse_pending_presentation_details_article_queue_error';

export const HSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE = 'hse_pending_presentation_details_batchfile_queue';
export const HSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE_ERROR = 'hse_pending_presentation_details_batchfile_queue_error';

export const HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER = 'hse_pending_presentation_details_article_assign_junior_detailer';
export const HSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER_ERROR = 'hse_pending_presentation_details_article_assign_junior_detailer_error';

// HSE PENDING TRANSLATING TITLES
export const HSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE = 'hse_pending_translating_titles_article_queue';
export const HSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR = 'hse_pending_translating_titles_article_queue_error';

export const HSE_PENDING_TRANSLATING_TITLES_BATCHFILE_QUEUE = 'hse_pending_translating_titles_batchfile_queue';
export const HSE_PENDING_TRANSLATING_TITLES_BATCHFILE_QUEUE_ERROR = 'hse_pending_translating_titles_batchfile_queue_error';

export const HSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR = 'hse_pending_translating_titles_article_assign_junior_translator';
export const HSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR_ERROR = 'hse_pending_translating_titles_article_assign_junior_translator_error';

// HSE PENDING TRACKING PRIORITIZING
export const HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_QUEUE = 'hse_pending_tracking_prioritizing_article_queue';
export const HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_QUEUE_ERROR = 'hse_pending_tracking_prioritizing_titles_article_queue_error';

export const HSE_PENDING_TRACKING_PRIORITIZING_BATCHFILE_QUEUE = 'hse_pending_tracking_prioritizing_batchfile_queue';
export const HSE_PENDING_TRACKING_PRIORITIZING_BATCHFILE_QUEUE_ERROR = 'hse_pending_tracking_prioritizing_batchfile_queue_error';

export const HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_ASSIGN_JUNIOR_PRIORITIZER = 'hse_pending_tracking_prioritizing_article_assign_junior_prioritizer';
export const HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_ASSIGN_JUNIOR_PRIORITIZER_ERROR = 'hse_pending_tracking_prioriziting_article_assign_junior_prioritizer_error';

export const HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_ASSIGN_SENIOR_PRIORITIZER = 'hse_pending_tracking_prioritizing_article_assign_senior_prioritizer';
export const HSE_PENDING_TRACKING_PRIORITIZING_ARTICLE_ASSIGN_SENIOR_PRIORITIZER_ERROR = 'hse_pending_tracking_prioriziting_article_assign_senior_prioritizer_error';

// HSE TRACKING PRIORITIZING
export const HSE_TRACKING_PRIORITIZING_ARTICLE_QUEUE = 'hse_tracking_prioritizing_article_queue';
export const HSE_TRACKING_PRIORITIZING_ARTICLE_QUEUE_ERROR = 'hse_tracking_prioritizing_titles_article_queue_error';


// HSE ASSIGNED QUEUE ELIGIBILITY & FILTERS
export const HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE = 'hse_assigned_eligibility_filters_article_queue';
export const HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR = 'hse_assigned_eligibility_filters_article_queue_error';

export const HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT = 'hse_assigned_eligibility_filters_arcticle_edit';
export const HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_ERROR = 'hse_assigned_eligibility_filters_edit_error';

export const HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE = 'hse_assigned_eligibility_filters_edit_complete';
export const HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE_ERROR = 'hse_assigned_eligibility_filters_edit_complete_error';

export const HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH = 'hse_assigned_eligibility_filters_article_fetch';
export const HSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR = 'hse_assigned_eligibility_filters_article_fetch_error';

// HSE ASSIGNED QUALITY APPRAISALS
export const HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT = 'hse_assigned_quality_appraisals_arcticle_edit';
export const HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_ERROR = 'hse_assigned_quality_appraisals_edit_error';

export const HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE = 'hse_assigned_quality_appraisals_edit_complete';
export const HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE_ERROR = 'hse_assigned_quality_appraisals_edit_complete_error';

export const HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE = 'hse_assigned_quality_appraisals_article_queue';
export const HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR = 'hse_assigned_quality_appraisals_article_queue_error';

export const HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH = 'hse_assigned_quality_appraisals_article_fetch';
export const HSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR = 'hse_assigned_quality_appraisals_article_fetch_error';


// HSE ASSIGNED LINKING STUDIES
export const HSE_ASSIGNED_LINKING_STUDIES_QUEUE = 'hse_assigned_linking_studies_article_queue';
export const HSE_ASSIGNED_LINKING_STUDIES_QUEUE_ERROR = 'hse_assigned_linking_studies_article_queue_error';

export const HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE = 'hse_assigned_linking_studies_article_queue';
export const HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE_ERROR = 'hse_assigned_linking_studies_article_queue_error';

export const HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH = 'hse_assigned_linking_studies_article_fetch';
export const HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH_ERROR = 'hse_assigned_linking_studies_article_fetch_error';

export const HSE_ASSIGNED_LINKING_STUDIES_BATCHFILE_QUEUE = 'hse_assigned_linking_studies_batchfile_queue';
export const HSE_ASSIGNED_LINKING_STUDIES_BATCHFILE_QUEUE_ERROR = 'hse_assigned_linking_studies_batchfile_queue_error';

export const HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT = 'hse_assigned_linking_studies_arcticle_edit';
export const HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_ERROR = 'hse_assigned_linking_studies_edit_error';

export const HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_COMPLETE = 'hse_assigned_linking_studies_edit_complete';
export const HSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_COMPLETE_ERROR = 'hse_assigned_linking_studies_edit_complete_error';

// HSE ASSIGNED PRESENTATION DETAILS
export const HSE_ASSIGNED_PRESENTATION_DETAILS_QUEUE = 'hse_assigned_presentation_details_article_queue';
export const HSE_ASSIGNED_PRESENTATION_DETAILS_QUEUE_ERROR = 'hse_assigned_presentation_details_article_queue_error';

export const HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE = 'hse_assigned_presentation_details_article_queue';
export const HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR = 'hse_assigned_presentation_details_article_queue_error';

export const HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH = 'hse_assigned_presentation_details_article_fetch';
export const HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH_ERROR = 'hse_assigned_presentation_details_article_fetch_error';

export const HSE_ASSIGNED_PRESENTATION_DETAILS_BATCHFILE_QUEUE = 'hse_assigned_presentation_details_batchfile_queue';
export const HSE_ASSIGNED_PRESENTATION_DETAILS_BATCHFILE_QUEUE_ERROR = 'hse_assigned_presentation_details_batchfile_queue_error';

export const HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT = 'hse_assigned_presentation_details_arcticle_edit';
export const HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_ERROR = 'hse_assigned_presentation_details_edit_error';

export const HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_COMPLETE = 'hse_assigned_presentation_details_edit_complete';
export const HSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_COMPLETE_ERROR = 'hse_assigned_presentation_details_edit_complete_error';

// HSE ASSIGNED TRANSLATING TITLES
export const HSE_ASSIGNED_TRANSLATING_TITLES_QUEUE = 'hse_assigned_translating_titles_article_queue';
export const HSE_ASSIGNED_TRANSLATING_TITLES_QUEUE_ERROR = 'hse_assigned_translating_titles_article_queue_error';

export const HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_QUEUE = 'hse_assigned_translating_titles_article_queue';
export const HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR = 'hse_assigned_translating_titles_article_queue_error';

export const HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_FETCH = 'hse_assigned_translating_titles_article_fetch';
export const HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_FETCH_ERROR = 'hse_assigned_translating_titles_article_fetch_error';

export const HSE_ASSIGNED_TRANSLATING_TITLES_BATCHFILE_QUEUE = 'hse_assigned_translating_titles_batchfile_queue';
export const HSE_ASSIGNED_TRANSLATING_TITLES_BATCHFILE_QUEUE_ERROR = 'hse_assigned_translating_titles_batchfile_queue_error';

export const HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_EDIT = 'hse_assigned_translating_titles_article_edit';
export const HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_EDIT_ERROR = 'hse_assigned_translating_titles_article_edit_error';

export const HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_EDIT_COMPLETE = 'hse_assigned_translating_titles_article_edit_complete';
export const HSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_EDIT_COMPLETE_ERROR = 'hse_assigned_translating_titles_article_edit_complete_error';

// HSE ASSIGNED TRACKING PRIORITIZING
export const HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_QUEUE = 'hse_assigned_tracking_prioritizing_article_queue';
export const HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_QUEUE_ERROR = 'hse_assigned_tracking_prioritizing_article_queue_error';

export const HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_FETCH = 'hse_assigned_tracking_prioritizing_article_fetch';
export const HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_FETCH_ERROR = 'hse_assigned_tracking_prioritizing_article_fetch_error';

export const HSE_ASSIGNED_TRACKING_PRIORITIZING_BATCHFILE_QUEUE = 'hse_assigned_tracking_prioritizing_batchfile_queue';
export const HSE_ASSIGNED_TRACKING_PRIORITIZING_BATCHFILE_QUEUE_ERROR = 'hse_assigned_tracking_prioritizing_batchfile_queue_error';

export const HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_EDIT = 'hse_assigned_tracking_prioritizing_article_edit';
export const HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_EDIT_ERROR = 'hse_assigned_tracking_prioritizing_article_edit_error';

export const HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_EDIT_COMPLETE = 'hse_assigned_tracking_prioritizing_article_edit_complete';
export const HSE_ASSIGNED_TRACKING_PRIORITIZING_ARTICLE_EDIT_COMPLETE_ERROR = 'hse_assigned_tracking_prioritizing_article_edit_complete_error';


// SSE PENDING QUEUE
export const SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER = 'sse_pending_eligibility_filters_article_assign_junior_filter';
export const SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_JUNIOR_FILTER_ERROR = 'sse_pending_eligibility_filters_article_assign_junior_filter_error';

export const SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER = 'sse_pending_eligibility_filters_article_assign_senior_filter';
export const SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_ASSIGN_SENIOR_FILTER_ERROR = 'sse_pending_eligibility_filters_article_assign_senior_filter_error';

export const SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE = 'sse_pending_eligibility_filters_article_queue';
export const SSE_PENDING_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR = 'sse_pending_eligibility_filters_article_queue_error';

export const SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE = 'sse_pending_eligibility_filters_batchfile_queue';
export const SSE_PENDING_ELIGIBILITY_FILTERS_BATCHFILE_QUEUE_ERROR = 'sse_pending_eligibility_filters_batchfile_queue_error';


export const SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE = 'sse_pending_quality_appraisals_article_queue';
export const SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR = 'sse_pending_quality_appraisals_article_queue_error';

export const SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE = 'sse_pending_quality_appraisals_batchfile_queue';
export const SSE_PENDING_QUALITY_APPRAISALS_BATCHFILE_QUEUE_ERROR = 'sse_pending_quality_appraisals_batchfile_queue_error';

export const SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER = 'sse_pending_quality_appraisals_article_assign_junior_appraiser';
export const SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_JUNIOR_APPRAISER_ERROR = 'sse_pending_quality_appraisals_article_assign_junior_appraiser_error';

export const SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER = 'sse_pending_eligibility_filters_article_assign_senior_filter';
export const SSE_PENDING_QUALITY_APPRAISALS_ARTICLE_ASSIGN_SENIOR_APPRAISER_ERROR = 'sse_pending_eligibility_filters_article_assign_senior_filter_error';


export const SSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE = 'sse_pending_linking_studies_articles_queue';
export const SSE_PENDING_LINKING_STUDIES_ARTICLE_QUEUE_ERROR = 'sse_pending_linking_studies_article_queue_error';
            
export const SSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE = 'sse_pending_linking_studies_batchfile_queue';
export const SSE_PENDING_LINKING_STUDIES_BATCHFILE_QUEUE_ERROR = 'sse_pending_linking_studies_batchfile_queue_error';

export const SSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER = 'sse_pending_linking_studies_article_assign_junior_linker';
export const SSE_PENDING_LINKING_STUDIES_ARTICLE_ASSIGN_JUNIOR_LINKER_ERROR = 'sse_pending_linking_studies_article_assign_junior_linker_error';


export const SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE = 'sse_pending_presentation_details_article_queue';
export const SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR = 'sse_pending_presentation_details_article_queue_error';
            
export const SSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE = 'sse_pending_presentation_details_batchfile_queue';
export const SSE_PENDING_PRESENTATION_DETAILS_BATCHFILE_QUEUE_ERROR = 'sse_pending_presentation_details_batchfile_queue_error';

export const SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_PRESENTER = 'sse_pending_linking_studies_article_assign_junior_presenter';
export const SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_PRESENTER_ERROR = 'sse_pending_linking_studies_article_assign_junior_presenter_error';


export const SSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE = 'sse_pending_presentation_details_article_queue';
export const SSE_PENDING_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR = 'sse_pending_presentation_details_article_queue_error';
            
export const SSE_PENDING_TRANSLATING_TITLES_BATCHFILE_QUEUE = 'sse_pending_presentation_details_batchfile_queue';
export const SSE_PENDING_TRANSLATING_TITLES_BATCHFILE_QUEUE_ERROR = 'sse_pending_presentation_details_batchfile_queue_error';

export const SSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_PRESENTER = 'sse_pending_linking_studies_article_assign_junior_presenter';
export const SSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_PRESENTER_ERROR = 'sse_pending_linking_studies_article_assign_junior_presenter_error';

export const SSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR = 'sse_pending_translating_titles_article_assign_junior_translator';
export const SSE_PENDING_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR_ERROR = 'sse_pending_translating_titles_article_assign_junior_translator_error';


// SSE ASSIGNED ELIGIBILITY FILTERS
export const SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE = 'sse_assigned_eligibility_filters_queue';
export const SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_QUEUE_ERROR = 'sse_assigned_eligibility_filters_queue_error';

export const SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT = 'sse_assigned_eligibility_filters_article_edit';
export const SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_ERROR = 'sse_assigned_eligibility_filters_article_edit_error';

export const SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE = 'sse_assigned_eligibility_filters_article_edit_complete';
export const SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_EDIT_COMPLETE_ERROR = 'sse_assigned_eligibility_filters_article_edit_complete_error';

export const SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH = 'sse_assigned_eligibility_filters_article_fetch';
export const SSE_ASSIGNED_ELIGIBILITY_FILTERS_ARTICLE_FETCH_ERROR = 'sse_assigned_eligibility_filters_article_fetch_error';


// SSE ASSIGNED QUALITY APPRAISALS
export const SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE = 'sse_assigned_quality_appraisals_article_queue';
export const SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_QUEUE_ERROR = 'sse_assigned_quality_appraisals_article_queue_error';

export const SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT = 'sse_assigned_quality_appraisals_article_edit';
export const SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_ERROR = 'sse_assigned_quality_appraisals_article_edit_error';

export const SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE = 'sse_assigned_quality_appraisals_article_edit_complete';
export const SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_EDIT_COMPLETE_ERROR = 'sse_assigned_quality_appraisals_article_edit_complete_error';

export const SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH = 'sse_assigned_quality_appraisals_article_article_fetch';
export const SSE_ASSIGNED_QUALITY_APPRAISALS_ARTICLE_FETCH_ERROR = 'sse_assigned_quality_appraisals_article_article_fetch_error';


// SSE ASSIGNED LINKING STUDIES
export const SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE = 'sse_assigned_linking_studies_article_queue';
export const SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_QUEUE_ERROR = 'sse_assigned_linking_studies_article_queue_error';

export const SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT = 'sse_assigned_linking_studies_article_edit';
export const SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_ERROR = 'sse_assigned_linking_studies_article_edit_error';

export const SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_COMPLETE = 'sse_assigned_linking_studies_artcle_edit_complete';
export const SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_EDIT_COMPLETE_ERROR = 'sse_assigned_linking_studies_edit_complete_error';

export const SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH = 'sse_assigned_linking_studies_article_fetch';
export const SSE_ASSIGNED_LINKING_STUDIES_ARTICLE_FETCH_ERROR = 'sse_assigned_linking_studies_article_fetch_error';

// SSE ASSIGNED PRESENTATION DETAILS
export const SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER = 'sse_pending_presentation_details_article_assign_junior_detailer';
export const SSE_PENDING_PRESENTATION_DETAILS_ARTICLE_ASSIGN_JUNIOR_DETAILER_ERROR = 'sse_pending_presentation_details_article_assign_junior_detailer_error';

export const SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE = 'sse_assigned_presentation_details_article_queue';
export const SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_QUEUE_ERROR = 'sse_assigned_presentation_details_article_queue_error';

export const SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT = 'sse_assigned_presentation_details_article_edit';
export const SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_ERROR = 'sse_assigned_presentation_details_article_edit_error';

export const SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_COMPLETE = 'sse_assigned_presentation_details_article_edit_complete';
export const SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_EDIT_COMPLETE_ERROR = 'sse_assigned_presentation_details_article_edit_complete_error';

export const SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH = 'sse_assigned_presentation_details_article_fetch';
export const SSE_ASSIGNED_PRESENTATION_DETAILS_ARTICLE_FETCH_ERROR = 'sse_assigned_presentation_details_article_fetch_error';

// SSE ASSIGNED TRANSLATING TITLES
export const SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR = 'sse_assigned_translating_titles_article_assign_junior_translator';
export const SSE_ASSOGMED_TRANSLATING_TITLES_ARTICLE_ASSIGN_JUNIOR_TRANSLATOR_ERROR = 'sse_assigned_translating_titles_article_assign_junior_translator_error';

export const SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_QUEUE = 'sse_assigned_translating_titles_article_queue';
export const SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_QUEUE_ERROR = 'sse_assigned_translating_titles_article_queue_error';

export const SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_EDIT = 'sse_assigned_translating_titles_article_edit';
export const SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_EDIT_ERROR = 'sse_assigned_translating_titles_article_edit_error';

export const SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_EDIT_COMPLETE = 'sse_assigned_translating_titles_article_edit_complete';
export const SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_EDIT_COMPLETE_ERROR = 'sse_assigned_translating_titles_edit_complete_error';

export const SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_FETCH = 'sse_assigned_translating_titles_article_fetch';
export const SSE_ASSIGNED_TRANSLATING_TITLES_ARTICLE_FETCH_ERROR = 'sse_assigned_translating_titles_article_fetch_error';

// ADMINISTRATOR HSE

// GO LIVE
export const ADMINISTRATOR_HSE_GO_LIVE_QUEUE = 'administrator_hse_tracking_prioritizing_queue';
export const ADMINISTRATOR_HSE_GO_LIVE_QUEUE_ERROR = 'administrator_hse_tracking_prioritizing_queue';

export const ADMINISTRATOR_HSE_GO_LIVE_ASSIGN_LIVE = 'administrator_hse_go_live_assign_live';
export const ADMINISTRATOR_HSE_GO_LIVE_ASSIGN_LIVE_ERROR = 'administrator_hse_go_live_assign_live_error';

// TRACKING PRIORITIZING
export const ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_QUEUE = 'administrator_hse_tracking_prioriziting_queue';
export const ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_QUEUE_ERROR = 'administrator_hse_tracking_prioriziting_queue_error';

export const ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS = 'administrator_hse_tracking_prioritizing_assign_prioritizers';
export const ADMINISTRATOR_HSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS_ERROR = 'administrator_hse_tracking_prioritizing_assign_prioritizers_error';

// ELIGIBILITY FILTERS
export const ADMINISTRATOR_HSE_ELIGIBILITY_FILTERS_QUEUE = 'administrator_hse_eligibility_filters_queue';
export const ADMINISTRATOR_HSE_ELIGIBILITY_FILTERS_QUEUE_ERROR  = 'administrator_hse_eligibility_filters_queue';

export const ADMINISTRATOR_HSE_ELIGIBILITY_FILTERS_ASSIGN_JUNIOR_FILTERERS = 'administrator_hse_eligibility_filters_assign_junior_filterers';
export const ADMINISTRATOR_HSE_ELIGIBILITY_FILTERS_ASSIGN_JUNIOR_FILTERERS_ERROR = 'administrator_hse_eligibility_filters_assign_junior_filterers';
             
export const ADMINISTRATOR_HSE_ELIGIBILITY_FILTERS_ASSIGN_SENIOR_FILTERERS = 'administrator_hse_eligibility_filters_assign_senior_filterers';
export const ADMINISTRATOR_HSE_ELIGIBILITY_FILTERS_ASSIGN_SENIOR_FILTERERS_ERROR = 'administrator_hse_eligibility_filters_assign_senior_filterers';

// QUALITY APPRAISALS
export const ADMINISTRATOR_HSE_QUALITY_APPRAISALS_QUEUE = 'administrator_hse_quality_appraisals_queue';
export const ADMINISTRATOR_HSE_QUALITY_APPRAISALS_QUEUE_ERROR  = 'administrator_hse_quality_appraisals_queue';

export const ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS = 'administrator_hse_quality_appraisals_assign_junior_appraisers';
export const ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS_ERROR = 'administrator_hse_quality_appraisals_assign_junior_appraisers';

export const ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS = 'administrator_hse_quality_appraisals_assign_senior_appraisers';
export const ADMINISTRATOR_HSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS_ERROR = 'administrator_hse_quality_appraisals_assign_senior_appraisers';

// LINKING STUDIES
export const ADMINISTRATOR_HSE_LINKING_STUDIES_QUEUE = 'administrator_hse_linking_studies_queue';
export const ADMINISTRATOR_HSE_LINKING_STUDIES_QUEUE_ERROR = 'administrator_hse_linking_studies_queue_error';

export const ADMINISTRATOR_HSE_LINKING_STUDIES_ASSIGN_LINKERS = 'administrator_hse_linking_studies_assign_linkers';
export const ADMINISTRATOR_HSE_LINKING_STUDIES_ASSIGN_LINKERS_ERROR = 'administrator_hse_linking_studiesk_assign_linkers_error';

// PRESENTATION DETAILS
export const ADMINISTRATOR_HSE_PRESENTATION_DETAILS_QUEUE = 'administrator_hse_presentation_details_queue';
export const ADMINISTRATOR_HSE_PRESENTATION_DETAILS_QUEUE_ERROR = 'administrator_hse_presentation_details_queue_error';

export const ADMINISTRATOR_HSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS = 'administrator_hse_presentation_details_assign_detailers';
export const ADMINISTRATOR_HSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS_ERROR = 'administrator_hse_presentation_details_assign_detailers';


// ADMINISTRATOR SSE

// GO LIVE
export const ADMINISTRATOR_SSE_GO_LIVE_QUEUE = 'sse_administrator_sse_tracking_prioritizing_queue';
export const ADMINISTRATOR_SSE_GO_LIVE_QUEUE_ERROR = 'sse_administrator_sse_tracking_prioritizing_queue';

export const ADMINISTRATOR_SSE_GO_LIVE_ASSIGN_LIVE = 'sse_administrator_sse_go_live_assign_live';
export const ADMINISTRATOR_SSE_GO_LIVE_ASSIGN_LIVE_ERROR = 'sse_administrator_sse_go_live_assign_live_error';

// TRACKING PRIORITIZING
export const ADMINISTRATOR_SSE_TRACKING_PRIORITIZING_QUEUE = 'administrator_sse_tracking_prioriziting_queue';
export const ADMINISTRATOR_SSE_TRACKING_PRIORITIZING_QUEUE_ERROR = 'administrator_sse_tracking_prioriziting_queue_error';

export const ADMINISTRATOR_SSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS = 'administrator_sse_tracking_prioritizing_assign_prioritizers';
export const ADMINISTRATOR_SSE_TRACKING_PRIORITIZING_ASSIGN_PRIORITIZERS_ERROR = 'administrator_sse_tracking_prioritizing_assign_prioritizers_error';

// ELIGIBILITY FILTERS
export const ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_QUEUE = 'administrator_sse_eligibility_filters_queue';
export const ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_QUEUE_ERROR  = 'administrator_sse_eligibility_filters_queue';

export const ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_ASSIGN_JUNIOR_FILTERERS = 'administrator_sse_eligibility_filters_assign_junior_filterers';
export const ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_ASSIGN_JUNIOR_FILTERERS_ERROR = 'administrator_sse_eligibility_filters_assign_junior_filterers';

export const ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_ASSIGN_SENIOR_FILTERERS = 'administrator_sse_eligibility_filters_assign_senior_filterers';
export const ADMINISTRATOR_SSE_ELIGIBILITY_FILTERS_ASSIGN_SENIOR_FILTERERS_ERROR = 'administrator_sse_eligibility_filters_assign_senior_filterers';

// QUALITY APPRAISALS
export const ADMINISTRATOR_SSE_QUALITY_APPRAISALS_QUEUE = 'administrator_sse_quality_appraisals_queue';
export const ADMINISTRATOR_SSE_QUALITY_APPRAISALS_QUEUE_ERROR  = 'administrator_sse_quality_appraisals_queue';

export const ADMINISTRATOR_SSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS = 'administrator_sse_quality_appraisals_assign_junior_appraisers';
export const ADMINISTRATOR_SSE_QUALITY_APPRAISALS_ASSIGN_JUNIOR_APPRAISERS_ERROR = 'administrator_sse_quality_appraisals_assign_junior_appraisers';

export const ADMINISTRATOR_SSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS = 'administrator_sse_quality_appraisals_assign_senior_appraisers';
export const ADMINISTRATOR_SSE_QUALITY_APPRAISALS_ASSIGN_SENIOR_APPRAISERS_ERROR = 'administrator_sse_quality_appraisals_assign_senior_appraisers';

// LINKING STUDIES
export const ADMINISTRATOR_SSE_LINKING_STUDIES_QUEUE = 'administrator_sse_linking_studies_queue';
export const ADMINISTRATOR_SSE_LINKING_STUDIES_QUEUE_ERROR = 'administrator_sse_linking_studies_queue_error';
        
export const ADMINISTRATOR_SSE_LINKING_STUDIES_ASSIGN_LINKERS = 'administrator_sse_linking_studies_assign_linkers';
export const ADMINISTRATOR_SSE_LINKING_STUDIES_ASSIGN_LINKERS_ERROR = 'administrator_sse_linking_studiesk_assign_linkers_error';

// PRESENTATION DETAILS
export const ADMINISTRATOR_SSE_PRESENTATION_DETAILS_QUEUE = 'administrator_sse_presentation_details_queue';
export const ADMINISTRATOR_SSE_PRESENTATION_DETAILS_QUEUE_ERROR = 'administrator_sse_presentation_details_queue_error';
             
export const ADMINISTRATOR_SSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS = 'administrator_sse_presentation_details_assign_detailers';
export const ADMINISTRATOR_SSE_PRESENTATION_DETAILS_ASSIGN_DETAILERS_ERROR = 'administrator_sse_presentation_details_assign_detailers';
