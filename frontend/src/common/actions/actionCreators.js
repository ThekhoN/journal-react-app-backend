import axios from 'axios';
import {
  GET_ENTRIES,
  LOADING_ENTRIES,
  LOADED_ENTRIES,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types';

const ROOT_URL = 'http://localhost:3091';

export const getEntries = payload => {
  return {
    type: GET_ENTRIES,
    payload
  };
};

export const loadingEntries = payload => {
  return {
    type: LOADING_ENTRIES,
    payload
  };
};

export const loadedEntries = payload => {
  return {
    type: LOADED_ENTRIES,
    payload
  };
};

// export const getEntriesAsyncDispatch = url => {
//   return (dispatch) => {
//     dispatch(loadingEntries('loading'));
//     fetch (url)
//     .then(response => {
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response;
//     })
//     .then(response => response.json())
//     .then(items => {
//       dispatch(getEntries(items));
//       setTimeout(() => {
//         dispatch(loadedEntries('loaded'));
//       }, 1600);
//     })
//     .catch(err => {
//       console.log('fetch error: ', err);
//     });
//   };
// };

// error handling
export const authError = error => ({
  type: AUTH_ERROR,
  payload: error
});

// sign in
export const signinUser = ({email, password}) => {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email, password})
    .then(response => {
      // if req is good and auth'd
      // update state to auth'd
      dispatch({type: AUTH_USER});
      // save JWT in localStorage
      localStorage.setItem('token', response.data.token);
    })
    .catch(() => {
      dispatch(authError('Your account or password is incorrect.\n Please try again.'));
    });
  };
};

// sign out
export const signoutUser = () => {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  };
};

// sign up
export const signupUser = ({email, password}) => {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password})
    .then(response => {
      dispatch({
        type: AUTH_USER
      });
      localStorage.setItem('token', response.data.token);
    })
    .catch(err => {
      if (err.response) {
        console.log('error in sign up: ', err.response.data.error);
        dispatch(authError(err.response.data.error));
      }
    });
  };
};

// response message
export const fetchMessage = () => {
  return function (dispatch) {
    axios.get(ROOT_URL, {
      headers: {authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message
      });
    });
  };
};
