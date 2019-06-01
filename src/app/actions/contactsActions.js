import axios from 'axios';
import { GET_CONTACTS, GET_MODAL, SEARCH } from './types';


export const getContacts = () => async (dispatch) => {
  const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
  dispatch({
    type: GET_CONTACTS,
    payload: data,
  });
};

export const getModal = () => async (dispatch) => {
  dispatch({
    type: GET_MODAL,
  });
};

export const getSearchResults = value => async (dispatch) => {
  dispatch({
    type: SEARCH,
    payload: value,
  });
};
