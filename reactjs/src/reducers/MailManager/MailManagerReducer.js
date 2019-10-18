import { 
  HSE_CREATE_RECIPIENT,
} from '../../actions/types';

const INITIAL_STATE = { };

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
    case HSE_CREATE_RECIPIENT:
      return { ...state };
    default:
      return state;        
  }
}