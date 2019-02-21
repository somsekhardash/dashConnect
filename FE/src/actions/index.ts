import axios from 'axios';
import { History } from 'history';
import { Action } from 'redux';
import { environmentSettings } from './../../etc/config';
import { ILogin } from './../models/index'; 
import { ActionTypes } from './action-types';

export interface IActionType extends Action {
  type: ActionTypes;
  delta?: boolean;
}

export const ToggleCounter = (delta: boolean): any => {
  return {
    type: ActionTypes.TOGGLE_COUNTER,
    delta
  };
};

export interface IAjax {
  url: string;
  method: string;
  headers: object;
  params: object;
}

export const ApiCall = (options: object) => {
  const baseUrl = `${environmentSettings.apiUrl}/api`;
  const { url = '', method = 'GET', headers = {}, params = {} } = {
    ...options
  };
  const call = (method.toLowerCase() === 'post') ?  axios.post(`${baseUrl}${url}`, { ...params }, { ...headers }) : axios.get(`${baseUrl}${url}`) ;
  call.then(
    res => {
      return res;
    },
    err => {
      return err;
    }
  );
  return call;
};

export const RegisterUser = (user: any): any => (dispatch: any): any => {
  const para = {
    url: '/user/register',
    method: 'POST',
    params: user
  };

  return ApiCall(para)
    .then((response) => {
      dispatch({
        type: ActionTypes.TOGGLE_COUNTER,
        delta: true
      });
    })
    .catch((error) => {
      return {
        type: ActionTypes.TOGGLE_ERROR,
        delta: error
      };
    });
};

export const LoginUser = (user: ILogin,  history: History): any => (dispatch: any): any => {
  const para = {
    url: '/user/login',
    method: 'POST',
    params: user
  };
  return ApiCall(para)
    .then((response) => {
        window.localStorage.dash_token = response.data.token;
        UpdateToken(response.data.token);
        redirectLanding(history);
    })
    .catch((error) => {
      debugger;
    });
};

export const getProfile = (): any => (dispatch: any): any => {
  debugger;
  const para = {
    url: '/profile/details',
    method: 'GET'
  };
  return ApiCall(para)
    .then((response) => {
        debugger;
    })
    .catch((error) => {
      debugger;
    });
};

export const setProfile = (profile: any): any => (dispatch: any): any => {
  const para = {
    url: '/profile/saveprofile',
    method: 'POST',
    params: profile,
    headers: {Authorization: 'bearer ' + window.localStorage.dash_token}
  };
  return ApiCall(para)
    .then((response) => {
        debugger;
    })
    .catch((error) => {
      debugger;
    });
};

export const redirectLanding = (history: History) => {
  if (window.localStorage.dash_token) {
    history.push('/landing');
  } else { return false; }
};

export const UpdateToken = (token: string): any => (dispatch: any): any => {
    dispatch({
      type: ActionTypes.UPDATE_TOKEN,
      delta: token
    });
};
