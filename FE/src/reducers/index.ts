import { Reducer } from 'redux';
import { ActionTypes } from '../actions/action-types';
import { IAppState } from '../app-state';

const initialState: IAppState = {
    isLogIn: false,
    dash_token: '',
    auth: false
};

export const TheReducer: Reducer<IAppState> = (state: IAppState = initialState , action: any) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_COUNTER: {
            return {
                ...state,
                isLogIn: action.delta
            };
        }
        case ActionTypes.UPDATE_TOKEN: {
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
