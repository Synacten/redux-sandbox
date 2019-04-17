import axios from 'axios';
import { GET_CONTACTS, GET_MODAL } from './types';


export const getContacts = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_CONTACTS,
    payload: res.data,
  });
};

export const getModal = () => async (dispatch) => {
  dispatch({
    type: GET_MODAL,
  });
};
