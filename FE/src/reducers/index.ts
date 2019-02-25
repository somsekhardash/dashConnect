import { Reducer } from 'redux';
import { ActionTypes } from '../actions/action-types';
import { IAppState } from '../app-state';

const initialState: IAppState = {
    showLogIn: false,
    dash_token: '',
    auth: false
};

export const TheReducer: Reducer<IAppState> = (state: IAppState = initialState , action: any) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_COUNTER: {
            return {
                ...state,
                showLogIn: action.delta
            };
        }
        case ActionTypes.SET_LOGIN_TOKEN: {
            return {
                ...state,
                auth: true,
                dash_token: action.delta
            };
        }
        default:
            return state;
    }
};
