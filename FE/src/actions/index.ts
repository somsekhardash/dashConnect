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

export const ApiCall = (options: object, dispatch: any) => {
  dispatch({
    type: ActionTypes.TOGGLE_LOADER,
    delta: true
  });
  const baseUrl = `${environmentSettings.apiUrl}/api`;
  const { url = '', method = 'GET', headers = {}, params = {} } = {
    ...options
  };
  const call = (method.toLowerCase() === 'post') ?  axios.post(`${baseUrl}${url}`, { ...params }, {headers}) : axios.get(`${baseUrl}${url}`, {headers}) ;
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

export const RedirectToLanding = (history: History): any => (dispatch: any): any => {
  history.push('/landing');
  dispatch({
      type: ActionTypes.SET_LOGIN_TOKEN,
      delta: window.localStorage.dash_token
  });
};

export const RegisterUser = (user: any): any => (dispatch: any): any => {
  const para = {
    url: '/user/register',
    method: 'POST',
    params: user
  };

  return ApiCall(para, dispatch)
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
  return ApiCall(para, dispatch)
    .then((response) => {
        window.localStorage.dash_token = response.data.token;
        history.push('/landing');
        dispatch({
            type: ActionTypes.SET_LOGIN_TOKEN,
            delta: window.localStorage.dash_token
        });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getProfile = (): any => (dispatch: any): any => {
  const para = {
    url: '/profile/getprofile',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${window.localStorage.dash_token}`
    }
  };
  
  return ApiCall(para, dispatch)
    .then((response) => {
      dispatch({
        type: ActionTypes.TOGGLE_LOADER,
        delta: false
      });
      dispatch({
        type: ActionTypes.GET_PROFILE,
        delta: response.data.profile
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const setProfile = (profile: any): any => (dispatch: any): any => {
 
  const para = {
    url: '/profile/setprofile',
    method: 'POST',
    params: profile,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${window.localStorage.dash_token}`
    }
  };
  
  return ApiCall(para, dispatch)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};
