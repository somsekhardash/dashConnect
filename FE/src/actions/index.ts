import { Action } from 'redux';
import { ActionTypes } from './action-types';
import { environmentSettings } from './../../etc/config';
import { History } from 'history';
import { ILogin } from './../models/index'; 
import axios from 'axios';

export interface ActionType extends Action {
  type: ActionTypes;
  delta?: boolean;
}

export const ToggleCounter = (delta: boolean): any => {
  return {
    type: ActionTypes.TOGGLE_COUNTER,
    delta: delta
  }
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
  let call;
  if (method.toLowerCase() == 'post') {
    call = axios.post(`${baseUrl}${url}`, { ...params }, { ...headers });
  } else {
    call = axios.get(`${baseUrl}${url}`);
  }
  call.then(
    res => {
      console.log(res);
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
    .then(function(response) {
      dispatch({
        type: ActionTypes.TOGGLE_COUNTER,
        delta: true
      });
    })
    .catch(function(error) {
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
    .then(function(response) {
        window.localStorage['dash_token'] = response.data.token;
        UpdateToken(response.data.token);
        redirectLanding(history);
    })
    .catch(function(error) {
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
    .then(function(response) {
        debugger;
    })
    .catch(function(error) {
      debugger;
    });
};


export const setProfile = (profile: any): any => (dispatch: any): any => {
  const para = {
    url: '/profile/saveprofile',
    method: 'POST',
    params: profile,
    headers: {'Authorization': "bearer " + window.localStorage['dash_token']}
  };
  return ApiCall(para)
    .then(function(response) {
        debugger;
    })
    .catch(function(error) {
      debugger;
    });
};

export const redirectLanding = (history: History) => {
  if(window.localStorage.dash_token)
    history.push('/landing');
  else return false;
}

export const UpdateToken = (token: string): any => (dispatch: any) : any => {
    dispatch({
      type: ActionTypes.UPDATE_TOKEN,
      delta: token
    });
}