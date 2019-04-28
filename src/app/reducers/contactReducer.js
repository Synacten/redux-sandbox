import { GET_CONTACTS, GET_MODAL, SEARCH } from '../actions/types';

const initialState = {
  userdata: [],
  isOpen: false,
  testInput: '',
  searchResult: [],
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
    case SEARCH:
      return {
        ...state,
        testInput: action.payload,
        searchResult: action.payload !== '' ? state.userdata.data.filter(item => item.body.toLowerCase().search(
          action.payload.toLowerCase(),
        ) !== -1) : [],
      };
    default:
      return state;
  }
}
