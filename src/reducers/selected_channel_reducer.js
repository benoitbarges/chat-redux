import { SET_SELECTED_CHANNEL } from '../actions';

const selectedChannelReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return null;
  }

  switch (action.type) {
    case SET_SELECTED_CHANNEL:
      return action.payload;
    default:
      return state;
  }
};

export default selectedChannelReducer;
