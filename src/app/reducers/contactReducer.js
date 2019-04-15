import { GET_CONTACTS, GET_MODAL } from '../actions/types';

const initialState = {
  userdata: [
    {
      id: 1,
      name: 'Jonh Dou',
      email: 'jdou@gmail.com',
      phone: '111-1111-111',
    },
    {
      id: 2,
      name: 'Berry Smith',
      email: 'bsmith@gmail.com',
      phone: '333-3333-333',
    },
    {
      id: 3,
      name: 'Kate Gross',
      email: 'kgross@gmail.com',
      phone: '777-7777-777',
    },
  ],
  isOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
      };
    case GET_MODAL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
