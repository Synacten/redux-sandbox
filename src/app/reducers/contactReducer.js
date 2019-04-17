import { GET_CONTACTS, GET_MODAL } from '../actions/types';

const initialState = {
  userdata: [],
  isOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        userdata: action.payload,
      };
    case GET_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}
